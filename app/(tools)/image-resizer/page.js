// app/tools/image-resizer/page.tsx

import MoreToolsSection from "@/components/MoreToolsSection";
import ClientWrapper from "./ClientWrapper";
import Script from "next/script";

export const metadata = {
  title: "Image Resizer - Resize JPG, PNG, WebP Online",
  description:
    "Resize images online for free. Easily resize JPG, PNG, or WebP images for web, social media, or email. No installation or sign-up required.",
  keywords:
    "image resizer, resize image online, online image resizer, compress image, resize png, resize jpg, resize webp, image crop, responsive image tool",
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  alternates: {
    canonical: "https://www.freetoolshop.com/image-resizer",
  },
  openGraph: {
    title: "Image Resizer - Free Online Tool to Resize Images",
    description:
      "Resize images like JPG, PNG, or WebP instantly with custom width, height, aspect ratio lock, and compression options. 100% free and secure.",
    url: "https://www.freetoolshop.com/image-resizer",
    images: [
      {
        url: "https://www.freetoolshop.com/images/image-resizer-preview.png",
        width: 1200,
        height: 630,
        alt: "Image Resizer Tool Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Image Resizer - Free Online Tool to Resize Images",
    description:
      "Resize JPG, PNG, or WebP images online with custom dimensions. Supports compression, aspect ratio, and more. No signup needed.",
    images: ["https://www.freetoolshop.com/images/image-resizer-preview.png"],
  },
};

export default function ImageResizerPage() {
  return (
    <div className="bg-base-100 text-neutral">
      {/* ✅ Structured Data */}
      <Script
        id="image-resizer-software-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Image Resizer",
            operatingSystem: "All",
            applicationCategory: "UtilityApplication",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            featureList: [
              "Resize JPG, PNG, and WebP images online",
              "Custom width, height, aspect ratio and compression",
              "Convert between formats (WebP, PNG, JPEG)",
              "Privacy-focused – all processing in browser",
              "Fast and responsive UI with no sign-up required",
            ],
            url: "https://www.freetoolshop.com/image-resizer",
            description:
              "Free online Image Resizer for JPG, PNG, WebP. Resize, compress, convert and reorder images quickly in your browser.",
            applicationSubCategory: "ImageEditingSoftware",
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
                name: "Is this image resizer tool free?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, this tool is 100% free to use with no limits or watermarks.",
                },
              },
              {
                "@type": "Question",
                name: "Can I resize images without losing quality?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. You can control dimensions and compression levels to preserve quality as much as possible.",
                },
              },
              {
                "@type": "Question",
                name: "Does this tool support bulk image resizing?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Currently, it supports one image at a time. Batch resizing will be available soon.",
                },
              },
              {
                "@type": "Question",
                name: "Are images uploaded to a server?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No, all resizing is done locally in your browser. Your images stay private.",
                },
              },
            ],
          }),
        }}
      />

      <main className="max-w-6xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-center text-primary">
          Image Resizer Tool
        </h1>
        <p className="text-justify text-gray-700 max-w-6xl mx-auto my-2">
          Resize images effortlessly with our free browser-based Image Resizer.
          Supports JPG, PNG, and WebP formats—you can adjust dimensions,
          maintain aspect ratio, compress, or convert formats, all without
          installing software or registering.
        </p>

        {/* Client-side logic & UI */}
        <ClientWrapper />

        <section className="mt-10 text-center text-gray-600">
          <h2 className="text-lg font-semibold text-secondary">
            How to Resize an Image
          </h2>
          <p className="mt-2">Resize JPG, PNG, or WebP images with ease:</p>
          <ol className="list-decimal list-inside mt-4 text-left max-w-2xl mx-auto text-base space-y-2 text-gray-700">
            <li>Drag and drop multiple images into the upload area.</li>
            <li>
              Adjust resize settings like width, height, format, and background
              color.
            </li>
            <li>
              Click <strong>&quot;Apply&quot;</strong> and then{" "}
              <strong>&quot;Resize All&quot;</strong>.
            </li>
            <li>Download individual images or all as a ZIP file.</li>
          </ol>
        </section>

        <section className="mt-12 bg-base-100 p-6 rounded-lg shadow-md">
  <h2 className="text-2xl font-bold mb-4 text-primary">
    Resize Images for Web, Email & Social Media
  </h2>
  <p className="text-gray-700">
    Whether you&apos;re preparing images for your blog, eCommerce store, or social media, proper sizing is crucial. Our tool helps you create lightweight, high-quality images for any platform.
  </p>
  <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
    <li>📱 <strong>Instagram:</strong> Resize for posts, stories, and reels.</li>
    <li>🖥️ <strong>Web:</strong> Optimize images to load faster and improve SEO.</li>
    <li>📧 <strong>Email:</strong> Shrink image size to reduce email bloat.</li>
    <li>📘 <strong>Facebook & LinkedIn:</strong> Use correct image dimensions for clean previews.</li>
    <li>🛒 <strong>Shopify, Etsy, eBay:</strong> Resize product images with correct aspect ratio.</li>
  </ul>
</section>

<section className="mt-12 bg-base-100 p-6 rounded-lg shadow-md">
  <h2 className="text-2xl font-bold mb-4 text-primary">Key Features of Our Online Image Resizer</h2>
  <ul className="list-disc list-inside text-gray-700 space-y-2">
    <li>🖼️ Resize JPG, PNG, or WebP with custom width & height</li>
    <li>🧠 Smart aspect ratio lock to prevent distortion</li>
    <li>📦 Compress images while preserving quality</li>
    <li>🔀 Convert image formats (JPG ⇄ PNG ⇄ WebP)</li>
    <li>🔒 100% privacy — no image uploads, runs in your browser</li>
    <li>📱 Works on mobile, desktop, and tablets — no app needed</li>
  </ul>
</section>

        {/* FAQ Section */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold mb-4 text-secondary">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-semibold text-primary">
                Is this image resizer tool free?
              </h3>
              <p>
                Yes, this tool is completely free with no watermarks or limits.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary">
                Will resizing reduce image quality?
              </h3>
              <p>
                Only if you enable compression. By default, the tool maintains
                high image quality.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary">
                Does it support mobile devices?
              </h3>
              <p>Yes, it works on iOS, Android, tablets, and desktops.</p>
            </div>
            <div>
              <h3 className="font-semibold text-primary">Is my data safe?</h3>
              <p>
                Absolutely. The tool runs entirely in your browser. Your images
                are not uploaded to any server.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mt-12 bg-base-100 rounded-lg p-6 shadow-md border border-base-300">
          <h2 className="text-2xl font-bold mb-4 text-primary">
            Why Choose Our Image Resizer?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Free and privacy-friendly — no uploads to server.</li>
            <li>
              Fast image resizing using in-browser technologies (Pica, Web
              Workers).
            </li>
            <li>Preserve aspect ratio or customize dimensions freely.</li>
            <li>Convert between formats (JPEG, PNG, WebP).</li>
            <li>Compress and strip metadata to reduce file size.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">
            Supported Formats
          </h2>
          <div className="overflow-x-auto text-text">
            <table className="table w-full border border-base-300 text-sm">
              <thead>
                <tr className="bg-base-200 text-left text-secondary">
                  <th className="p-2">Format</th>
                  <th className="p-2">Supported</th>
                  <th className="p-2">Conversion</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2">JPEG (.jpg/.jpeg)</td>
                  <td className="p-2 text-success">✅</td>
                  <td className="p-2">Convert to PNG or WebP</td>
                </tr>
                <tr className="bg-base-100">
                  <td className="p-2">PNG (.png)</td>
                  <td className="p-2 text-success">✅</td>
                  <td className="p-2">Convert to JPEG or WebP</td>
                </tr>
                <tr>
                  <td className="p-2">WebP (.webp)</td>
                  <td className="p-2 text-success">✅</td>
                  <td className="p-2">Convert to JPEG or PNG</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">
            What Our Users Say
          </h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
            <div className="bg-base-100 p-4 rounded border border-base-300 shadow-sm">
              <p>
                💬 “This tool saved me hours of batch resizing for my ecommerce
                store. It&apos;s lightning fast and super easy to use.”
              </p>
              <p className="mt-2 font-semibold text-secondary">
                - Arjun P., Shopify Seller
              </p>
            </div>
            <div className="bg-base-100 p-4 rounded border border-base-300 shadow-sm">
              <p>
                💬 “I love that no images leave my computer. It&apos;s secure
                and doesn&apos;t waste time uploading to a server.”
              </p>
              <p className="mt-2 font-semibold text-secondary">
                - Priya S., Photographer
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">
            Trusted & Secure
          </h2>
          {/* Logo row placeholder (optional) */}
        </section>

        {/* FAQ Short Section */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold mb-2 text-secondary">
            More FAQs
          </h2>
          <div className="space-y-4 text-sm text-gray-700">
            <div>
              <strong className="text-primary">
                Q: Is this image resizer free?
              </strong>
              <br />
              A: Yes, it&apos;s completely free with no login required.
            </div>
            <div>
              <strong className="text-primary">
                Q: Do my images get uploaded?
              </strong>
              <br />
              A: No. All resizing happens in your browser for privacy and speed.
            </div>
            <div>
              <strong className="text-primary">
                Q: What’s the maximum file size?
              </strong>
              <br />
              A: Up to 25MB per image is supported.
            </div>
          </div>
        </section>

        <MoreToolsSection currentToolSlug="image-resizer" />
      </main>
    </div>
  );
}
