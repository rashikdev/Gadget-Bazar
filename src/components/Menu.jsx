"use client";
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  { id: 1, title: "Headphones", link: "/category/headphones" },
  { id: 2, title: "Smart Watches", link: "/category/smartwatches" },
  { id: 3, title: "Earbuds", link: "/category/earbuds" },
  { id: 4, title: "Power Banks", link: "/category/powerbanks" },
  { id: 5, title: "Cameras", link: "/category/cameras" },
  { id: 6, title: "Chargers", link: "/category/chargers" },
  { id: 7, title: "Gaming Accessories", link: "/category/gamings" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen(!open);
  const handleClose = () => setOpen(false);

  return (
    <div className="relative">
      {/* Toggle Button */}
      <button
        onClick={handleToggle}
        className="text-gray-700 z-50 p-2 focus:outline-none"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <FaTimes size={22} /> : <FaBars size={22} />}
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute top-14 right-0 w-64 bg-white shadow-lg rounded-lg z-40">
          <ul className="flex flex-col p-4 space-y-2">
            {/* Home Link */}
            <li>
              <Link
                href="/"
                onClick={handleClose}
                className="block px-4 py-2 text-gray-800 hover:bg-blue-100 rounded transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/my-cart"
                onClick={handleClose}
                className="block px-4 py-2 text-gray-800 hover:bg-blue-100 rounded transition"
              >
                My Cart
              </Link>
            </li>

            {/* All Products with Categories */}
            <li>
              <Link
                href="/products"
                onClick={handleClose}
                className="block px-4 py-2 text-gray-800 font-semibold hover:bg-blue-100 rounded transition"
              >
                All Products
              </Link>
              <ul className="ml-4 mt-2 border-l pl-4 space-y-1">
                {links.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={`/products/${item.link}`}
                      onClick={handleClose}
                      className="block text-sm px-2 py-1 text-gray-600 hover:bg-blue-50 rounded transition"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Menu;
