// File: app/contact/page.js

import Head from "next/head";

export const metadata = {
  title: "Contact Us | FreeToolShop",
  description: "Need help or have suggestions? Reach out to the FreeToolShop team directly via email.",
};

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>

      <main className="max-w-6xl mx-auto px-4 py-12 text-neutral">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

        <p className="mb-4">
          Have questions, feedback, or suggestions? We&apos;re happy to hear from you.
          Whether it&apos;s a feature request or a bug report, feel free to reach out!
        </p>

        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm mb-8">
          <h2 className="text-xl font-semibold mb-3">📧 Email Support</h2>
          <p>
            Email us at:{" "}
            <a href="mailto:nurhossain6434@gmail.com" className="text-info underline">
              nurhossain6434@gmail.com
            </a>
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-3">🌍 Social & Portfolio</h2>
          <ul className="space-y-2">
            <li>
              🌐 Website:{" "}
              <a
                href="https://www.freetoolshop.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-info underline"
              >
                freetoolshop.com
              </a>
            </li>
            <li>
              🛠 Portfolio:{" "}
              <a
                href="https://nurhossain.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-info underline"
              >
                nurhossain.netlify.app
              </a>
            </li>
            <li>
              🐱 GitHub:{" "}
              <a
                href="https://github.com/NurHossain-nur"
                target="_blank"
                rel="noopener noreferrer"
                className="text-info underline"
              >
                @NurHossain-nur
              </a>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
