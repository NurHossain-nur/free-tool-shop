// app/watermark-editor/page.tsx
import Script from "next/script";
import MoreToolsSection from "@/components/MoreToolsSection";
import ClientWrapper from "./ClientWWrapper";
// import ClientWrapper from "./ClientWrapper";

export const metadata = {
  title: "Watermark Editor - Free Online Tool to Add Text & Logo",
  description:
    "Add custom text or logo watermarks to images online for free. Upload, customize font, color, size, opacity, and position — all in your browser. No signup required.",
  keywords:
    "watermark editor, add watermark to image, online watermark tool, text watermark, logo watermark, free watermark maker, secure watermark images",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.freetoolshop.com/watermark-editor",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  openGraph: {
    title: "Watermark Editor - Free Online Tool to Add Text & Logo",
    description:
      "Upload your image and add custom text or logo watermarks instantly. Adjust size, color, opacity, rotation, and position — works securely in your browser.",
    url: "https://www.freetoolshop.com/watermark-editor",
    images: [
      {
        url: "https://www.freetoolshop.com/images/watermark-editor-preview.png",
        width: 1200,
        height: 630,
        alt: "Watermark Editor Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Watermark Editor - Free Online Tool",
    description:
      "Easily add text or logo watermarks to your images. Free, secure, no signup, works on all devices.",
    images: [
      "https://www.freetoolshop.com/images/watermark-editor-preview.png",
    ],
  },
};

export default function WatermarkEditorPage() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Inject JSON-LD Structured Data */}
      <Script
        id="watermark-editor-software-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Watermark Editor",
            operatingSystem: "All",
            applicationCategory: "UtilityApplication",
            browserRequirements: "Requires modern browser",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            featureList: [
              "Add text watermark to images",
              "Upload and overlay custom logo watermark",
              "Customize font, size, opacity, color, and rotation",
              "Drag-and-drop watermark position",
              "Works directly in-browser — no installation required",
              "Private and secure — no file uploads",
            ],
            url: "https://www.freetoolshop.com/watermark-editor",
            description:
              "Free online Watermark Editor to add text or logo to images. Customize font, opacity, size, rotation, and position. All processing happens in your browser, no uploads.",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "952",
            },
            applicationSubCategory: "ImageEditingApplication",
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
                name: "Is this Watermark Editor free?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, it's completely free with no hidden charges or subscriptions.",
                },
              },
              {
                "@type": "Question",
                name: "Can I use my own logo as a watermark?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes! You can upload any PNG/JPG logo and place it anywhere on your image.",
                },
              },
              {
                "@type": "Question",
                name: "Are my images safe?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutely. All watermarking happens in your browser using JavaScript. Your files never leave your device.",
                },
              },
              {
                "@type": "Question",
                name: "What can I customize?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You can change font, size, opacity, color, rotation, and position of the watermark text or logo.",
                },
              },
            ],
          }),
        }}
      />

      <div className="max-w-6xl mx-auto p-4">
        <header className="mb-6 space-y-4 text-primary">
          <h1 className="text-3xl font-bold text-center">Watermark Editor</h1>
          <p className="text-justify max-w-6xl mx-auto text-base mt-2 text-gray-700">
            Protect your images with our free Watermark Editor. Add text or logo
            watermarks, customize their appearance, and position them anywhere
            on your photo. All edits happen in your browser, ensuring 100%
            privacy and security.
          </p>
        </header>

        {/* Client-side watermark UI */}
        <ClientWrapper />

        <section className="mt-12 max-w-6xl w-full bg-base-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-primary text-center">
            How to Add a Watermark to Your Image
          </h2>

          <ol className="list-decimal list-inside space-y-4 text-base text-base-content">
            <li>
              <strong>Upload your image:</strong> Choose a JPG, PNG, or WebP
              file from your device.
            </li>
            <li>
              <strong>Add text or logo:</strong> Enter your text watermark or
              upload a logo file.
            </li>
            <li>
              <strong>Customize appearance:</strong> Adjust font, size, color,
              opacity, and rotation.
            </li>
            <li>
              <strong>Drag to position:</strong> Place your watermark anywhere
              on the image.
            </li>
            <li>
              <strong>Preview in real-time:</strong> See changes instantly
              before applying.
            </li>
            <li>
              <strong>Download:</strong> Save the watermarked image securely to
              your device.
            </li>
          </ol>

          <p className="mt-6 text-center text-sm text-base-content/60">
            Works on iPhone, Android, iPad, Windows, and Mac — no installation
            needed.
          </p>
        </section>

        <section className="mt-12 max-w-6xl w-full bg-base-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-primary">
            Why Add Watermarks to Your Images?
          </h2>
          <article className="space-y-4 text-base-content text-justify">
            <p>
              Adding a <strong>watermark to your images</strong> helps protect
              your creative work from unauthorized use. Whether it&apos;s photos,
              designs, or documents, a watermark ensures your ownership is
              visible.
            </p>
            <p>
              Our online Watermark Editor lets you{" "}
              <strong>
                add custom text or logos to images instantly
              </strong>{" "}
              — free, secure, and mobile-friendly. No sign-up, no software
              installation.
            </p>
            <p>
              Use it for branding, protecting online photos, adding copyright
              notices, or creating professional visuals for social media.
            </p>
            <p className="font-medium">
              ✅ Mobile friendly • Free • No login required • Secure and fast
            </p>
          </article>
        </section>

        <section className="mt-12 max-w-6xl w-full bg-base-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-primary">
            Use Cases for Watermarking Images
          </h2>
          <ul className="list-disc pl-6 text-base text-base-content space-y-2">
            <li>Protect digital photos from unauthorized use</li>
            <li>Add copyright text to creative work</li>
            <li>Brand images with your logo for social media</li>
            <li>Securely share documents and scanned IDs</li>
            <li>Promote your business with consistent branding</li>
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
                Is this Watermark Editor free?
              </div>
              <div className="collapse-content text-base-content">
                <p>Yes, it&apos;s 100% free to use with no hidden charges.</p>
              </div>
            </div>

            <div className="collapse collapse-arrow bg-base-200">
              <input type="checkbox" />
              <div className="collapse-title text-lg font-medium">
                Can I upload my own logo?
              </div>
              <div className="collapse-content text-base-content">
                <p>
                  Yes, you can upload PNG or JPG logos and place them anywhere
                  on your image.
                </p>
              </div>
            </div>

            <div className="collapse collapse-arrow bg-base-200">
              <input type="checkbox" />
              <div className="collapse-title text-lg font-medium">
                Are my files private?
              </div>
              <div className="collapse-content text-base-content">
                <p>
                  All watermarking happens in your browser. Your files never
                  leave your device.
                </p>
              </div>
            </div>

            <div className="collapse collapse-arrow bg-base-200">
              <input type="checkbox" />
              <div className="collapse-title text-lg font-medium">
                What can I customize?
              </div>
              <div className="collapse-content text-base-content">
                <p>
                  You can set font, color, size, opacity, and rotation for text
                  watermarks, or resize and drag logos to position them.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="text-center max-w-6xl mx-auto mt-8">
          <h2 className="text-2xl font-bold">
            Add Watermarks to Your Images — Free & Secure
          </h2>
          <p className="mt-2 text-base text-gray-600">
            Use our free online Watermark Editor to add text or logo watermarks
            instantly. Fast, private, and works on all devices.
          </p>
        </section>

        <MoreToolsSection currentToolSlug="watermark-editor" />
      </div>
    </div>
  );
}
