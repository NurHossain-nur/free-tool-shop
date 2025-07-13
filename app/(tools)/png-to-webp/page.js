// app/tools/png-to-webp/page.tsx
import Script from "next/script";
import ClientWrapper from "./ClientWrapper";
import MoreToolsSection from "@/components/MoreToolsSection";

export const metadata = {
  title: "PNG to WebP Converter - Free & Private Online Tool",
  description:
    "Convert PNG images to WebP format in seconds. No upload, no ads. Secure, fast, and free.",
  keywords: "png to webp, png converter, webp online, image compression",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.freetoolshop.com/png-to-webp",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  openGraph: {
    title: "PNG → WebP Converter — Free & Secure Tool",
    description:
      "Effortlessly convert PNG to WebP in your browser. No uploads, no ads, 100% private.",
    url: "https://www.freetoolshop.com/png-to-webp",
    images: [
      {
        url: "https://www.freetoolshop.com/images/png-to-webp-preview.png",
        width: 1200,
        height: 630,
        alt: "PNG to WebP Converter Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PNG to WebP Converter — Fast & Private Online Tool",
    description:
      "Convert PNG to WebP format securely and quickly in your browser.",
    images: ["https://www.freetoolshop.com/images/png-to-webp-preview.png"],
  },
};

export default function PngToWebpPage() {
  return (
    <div id="top" className="w-full bg-base-100 text-neutral">
      <div className="max-w-6xl mx-auto p-4  text-neutral">
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
                  name: "Can I convert multiple PNG files at once?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes! Upload multiple PNG files and download all converted WebP images or a ZIP archive.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I compress PNGs while converting to WebP?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, you can reduce quality or strip metadata to minimize output size.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is my image data safe?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolutely. All conversions happen in your browser—no uploads, no storage.",
                  },
                },
              ],
            }),
          }}
        />
        <h1 className="text-3xl font-bold text-primary text-center mb-6">
          PNG → WebP Converter
        </h1>
        <ClientWrapper />

        <section className="mt-16 border-t border-base-300 pt-10">
          <div className="max-w-6xl mx-auto text-left px-4 md:px-0">
            <h2 className="text-3xl font-bold mb-4 text-primary">
              Convert PNG to WebP Online — Free, Fast & Secure
            </h2>

            <p className="text-base text-gray-700 mb-6">
              Looking for a quick and privacy-friendly way to convert PNG images
              to WebP format? Our tool is completely free and runs directly in
              your browser—no image ever leaves your device.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold mb-2">🔍 Why Use WebP?</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>
                    <strong>Smaller Files:</strong> Up to 34% smaller than PNG
                  </li>
                  <li>
                    <strong>Faster Websites:</strong> Improve page speed and SEO
                  </li>
                  <li>
                    <strong>Full Browser Support:</strong> Chrome, Safari,
                    Firefox & more
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">🛠️ How It Works</h3>
                <ol className="list-decimal list-inside text-gray-700 space-y-1">
                  <li>Drop your PNG files into the converter above</li>
                  <li>Adjust quality, size, and compression settings</li>
                  <li>
                    Click <strong>Convert All</strong> and download your WebP
                    images
                  </li>
                </ol>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-2">💡 Pro Tips</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>
                  Set quality to <strong>80%</strong> for optimal balance
                </li>
                <li>
                  Use <strong>&quot;Strip metadata&quot;</strong> to further
                  reduce size
                </li>
                <li>
                  Download all converted images as a <strong>ZIP file</strong>
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-2">
                ✅ Why Our Converter is Better
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>🔒 100% privacy - everything stays in your browser</li>
                <li>🚫 No ads, no upload limits, no logins</li>
                <li>⚡ Ultra-fast WebAssembly conversion engine</li>
              </ul>
            </div>

            <div className="mt-10 text-center">
              <a href="#top" className="btn btn-primary btn-lg">
                🚀 Try the Converter Now
              </a>
            </div>
          </div>

          <div className="mt-16">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-2xl font-bold mb-4">
                🧠 Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">What is WebP?</h3>
                  <p>
                    WebP is a modern image format that provides superior
                    compression and quality compared to PNG or JPEG. It&apos;s
                    supported by all major browsers.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">Is my image data safe?</h3>
                  <p>
                    Yes! All conversions happen directly in your browser. Your
                    images are never uploaded or stored anywhere.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">
                    Can I convert multiple PNGs at once?
                  </h3>
                  <p>
                    Absolutely! You can upload multiple files and convert them
                    in bulk. You can also download them all as a ZIP.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm text-gray-600">
            <div>🔒 100% Privacy</div>
            <div>🚀 Fast In-Browser</div>
            <div>📁 No Upload Limits</div>
            <div>🆓 Free Forever</div>
          </div>
        </section>

        <MoreToolsSection currentToolSlug="png-to-webp" />
      </div>
    </div>
  );
}
