"use client";

import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center py-6 text-[var(--color-primary)]">
      <span className="loading loading-spinner loading-lg mb-4"></span>
      <p className="text-sm text-gray-500">Loading, please wait...</p>
    </div>
  );
};

export default Loading;
