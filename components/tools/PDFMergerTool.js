'use client';

import { useState, useCallback } from 'react';
import { PDFDocument } from 'pdf-lib';
import toast, { Toaster } from 'react-hot-toast';
import Swal from 'sweetalert2';
import {
  AiOutlineUpload,
  AiOutlineDelete,
  AiOutlineDownload,
  AiOutlineFilePdf,
} from 'react-icons/ai';
import {
  DragDropContext,
  Droppable,
  Draggable,
} from '@hello-pangea/dnd';

export default function PDFMergerTool() {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  const MAX_FILE_SIZE_MB = 15;

  const handleFiles = async (fileList) => {
    const newFileObjects = [];

    for (const file of Array.from(fileList)) {
      if (!file.type.startsWith('application/pdf')) {
        toast.error(`${file.name} is not a PDF`);
        continue;
      }

      if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
        toast.error(`${file.name} exceeds ${MAX_FILE_SIZE_MB}MB`);
        continue;
      }

      if (files.some(f => f.file.name === file.name && f.file.size === file.size)) {
        toast.error(`${file.name} is already added`);
        continue;
      }

      try {
        const arrayBuffer = await file.arrayBuffer();
        const pdfDoc = await PDFDocument.load(arrayBuffer);
        const pageCount = pdfDoc.getPageCount();
        newFileObjects.push({ file, pages: pageCount });
      } catch (err) {
        toast.error(`Failed to load ${file.name}`);
      }
    }

    setFiles(prev => [...prev, ...newFileObjects]);
  };

  const onFileChange = (e) => handleFiles(e.target.files);

  const onDrop = useCallback((e) => {
    e.preventDefault();
    setDragOver(false);
    handleFiles(e.dataTransfer.files);
  }, [files]);

  const onDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const onDragLeave = () => setDragOver(false);

  const clearFiles = () => setFiles([]);

  const mergePDFs = async () => {
    if (files.length < 2) {
      toast.error('Please upload at least 2 PDFs');
      return;
    }

    const confirmed = await Swal.fire({
      title: 'Merge PDFs?',
      text: 'Do you want to merge selected PDF files?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, merge them!',
    });

    if (!confirmed.isConfirmed) return;

    setLoading(true);

    try {
      const mergedPdf = await PDFDocument.create();

      for (const { file } of files) {
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await PDFDocument.load(arrayBuffer);
        const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
        copiedPages.forEach((page) => mergedPdf.addPage(page));
      }

      const mergedPdfFile = await mergedPdf.save();
      const blob = new Blob([mergedPdfFile], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = 'merged.pdf';
      a.click();
      URL.revokeObjectURL(url);

      toast.success('PDFs merged successfully!');
    } catch (err) {
      console.error(err);
      toast.error('Error during merge.');
    } finally {
      setLoading(false);
    }
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const reordered = Array.from(files);
    const [moved] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, moved);
    setFiles(reordered);
  };

  const totalSizeMB = (
    files.reduce((acc, { file }) => acc + file.size, 0) /
    (1024 * 1024)
  ).toFixed(2);

  return (
    <div className=" bg-neutral rounded-lg p-6">
      <Toaster />
      <h1 className="text-3xl font-bold mb-4 text-center">📎 PDF Merge Tool</h1>

      <div
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        className={`border-4 border-dashed rounded p-10 max-w-xl mx-auto cursor-pointer transition-all
          ${dragOver ? 'border-primary bg-primary/10' : 'border-gray-400'}
        `}
      >
        <div className="text-center text-gray-600">
          <p className="mb-2">Drag & drop PDF files here</p>
          <p className="mb-4">or</p>
          <input
            type="file"
            multiple
            accept="application/pdf"
            onChange={onFileChange}
            className="file-input file-input-bordered file-input-primary w-full max-w-xs"
          />
        </div>
      </div>

      {files.length > 0 && (
        <div className="mt-6 max-w-xl mx-auto">
          <div className="mb-2 text-sm text-gray-600 text-right">
            {files.length} file{files.length > 1 ? 's' : ''} • {totalSizeMB} MB
          </div>

          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="pdfs">
              {(provided) => (
                <ul
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="mb-4 space-y-2"
                >
                  {files.map(({ file, pages }, idx) => (
                    <Draggable
                      key={file.name + idx}
                      draggableId={file.name + idx}
                      index={idx}
                    >
                      {(provided) => (
                        <li
                          className="flex items-center justify-between bg-base-100 p-2 rounded shadow-sm"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <div className="flex items-center gap-2">
                            <AiOutlineFilePdf className="text-red-600 text-xl" />
                            <div className="flex flex-col max-w-[250px]">
                              <span className="truncate">{file.name}</span>
                              <span className="text-xs text-gray-500">{pages} page{pages > 1 ? 's' : ''}</span>
                            </div>
                          </div>
                          <button
                            onClick={() => setFiles(files.filter((_, i) => i !== idx))}
                            className="btn btn-sm btn-error btn-circle"
                          >
                            <AiOutlineDelete />
                          </button>
                        </li>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>

          <div className="flex justify-between gap-4">
            <button
              onClick={mergePDFs}
              disabled={files.length < 2 || loading}
              className={`btn btn-primary w-full ${loading && 'btn-disabled'}`}
            >
              {loading ? 'Merging...' : (
                <>
                  <AiOutlineDownload className="mr-2" /> Merge PDFs
                </>
              )}
            </button>

            <button
              onClick={clearFiles}
              className="btn btn-outline btn-error"
            >
              Clear
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
