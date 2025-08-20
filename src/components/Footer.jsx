"use client";
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  if (pathname.startsWith("/dashboard")) return null;
  
  return (
    <footer className="bg-zinc-950 text-gray-300 py-12 px-4 md:px-0">
      <div className="w-11/12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            <Logo />
          </h2>
          <p className="text-sm text-gray-400">
            Your one-stop shop for the latest and greatest tech gadgets in
            Bangladesh. Fast delivery, genuine products, and amazing deals.
          </p>
          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-lg">
            <a href="#" className="hover:text-blue-500">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-sky-400">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-100">
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-white transition">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>
          <p className="text-sm">
            📍 Dhaka, Bangladesh <br />
            📞 +8801XXXXXXXXX <br />
            📧 support@gadgetbazar.com
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-zinc-800 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Gadget Bazar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
