import Link from "next/link";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content mt-20 border-t">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Branding */}
        <div>
          <h2 className="text-xl font-bold text-primary mb-2">FreeToolShop</h2>
          <p className="text-sm">
            All-in-one free online tools to simplify your digital tasks.
            Convert, compress, and calculate with ease — all in your browser.
          </p>
          <div className="flex mt-4 gap-3 text-xl text-primary">
            <a
              href="https://nurhossain.netlify.app/"
              target="_blank"
              rel="noreferrer"
              title="My Portfolio"
            >
              <HiOutlineGlobeAlt />
            </a>
            <a href="https://facebook.com/Mr.NuR07" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>
            {/* <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a> */}
            <a href="https://github.com/NurHossain-nur" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/nur-hossain-nur/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Tool Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Tools</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/jpg-to-png" className="hover:underline">
                JPG to PNG
              </Link>
            </li>
            <li>
              <Link href="/image-compressor" className="hover:underline">
                Image Compressor
              </Link>
            </li>
            <li>
              <Link href="/pdf-merge" className="hover:underline">
                PDF Merger
              </Link>
            </li>
            <li>
              <Link href="/word-counter" className="hover:underline">
                Word Counter
              </Link>
            </li>
          </ul>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Navigate</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:underline">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/terms-and-conditions" className="hover:underline">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/disclaimer" className="hover:underline">
                Disclaimer
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-base-300 text-center py-4 text-sm">
        © {new Date().getFullYear()} FreeToolShop.com — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
