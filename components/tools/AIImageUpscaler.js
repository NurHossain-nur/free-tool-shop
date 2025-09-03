/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { FaUpload, FaDownload } from "react-icons/fa";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AIImageUpscaler = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [upscale, setUpscale] = useState("2x");
  const [denoise, setDenoise] = useState("medium");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      Swal.fire("Invalid file", "Please upload an image file.", "error");
      return;
    }

    setImage(file);
    setPreview(URL.createObjectURL(file));
    setResult(null);
  };

  const upscaleImage = async () => {
    if (!image) return;

    setLoading(true);
    toast.info("Processing image with AI...");

    // ⏳ Simulate async call to backend or AI API
    setTimeout(() => {
      setLoading(false);
      setResult(preview); // ⚠️ Replace this with actual API response
      toast.success("Upscaling complete!");
    }, 2000);
  };


//     const upscaleImage = async () => {
//   if (!image) return;

//   setLoading(true);
//   toast.info("Uploading and processing...");

//   try {
//     const reader = new FileReader();
//     reader.onloadend = async () => {
//       const base64 = reader.result;

//       const res = await fetch("/api/upscale", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           imageBase64: base64,
//           upscale,
//           denoise,
//         }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         throw new Error(data.error || "Upscaling failed.");
//       }

//       setResult(data.imageUrl);
//       toast.success("Upscaling complete!");
//     };

//     reader.readAsDataURL(image);
//   } catch (err) {
//     console.error(err);
//     toast.error("Upscaling failed.");
//   } finally {
//     setLoading(false);
//   }
// };

  const downloadImage = () => {
    const a = document.createElement("a");
    a.href = result;
    a.download = `upscaled-${upscale}.png`;
    a.click();
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <ToastContainer />
      <h1 className="text-3xl font-bold text-center mb-6">
        🖼️ AI Image Denoise & Upscaler
      </h1>

      <label className="btn btn-outline btn-primary mb-4 cursor-pointer">
        <FaUpload className="mr-2" />
        Upload Image
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
        />
      </label>

      {preview && (
        <>
          <div className="mb-4">
            <img
              src={preview}
              alt="Original"
              className="rounded shadow w-full max-h-[300px] object-contain"
            />
            <p className="text-sm text-gray-500 mt-2 text-center">Original Image</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div className="form-control">
              <label className="label font-semibold">Upscale Factor</label>
              <select
                className="select select-bordered"
                value={upscale}
                onChange={(e) => setUpscale(e.target.value)}
              >
                <option value="2x">2x</option>
                <option value="4x">4x</option>
              </select>
            </div>

            <div className="form-control">
              <label className="label font-semibold">Denoise Level</label>
              <select
                className="select select-bordered"
                value={denoise}
                onChange={(e) => setDenoise(e.target.value)}
              >
                <option value="none">None</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>

          <button
            className="btn btn-success w-full"
            onClick={upscaleImage}
            disabled={loading}
          >
            {loading ? "Upscaling..." : "Start AI Upscale"}
          </button>
        </>
      )}

      {result && (
        <div className="mt-6 text-center">
          <img
            src={result}
            alt="Upscaled"
            className="rounded shadow w-full max-h-[400px] object-contain"
          />
          <p className="text-sm text-gray-500 mt-2">Upscaled Image</p>
          <button
            className="btn btn-outline btn-primary mt-4"
            onClick={downloadImage}
          >
            <FaDownload className="inline mr-2" />
            Download Upscaled Image
          </button>
        </div>
      )}
    </div>
  );
};

export default AIImageUpscaler;
