/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { FaDownload } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ThumbnailDownloader = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [videoId, setVideoId] = useState('');
  const [thumbnails, setThumbnails] = useState([]);
  const [loading, setLoading] = useState(false);

  const extractVideoId = (url) => {
    const regExp =
      /(?:youtube\.com\/.*v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = extractVideoId(videoUrl);

    if (!id) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid URL',
        text: 'Please enter a valid YouTube video URL.',
      });
      return;
    }

    setVideoId(id);
    const baseUrl = `https://img.youtube.com/vi/${id}`;
    const sizes = [
      { label: 'HD (1280x720)', file: 'maxresdefault.jpg' },
      { label: 'SD (640x480)', file: 'sddefault.jpg' },
      { label: 'High (480x360)', file: 'hqdefault.jpg' },
      { label: 'Medium (320x180)', file: 'mqdefault.jpg' },
      { label: 'Low (120x90)', file: 'default.jpg' },
    ];

    const thumbData = sizes.map((s) => ({
      ...s,
      url: `${baseUrl}/${s.file}`,
    }));

    setThumbnails(thumbData);
    toast.success('Thumbnails loaded!');
  };

  const downloadAsPng = (imageUrl, label) => {
    const image = new Image();
    image.crossOrigin = 'anonymous';
    image.src = imageUrl;
    image.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = image.width;
      canvas.height = image.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(image, 0, 0);

      canvas.toBlob((blob) => {
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = `youtube-thumbnail-${label.replace(/\s+/g, '-')}.png`;
        a.click();
      }, 'image/png');
    };

    image.onerror = () => {
      Swal.fire({
        icon: 'error',
        title: 'Image not available',
        text: 'This thumbnail is not available for this video.',
      });
    };
  };

  return (
    <div className="max-w-6xl bg-neutral p-4 rounded-md  mx-auto text-text">
      <ToastContainer />
      <h1 className="text-3xl font-bold text-center mb-6">
        🎬 YouTube Thumbnail Downloader (PNG)
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row gap-4 items-center"
      >
        <input
          type="text"
          className="input input-bordered w-full"
          placeholder="Paste YouTube video URL..."
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Fetch Thumbnails
        </button>
      </form>

      {thumbnails.length > 0 && (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {thumbnails.map((thumb) => (
            <div
              key={thumb.label}
              className="card bg-base-100 shadow-md overflow-hidden "
            >
              <figure>
                <img
                  src={thumb.url}
                  alt={thumb.label}
                  className="w-full object-cover"
                  onError={(e) => (e.target.style.display = 'none')}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{thumb.label}</h2>
                <button
                  onClick={() => downloadAsPng(thumb.url, thumb.label)}
                  className="btn btn-outline btn-success mt-2 "
                >
                  <FaDownload className="mr-2" /> Download PNG
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThumbnailDownloader;
