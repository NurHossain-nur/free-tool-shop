// File: app/privacy-policy/page.js

import Head from "next/head";

export const metadata = {
  title: "Privacy Policy | FreeToolShop",
  description: "Learn how FreeToolShop.com collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>

      <main className="max-w-6xl mx-auto px-4 py-12 text-neutral">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4">Effective Date: July 12, 2025</p>

        <p className="mb-4">
          At <strong>FreeToolShop.com</strong>, your privacy is important to us. This Privacy Policy explains what personal information we collect, how we use it, and how we protect it.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Non-personal data such as browser type, OS, and usage data.</li>
          <li>Your email or name if you contact us.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. Use of Information</h2>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Improve tools and user experience.</li>
          <li>Monitor traffic (via Google Analytics).</li>
          <li>Respond to inquiries.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Cookies</h2>
        <p className="mb-4">We may use cookies to enhance your experience and analyze traffic. You can disable cookies in your browser settings.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Third-Party Services</h2>
        <p className="mb-4">
          We use services like Google Analytics and Google AdSense. These services may collect data under their own privacy policies.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. Your Rights</h2>
        <p className="mb-4">
          You can request to access, correct, or delete your data by contacting us at{" "}
          <a href="mailto:nurhossain6434@gmail.com" className="text-info underline">nurhossain6434@gmail.com</a>.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">6. Policy Updates</h2>
        <p className="mb-4">We may update this policy at any time. Please revisit this page for the latest version.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Contact</h2>
        <p>
          📧 Email: <a href="mailto:nurhossain6434@gmail.com" className="text-info underline">nurhossain6434@gmail.com</a><br />
          🌐 Website: <a href="https://www.freetoolshop.com" className="text-info underline">FreeToolShop.com</a>
        </p>
      </main>
    </>
  );
}
