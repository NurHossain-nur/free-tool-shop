"use client";

import dynamic from "next/dynamic";
import React from "react";

// Dynamically import the ImageResizerTool component with SSR disabled
const ImageResizerTool = dynamic(
  () => import("@/components/tools/ImageResizerTool"), // adjust path if needed
  {
    ssr: false,
    loading: () => <p>Loading Image Resizer...</p>,
  }
);

const ClientWrapper = () => {
  return <ImageResizerTool />;
};

export default ClientWrapper;