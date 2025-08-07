// app/tools/video-frame-to-image/page.js

import Script from "next/script";
import ClientWrapper from "./ClientWrapper";
import MoreToolsSection from "@/components/MoreToolsSection";

export const metadata = {
  title: "Video Frame to Image Converter - Extract PNG from Video Online",
  description:
    "Capture high-quality frames from videos and save them as PNG images. Upload a video and extract still frames instantly. No watermark, no signup.",
  keywords:
    "video to image, extract frame from video, video frame to PNG, capture video still, export video frame, convert video to image online, frame grabber",
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  alternates: {
    canonical: "https://www.freetoolshop.com/video-frame-to-image",
  },
  openGraph: {
    title: "Video Frame to Image Converter - Extract PNG from Video Online",
    description:
      "Extract frames from any video and download them as PNG images instantly. Free, fast, and no watermarks.",
    url: "https://www.freetoolshop.com/video-frame-to-image",
    images: [
      {
        url: "https://www.freetoolshop.com/images/video-frame-to-image-preview.png",
        width: 1200,
        height: 630,
        alt: "Video Frame to PNG Tool Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Video Frame to Image Converter - Extract PNG from Video Online",
    description:
      "Capture frames from video files and save them as high-quality PNG images. Free, fast, and works in-browser.",
    images: [
      "https://www.freetoolshop.com/images/video-frame-to-image-preview.png",
    ],
  },
};

export default function VideoFrameToImagePage() {
  return (
    <div id="top" className="w-full bg-base-100 text-neutral">
      <Script
        id="video-frame-to-image-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Video Frame to Image Converter",
            operatingSystem: "All",
            applicationCategory: "MultimediaApplication",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            featureList: [
              "Extract high-quality PNG images from any video file",
              "Works in-browser — no installation required",
              "No watermark, no signup",
              "Fast frame capture from MP4, MOV, WebM, etc.",
              "100% client-side processing — keeps your video private",
            ],
            url: "https://www.freetoolshop.com/video-frame-to-image",
          }),
        }}
      />
      <Script
        id="video-frame-to-image-faq"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Can I extract a single frame from a video?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, this tool lets you capture any frame from your video and download it as a PNG image.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need to install anything?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No, the entire process happens in your browser. Just upload a video and extract frames.",
                },
              },
              {
                "@type": "Question",
                name: "Is the video uploaded to a server?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No, all processing is done locally in your browser. Your video never leaves your device.",
                },
              },
              {
                "@type": "Question",
                name: "Is it free to use?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, it's completely free. No watermarks, no signups required.",
                },
              },
            ],
          }),
        }}
      />

      <div className="max-w-6xl mx-auto p-4 text-neutral">
        <h1 className="text-3xl font-bold text-primary text-center mb-6">
          Video Frame to Image Converter
        </h1>
        <p className="text-justify max-w-6xl mx-auto text-base my-2 text-text">
          The Video Frame to Image Converter is a free online tool that helps
          you capture still frames from videos in high-quality PNG format.
          Whether you need a thumbnail, a snapshot for analysis, or a moment
          from your favorite video, this tool makes it quick and secure with
          zero compression loss. All processing is done in your browser — your
          video stays private and never leaves your device.
        </p>

        <ClientWrapper />

        {/* How it works */}
        <section className="mt-10 text-center text-text">
          <h2 className="text-lg text-text font-semibold">
            How to Extract a Frame from Video as PNG?
          </h2>
          <p className="mt-2 max-w-2xl mx-auto">
            Want to capture a specific moment in a video? Here&apos;s how:
          </p>
          <ol className="list-decimal list-inside mt-4 text-left max-w-2xl mx-auto text-base">
            <li>Upload a video file (MP4, WebM, MOV, etc.).</li>
            <li>Play or scrub to the desired frame.</li>
            <li>Click “Capture Frame” to preview the still image.</li>
            <li>Download the frame as a high-quality PNG image.</li>
          </ol>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="text-xl text-text font-semibold mb-4">
            Frequently Asked Questions (FAQ)
          </h2>
          <div className="space-y-4 text-text">
            <div>
              <h3 className="font-semibold">
                Can I extract a single frame from a video?
              </h3>
              <p>
                Yes, this tool lets you capture any frame from your video and
                download it as a PNG image.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Do I need to install anything?</h3>
              <p>
                No, the entire process happens in your browser. Just upload a
                video and extract frames.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Is the video uploaded to a server?
              </h3>
              <p>
                No, all processing is done locally in your browser. Your video
                never leaves your device.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Is it free to use?</h3>
              <p>
                Yes, it&apos;s completely free. No watermarks, no signups
                required.
              </p>
            </div>
          </div>
        </section>

        {/* Why use it */}
        <section className="mt-10">
          <h2 className="text-xl text-secondary font-semibold mb-2">
            Why Use This Video to Image Converter?
          </h2>
          <ul className="list-disc pl-6 text-text">
            <li>Capture high-quality PNG images from any video</li>
            <li>No server upload — private and secure</li>
            <li>Free to use, no watermark, no limits</li>
            <li>Works in-browser, no software needed</li>
            <li>Supports common video formats like MP4, WebM, MOV</li>
          </ul>
        </section>

        {/* Use Cases */}
        <section className="mt-10">
          <h2 className="text-xl text-secondary font-semibold mb-2">
            Common Use Cases for Extracting Video Frames
          </h2>
          <ul className="list-disc pl-6 text-text">
            <li>Create thumbnails for YouTube, Vimeo, or TikTok videos</li>
            <li>Capture key learning moments in educational videos</li>
            <li>Extract stills for social media posts or blog graphics</li>
            <li>Use frames for documentation, tutorials, or presentations</li>
            <li>Analyze individual video frames for research or testing</li>
          </ul>
        </section>

        {/* Trusted section */}
        <section className="mt-10 bg-base-100 p-4 rounded-lg text-center">
          <h2 className="text-xl text-secondary font-semibold mb-2">
            Trusted by Creators, Editors & Students
          </h2>
          <p className="text-text">
            Our tools are trusted by professionals and hobbyists to extract
            images from videos quickly and securely.
          </p>
        </section>

        <MoreToolsSection currentToolSlug="video-frame-to-image" />
      </div>
    </div>
  );
}
