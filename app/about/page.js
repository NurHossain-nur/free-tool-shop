// File: app/about/page.js

import Head from "next/head";

export const metadata = {
  title: "About Us | FreeToolShop",
  description:
    "Learn more about FreeToolShop — your go-to destination for free, fast, and secure online tools built by Nur Hossain.",
};

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>

      <main className="max-w-6xl mx-auto px-4 py-12 text-neutral">
        <h1 className="text-3xl font-bold mb-6">About FreeToolShop</h1>

        <p className="mb-4">
          <strong>FreeToolShop.com</strong> is a growing platform built by{" "}
          <a
            href="https://nurhossain.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-info underline"
          >
            Nur Hossain
          </a>
          , a passionate frontend developer and CSE student at HSTU, Bangladesh.
        </p>

        <p className="mb-4">
          The platform offers 100% free, fast, and secure online tools for
          everyone. From file converters to image compressors and essential
          productivity tools — all are accessible with no login or subscription
          needed.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">💡 Our Mission</h2>
        <p className="mb-4">
          To provide a simple and powerful toolkit that solves everyday digital
          problems — saving time, money, and effort for individuals, students,
          and professionals.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">🚀 What Makes Us Unique?</h2>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>No sign-up required — use instantly</li>
          <li>Mobile-friendly and fast loading tools</li>
          <li>Clean, distraction-free interface</li>
          <li>Built with SEO and user experience in mind</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">🧑‍💻 About the Developer</h2>
        <p className="mb-4">
          I&apos;m <strong>Nur Hossain</strong>, a frontend developer skilled in React,
          Tailwind CSS, and JavaScript. I&apos;m currently learning backend
          development and building powerful tools using modern web technologies.
        </p>
        <p className="mb-4">
          I&apos;m also exploring AI and Java desktop app development as part of my
          academic and personal projects. I&apos;m committed to sharing tools that
          make your online tasks easier and more efficient.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">📫 Contact</h2>
        <p>
          Email:{" "}
          <a
            href="mailto:nurhossain6434@gmail.com"
            className="text-info underline"
          >
            nurhossain6434@gmail.com
          </a>{" "}
          <br />
          Portfolio:{" "}
          <a
            href="https://nurhossain.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-info underline"
          >
            nurhossain.netlify.app
          </a>
        </p>
      </main>
    </>
  );
}
