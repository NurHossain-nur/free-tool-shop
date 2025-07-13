// File: pages/404.js
"use client";

import Head from 'next/head';
import Link from 'next/link';
// import Head from 'next/head';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-base-100 flex flex-col items-center justify-center p-8 text-center">
      <Head>
        <title>Page Not Found - FreeToolShop</title>
        <meta name="robots" content="noindex" />
        <meta name="description" content="The page you are looking for does not exist. Please go back to the homepage or explore available tools." />
      </Head>

      <h1 className="text-6xl font-bold text-error mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">Oops! Page not found</h2>
      <p className="text-gray-500 max-w-md mb-6">
        The page you&apos;re looking for doesn&apos;t exist or has been moved. 
        Let&apos;s help you get back on track.
      </p>

      <Link href="/">
        <button className="btn btn-primary">Back to Home</button>
      </Link>

      <div className="mt-10">
        <h3 className="text-lg font-medium text-gray-600 mb-3">Popular Tools</h3>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/jpg-to-png" className="btn btn-outline btn-sm">JPG to PNG</Link>
          <Link href="/image-compressor" className="btn btn-outline btn-sm">Image Compressor</Link>
          <Link href="/pdf-to-word" className="btn btn-outline btn-sm">PDF to Word</Link>
          <Link href="/word-counter" className="btn btn-outline btn-sm">Word Counter</Link>
        </div>
      </div>
    </div>
  );
}
