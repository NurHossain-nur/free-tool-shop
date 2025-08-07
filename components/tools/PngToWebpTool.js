/* eslint-disable @next/next/no-img-element */
import React, { useState, useRef } from "react";
import { useDropzone } from "react-dropzone";
import imageCompression from "browser-image-compression";

import {
  Cog6ToothIcon,
  ArrowDownTrayIcon,
  CloudArrowDownIcon,
} from "@heroicons/react/24/outline";

import JSZip from "jszip";
import { saveAs } from "file-saver";

const fits = ["contain", "cover", "fill", "inside", "outside"];

const PngToWebp = () => {
  const canvasRef = useRef(null);
  const [files, setFiles] = useState([]);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [settings, setSettings] = useState({
    width: null,
    height: null,
    fit: "contain",
    quality: 80,
    stripMetadata: false,
  });
  const [status, setStatus] = useState("");

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { "image/png": [".png"] },
    multiple: true,
    onDrop: (accepted) =>
      setFiles(
        accepted.map((f) => ({
          file: f,
          preview: URL.createObjectURL(f),
          result: null,
          size: null,
        }))
      ),
  });

  const convertAll = async () => {
    setStatus("Converting...");
    const results = [];

    for (let item of files) {
      const opts = {
        fileType: "image/webp",
        quality: settings.quality / 100,
        maxWidthOrHeight: settings.width || undefined,
        useWebWorker: true,
      };

      try {
        const blob = await imageCompression(item.file, opts);
        const url = URL.createObjectURL(blob);
        results.push({ result: url, size: (blob.size / 1024).toFixed(1) });
      } catch (err) {
        console.error(err);
        results.push({ result: null, size: null });
      }
    }

    setFiles((prev) =>
      prev.map((f, i) => ({
        ...f,
        result: results[i].result,
        size: results[i].size,
      }))
    );

    setStatus("Conversion complete!");
  };

  const downloadAll = async () => {
    const zip = new JSZip();
    files.forEach((f) => {
      if (f.result) {
        const name = f.file.name.replace(/\.png$/i, ".webp");
        zip.file(
          name,
          fetch(f.result).then((r) => r.blob())
        );
      }
    });

    const blob = await zip.generateAsync({ type: "blob" });
    saveAs(blob, "converted-images.zip");
  };

  return (
    <div className="max-w-6xl mx-auto p-4 text-text bg-base-100">

      {/* Dropzone */}
      <div
        {...getRootProps()}
        className={`p-6 border-2 border-dashed rounded-lg text-center cursor-pointer border-primary text-primary transition ${
          isDragActive ? "bg-blue-100" : ""
        }`}
      >
        <input {...getInputProps()} />
        <p>Drag & drop PNGs here, or click to select files</p>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between flex-wrap gap-4 mt-4">
        <button
          className="border border-primary text-primary px-4 py-2 rounded-lg flex items-center gap-2"
          onClick={() => setSettingsOpen((s) => !s)}
        >
          <Cog6ToothIcon className="h-5 w-5" />
          Settings
        </button>

        <button
          className="bg-primary text-white px-4 py-2 rounded-lg flex items-center gap-2"
          onClick={convertAll}
          disabled={!files.length}
        >
          <CloudArrowDownIcon className="h-5 w-5" />
          Convert All
        </button>
      </div>

      <div className="flex items-center justify-between flex-wrap gap-4 mt-4">
        <button
          className="border border-error text-error px-4 py-2 rounded-lg"
          onClick={() => setFiles([])}
        >
          Clear All
        </button>
        <button
          className="bg-accent text-white px-4 py-2 rounded-lg"
          onClick={downloadAll}
          disabled={!files.some((f) => f.result)}
        >
          Download All
        </button>
      </div>

      {/* Settings Panel */}
      {settingsOpen && (
        <div className="card bg-gray-100 p-4 my-4 rounded-lg">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="label">Width (px)</label>
              <input
                type="number"
                className="input input-bordered w-full"
                value={settings.width ?? ""}
                onChange={(e) =>
                  setSettings((s) => ({
                    ...s,
                    width: e.target.value ? parseInt(e.target.value) : null,
                  }))
                }
              />
            </div>
            <div>
              <label className="label">Height (px)</label>
              <input
                type="number"
                className="input input-bordered w-full"
                value={settings.height ?? ""}
                onChange={(e) =>
                  setSettings((s) => ({
                    ...s,
                    height: e.target.value ? parseInt(e.target.value) : null,
                  }))
                }
              />
            </div>
            <div>
              <label className="label">Fit</label>
              <select
                className="select select-bordered w-full"
                value={settings.fit}
                onChange={(e) =>
                  setSettings((s) => ({ ...s, fit: e.target.value }))
                }
              >
                {fits.map((f) => (
                  <option key={f} value={f}>
                    {f}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="label flex justify-between">
                Quality
                <span>{settings.quality}%</span>
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={settings.quality}
                className="range range-primary"
                onChange={(e) =>
                  setSettings((s) => ({
                    ...s,
                    quality: parseInt(e.target.value),
                  }))
                }
              />
            </div>
            <div className="col-span-2">
              <label className="flex items-center mt-2">
                <input
                  type="checkbox"
                  className="toggle toggle-primary mr-2"
                  checked={settings.stripMetadata}
                  onChange={(e) =>
                    setSettings((s) => ({
                      ...s,
                      stripMetadata: e.target.checked,
                    }))
                  }
                />
                Strip metadata
              </label>
            </div>
          </div>
        </div>
      )}

      {/* Status */}
      {status && <p className="my-2 italic text-info">{status}</p>}

      {/* Converted Results */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {files.map((f, i) => (
          <div key={i} className="card bg-gray-100 shadow">
            <figure className="p-4">
              <img
                src={f.result ?? f.preview}
                alt="Preview"
                className="object-contain h-32 w-full"
              />
            </figure>
            <div className="card-body">
              <p className="truncate">{f.file.name}</p>
              {f.size && <p className="text-sm text-gray-500">{f.size} KB</p>}
              {f.result && (
                <a
                  href={f.result}
                  download={f.file.name.replace(/\.png$/i, ".webp")}
                  className="bg-primary text-white btn btn-sm mt-2 flex items-center gap-2"
                >
                  <ArrowDownTrayIcon className="h-4 w-4" />
                  Download
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <canvas ref={canvasRef} style={{ display: "none" }} />
    </div>
  );
};

export default PngToWebp;
