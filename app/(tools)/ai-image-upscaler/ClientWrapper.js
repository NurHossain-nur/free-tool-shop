"use client";

import dynamic from "next/dynamic";
import React from "react";

// Dynamically import the ImageResizerTool component with SSR disabled
const AIImageUpscaler = dynamic(
  () => import("@/components/tools/AIImageUpscaler"), // adjust path if needed
  {
    ssr: false,
    loading: () => <p>Loading Image Resizer...</p>,
  }
);

const ClientWrapper = () => {
  return <AIImageUpscaler />;
};

export default ClientWrapper;