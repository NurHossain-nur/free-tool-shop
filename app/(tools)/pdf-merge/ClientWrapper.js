"use client";

import dynamic from "next/dynamic";
import React from "react";

// Dynamically import the ImageResizerTool component with SSR disabled
const PDFMergerTool = dynamic(
  () => import("@/components/tools/PDFMergerTool"), // adjust path if needed
  {
    ssr: false,
    loading: () => <p>Loading Image Resizer...</p>,
  }
);

const ClientWrapper = () => {
  return <PDFMergerTool />;
};

export default ClientWrapper;