// app/tools/jpg-to-png/page.tsx

import MoreToolsSection from "@/components/MoreToolsSection";
import ClientWrapper from "./ClientWrapper";
import Script from "next/script";

export const metadata = {
  title: "JPG to PNG Converter - Free Online Tool",
  description:
    "Convert JPG to PNG online with transparency, compression, and no watermark. Ideal for web, social media & design.",
  keywords:
    "JPG to PNG converter, online JPG to PNG, convert JPG image, remove background, transparent PNG, image compression, high quality converter",
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  alternates: {
    canonical: "https://www.freetoolshop.com/jpg-to-png",
  },
  openGraph: {
    title: "JPG to PNG Converter - Free & Fast Online Tool",
    description:
      "Convert JPG to PNG online with transparent background, image compression, and instant download. No watermarks or signup required.",
    url: "https://www.freetoolshop.com/jpg-to-png",
    images: [
      {
        url: "https://www.freetoolshop.com/images/jpg-to-png-preview.png",
        width: 1200,
        height: 630,
        alt: "JPG to PNG Online Tool Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JPG to PNG Converter - Free & Fast Online Tool",
    description:
      "Convert JPG to PNG online with transparency, compression and download options. No watermark, fast & easy.",
    images: ["https://www.freetoolshop.com/images/jpg-to-png-preview.png"],
  },
};

export default function JpgToPngPage() {
  return (
    <div className="bg-base-100 text-neutral">
       {/* ✅ Structured Data (FAQ Schema) */}
      <Script
        id="jpg-to-png-faq"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Is this JPG to PNG converter free?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, it's completely free to use with no watermarks or hidden charges.",
                },
              },
              {
                "@type": "Question",
                name: "Will the PNG file have a transparent background?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, if you enable the transparency option or remove the background, the PNG will support transparency.",
                },
              },
              {
                "@type": "Question",
                name: "Does this tool work on mobile devices?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, our converter works seamlessly on smartphones, tablets, and desktops.",
                },
              },
              {
                "@type": "Question",
                name: "Is my image uploaded to a server?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No, all processing happens in your browser. Your image stays secure on your device.",
                },
              },
            ],
          }),
        }}
      />

      <main className="max-w-6xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-center text-primary">
          JPG to PNG Converter
        </h1>

        {/* 🧠 Client-side conversion UI */}
        <ClientWrapper />

        {/* How-to Instructions */}
        <section className="mt-10 text-center text-neutral">
          <h2 className="text-lg font-semibold">
            How to Convert JPG to PNG?
          </h2>
          <p className="mt-2 max-w-2xl mx-auto">
            JPG (JPEG) is a lossy image format, while PNG supports lossless
            compression and transparency. To convert a JPG to PNG:
          </p>
          <ol className="list-decimal list-inside mt-4 text-left max-w-2xl mx-auto text-base">
            <li>Upload your JPG image using the file input or drag-and-drop area.</li>
            <li>Adjust the width, height, compression, and quality settings as desired.</li>
            <li>Toggle transparency if needed.</li>
            <li>Click “Convert to PNG” to process the image.</li>
            <li>Download the converted PNG image by clicking the “Download” button.</li>
          </ol>
        </section>

        {/* FAQ Section */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold mb-4">
            Frequently Asked Questions (FAQ)
          </h2>
          <div className="space-y-4 text-neutral">
            <div>
              <h3 className="font-semibold">Is this JPG to PNG converter free?</h3>
              <p>Yes, it&apos;s completely free to use with no watermarks or hidden charges.</p>
            </div>
            <div>
              <h3 className="font-semibold">Will the PNG file have a transparent background?</h3>
              <p>Yes, if you enable the transparency option or remove the background, the PNG will support transparency.</p>
            </div>
            <div>
              <h3 className="font-semibold">Does this tool work on mobile devices?</h3>
              <p>Yes, our converter works seamlessly on smartphones, tablets, and desktops.</p>
            </div>
            <div>
              <h3 className="font-semibold">Is my image uploaded to a server?</h3>
              <p>No, all processing happens in your browser. Your image stays secure on your device.</p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold mb-2">
            Why Choose Our JPG to PNG Converter?
          </h2>
          <ul className="list-disc pl-6 text-neutral">
            <li>No watermarks, unlimited usage</li>
            <li>Supports transparent PNG background</li>
            <li>Compress image while converting</li>
            <li>Preview image before downloading</li>
            <li>Fast conversion and secure processing in your browser</li>
          </ul>
        </section>

        {/* Supported Formats */}
        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Supported Formats</h2>
          <table className="table w-full text-left bg-base-100">
            <thead>
              <tr>
                <th>Input</th>
                <th>Output</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>JPG (.jpg, .jpeg)</td>
                <td>PNG (.png)</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Trusted Section */}
        <section className="mt-10 bg-base-100 p-4 rounded-lg text-center">
          <h2 className="text-xl font-semibold mb-2">Trusted by Thousands</h2>
          <p className="text-neutral">
            Our tools are used by students, marketers, designers, and developers
            worldwide.
          </p>
        </section>
        <MoreToolsSection currentToolSlug="jpg-to-png" />
      </main>
    </div>
  );
}
