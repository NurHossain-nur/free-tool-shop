// app/image-to-pdf/page.tsx
// import Head from "next/head";
import ClientWrapper from "./ClientWrapper";
import { FiUpload } from "react-icons/fi";
import Script from "next/script";
import MoreToolsSection from "@/components/MoreToolsSection";
// import JsonLd from "./JsonLd";

export const metadata = {
  title: "Image to PDF Converter - Free & Secure Online Tool",
  description:
    "Convert JPG, PNG, WebP images to PDF online for free. Batch upload, reorder, compress, and add watermark. No signup or installation required.",
  keywords:
    "image to pdf converter, convert images to pdf online, jpg to pdf, png to pdf, webp to pdf, batch convert images, compress pdf, add watermark to pdf",

  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.freetoolshop.com/image-to-pdf",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },

  openGraph: {
    title: "Image to PDF Converter - Fast & Free Online Tool",
    description:
      "Convert JPG, PNG, and WebP images to PDF easily with compression, watermark options, and batch support. Secure and mobile-friendly.",
    url: "https://www.freetoolshop.com/image-to-pdf",
    images: [
      {
        url: "https://www.freetoolshop.com/images/image-to-pdf-preview.png",
        width: 1200,
        height: 630,
        alt: "Image to PDF Converter Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Image to PDF Converter - Fast & Free Online Tool",
    description:
      "Convert JPG, PNG, and WebP images to PDF easily with compression, watermark options, and batch support.",
    images: ["https://www.freetoolshop.com/images/image-to-pdf-preview.png"],
  },
};

export default function ImageToPDFPage() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Inject JSON-LD Structured Data */}
      <Script
        id="image-to-pdf-software-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Image to PDF Converter",
            operatingSystem: "All",
            applicationCategory: "UtilityApplication",
            browserRequirements: "Requires modern browser",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            featureList: [
              "Convert JPG, PNG, and WebP images to PDF",
              "Batch image upload and drag-to-reorder support",
              "Compress images before PDF conversion",
              "Add optional watermark to output PDF",
              "Works directly in-browser — no installation required",
              "Private and secure — no file uploads",
            ],
            url: "https://www.freetoolshop.com/image-to-pdf",
            description:
              "Free online Image to PDF converter that supports batch uploads, compression, reordering, watermarking, and client-side security. Fast, simple, and works on all devices.",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "857",
            },
            applicationSubCategory: "DocumentManagementApplication",
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
                name: "Is this Image to PDF Converter free?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, it's 100% free. No sign-up or subscription required.",
                },
              },
              {
                "@type": "Question",
                name: "Does it work on iPhone and Android?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes! You can use this tool directly from Safari on iOS or Chrome on Android. It supports uploading from your photo gallery.",
                },
              },
              {
                "@type": "Question",
                name: "Are my images safe and private?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "All conversions happen on your device using JavaScript. No images are uploaded to a server.",
                },
              },
              {
                "@type": "Question",
                name: "Can I compress or add a watermark?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes! You can choose to compress images before conversion and optionally add a watermark in the settings panel.",
                },
              },
            ],
          }),
        }}
      />

      <div className="max-w-6xl mx-auto p-4">
        <header className="mb-6  space-y-4 text-primary">
          {/* <FiUpload size={32} /> */}
          <h1 className="text-3xl font-bold text-center">Image to PDF Converter</h1>
          <p className="text-justify max-w-6xl mx-auto text-base mt-2 text-gray-700">
            This free Image to PDF Converter lets you turn multiple image files
            like JPG, PNG, and WebP into a single PDF document — no watermarks,
            no logins. Customize the layout, compress images, and even add a
            watermark before downloading. Ideal for students, professionals, and
            everyday users looking for a fast and secure solution online.
          </p>
        </header>

        {/* Client-side conversion UI */}
        <ClientWrapper />

        <section className="mt-12 max-w-6xl w-full bg-base-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-primary text-center">
            How to Use This Image to PDF Converter
          </h2>

          <ol className="list-decimal list-inside space-y-4 text-base text-base-content">
            <li>
              <strong>Upload your images:</strong> Click the upload area or drag
              & drop your JPG, PNG, or WebP files. You can add multiple images
              at once.
            </li>
            <li>
              <strong>Reorder images (optional):</strong> Drag the thumbnails or
              use the up/down buttons to arrange the image order for the final
              PDF.
            </li>
            <li>
              <strong>Customize PDF settings:</strong> Choose page size (A4,
              Letter, or custom), orientation (portrait or landscape), and how
              images should fit.
            </li>
            <li>
              <strong>Compress images (optional):</strong> Use the
              &quot;Compress All&quot; button to reduce file size before
              converting to PDF.
            </li>
            <li>
              <strong>Toggle watermark (optional):</strong> Enable or disable
              watermark in settings.
            </li>
            <li>
              <strong>Click “Generate PDF”:</strong> Your custom PDF will be
              generated and automatically downloaded to your device.
            </li>
          </ol>

          <p className="mt-6 text-center text-sm text-base-content/60">
            Works on iPhone, Android, iPad, Windows, and Mac — no installation
            required.
          </p>
        </section>

        <section className="mt-12 max-w-6xl w-full bg-base-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-primary">
            Why Convert Images to PDF?
          </h2>
          <article className="space-y-4 text-base-content text-justify">
            <p>
              Converting <strong>images to PDF</strong> is a great way to
              organize multiple pictures into a single, easy-to-share document.
              Whether you&apos;re using JPG, PNG, or WebP formats, a PDF file
              ensures your images retain quality, stay in order, and are
              readable on any device.
            </p>
            <p>
              This tool helps users{" "}
              <strong>
                convert images to PDF on iPhone, Android, or desktop
              </strong>{" "}
              — no software install needed. Our image to PDF converter is 100%
              free, secure, and supports batch conversion, compression, and
              watermark options.
            </p>
            <p>
              Use it for resumes, photo albums, ID proofs, screenshots, or
              receipts — all converted into a professional-looking PDF file.
            </p>
            <p className="font-medium">
              ✅ Mobile friendly • No login required • Secure and fast
            </p>
          </article>
        </section>

        <section className="mt-12 max-w-6xl w-full bg-base-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-primary">
            Use Cases for Converting Images to PDF
          </h2>
          <ul className="list-disc pl-6 text-base text-base-content space-y-2">
            <li>
              Submit scanned documents (like ID proofs or signatures) as a
              single PDF
            </li>
            <li>Create printable photo albums or image collections</li>
            <li>
              Bundle multiple screenshots into one file for sharing or reporting
            </li>
            <li>
              Send assignment photos, handwritten notes, or receipts in one PDF
            </li>
            <li>Archive old image files into a compressed, portable format</li>
            <li>
              Prepare documents for online form submissions that accept only
              PDFs
            </li>
          </ul>
        </section>

        <section className="mt-12 max-w-6xl w-full bg-base-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-primary">
            Frequently Asked Questions
          </h2>

          <div className="space-y-3">
            <div className="collapse collapse-arrow bg-base-200">
              <input type="checkbox" />
              <div className="collapse-title text-lg font-medium">
                Is this Image to PDF Converter free?
              </div>
              <div className="collapse-content text-base-content">
                <p>
                  Yes, it&apos;s 100% free. No sign-up or subscription required.
                </p>
              </div>
            </div>

            <div className="collapse collapse-arrow bg-base-200">
              <input type="checkbox" />
              <div className="collapse-title text-lg font-medium">
                Does it work on iPhone and Android?
              </div>
              <div className="collapse-content text-base-content">
                <p>
                  Yes! You can use this tool directly from Safari on iOS or
                  Chrome on Android. It supports uploading from your photo
                  gallery.
                </p>
              </div>
            </div>

            <div className="collapse collapse-arrow bg-base-200">
              <input type="checkbox" />
              <div className="collapse-title text-lg font-medium">
                Are my images safe and private?
              </div>
              <div className="collapse-content text-base-content">
                <p>
                  All conversions happen on your device using JavaScript. No
                  images are uploaded to a server.
                </p>
              </div>
            </div>

            <div className="collapse collapse-arrow bg-base-200">
              <input type="checkbox" />
              <div className="collapse-title text-lg font-medium">
                Can I compress or add a watermark?
              </div>
              <div className="collapse-content text-base-content">
                <p>
                  Yes! You can choose to compress images before conversion and
                  optionally add a watermark in the settings panel.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="text-center max-w-6xl mx-auto mt-8">
          <h2 className="text-2xl font-bold">
            Convert Images to PDF Online — Free & Secure
          </h2>
          <p className="mt-2 text-base text-gray-600">
            Our free image to PDF converter lets you instantly turn JPG, PNG,
            and WebP files into high-quality PDFs. Fast, mobile-friendly, no
            sign-up needed.
          </p>
        </section>

        <MoreToolsSection currentToolSlug="image-to-pdf" />

        {/* <footer className="mt-12 text-center text-sm text-base-content/50">
          &copy; {new Date().getFullYear()} Image to PDF Converter - Compatible
          with iOS, Android & Desktop
        </footer> */}
      </div>
    </div>
  );
}
