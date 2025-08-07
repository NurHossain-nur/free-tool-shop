// app/tools/png-to-webp/page.tsx
import Script from "next/script";
import ClientWrapper from "./ClientWrapper";
import MoreToolsSection from "@/components/MoreToolsSection";

export const metadata = {
  title: "PNG to WebP Converter - Free & Private Online Tool",
  description:
    "Convert PNG to WebP online instantly — no uploads, no ads. Secure, private, and optimized for SEO and web performance. Works on all devices.",
  keywords:
    "png to webp, convert png to webp, free png to webp converter, webp image converter, png compression tool, webp for seo, online png optimizer, image converter browser, webp converter no upload",
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

        <Script
          id="software-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "PNG to WebP Converter",
              operatingSystem: "All",
              applicationCategory: "MultimediaApplication",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              browserRequirements: "JavaScript enabled",
              description:
                "Convert PNG to WebP images in your browser with this free and secure tool. No uploads, fast conversion, and no sign-up needed.",
            }),
          }}
        />
        <h1 className="text-3xl font-bold text-primary text-center mb-6">
          PNG → WebP Converter
        </h1>
        <p className="text-base text-gray-700 my-4 max-w-6xl mx-auto text-justify">
          Convert PNG to WebP instantly and securely using this free online
          tool. No uploads, no watermarks, no ads — everything runs in your
          browser for maximum speed and privacy. WebP images are up to 34%
          smaller than PNGs, helping you boost website performance, improve SEO,
          and save bandwidth. Perfect for web developers, eCommerce stores,
          bloggers, and anyone optimizing images for the modern web.
        </p>

        <ClientWrapper />

        <section className="mt-12 bg-base-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-primary">
            When Should You Convert PNG to WebP?
          </h2>
          <p className="text-gray-700 mb-4">
            WebP is ideal when you want smaller file sizes without compromising
            image quality. Below are the most common use cases for converting
            PNG to WebP:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              🌐 <strong>Web Development:</strong> Load faster websites with
              smaller image assets
            </li>
            <li>
              🛒 <strong>E-commerce:</strong> Improve product page speed and SEO
              scores
            </li>
            <li>
              📧 <strong>Email Campaigns:</strong> Reduce attachment size and
              avoid bounce issues
            </li>
            <li>
              📝 <strong>Blogging & WordPress:</strong> Use WebP to boost site
              performance
            </li>
            <li>
              📱 <strong>Mobile Apps:</strong> Save bandwidth and increase load
              times
            </li>
          </ul>
        </section>

        <section className="mt-12 bg-base-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-primary">
            PNG vs WebP – Which Image Format Is Better?
          </h2>
          <p className="text-gray-700 mb-4">
            Choosing between PNG and WebP depends on your use case. Here&apos;s
            a quick comparison:
          </p>
          <div className="overflow-x-auto">
            <table className="table-auto w-full border border-base-300 text-sm">
              <thead className="bg-base-200 text-secondary">
                <tr>
                  <th className="p-2 text-left">Feature</th>
                  <th className="p-2 text-left">PNG</th>
                  <th className="p-2 text-left">WebP</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr>
                  <td className="p-2">Transparency Support</td>
                  <td className="p-2">✅</td>
                  <td className="p-2">✅</td>
                </tr>
                <tr>
                  <td className="p-2">File Size</td>
                  <td className="p-2">Larger</td>
                  <td className="p-2">Smaller (up to 34%)</td>
                </tr>
                <tr>
                  <td className="p-2">Browser Support</td>
                  <td className="p-2">✅</td>
                  <td className="p-2">✅</td>
                </tr>
                <tr>
                  <td className="p-2">Ideal Use</td>
                  <td className="p-2">Lossless images</td>
                  <td className="p-2">Web optimization</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-12 bg-base-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-primary">
            SEO Benefits of Using WebP Images
          </h2>
          <p className="text-gray-700 mb-4">
            WebP isn&apos;t just a smaller format—it can actually help your
            website rank better on search engines:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              📈 <strong>Improves Core Web Vitals:</strong> Faster image loading
              means better performance scores
            </li>
            <li>
              🔍 <strong>Boosts Google Rankings:</strong> Fast pages get
              prioritized in search results
            </li>
            <li>
              ⚙️ <strong>Reduces Bounce Rate:</strong> Smaller files = quicker
              content delivery
            </li>
            <li>
              📱 <strong>Enhances Mobile Experience:</strong> Saves data and
              speeds up mobile browsing
            </li>
          </ul>
        </section>

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
                <h3 className="text-xl text-secondary font-semibold mb-2">
                  🔍 Why Use WebP?
                </h3>
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
                <h3 className="text-xl text-secondary font-semibold mb-2">
                  🛠️ How It Works
                </h3>
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
              <h3 className="text-xl text-secondary font-semibold mb-2">
                💡 Pro Tips
              </h3>
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
              <h3 className="text-xl text-secondary font-semibold mb-2">
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

          <div className="mt-16 text-text">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-2xl text-secondary font-bold mb-4">
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
