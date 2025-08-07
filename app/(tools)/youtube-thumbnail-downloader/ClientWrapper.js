'use client';
import dynamic from 'next/dynamic';
import React from 'react';

const YouTubeThumbnailDownloaderTool = dynamic(
  () => import('@/components/tools/YouTubeThumbnailDownloader'),
  {
    ssr: false,
    loading: () => <p>Loading converter...</p>,
  }
);

export default function ClientWrapper() {
  return <YouTubeThumbnailDownloaderTool />;
}