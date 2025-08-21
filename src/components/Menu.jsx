"use client";
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "motion/react";
import useAuth from "@/hooks/useAuth";
import { signOut } from "next-auth/react";
import toast from "react-hot-toast";

const links = [
  { id: 1, title: "Headphones", link: "/category/headphones" },
  { id: 2, title: "Smart Watches", link: "/category/smartwatches" },
  { id: 3, title: "Earbuds", link: "/category/earbuds" },
  { id: 4, title: "Power Banks", link: "/category/powerbanks" },
  { id: 5, title: "Cameras", link: "/category/cameras" },
  { id: 6, title: "Chargers", link: "/category/chargers" },
  { id: 7, title: "Gaming Accessories", link: "/category/gamings" },
];

const Menu = ({ role }) => {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen(!open);
  const handleClose = () => setOpen(false);

  const hangleLogout = () => {
    signOut();
    handleClose();
    toast.success("Logged out successfully!");
  };

  return (
    <div className="relative">
      {/* Toggle Button */}
      <button
        onClick={handleToggle}
        className="text-red-500 z-50 p-2 focus:outline-none"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <FaTimes size={22} /> : <FaBars size={22} />}
      </button>

      {/* Dropdown Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, x: 90 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute top-14 right-0 w-64 bg-white shadow-lg rounded-lg z-40"
        >
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
              {role === "admin" ? (
                <Link
                  href="/dashboard"
                  onClick={handleClose}
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-100 rounded transition"
                >
                  Dashboard
                </Link>
              ) : (
                <Link
                  href="/my-cart"
                  onClick={handleClose}
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-100 rounded transition"
                >
                  My Cart
                </Link>
              )}
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
              <ul className="ml-4 mt-2 border-l border-red-500 pl-4 space-y-1">
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
            {user ? (
              <motion.li whileTap={{ scale: 0.9 }} className="mt-2 px-4">
                <button
                  onClick={hangleLogout}
                  className="w-full px-2 py-[3px] text-white text-center bg-red-500"
                >
                  Logout
                </button>
              </motion.li>
            ) : (
              <motion.li whileTap={{ scale: 0.9 }} className="mt-2 px-4">
                <Link href="/login" onClick={handleClose}>
                  <button className="w-full px-2 py-[3px] text-white text-center bg-black">
                    Login
                  </button>
                </Link>
              </motion.li>
            )}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Menu;
