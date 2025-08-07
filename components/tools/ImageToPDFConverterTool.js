/* eslint-disable @next/next/no-img-element */

"use client";

import React, { useState, useRef } from "react";
import { jsPDF } from "jspdf";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiUpload, FiTrash2, FiDownload, FiSettings } from "react-icons/fi";


const PAGE_SIZES = {
  A4: [210, 297],
  Letter: [216, 279],
  Custom: [],
};

const ImageToPDFConverter = () => {
  const [images, setImages] = useState([]);
  const [pageSize, setPageSize] = useState("A4");
  const [customWidth, setCustomWidth] = useState(210);
  const [customHeight, setCustomHeight] = useState(297);
  const [orientation, setOrientation] = useState("portrait");
  const [imageFit, setImageFit] = useState("contain");
  const [addWatermark, setAddWatermark] = useState(true);
  const fileInputRef = useRef();

  const [loading, setLoading] = useState(false);

  // For drag & drop
  const dragItemIndex = useRef(null);
  const dragOverItemIndex = useRef(null);

  // Compress single image helper
  const compressImage = (
    dataUrl,
    quality = 0.7,
    maxWidth = 1024,
    maxHeight = 1024
  ) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        let { width, height } = img;
        if (width > maxWidth) {
          height = (maxWidth / width) * height;
          width = maxWidth;
        }
        if (height > maxHeight) {
          width = (maxHeight / height) * width;
          height = maxHeight;
        }
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);
        const compressedDataUrl = canvas.toDataURL("image/jpeg", quality);
        resolve(compressedDataUrl);
      };
      img.src = dataUrl;
    });
  };

  // Compress all images handler
  const compressAllImages = async () => {
    toast.info("Compressing images...");
    setLoading(true);
    try {
      const compressed = await Promise.all(
        images.map(async (img) => {
          const compressedSrc = await compressImage(img.src, 0.7);
          return { ...img, src: compressedSrc };
        })
      );
      setImages(compressed);
      toast.success("Images compressed!");
    } catch (err) {
      toast.error("Failed to compress images.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleFiles = (files) => {
    const validFiles = Array.from(files).filter((file) => {
      const isValidType = /image\/(png|jpe?g|webp)/.test(file.type);
      if (!isValidType) toast.error(`Unsupported file type: ${file.name}`);
      if (file.size > 10 * 1024 * 1024) {
        toast.error(`File too large (max 10MB): ${file.name}`);
        return false;
      }
      return isValidType;
    });

    if (validFiles.length === 0) return;

    Promise.all(
      validFiles.map(
        (file) =>
          new Promise((res) => {
            const reader = new FileReader();
            reader.onload = (e) => {
              res({ name: file.name, src: e.target.result });
            };
            reader.readAsDataURL(file);
          })
      )
    ).then((imgs) => {
      setImages((prev) => [...prev, ...imgs]);
      toast.success(`Added ${imgs.length} image(s)`);
    });
  };

  const removeImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
    toast.info("Image removed");
  };

  const clearAll = () => {
    Swal.fire({
      title: "Clear all images?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, clear",
    }).then((result) => {
      if (result.isConfirmed) {
        setImages([]);
        toast.info("All images cleared");
      }
    });
  };

  const moveUp = (index) => {
    if (index === 0) return;
    const newImages = [...images];
    [newImages[index - 1], newImages[index]] = [
      newImages[index],
      newImages[index - 1],
    ];
    setImages(newImages);
  };

  const moveDown = (index) => {
    if (index === images.length - 1) return;
    const newImages = [...images];
    [newImages[index + 1], newImages[index]] = [
      newImages[index],
      newImages[index + 1],
    ];
    setImages(newImages);
  };

  // Drag & drop handlers
  const onDragStart = (e, index) => {
    dragItemIndex.current = index;
  };

  const onDragEnter = (e, index) => {
    dragOverItemIndex.current = index;
  };

  const onDragEnd = () => {
    const fromIndex = dragItemIndex.current;
    const toIndex = dragOverItemIndex.current;
    if (fromIndex === null || toIndex === null || fromIndex === toIndex) return;
    const newImages = [...images];
    const draggedItem = newImages.splice(fromIndex, 1)[0];
    newImages.splice(toIndex, 0, draggedItem);
    dragItemIndex.current = null;
    dragOverItemIndex.current = null;
    setImages(newImages);
  };

  const generatePDF = async () => {
    if (images.length === 0) {
      Swal.fire("No images", "Please upload images first.", "error");
      return;
    }

    toast.info("Generating PDF...");
    setLoading(true);
    try {
      const pdf = new jsPDF({
        unit: "mm",
        format:
          pageSize === "Custom"
            ? [customWidth, customHeight]
            : PAGE_SIZES[pageSize],
        orientation,
      });

      for (let i = 0; i < images.length; i++) {
        if (i > 0) pdf.addPage();

        const img = images[i];
        const imgProps = pdf.getImageProperties(img.src);
        const pdfWidth =
          pageSize === "Custom" ? customWidth : PAGE_SIZES[pageSize][0];
        const pdfHeight =
          pageSize === "Custom" ? customHeight : PAGE_SIZES[pageSize][1];
        let imgWidth = imgProps.width;
        let imgHeight = imgProps.height;

        const margin = 10;
        const maxWidth = pdfWidth - margin * 2;
        const maxHeight = pdfHeight - margin * 2;

        const widthRatio = maxWidth / imgWidth;
        const heightRatio = maxHeight / imgHeight;

        if (imageFit === "contain") {
          const ratio = Math.min(widthRatio, heightRatio);
          imgWidth *= ratio;
          imgHeight *= ratio;
        } else if (imageFit === "cover") {
          const ratio = Math.max(widthRatio, heightRatio);
          imgWidth *= ratio;
          imgHeight *= ratio;
        } else if (imageFit === "stretch") {
          imgWidth = maxWidth;
          imgHeight = maxHeight;
        }

        const x = (pdfWidth - imgWidth) / 2;
        const y = (pdfHeight - imgHeight) / 2;

        pdf.addImage(img.src, "JPEG", x, y, imgWidth, imgHeight);

        if (addWatermark) {
          pdf.setTextColor(200);
          pdf.setFontSize(12);
          pdf.text(
            "Created with ImageToPDFConverter • Developed by NUR",
            10,
            pdfHeight - 10
          );
        }
      }

      pdf.save("converted.pdf");
      toast.success("PDF downloaded!");
    } catch (err) {
      Swal.fire("Error", "Failed to generate PDF. Compress All Images First.", "error");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const onFileChange = (e) => {
    handleFiles(e.target.files);
    e.target.value = null;
  };

  const onDrop = (e) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  };
  const onDragOver = (e) => e.preventDefault();

  return (
    <div className=" bg-neutral p-4 rounded-lg  flex flex-col items-center">


      <ToastContainer />
      {/* <header className="mb-6 flex items-center space-x-3 text-primary">
        <FiUpload size={32} />
        <h1 className="text-3xl font-bold">Image to PDF Converter</h1>
      </header> */}

      <section
        onDrop={onDrop}
        onDragOver={onDragOver}
        className="w-full max-w-4xl p-6 bg-base-100 rounded-lg shadow-lg border-2 border-dashed border-primary cursor-pointer hover:bg-primary/10 transition"
        onClick={() => fileInputRef.current.click()}
      >
        <input
          id="imageUploader"
          name="imageUploader"
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          ref={fileInputRef}
          onChange={onFileChange}
        />
        <p className="text-center text-lg text-primary/80">
          Drag & drop images here, or click to select files
        </p>
        <p className="text-center text-sm text-primary/60 mt-1">
          Supports PNG, JPG, JPEG, WEBP. Max size 10MB each.
        </p>
      </section>

      {images.length > 0 && (
        <>
          <section className="w-full max-w-4xl mt-6 bg-base-100 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">
              Image Preview & Order
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-h-96 overflow-auto">
              {images.map((img, idx) => (
                <div
                  key={idx}
                  draggable
                  onDragStart={(e) => onDragStart(e, idx)}
                  onDragEnter={(e) => onDragEnter(e, idx)}
                  onDragEnd={onDragEnd}
                  onDragOver={(e) => e.preventDefault()}
                  className="relative bg-base-200 rounded-lg p-1 shadow flex flex-col items-center cursor-grab select-none"
                  title="Drag to reorder"
                >
                  <img
                    src={img.src}
                    alt={`Uploaded preview ${idx + 1}`}
                    className="max-h-28 object-contain rounded"
                  />
                  <p className="text-xs mt-1 truncate w-full text-center">
                    {img.name}
                  </p>
                  <div className="flex space-x-1 mt-1">
                    <button
                      onClick={() => moveUp(idx)}
                      disabled={idx === 0}
                      className="btn btn-xs btn-primary btn-outline"
                      title="Move Up"
                    >
                      ↑
                    </button>
                    <button
                      onClick={() => moveDown(idx)}
                      disabled={idx === images.length - 1}
                      className="btn btn-xs btn-primary btn-outline"
                      title="Move Down"
                    >
                      ↓
                    </button>
                    <button
                      onClick={() => removeImage(idx)}
                      className="btn btn-xs btn-error btn-outline"
                      title="Remove Image"
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                </div>
              ))}
              {/* + button to add more images */}
              <div
                onClick={() => fileInputRef.current.click()}
                className="flex justify-center items-center cursor-pointer rounded-lg border border-dashed border-primary bg-base-200 hover:bg-primary/10 transition"
                style={{ height: "112px" }}
                title="Add more images"
              >
                <span className="text-4xl text-primary select-none">+</span>
              </div>
            </div>
            <div className="mt-4 flex space-x-2">
              <button
                onClick={compressAllImages}
                className="btn btn-sm btn-secondary"
              >
                Compress All Images
              </button>
              <button onClick={clearAll} className="btn btn-sm btn-warning">
                Clear All
              </button>
            </div>
          </section>

          <section className="w-full max-w-4xl mt-6 bg-base-100 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2">
              <FiSettings />
              <span>PDF Settings</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label htmlFor="pageSize" className="label">
                  Page Size
                </label>
                <select
                  id="pageSize"
                  name="pageSize"
                  className="select select-bordered w-full"
                  value={pageSize}
                  onChange={(e) => setPageSize(e.target.value)}
                >
                  <option>A4</option>
                  <option>Letter</option>
                  <option>Custom</option>
                </select>
              </div>
              {pageSize === "Custom" && (
                <>
                  <div>
                    <label htmlFor="customWidth" className="label">
                      Width (mm)
                    </label>
                    <input
                      type="number"
                      id="customWidth"
                      name="customWidth"
                      min={50}
                      max={500}
                      className="input input-bordered w-full"
                      value={customWidth}
                      onChange={(e) => setCustomWidth(+e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="customHeight" className="label">
                      Height (mm)
                    </label>
                    <input
                      type="number"
                      id="customHeight"
                      name="customHeight"
                      min={50}
                      max={500}
                      className="input input-bordered w-full"
                      value={customHeight}
                      onChange={(e) => setCustomHeight(+e.target.value)}
                    />
                  </div>
                </>
              )}
              <div>
                <label htmlFor="orientation" className="label">
                  Orientation
                </label>
                <select
                  id="orientation"
                  name="orientation"
                  className="select select-bordered w-full"
                  value={orientation}
                  onChange={(e) => setOrientation(e.target.value)}
                >
                  <option value="portrait">Portrait</option>
                  <option value="landscape">Landscape</option>
                </select>
              </div>
              <div>
                <label htmlFor="imageFit" className="label">
                  Image Fit
                </label>
                <select
                  id="imageFit"
                  name="imageFit"
                  className="select select-bordered w-full"
                  value={imageFit}
                  onChange={(e) => setImageFit(e.target.value)}
                >
                  <option value="contain">Contain</option>
                  <option value="cover">Cover</option>
                  <option value="stretch">Stretch</option>
                </select>
              </div>
              <div className="col-span-full flex items-center space-x-2 mt-2">
                <input
                  id="watermark"
                  name="watermark"
                  type="checkbox"
                  className="checkbox"
                  checked={addWatermark}
                  onChange={(e) => setAddWatermark(e.target.checked)}
                />
                <label htmlFor="watermark" className="label cursor-pointer">
                  Add Watermark
                </label>
              </div>
            </div>
          </section>

          <button
            onClick={generatePDF}
            className="btn btn-primary btn-lg mt-8 flex items-center space-x-2"
          >
            <FiDownload size={24} />
            <span>Generate PDF</span>
          </button>
        </>
      )}








      {loading && (
        <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center">
          <div className="flex flex-col items-center space-y-3">
            <div className="w-12 h-12 border-4 border-dashed border-white rounded-full animate-spin" />
            <p className="text-white font-semibold text-lg">Processing...</p>
          </div>
        </div>
      )}


    </div>
  );
};

export default ImageToPDFConverter;
