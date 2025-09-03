// app/tools/pdf-merge/page.tsx

import MoreToolsSection from "@/components/MoreToolsSection";
import ClientWrapper from "./ClientWrapper";
import Script from "next/script";

export const metadata = {
  title: "PDF Merge Tool - Combine PDF Files Online Free | Fast & Secure",
  description:
    "Merge multiple PDF files online quickly, securely, and for free. No sign-up or installation required. Combine PDFs with our easy browser-based tool.",
  keywords:
    "pdf merge, merge pdf files, online pdf merger, combine pdf, pdf combiner, free pdf merge tool, merge pdf online, no upload pdf merge",
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  alternates: {
    canonical: "https://www.freetoolshop.com/pdf-merge",
  },
  openGraph: {
    title: "PDF Merge Tool - Combine PDFs Online Free & Secure",
    description:
      "Effortlessly merge multiple PDF files into a single document. 100% free, private, and runs entirely in your browser with no uploads.",
    url: "https://www.freetoolshop.com/pdf-merge",
    images: [
      {
        url: "https://www.freetoolshop.com/images/pdf-merge-preview.png",
        width: 1200,
        height: 630,
        alt: "PDF Merge Tool Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF Merge Tool - Free Online PDF Merger",
    description:
      "Combine multiple PDF files quickly and securely in your browser. No sign-up or upload required.",
    images: ["https://www.freetoolshop.com/images/pdf-merge-preview.png"],
  },
};

export default function PdfMergePage() {
  return (
    <div className="bg-base-100 text-text" lang="en">
      {/* Structured Data */}
      <Script
        id="pdf-merge-software-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "PDF Merge Tool",
            operatingSystem: "All",
            applicationCategory: "UtilityApplication",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            featureList: [
              "Merge multiple PDF files into one",
              "Drag and drop PDF upload with reorder support",
              "Privacy-focused — all merging done in your browser",
              "No file upload or account required",
              "Download merged PDF instantly",
            ],
            url: "https://www.freetoolshop.com/pdf-merge",
            description:
              "Free online PDF merge tool to combine multiple PDF files into a single document without any hassle or registration.",
            applicationSubCategory: "PDFEditingSoftware",
          }),
        }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Is this PDF merge tool free to use?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, merging PDFs is completely free with no limits or watermarks.",
                },
              },
              {
                "@type": "Question",
                name: "Are my PDF files uploaded to a server?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. All merging is done locally in your browser, so your files remain private.",
                },
              },
              {
                "@type": "Question",
                name: "Can I reorder PDF pages before merging?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, you can drag and reorder the PDF files before merging them into one document.",
                },
              },
              {
                "@type": "Question",
                name: "What is the maximum file size supported?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Each PDF file can be up to 50MB in size.",
                },
              },
            ],
          }),
        }}
      />

      <main className="max-w-6xl mx-auto p-4">
        <h1
          className="text-3xl font-bold mb-6 text-center text-primary"
          tabIndex={-1}
          aria-label="PDF Merge Tool main heading"
        >
          PDF Merge Online
        </h1>
        <p className="text-justify text-gray-700 max-w-6xl mx-auto mb-6">
          Easily merge multiple PDF files into a single, well-organized document
          using our free online PDF merger. Whether you&apos;re working on
          contracts, reports, scanned documents, or eBooks, our secure,
          no-upload tool works entirely in your browser. No installations, no
          sign-up, and completely free — optimized for speed, privacy, and
          simplicity.
        </p>

        {/* Client-side logic & UI */}
        <ClientWrapper />

        <section className="mt-10 text-center text-gray-600">
          <h2 className="text-lg font-semibold text-secondary" tabIndex={0}>
            How to Merge PDFs
          </h2>
          <p className="mt-2 max-w-2xl mx-auto">
            Merging PDFs is simple and fast. Follow the steps below to create a
            single PDF document with your uploaded files.
          </p>
          <ol
            className="list-decimal list-inside mt-4 text-left max-w-2xl mx-auto text-base space-y-2 text-gray-700"
            aria-label="Steps to merge PDF files"
          >
            <li>Drag and drop your PDF files into the upload area.</li>
            <li>Rearrange the files in your preferred order.</li>
            <li>
              Click <strong>Merge PDFs</strong> to combine your files.
            </li>
            <li>Download the merged PDF instantly to your device.</li>
          </ol>
        </section>

        {/* New Section: User Benefits */}
        <section
          className="mt-12 bg-base-100 p-6 rounded-lg shadow-md"
          aria-label="Benefits of using the PDF merge tool"
        >
          <h2 className="text-2xl font-bold mb-4 text-primary">
            Why Use Our PDF Merge Tool?
          </h2>
          <p className="text-gray-700 mb-4">
            Designed for privacy and performance, our browser-based PDF combiner
            tool offers the easiest way to manage, merge, and reorder your files
            without ever leaving your device. Great for office professionals,
            students, educators, or anyone needing quick document consolidation.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              🛡️ <strong>Privacy First:</strong> All operations run locally in
              your browser, no files are uploaded.
            </li>
            <li>
              ⚡ <strong>Fast Processing:</strong> Instantly merge PDFs without
              waiting for uploads or downloads.
            </li>
            <li>
              📱 <strong>Device Friendly:</strong> Works perfectly on desktop,
              tablet, and mobile devices.
            </li>
            <li>
              🔄 <strong>Easy Reordering:</strong> Drag and drop to arrange your
              files in the desired merge order.
            </li>
            <li>
              🆓 <strong>Completely Free:</strong> No hidden fees, no
              watermarks, and no registration needed.
            </li>
          </ul>
        </section>

        <section className="mt-12 bg-base-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-primary">Key Features</h2>
          <p className="text-gray-700 mb-4">
            Our tool is designed with powerful features that make PDF merging
            simple, fast, and effective — all with zero technical skills needed.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>🔀 Merge unlimited PDF files quickly and easily</li>
            <li>📂 Drag and drop to upload PDFs with reorder support</li>
            <li>🔒 Privacy-focused: no files leave your device</li>
            <li>⚙️ Works entirely in-browser — no installation needed</li>
            <li>📱 Fully responsive design for mobile and desktop</li>
          </ul>
        </section>

        <p className="text-gray-700">
          Online PDF merging eliminates the need for software downloads and
          keeps your data safe. All processing is done locally in your browser —
          meaning your PDFs never leave your device. Whether you&apos;re
          combining legal documents, schoolwork, invoices, or digital books,
          it&apos;s fast and secure.
        </p>

        {/* FAQ Section */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold mb-4 text-secondary">
            Frequently Asked Questions
          </h2>
          <div
            className="space-y-4 text-gray-700 max-w-3xl mx-auto"
            role="region"
            aria-live="polite"
            aria-atomic="true"
          >
            <div>
              <h3 className="font-semibold text-primary">
                Is this PDF merge tool free?
              </h3>
              <p>
                Yes, it&apos;s 100% free to use with no limits or watermarks.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary">Are my files safe?</h3>
              <p>
                Absolutely! All merging happens in your browser without
                uploading files to any server.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary">
                Can I reorder PDFs before merging?
              </h3>
              <p>
                Yes, simply drag and reorder your files to control the merge
                order.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary">
                What&apos;s the max file size?
              </h3>
              <p>You can upload PDFs up to 50MB each.</p>
            </div>
          </div>
        </section>

        <section className="mt-12 bg-base-100 p-6 rounded-lg shadow-md">
  <h2 className="text-2xl font-bold mb-4 text-primary">
    Convert Images to PDF Instantly
  </h2>
  <p className="text-gray-700 mb-4">
    Need to convert your photos, screenshots, or scanned images into a single PDF?
    Our <a href="/image-to-pdf" className="text-primary font-medium underline hover:text-primary-focus">
      Image to PDF converter
    </a> lets you upload JPG, PNG, or WebP files and merge them into a high-quality PDF document.
    Perfect for photo albums, scan collections, documents, or any visual content you want to archive or share.
  </p>
  <ul className="list-disc list-inside text-gray-700 space-y-1">
    <li>🖼️ Upload multiple image formats: JPG, PNG, WebP</li>
    <li>📐 Automatically optimized page size and orientation</li>
    <li>🔐 100% secure — all processing happens in your browser</li>
    <li>⚡ Fast and free with no sign-up or watermark</li>
  </ul>
  <div className="mt-4">
    <a
      href="/image-to-pdf"
      className="btn btn-primary"
    >
      Go to Image to PDF Tool
    </a>
  </div>
</section>

        <MoreToolsSection currentToolSlug="pdf-merge" />

        <p className="text-center text-gray-600 mt-10 max-w-2xl mx-auto">
          Start merging PDFs now with our 100% free tool — no watermarks, no
          limits, and no risk. Just drag, drop, reorder, and merge securely in
          your browser.
        </p>
      </main>
    </div>
  );
}
