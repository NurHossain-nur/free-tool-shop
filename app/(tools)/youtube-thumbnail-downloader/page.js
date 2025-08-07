// app/tools/youtube-thumbnail-downloader/page.js

import Script from "next/script";
import ClientWrapper from "./ClientWrapper";
import MoreToolsSection from "@/components/MoreToolsSection";

export const metadata = {
  title: "YouTube Thumbnail Downloader - Free PNG Thumbnail Grabber",
  description:
    "Download high-quality YouTube thumbnails in PNG format. Paste a YouTube URL to grab HD, SD, and other resolution thumbnails instantly. No watermark, no login.",
  keywords:
    "YouTube thumbnail downloader, download YouTube thumbnails, YouTube thumbnail to PNG, HD thumbnail grabber, get YouTube preview image, maxresdefault, sddefault, hqdefault, mqdefault, YouTube image extractor",
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  alternates: {
    canonical: "https://www.freetoolshop.com/youtube-thumbnail-downloader",
  },
  openGraph: {
    title: "YouTube Thumbnail Downloader - Free PNG Thumbnail Grabber",
    description:
      "Paste a YouTube video URL and download thumbnails in PNG format — HD, SD, and more. Free, instant, and watermark-free.",
    url: "https://www.freetoolshop.com/youtube-thumbnail-downloader",
    images: [
      {
        url: "https://www.freetoolshop.com/images/youtube-thumbnail-preview.png",
        width: 1200,
        height: 630,
        alt: "YouTube Thumbnail Downloader Tool Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "YouTube Thumbnail Downloader - Free PNG Thumbnail Grabber",
    description:
      "Download YouTube video thumbnails in PNG format instantly. Supports HD, SD, and more. No watermark or login required.",
    images: [
      "https://www.freetoolshop.com/images/youtube-thumbnail-preview.png",
    ],
  },
};

export default function YouTubeThumbnailDownloaderPage() {
  return (
    <div id="top" className="w-full bg-base-100 text-neutral">
      <Script
        id="youtube-thumbnail-software-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "YouTube Thumbnail Downloader",
            operatingSystem: "All",
            applicationCategory: "MultimediaApplication",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            featureList: [
              "HD YouTube thumbnail downloads",
              "PNG format conversion",
              "Works with YouTube short and long URLs",
              "No login or signup required",
              "Client-side conversion for better privacy",
            ],
            url: "https://www.freetoolshop.com/youtube-thumbnail-downloader",
          }),
        }}
      />
      <Script
        id="youtube-thumbnail-faq"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Is this YouTube Thumbnail Downloader free?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, it's completely free to use with no watermarks or hidden fees.",
                },
              },
              {
                "@type": "Question",
                name: "What resolutions are available for thumbnails?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You can download thumbnails in HD (1280x720), SD (640x480), High (480x360), Medium (320x180), and Low (120x90) resolutions.",
                },
              },
              {
                "@type": "Question",
                name: "Will the thumbnails be in PNG format?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, the tool converts JPEG thumbnails to PNG using in-browser conversion before download.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need to sign in to use the tool?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No, you don't need to sign up or log in. Just paste a YouTube URL and download instantly.",
                },
              },
            ],
          }),
        }}
      />

      <div className="max-w-6xl mx-auto p-4 text-neutral">
        <h1 className="text-3xl font-bold text-primary text-center mb-6">
          YouTube Thumbnail Downloader (PNG Format)
        </h1>
        <h2 className="text-center text-lg text-text font-medium mb-6">
          Download YouTube Video Thumbnails in HD and PNG Format
        </h2>

        <ClientWrapper />

        {/* Use Cases Section */}
        <section className="mt-12 text-text">
          <h2 className="text-xl font-semibold mb-3">
            Who Can Use This Thumbnail Downloader?
          </h2>
          <p className="mb-4">
            This tool is perfect for YouTubers, marketers, graphic designers,
            educators, developers, and anyone who wants to quickly grab
            high-quality thumbnails from YouTube videos. Whether you want to
            reuse them in designs, analyze visual trends, or simply archive
            them, this tool offers a fast, no-login solution.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Content Creators:</strong> Save your own thumbnails for
              portfolios or edit them for social media posts.
            </li>
            <li>
              <strong>Marketers:</strong> Analyze top-performing video
              thumbnails to improve your own strategy.
            </li>
            <li>
              <strong>Designers:</strong> Extract inspiration or layout ideas
              from trending YouTube visuals.
            </li>
            <li>
              <strong>Teachers & Presenters:</strong> Use thumbnails in slides,
              lectures, or learning materials.
            </li>
          </ul>
        </section>

        {/* SEO-optimized Tool Description */}
        <section className="mt-12 text-text">
          <h2 className="text-xl font-semibold mb-3">
            Fast, Free, and Secure Thumbnail Downloads
          </h2>
          <p>
            Unlike other tools that require signups or show watermarks, our
            YouTube Thumbnail Downloader works 100% in your browser. It
            instantly fetches thumbnails of all available sizes — from HD
            (maxresdefault.jpg) to low resolution — and converts them into PNG
            format without quality loss. Best of all, your input is never stored
            or tracked.
          </p>
        </section>

        {/* How it works */}
        <section className="mt-10 text-center text-text">
          <h2 className="text-lg text-text font-semibold">
            How to Download YouTube Thumbnails in PNG?
          </h2>
          <p className="mt-2 max-w-2xl mx-auto">
            Want to grab a YouTube video’s thumbnail? Just follow these simple
            steps:
          </p>
          <ol className="list-decimal list-inside mt-4 text-left max-w-2xl mx-auto text-base">
            <li>
              Copy and paste the full YouTube video URL into the input field.
            </li>
            <li>Click “Fetch Thumbnails” to see all available resolutions.</li>
            <li>Click “Download PNG” for the size you want.</li>
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
                Is this YouTube Thumbnail Downloader free?
              </h3>
              <p>
                Yes, it&apos;s completely free to use with no watermarks or
                hidden fees.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                What resolutions are available for thumbnails?
              </h3>
              <p>
                You can download thumbnails in HD (1280x720), SD (640x480), High
                (480x360), Medium (320x180), and Low (120x90) resolutions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Will the thumbnails be in PNG format?
              </h3>
              <p>
                Yes, the tool automatically converts JPEG thumbnails to PNG
                before downloading.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Do I need to sign in to use the tool?
              </h3>
              <p>
                No, you don&apos;t need to sign up or log in. Just paste a
                YouTube URL and download instantly.
              </p>
            </div>
          </div>
        </section>

        {/* Why use this tool */}
        <section className="mt-10">
          <h2 className="text-xl text-secondary font-semibold mb-2">
            Why Use Our YouTube Thumbnail Downloader?
          </h2>
          <ul className="list-disc pl-6 text-text">
            <li>Free and unlimited downloads</li>
            <li>Download in PNG format for design or web use</li>
            <li>No watermark, no signup required</li>
            <li>Mobile-friendly and lightweight</li>
            <li>Supports all major YouTube thumbnail sizes</li>
          </ul>
        </section>

        {/* Benefits Section */}
        <section className="mt-12 text-text">
          <h2 className="text-xl font-semibold mb-3">
            Who Should Use This Tool?
          </h2>
          <p className="mb-3">
            Whether you&apos;re a YouTuber, designer, developer, or content
            marketer, downloading YouTube thumbnails can help you:
          </p>
          <ul className="list-disc pl-6">
            <li>
              Create eye-catching blog images or custom social media posts
            </li>
            <li>Use thumbnails as design references for your own videos</li>
            <li>
              Archive thumbnails for personal collections or video analytics
            </li>
            <li>
              Extract thumbnails for use in presentations or educational content
            </li>
          </ul>
        </section>

        {/* Trusted section */}
        <section className="mt-10 bg-base-100 p-4 rounded-lg text-center">
          <h2 className="text-xl text-secondary font-semibold mb-2">
            Trusted by Creators & Marketers
          </h2>
          <p className="text-text">
            Our YouTube tools are used by content creators, educators, social
            media managers, and developers worldwide.
          </p>
        </section>

        <MoreToolsSection currentToolSlug="youtube-thumbnail-downloader" />
      </div>
    </div>
  );
}
