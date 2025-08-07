/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from "react";
import { FaUpload, FaDownload } from "react-icons/fa";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import JSZip from "jszip";

const resolutions = [
  { label: "Original", value: "original" },
  { label: "1920x1080 (Full HD)", value: "1920x1080" },
  { label: "1280x720 (HD)", value: "1280x720" },
  { label: "854x480 (SD)", value: "854x480" },
  { label: "640x360 (nHD)", value: "640x360" },
  { label: "426x240 (Low)", value: "426x240" },
  { label: "Custom", value: "custom" }, // ➕ Added
];

const VideoThumbnailGallery = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(document.createElement("canvas"));

  const [videoFile, setVideoFile] = useState(null);
  const [thumbnails, setThumbnails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [interval, setInterval] = useState(5);
  const [resolution, setResolution] = useState("original");

  const [customWidth, setCustomWidth] = useState("");
  const [customHeight, setCustomHeight] = useState("");

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("video/")) {
      Swal.fire({
        icon: "error",
        title: "Invalid file type",
        text: "Please upload a valid video file.",
      });
      return;
    }

    setVideoFile(URL.createObjectURL(file));
    setThumbnails([]);
  };

  //   const parseResolution = (resStr, originalWidth, originalHeight) => {
  //     if (resStr === "original") {
  //       return { width: originalWidth, height: originalHeight };
  //     }

  //     const [w, h] = resStr.split("x").map(Number);
  //     return { width: w, height: h };
  //   };

  const parseResolution = (resStr, originalWidth, originalHeight) => {
    if (resStr === "original") {
      return { width: originalWidth, height: originalHeight };
    }

    if (resStr === "custom") {
      const w = parseInt(customWidth);
      const h = parseInt(customHeight);
      if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) {
        throw new Error(
          "Invalid custom resolution. Please enter valid numbers."
        );
      }
      return { width: w, height: h };
    }

    const [w, h] = resStr.split("x").map(Number);
    return { width: w, height: h };
  };

  const captureThumbnails = async () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    setLoading(true);
    toast.info("Extracting frames...");

    const duration = video.duration;
    const captureTimes = [];

    for (let t = 0; t < duration; t += interval) {
      captureTimes.push(t);
    }

    const extracted = [];

    for (const time of captureTimes) {
      await new Promise((resolve) => {
        const onSeeked = () => {
          const originalWidth = video.videoWidth;
          const originalHeight = video.videoHeight;
          const { width, height } = parseResolution(
            resolution,
            originalWidth,
            originalHeight
          );

          canvas.width = width;
          canvas.height = height;

          ctx.drawImage(video, 0, 0, width, height);

          canvas.toBlob((blob) => {
            extracted.push({
              time: time.toFixed(1),
              url: URL.createObjectURL(blob),
              resolution: `${width}x${height}`,
            });
            resolve();
          }, "image/png");

          video.removeEventListener("seeked", onSeeked);
        };

        video.addEventListener("seeked", onSeeked);
        video.currentTime = time;
      });
    }

    setThumbnails(extracted);
    setLoading(false);
    toast.success("Thumbnails extracted!");
  };

  const downloadImage = (url, time, resolution) => {
    const a = document.createElement("a");
    a.href = url;
    a.download = `frame-${time}s-${resolution}.png`;
    a.click();
  };

  const downloadAllAsZip = async () => {
  if (thumbnails.length === 0) {
    toast.warn("No thumbnails to download.");
    return;
  }

  const zip = new JSZip();
  const folder = zip.folder("thumbnails");

  for (const thumb of thumbnails) {
    const response = await fetch(thumb.url);
    const blob = await response.blob();
    const fileName = `frame-${thumb.time}s-${thumb.resolution}.png`;
    folder.file(fileName, blob);
  }

  toast.info("Zipping files...");

  zip.generateAsync({ type: "blob" }).then((zipBlob) => {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(zipBlob);
    a.download = "thumbnails.zip";
    a.click();
    toast.success("ZIP file downloaded!");
  });
};

  return (
    <div className="max-w-6xl bg-neutral p-4 rounded-md mx-auto py-4 text-text">
      <ToastContainer />
      <h1 className="text-3xl font-bold text-center mb-6">
        🎞️ Video Frame Thumbnail Generator
      </h1>

      <label className="flex items-center gap-2 mb-4 cursor-pointer btn btn-outline btn-primary">
        <FaUpload /> Upload Video File
        <input
          type="file"
          accept="video/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </label>

      {videoFile && (
        <div className="mb-6">
          {/* <video
            ref={videoRef}
            src={videoFile}
            onLoadedMetadata={() => toast.success("Video loaded. Set your preferences and extract thumbnails.")}
            className="hidden"
            controls={false}
          /> */}
          <video
            ref={videoRef}
            src={videoFile}
            onLoadedMetadata={() =>
              toast.success(
                "Video loaded. Set your preferences and extract thumbnails."
              )
            }
            className="w-full max-h-[400px] rounded-lg shadow mb-4"
            controls
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            {/* Interval Selector */}
            <div className="form-control">
              <label className="label font-semibold">
                Frame Interval (seconds)
              </label>
              <select
                className="select select-bordered"
                value={interval}
                onChange={(e) => setInterval(parseInt(e.target.value))}
              >
                <option value={1}>Every 1 sec</option>
                <option value={3}>Every 3 sec</option>
                <option value={5}>Every 5 sec</option>
                <option value={10}>Every 10 sec</option>
                <option value={15}>Every 15 sec</option>
              </select>
            </div>

            {/* Resolution Selector */}
            <div className="form-control">
              <label className="label font-semibold">
                Thumbnail Resolution
              </label>
              <select
                className="select select-bordered"
                value={resolution}
                onChange={(e) => setResolution(e.target.value)}
              >
                {resolutions.map((res) => (
                  <option key={res.value} value={res.value}>
                    {res.label}
                  </option>
                ))}
              </select>
              {resolution === "custom" && (
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <div className="form-control">
                    <label className="label text-sm">Custom Width (px)</label>
                    <input
                      type="number"
                      className="input input-bordered"
                      value={customWidth}
                      onChange={(e) => setCustomWidth(e.target.value)}
                      placeholder="e.g. 800"
                      min="1"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label text-sm">Custom Height (px)</label>
                    <input
                      type="number"
                      className="input input-bordered"
                      value={customHeight}
                      onChange={(e) => setCustomHeight(e.target.value)}
                      placeholder="e.g. 600"
                      min="1"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Generate Button */}
            <div className="flex items-end">
              <button
                onClick={captureThumbnails}
                className="btn btn-success w-full"
                disabled={loading}
              >
                {loading ? "Processing..." : "Generate Thumbnails"}
              </button>
            </div>
          </div>
        </div>
      )}

      {thumbnails.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {thumbnails.map((thumb, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden shadow bg-base-100"
            >
              <img
                src={thumb.url}
                alt={`Frame at ${thumb.time}s`}
                className="w-full"
              />
              <div className="p-3 text-center">
                <p className="mb-1 text-sm text-gray-500">
                  Time: {thumb.time}s
                </p>
                <p className="mb-2 text-xs text-gray-400">
                  Size: {thumb.resolution}
                </p>
                <button
                  className="btn btn-outline btn-sm btn-primary w-full"
                  onClick={() =>
                    downloadImage(thumb.url, thumb.time, thumb.resolution)
                  }
                >
                  <FaDownload className="inline mr-2" /> Download
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="flex justify-end mb-4 mt-4">
  <button onClick={downloadAllAsZip} className="btn btn-outline btn-primary">
    📁 Download All as ZIP
  </button>
</div>
    </div>
  );
};

export default VideoThumbnailGallery;
