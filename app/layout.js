import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarShell from "@/components/NavbarShell";
import Footer from "@/components/Footer";

// ✅ Added this for Google Analytics
import Script from "next/script"; // ✅ Highlighted: new import

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "FreeToolShop | All-in-One Free Online Tools",
  description: "Convert, compress, calculate, and solve your daily tasks instantly with 100% free and secure online tools from FreeToolShop.com.", // ✅ SEO description,
  icons: {
    icon: "/favicon.PNG", // or .png
    // apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="icon" href="/app/favicon.ico" /> */}
        {/* ✅ Google Analytics GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-52H96DGGD7"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-52H96DGGD7');
          `}
        </Script>
      </head>


      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-800`}
      >
        <NavbarShell></NavbarShell>
        
        {children}

        <Footer></Footer>
      </body>
    </html>
  );
}
