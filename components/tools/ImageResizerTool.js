/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import pica from "pica";
import imageCompression from "browser-image-compression";
import JSZip from "jszip";
import { saveAs } from "file-saver";

import Swal from "sweetalert2";

const ImageResizer = () => {
  const [items, setItems] = useState([]);
  const [settings, setSettings] = useState({
    width: "",
    height: "",
    keepRatio: true,
    format: "original",
    quality: 80,
    stripMetadata: true,
    compress: false,
    targetSizeKB: 0,
    bgColor: "transparent",
  });
  const [results, setResults] = useState([]);
  const [isResizing, setIsResizing] = useState(false);
  const [progress, setProgress] = useState(0);

  const onDrop = (accepted) => {
    const newItems = accepted.map((file) => {
      const src = URL.createObjectURL(file);
      const img = new Image();
      const item = { file, src, width: 0, height: 0, format: file.type };
      img.onload = () => {
        item.width = img.width;
        item.height = img.height;
        setItems((prev) => [...prev]); // trigger re-render
      };
      img.src = src;
      return item;
    });
    setItems(newItems);
    setResults([]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/jpeg": [], "image/png": [], "image/webp": [] },
    maxSize: 25 * 1024 * 1024,
    onDrop,
  });

  const applySettings = () => alert("Settings applied! Now click 'Resize All'");

  //   const resizeAll = async () => {
  //     setIsResizing(true);
  //     setProgress(0);
  //     const out = [];

  //     for (let i = 0; i < items.length; i++) {
  //       const item = items[i];
  //       const img = new Image();
  //       img.src = item.src;
  //       await img.decode();

  //       const w = settings.width || item.width;
  //       const h = settings.keepRatio
  //         ? (item.height / item.width) * w
  //         : settings.height || item.height;

  //       const cvs = document.createElement("canvas");
  //       cvs.width = w;
  //       cvs.height = h;
  //       const ctx = cvs.getContext("2d");

  //       if (settings.bgColor !== "transparent") {
  //         ctx.fillStyle = settings.bgColor;
  //         ctx.fillRect(0, 0, w, h);
  //       }

  //       await pica().resize(img, cvs);

  //       const fmt = settings.format === "original" ? item.format : settings.format;
  //       let blob = await new Promise(r => cvs.toBlob(r, fmt, settings.quality / 100));

  //       if (settings.targetSizeKB > 0) {
  //         blob = await imageCompression(blob, {
  //           maxSizeMB: settings.targetSizeKB / 1024,
  //           useWebWorker: true,
  //         });
  //       } else if (settings.compress && fmt !== "image/png") {
  //         blob = await imageCompression(blob, { maxSizeMB: 1, useWebWorker: true });
  //       }

  //       out.push({
  //         original: item,
  //         blob,
  //         name: item.file.name.replace(/\.\w+$/, "." + fmt.split("/")[1]),
  //         width: w,
  //         height: h,
  //         format: fmt,
  //         sizeKB: Math.round(blob.size / 1024),
  //         url: URL.createObjectURL(blob),
  //       });

  //       setProgress(Math.round(((i + 1) / items.length) * 100));
  //     }

  //     setResults(out);
  //     setIsResizing(false);
  //   };

  //   const resizeAll = async () => {
  //   const out = await Promise.all(items.map(async item => {
  //     const img = new Image();
  //     img.src = item.src;
  //     await img.decode();

  //     const w = settings.width || item.width;
  //     const h = settings.keepRatio
  //       ? (item.height / item.width) * w
  //       : settings.height || item.height;

  //     // Step 1: Resize onto temporary canvas
  //     const cvsTemp = document.createElement("canvas");
  //     cvsTemp.width = w;
  //     cvsTemp.height = h;
  //     await pica().resize(img, cvsTemp);

  //     // Step 2: Create final canvas and apply background color
  //     const finalCanvas = document.createElement("canvas");
  //     finalCanvas.width = w;
  //     finalCanvas.height = h;
  //     const finalCtx = finalCanvas.getContext("2d");

  //     if (settings.bgColor && settings.bgColor !== "transparent") {
  //       finalCtx.fillStyle = settings.bgColor;
  //       finalCtx.fillRect(0, 0, w, h);
  //     }

  //     // Step 3: Draw resized image on top
  //     finalCtx.drawImage(cvsTemp, 0, 0);

  //     const fmt = settings.format === "original" ? item.format : settings.format;
  //     let blob = await new Promise(r =>
  //       finalCanvas.toBlob(r, fmt, settings.quality / 100)
  //     );

  //     // Step 4: Optional compression
  //     if (settings.targetSizeKB > 0) {
  //       blob = await imageCompression(blob, {
  //         maxSizeMB: settings.targetSizeKB / 1024,
  //         useWebWorker: true,
  //       });
  //     } else if (settings.compress && fmt !== "image/png") {
  //       blob = await imageCompression(blob, {
  //         maxSizeMB: 1,
  //         useWebWorker: true,
  //       });
  //     }

  //     return {
  //       original: item,
  //       blob,
  //       name: item.file.name.replace(/\.\w+$/, "." + fmt.split("/")[1]),
  //       width: w,
  //       height: h,
  //       format: fmt,
  //       sizeKB: Math.round(blob.size / 1024),
  //       url: URL.createObjectURL(blob),
  //     };
  //   }));

  //   setResults(out);
  // };

  const resizeAll = async () => {
    setIsResizing(true);
    setProgress(0);
    const out = [];

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const img = new Image();
      img.src = item.src;
      await img.decode();

      const w = settings.width || item.width;
      const h = settings.keepRatio
        ? (item.height / item.width) * w
        : settings.height || item.height;

      // Step 1: Resize onto temp canvas
      const tempCanvas = document.createElement("canvas");
      tempCanvas.width = w;
      tempCanvas.height = h;
      await pica().resize(img, tempCanvas);

      // Step 2: Final canvas + background
      const finalCanvas = document.createElement("canvas");
      finalCanvas.width = w;
      finalCanvas.height = h;
      const finalCtx = finalCanvas.getContext("2d");

      if (settings.bgColor && settings.bgColor !== "transparent") {
        finalCtx.fillStyle = settings.bgColor;
        finalCtx.fillRect(0, 0, w, h);
      }

      // Draw resized image on top
      finalCtx.drawImage(tempCanvas, 0, 0);

      // Step 3: Export to blob
      const fmt =
        settings.format === "original" ? item.format : settings.format;
      let blob = await new Promise((r) =>
        finalCanvas.toBlob(r, fmt, settings.quality / 100)
      );

      // Step 4: Optional compression
      if (settings.targetSizeKB > 0) {
        blob = await imageCompression(blob, {
          maxSizeMB: settings.targetSizeKB / 1024,
          useWebWorker: true,
        });
      } else if (settings.compress && fmt !== "image/png") {
        blob = await imageCompression(blob, {
          maxSizeMB: 1,
          useWebWorker: true,
        });
      }

      out.push({
        original: item,
        blob,
        name: item.file.name.replace(/\.\w+$/, "." + fmt.split("/")[1]),
        width: w,
        height: h,
        format: fmt,
        sizeKB: Math.round(blob.size / 1024),
        url: URL.createObjectURL(blob),
      });

      setProgress(Math.round(((i + 1) / items.length) * 100));
    }

    setResults(out);
    setIsResizing(false);
  };

  const resetAll = () => {
    setItems([]);
    setResults([]);
    setProgress(0);
    setIsResizing(false);
    setSettings({
      width: "",
      height: "",
      keepRatio: true,
      format: "original",
      quality: 80,
      stripMetadata: true,
      compress: false,
      targetSizeKB: 0,
      bgColor: "transparent",
    });
  };

  const handleResetConfirm = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "This will clear all images and reset all settings!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, reset all",
    }).then((result) => {
      if (result.isConfirmed) {
        resetAll(); // Your reset function
        Swal.fire("Reset!", "All data has been cleared.", "success");
      }
    });
  };

  const downloadAll = () => {
    const zip = new JSZip();
    results.forEach((r) => zip.file(r.name, r.blob));
    zip
      .generateAsync({ type: "blob" })
      .then((buf) => saveAs(buf, "resized_images.zip"));
  };

  return (
    <div className=" max-w-6xl mx-auto text-text">
      {/* <Helmet>
        <title>
          Bulk Image Resizer - Resize Images Online in Bulk for Free
        </title>
        <meta
          name="keywords"
          content="bulk image resizer, resize images online, image converter, image compression"
        />
        <meta
          property="og:title"
          content="Bulk Image Resizer - Resize Images Online"
        />
        <meta
          property="og:description"
          content="Resize, compress & convert JPG/PNG/WebP images in bulk."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet> */}



      {/* <h1 className="text-4xl font-bold text-center mb-4">
        Bulk Image Resizer Tool
      </h1> */}

      <section className="my-4">
        <h1 className="text-3xl font-bold text-primary">Online Bulk Image Resizer Tool</h1>
        <p className="text-gray-600">
          Resize, convert, and compress images easily without uploading. Free &
          secure.
        </p>
      </section>

      <section
        {...getRootProps()}
        className="border-2 border-dashed p-6 rounded-lg mb-6 border-primary text-primary"
      >
        <input {...getInputProps()} disabled={isResizing} />
        <p className="text-center">
          Drag & drop one or multiple images (JPG/PNG/WebP, max 25 MB each)
        </p>
      </section>

      {items.length > 0 && (
        <>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            {items.map((it, i) => (
              <div key={i} className="text-center">
                <img
                  src={it.src}
                  alt={`Original ${i}`}
                  className="w-full h-24 object-cover rounded mb-1"
                  loading="lazy"
                />
                <p className="text-xs">
                  {it.width}×{it.height}px
                  <br />
                  {it.format}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div>
              <label>Width(px)</label>
              <input
                type="number"
                className="input w-full"
                value={settings.width}
                onChange={(e) =>
                  setSettings((s) => ({ ...s, width: +e.target.value }))
                }
                disabled={isResizing}
              />
            </div>
            <div>
              <label>Height(px)</label>
              <input
                type="number"
                className="input w-full"
                value={settings.height}
                onChange={(e) =>
                  setSettings((s) => ({ ...s, height: +e.target.value }))
                }
                disabled={isResizing}
              />
            </div>
            <div className="flex items-center">
              <input
                id="keep"
                type="checkbox"
                checked={settings.keepRatio}
                onChange={(e) =>
                  setSettings((s) => ({ ...s, keepRatio: e.target.checked }))
                }
                disabled={isResizing}
              />
              <label htmlFor="keep">Keep Aspect</label>
            </div>

            <div>
              <label>Format</label>
              <select
                className="select w-full"
                value={settings.format}
                onChange={(e) =>
                  setSettings((s) => ({ ...s, format: e.target.value }))
                }
                disabled={isResizing}
              >
                <option value="original">Original</option>
                <option value="image/png">PNG</option>
                <option value="image/jpeg">JPEG</option>
                <option value="image/webp">WebP</option>
              </select>
            </div>

            <div>
              <label>Background</label>
              <input
                type="color"
                className="w-full h-10 p-0"
                disabled={settings.bgColor === "transparent" || isResizing}
                value={
                  settings.bgColor === "transparent"
                    ? "#ffffff"
                    : settings.bgColor
                }
                onChange={(e) =>
                  setSettings((s) => ({ ...s, bgColor: e.target.value }))
                }
              />
              <div className="text-xs mt-1">
                <label>
                  <input
                    type="radio"
                    name="bg"
                    checked={settings.bgColor === "transparent"}
                    onChange={() =>
                      setSettings((s) => ({ ...s, bgColor: "transparent" }))
                    }
                    disabled={isResizing}
                  />{" "}
                  Transparent
                </label>{" "}
                <label className="ml-3">
                  <input
                    type="radio"
                    name="bg"
                    checked={settings.bgColor !== "transparent"}
                    onChange={() =>
                      setSettings((s) => ({ ...s, bgColor: "#ffffff" }))
                    }
                    disabled={isResizing}
                  />{" "}
                  Use Color
                </label>
              </div>
            </div>

            {settings.format !== "image/png" && (
              <div className="col-span-2 md:col-span-4">
                <label>Quality: {settings.quality}%</label>
                <input
                  type="range"
                  min="10"
                  max="100"
                  value={settings.quality}
                  onChange={(e) =>
                    setSettings((s) => ({ ...s, quality: +e.target.value }))
                  }
                  className="range"
                  disabled={isResizing}
                />
              </div>
            )}

            <div className="flex items-center">
              <input
                id="strip"
                type="checkbox"
                checked={settings.stripMetadata}
                onChange={(e) =>
                  setSettings((s) => ({
                    ...s,
                    stripMetadata: e.target.checked,
                  }))
                }
                disabled={isResizing}
              />
              <label htmlFor="strip">Strip Metadata</label>
            </div>
            <div className="flex items-center">
              <input
                id="comp"
                type="checkbox"
                checked={settings.compress}
                onChange={(e) =>
                  setSettings((s) => ({ ...s, compress: e.target.checked }))
                }
                disabled={isResizing}
              />
              <label htmlFor="comp">Compress</label>
            </div>
            <div>
              <label>Target Size (KB)</label>
              <input
                type="number"
                className="input w-full"
                value={settings.targetSizeKB}
                onChange={(e) =>
                  setSettings((s) => ({ ...s, targetSizeKB: +e.target.value }))
                }
                disabled={isResizing}
              />
            </div>
          </div>

          <div className="flex gap-4 mb-6 flex-wrap">
            <button
              className="btn btn-outline btn-primary"
              onClick={applySettings}
              disabled={isResizing}
            >
              Apply
            </button>
            <button
              className="btn btn-primary"
              onClick={resizeAll}
              disabled={isResizing}
            >
              Resize All
            </button>
            <button
              className="btn btn-error"
              onClick={handleResetConfirm}
              disabled={isResizing}
            >
              Reset
            </button>
          </div>

          {isResizing && (
            <div className="w-full mb-6">
              <label className="block mb-1">Resizing: {progress}%</label>
              <progress
                className="progress w-full"
                value={progress}
                max="100"
              />
            </div>
          )}
        </>
      )}

      {results.length > 0 && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {results.map((r, i) => (
              <div key={i} className="card shadow">
                <div className="p-4">
                  <strong>Original:</strong> {r.original.width}×
                  {r.original.height}px
                  <br />
                  <strong>Resized:</strong> {r.width}×{r.height}px
                  <br />
                  <strong>Size:</strong> {r.sizeKB} KB
                  <br />
                  <img
                    src={r.url}
                    alt={r.name}
                    loading="lazy"
                    className="rounded w-full"
                  />
                </div>
                <div className="p-4">
                  <button
                    className="btn btn-secondary"
                    onClick={() => saveAs(r.blob, r.name)}
                  >
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button className="btn btn-accent" onClick={downloadAll}>
            Download All ZIP
          </button>
        </>
      )}

      
    </div>
  );
};

export default ImageResizer;
