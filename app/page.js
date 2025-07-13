// app/page.tsx (or app/page.jsx)
import Link from "next/link";
import { tools } from "@/config/tools";
import Head from "next/head";

export const metadata = {
  title: "FreeToolShop | All-in-One Free Online Tools",
  description:
    "FreeToolShop offers fast, secure, and free online tools including file converters, image compressors, calculators, and more to simplify your everyday digital tasks.",

    
  keywords:
    "free online tools, file converter, image compressor, JPG to PNG, PNG to JPG, online calculator, compress PDF, compress image, FreeToolShop",
  authors: [{ name: "FreeToolShop" }],
  openGraph: {
    title: "FreeToolShop - All-in-One Free Online Tools",
    description:
      "Convert, compress, calculate and solve tasks instantly with our 100% free and easy-to-use tools.",
    url: "https://www.freetoolshop.com",
    type: "website",
    images: [
      {
        url: "https://www.freetoolshop.com/preview.png",
        width: 1200,
        height: 630,
        alt: "FreeToolShop preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FreeToolShop - All-in-One Free Online Tools",
    description:
      "FreeToolShop brings you the ultimate toolbox for converting, compressing, calculating, and more—all free, no signup required.",
    images: ["https://www.freetoolshop.com/preview.png"],
  },
  metadataBase: new URL("https://www.freetoolshop.com"),
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-base-100 text-neutral font-sans">

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          // JSON-LD inside component render
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "FreeToolShop",
              url: "https://www.freetoolshop.com",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://www.freetoolshop.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-primary mb-4">
            All-in-One Online Tools ⚙️
          </h1>
          <p className="text-lg text-neutral max-w-2xl mx-auto leading-relaxed">
            FreeToolShop brings you a collection of essential online utilities —
            from image converters to document compressors, everyday calculators,
            and more. 100% Free, Safe, and Instant.
          </p>
        </section>

        {/* Tool Categories */}
        {[
          { title: "🔄 Convert", category: "convert" },
          { title: "📦 Compress", category: "compress" },
          { title: "🧰 Tools", category: "utility" },
        ].map(({ title, category }) => (
          <section className="mb-14" key={category}>
            <h2 className="text-2xl font-semibold mb-6 text-neutral">{title}</h2>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {tools
                .filter((t) => t.category === category)
                .map((tool) => (
                  <Link
                    href={`/${tool.slug}`}
                    key={tool.slug}
                    aria-label={`Open ${tool.title}`}
                  >
                    <div className="bg-base-100 border border-gray-200 rounded-xl p-5 hover:shadow-md hover:border-[--color-primary] transition-all cursor-pointer group h-full">
                      <div className="text-4xl mb-2 group-hover:scale-105 transition">
                        {tool.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-primary mb-1">
                        {tool.title}
                      </h3>
                      <p className="text-sm text-gray-600">{tool.description}</p>
                    </div>
                  </Link>
                ))}
            </div>
          </section>
        ))}

        {/* Blog Section */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold mb-8 text-center text-neutral">
            📚 Latest Blog - Boost Your Productivity!
          </h2>
          <div className="bg--base-100 rounded-xl border border-gray-200 shadow-sm p-6 md:p-8 max-w-6xl mx-auto">
            <h3 className="text-xl font-semibold mb-3 text-primary">
              🛠️ Top 10 Free Online Tools You Should Be Using in 2025
            </h3>
            <p className="text-neutral mb-5 leading-relaxed">
              In today&apos;s fast-paced digital life, online tools are essential.
              From converting images to compressing files, these tools help you save
              time and boost productivity.
            </p>
            <ul className="list-disc pl-6 text-neutral space-y-2 mb-4">
              {[
                ["jpg-to-png", "JPG to PNG Converter"],
                ["image-compressor", "Image Compressor"],
                ["pdf-to-word", "PDF to Word"],
                ["text-case", "Text Case Tool"],
                ["word-counter", "Word Counter"],
                ["base64-converter", "Base64 Converter"],
                ["html-minifier", "HTML Minifier"],
                ["qr-generator", "QR Generator"],
                ["png-to-jpg", "PNG to JPG"],
                ["password-generator", "Password Generator"],
              ].map(([slug, name]) => (
                <li key={slug}>
                  <strong>
                    <Link href={`/${slug}`} className="text-info hover:underline">
                      {name}:
                    </Link>
                  </strong>{" "}
                  {getToolDescription(name)}
                </li>
              ))}
            </ul>
            <p className="text--neutral">
              🚀 Bookmark{" "}
              <Link href="/" className="text-info underline">
                FreeToolShop.com
              </Link>{" "}
              to access all these tools — free, fast, and secure. No signup required.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

// Helper function for descriptions
function getToolDescription(name) {
  const map = {
    "JPG to PNG Converter": "High-quality image conversion with transparency.",
    "Image Compressor": "Reduce file size without losing quality.",
    "PDF to Word": "Convert PDFs into editable Word documents.",
    "Text Case Tool": "Easily switch between uppercase, lowercase, and more.",
    "Word Counter": "Get instant word/character count with reading time.",
    "Base64 Converter": "Encode/decode images for web development.",
    "HTML Minifier": "Clean or compress your HTML code.",
    "QR Generator": "Create custom QR codes easily.",
    "PNG to JPG": "Quick image format conversion with quality control.",
    "Password Generator": "Create strong and random passwords instantly.",
  };
  return map[name] || "";
}
