/* eslint-disable @next/next/no-img-element */

"use client";

import React, { useState, useRef } from "react";
import { useDropzone } from "react-dropzone";
import imageCompression from "browser-image-compression";

import { removeBackground } from "@imgly/background-removal";

const JpgToPng = () => {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const canvasRef = useRef(null);
  const [originalImage, setOriginalImage] = useState(null);
  const [convertedImage, setConvertedImage] = useState(null);
  const [width, setWidth] = useState(800);
  const [height, setHeight] = useState(600);
  const [compression, setCompression] = useState(80);
  const [quality, setQuality] = useState(80);
  const [transparent, setTransparent] = useState(false);
  const [originalFile, setOriginalFile] = useState(null);

  const [userChangedQuality, setUserChangedQuality] = useState(false);

  const [compressedPreviewUrl, setCompressedPreviewUrl] = useState(null);

  const [compressedSizeKB, setCompressedSizeKB] = useState(null);

  const handleDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file && file.type === "image/jpeg") {
      // Reset all relevant states
      setOriginalFile(file);
      setOriginalImage(null);
      setConvertedImage(null);
      setCompressedPreviewUrl(null);
      setLoading(false);
      setProgress(0);
      setUserChangedQuality(false);
      setCompression(80); // default
      setQuality(80); // default
      setTransparent(false); // or keep previous if preferred

      const reader = new FileReader();
      reader.onload = () => {
        const img = new Image();
        img.onload = async () => {
          setOriginalImage({
            src: reader.result,
            width: img.width,
            height: img.height,
          });
          setWidth(img.width);
          setHeight(img.height);

          // Show compressed preview (not final PNG conversion)
          const compressedUrl = await compressImage(file, compression);
          setCompressedPreviewUrl(compressedUrl);
        };
        img.src = reader.result;
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please upload a JPG image.");
    }
  };

  const handleConvert = async () => {
    if (!originalImage || !compressedPreviewUrl) return;

    setLoading(true);
    setProgress(10);

    try {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      canvas.width = width;
      canvas.height = height;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      setProgress(30);

      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = async () => {
        ctx.drawImage(img, 0, 0, width, height);
        setProgress(60);

        const mimeType = transparent ? "image/png" : "image/jpeg";

        const actualQuality = transparent
          ? undefined
          : userChangedQuality
          ? quality / 100
          : 1.0;

        const dataURL = transparent
          ? canvas.toDataURL(mimeType)
          : canvas.toDataURL(mimeType, actualQuality);

        setProgress(90);

        setConvertedImage(dataURL);
        setProgress(100);
        setTimeout(() => setLoading(false), 300);
      };
      img.onerror = () => {
        console.error("Image load error.");
        setLoading(false);
        alert("Image failed to load.");
      };

      img.src = compressedPreviewUrl;
    } catch (err) {
      console.error("Conversion failed:", err);
      alert("Conversion failed.");
      setLoading(false);
    }
  };

  const compressImage = async (file, compressionValue) => {
    const options = {
      maxSizeMB: Math.max(compressionValue / 10, 0.1), // Avoid 0MB
      useWebWorker: true,
    };

    try {
      const compressedBlob = await imageCompression(file, options);
      setCompressedSizeKB((compressedBlob.size / 1024).toFixed(2)); // size in KB
      return URL.createObjectURL(compressedBlob);
    } catch (error) {
      console.error("Compression failed:", error);
      setCompressedSizeKB((file.size / 1024).toFixed(2)); // fallback: original size
      return URL.createObjectURL(file); // fallback
    }
  };

  const handleCompressionChange = async (e) => {
    const value = parseInt(e.target.value, 10);
    setCompression(value);

    if (!originalFile) return;
    const compressedUrl = await compressImage(originalFile, value);
    setCompressedPreviewUrl(compressedUrl);
  };

  const handleRemoveBackground = async () => {
    if (!convertedImage) {
      alert("Please convert an image first.");
      return;
    }

    setLoading(true);
    setProgress(10);

    const imageBlob = await fetch(convertedImage).then((res) => res.blob());
    setProgress(40);

    try {
      const backgroundRemovedBlob = await removeBackground(imageBlob, {
        onProgress: (p) => setProgress(Math.round(p * 100)),
      });

      const url = URL.createObjectURL(backgroundRemovedBlob);
      setConvertedImage(url);
      setProgress(100);
    } catch (err) {
      console.error("Background removal failed:", err);
      alert("Background removal failed.");
    } finally {
      setTimeout(() => setLoading(false), 300);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
    accept: { "image/jpeg": [".jpg", ".jpeg"] },
  });

  return (
    <div
      className="max-w-6xl mx-auto p-6 text-color-white shadow-xl rounded-xl mt-10"
      style={{ fontFamily: "Arial, sans-serif" }}
    >
      <div className="flex flex-col md:flex-row gap-4 justify-center mb-6">
        <div
          {...getRootProps()}
          className={`border-2 border-dashed border-primary p-4 rounded-lg cursor-pointer flex flex-col justify-center items-center transition-all duration-300 ${
            isDragActive ? "h-64" : "h-32"
          }`}
        >
          <input {...getInputProps()} />
          <p className="text-center text-primary font-semibold">
            {isDragActive
              ? "Drop the JPG image here..."
              : "Drag & drop or click to select a JPG file"}
          </p>
        </div>

        {originalImage && (
          <div className="flex flex-col gap-4 md:flex-1">
            <label className="label font-semibold">Width</label>
            <input
              type="number"
              className="input input-bordered w-full text-secondary"
              value={width}
              onChange={(e) => setWidth(Number(e.target.value))}
            />

            <label className="label font-semibold">Height</label>
            <input
              type="number"
              className="input input-bordered w-full text-secondary"
              value={height}
              onChange={(e) => setHeight(Number(e.target.value))}
            />

            <label className="label flex items-center justify-between font-semibold text-wrap">
              <span>Compression</span>
              <span className="text-xs italic text-primary">
                (Higher % = more compression, smaller file)
              </span>
            </label>
            <div className="flex items-center gap-2">
              <input
                type="range"
                min="0"
                max="100"
                className="range range-primary"
                value={compression}
                onChange={handleCompressionChange}
              />
              <span>{compression}%</span>
            </div>
            {compressedSizeKB && (
              <p className="text-xs text-primary mt-1">
                Compressed size: {compressedSizeKB} KB
              </p>
            )}

            <label className="label flex items-center justify-between font-semibold mt-4 text-wrap">
              <span>Quality</span>
              <span className="text-xs italic text-primary">
                (PNG output quality, affects transparency and sharpness)
              </span>
            </label>
            <div className="flex items-center gap-2">
              <input
                type="range"
                min="0"
                max="100"
                className="range range-primary"
                value={quality}
                onChange={(e) => {
                  setQuality(parseInt(e.target.value, 10));
                  setUserChangedQuality(true);
                }}
              />
              <span>{quality}</span>
            </div>

            <label className="label cursor-pointer flex flex-col items-start gap-1 mt-4 text-wrap">
              <div>
                <span className="label-text font-medium mr-4">
                  Transparent Background
                </span>
                <input
                  type="checkbox"
                  className="toggle toggle-primary"
                  checked={transparent}
                  onChange={() => setTransparent(!transparent)}
                />
              </div>
              <span className="text-xs italic text-primary text-wrap">
                Only effective when removing the background. Converted image
                will be PNG with transparency.
              </span>
            </label>

            <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
              <button
                onClick={handleConvert}
                disabled={loading || !originalImage}
                className={`btn w-full md:w-auto ${
                  loading || !originalImage
                    ? "bg-primary/50 cursor-not-allowed"
                    : "bg-primary hover:bg-primary/90 text-white"
                }`}
              >
                {loading ? "Converting..." : "Convert to PNG"}
              </button>

              <button
                onClick={handleRemoveBackground}
                disabled={loading || !convertedImage}
                className={`btn w-full md:w-auto ${
                  loading || !convertedImage
                    ? "bg-neutral/50 cursor-not-allowed"
                    : "bg-neutral hover:bg-neutral/90 text-white"
                }`}
              >
                {loading ? "Removing Background..." : "Remove Background"}
              </button>

              <button
                onClick={() => {
                  if (!convertedImage) return;
                  const link = document.createElement("a");
                  link.href = convertedImage;
                  link.download = "converted-image.png";
                  link.click();
                }}
                disabled={!convertedImage || loading}
                className={`btn w-full md:w-auto ${
                  !convertedImage || loading
                    ? "bg-primary/50 cursor-not-allowed"
                    : "bg-primary hover:bg-primary/90 text-white"
                }`}
              >
                Download PNG
              </button>
            </div>
          </div>
        )}
      </div>

      {loading && (
        <div className="w-full my-4 flex flex-col items-center text-primary">
          <span className="loading loading-spinner loading-lg mb-2"></span>
          <progress
            className="progress progress-primary w-full max-w-md"
            value={progress}
            max="100"
          ></progress>
          <p className="mt-2 text-sm">Processing... {progress}%</p>
        </div>
      )}

      <canvas ref={canvasRef} style={{ display: "none" }} />

      {originalImage && (convertedImage || compressedPreviewUrl) && (
        <div className="mt-10 grid gap-6 grid-cols-1 md:grid-cols-2">
          <div className="card bg-neutral shadow-md">
            <figure className="p-4">
              <img
                src={originalImage.src}
                alt="Original"
                className="rounded-lg max-h-48 object-contain"
              />
            </figure>
            <div className="card-body items-center text-center text-secondary">
              <h3 className="card-title text-sm">Original Image</h3>
            </div>
          </div>

          <div className="card bg-neutral shadow-md">
            <figure className="p-4">
              <img
                src={convertedImage || compressedPreviewUrl}
                alt="Converted or Preview"
                className="rounded-lg max-h-48 object-contain"
              />
            </figure>
            <div className="card-body items-center text-center text-secondary">
              <h3 className="card-title text-sm">
                {convertedImage ? "Converted PNG" : "Preview (not final)"}
              </h3>
              {convertedImage && (
                <a href={convertedImage} download="converted.png">
                  <button className="btn btn-sm btn-primary mt-2">Download</button>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JpgToPng;
