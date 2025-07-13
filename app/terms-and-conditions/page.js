// File: app/terms-and-conditions/page.js

import Head from "next/head";

export const metadata = {
  title: "Terms & Conditions | FreeToolShop",
  description: "Read the terms and conditions for using FreeToolShop.com and its services.",
};

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>

      <main className="max-w-6xl mx-auto px-4 py-12 text-neutral">
        <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
        <p className="mb-4">Effective Date: July 12, 2025</p>

        <p className="mb-4">
          By accessing or using <strong>FreeToolShop.com</strong>, you agree to the following terms and conditions. Please read them carefully.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Use of Website</h2>
        <p className="mb-4">
          FreeToolShop.com offers free tools for public use. You agree to use our services only for lawful purposes.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. User Responsibilities</h2>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>No misuse or disruption of our tools.</li>
          <li>No illegal activities using our site.</li>
          <li>No unauthorized access attempts.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. No Warranty</h2>
        <p className="mb-4">
          All content and tools are provided “as is”. We do not guarantee perfect accuracy or uptime. Use them at your own risk.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Intellectual Property</h2>
        <p className="mb-4">
          All logos, code, and content belong to FreeToolShop.com unless stated otherwise. You may not reuse content without permission.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. External Links</h2>
        <p className="mb-4">
          We may include links to third-party websites. We are not responsible for their content or privacy practices.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">6. Changes to Terms</h2>
        <p className="mb-4">
          We may change these terms at any time. Continued use of the site means you accept any updates.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Contact</h2>
        <p>
          📧 Email: <a href="mailto:nurhossain6434@gmail.com" className="text-info underline">nurhossain6434@gmail.com</a><br />
          🌐 Website: <a href="https://www.freetoolshop.com" className="text-info underline">FreeToolShop.com</a>
        </p>
      </main>
    </>
  );
}
