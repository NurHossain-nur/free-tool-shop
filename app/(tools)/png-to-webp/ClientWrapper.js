'use client';
import dynamic from 'next/dynamic';
import React from 'react';

const PngToWebpTool = dynamic(
  () => import('@/components/tools/PngToWebpTool'),
  {
    ssr: false,
    loading: () => <p>Loading converter...</p>,
  }
);

export default function ClientWrapper() {
  return <PngToWebpTool />;
}
