import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-gray-300 py-12 mt-[120px]">
      <div className="w-11/12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Gadget Bazar</h2>
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
              <a href="/" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="/shop" className="hover:text-white transition">
                Shop
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition">
                Contact
              </a>
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
