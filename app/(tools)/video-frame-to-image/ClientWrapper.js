'use client';
import dynamic from 'next/dynamic';
import React from 'react';

const VideoFrameExtractorTool = dynamic(
  () => import('@/components/tools/VideoFrameExtractor'),
  {
    ssr: false,
    loading: () => <p>Loading converter...</p>,
  }
);

export default function ClientWrapper() {
  return <VideoFrameExtractorTool />;
}