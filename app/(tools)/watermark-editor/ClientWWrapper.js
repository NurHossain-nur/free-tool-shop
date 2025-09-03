// app/jpg-to-png/ClientWrapper.js
"use client";

// import ImageToPDFConverter from "@/components/tools/ImageToPDFConverterTool";
import dynamic from "next/dynamic";
import React from "react";

// ⛔ SSR not allowed in server files, so we move it here
const Editor = dynamic(() => import("@/components/tools/WatermarkEditor"), {
  ssr: false,
  loading: () => <p>Loading converter...</p>,
});

const ClientWrapper = () => {
  return <Editor />;
};

export default ClientWrapper;