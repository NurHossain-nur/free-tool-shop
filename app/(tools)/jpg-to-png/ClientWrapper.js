// app/jpg-to-png/ClientWrapper.js
"use client";

import Loading from "@/components/Loading";
import dynamic from "next/dynamic";
import React from "react";

// ⛔ SSR not allowed in server files, so we move it here
const JpgToPngTool = dynamic(() => import("@/components/tools/JpgToPngTool"), {
  ssr: false,
  loading: () => <Loading></Loading>
});

const ClientWrapper = () => {
  return <JpgToPngTool />;
};

export default ClientWrapper;
