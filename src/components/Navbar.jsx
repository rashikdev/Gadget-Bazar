"use client";
import Link from "next/link";
import React, { use } from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import Menu from "./Menu";
import { signOut } from "next-auth/react";
import toast from "react-hot-toast";
import { motion } from "motion/react";

const Navbar = () => {
  const { user } = useAuth();
  console.log(user);
  const pathname = usePathname();
  const links = [
    { id: 0, title: "All Products", link: "/products" },
    { id: 1, title: "Headphones", link: "/products/category/headphones" },
    { id: 2, title: "Smart Watches", link: "/products/category/smartwatches" },
    { id: 3, title: "Earbuds", link: "/products/category/earbuds" },
    { id: 4, title: "Power Banks", link: "/products/category/powerbanks" },
    { id: 5, title: "Cameras", link: "/products/category/cameras" },
    { id: 6, title: "Chargers", link: "/products/category/chargers" },
    { id: 7, title: "Gaming Accessories", link: "/products/category/gamings" },
  ];
  const otherLinks = [
    { id: 1, title: "About", link: "/about" },
    { id: 2, title: "Contact", link: "/contact" },
    { id: 3, title: "FAQ", link: "/faq" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemsVariants = {
    hidden: { opacity: 0, x: 70 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const handleLogout = () => {
    signOut();
    toast.success("Logged out successfully!");
  };


  if (pathname.startsWith("/dashboard")) return null;

  return (
    <div className="py-4 font-semibold sticky top-0 bg-white text-black z-50">
      <ul className="justify-between items-center w-11/12 mx-auto relative hidden md:flex">
        <div className="flex items-center gap-5">
          <li className="group cursor-pointer">
            SHOP
            {/* Mega menu */}
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute top-full left-0 w-[700px] bg-white shadow-xl hidden group-hover:block z-50"
            >
              <div className="p-12">
                <h4 className="font-bold mb-4 uppercase">Product Categories</h4>
                <motion.ul
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="show"
                  className="space-y-3 text-sm grid grid-cols-3 w-full"
                >
                  {links.map((link) => (
                    <motion.li
                      variants={itemsVariants}
                      key={link.id}
                      className={`${
                        pathname === link.link
                          ? "text-red-600 font-semibold underline underline-offset-4"
                          : "hover:text-red-600"
                      }`}
                    >
                      <Link href={`${link.link}`}>{link.title}</Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          </li>
          <li className="group cursor-pointer">
            EXPLORE
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute top-full left-0 w-[700px] bg-white shadow-xl hidden group-hover:block z-50"
            >
              <div className="p-12">
                <h4 className="font-bold mb-4 uppercase">Other Links</h4>
                <motion.ul
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="show"
                  className="space-y-3 text-sm grid grid-cols-3 w-full"
                >
                  {otherLinks.map((link) => (
                    <motion.li
                      variants={itemsVariants}
                      key={link.id}
                      className={`${
                        pathname.endsWith(link.link)
                          ? "text-red-600 font-semibold underline underline-offset-4"
                          : "hover:text-red-600"
                      }`}
                    >
                      <Link href={`${link.link}`}>{link.title}</Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          </li>
        </div>
        <li>
          <Logo></Logo>
        </li>
        {user ? (
          <div className="flex items-center gap-5">
            <li
              className={`${
                pathname.includes("/my-cart")
                  ? "text-red-600 font-semibold underline underline-offset-4 transition"
                  : "hover:text-red-600 transition"
              }`}
            >
              <Link href="/my-cart">MY CART</Link>
            </li>
            <button
              onClick={handleLogout}
              className="cursor-pointer hover:text-red-600"
            >
              LOGOUT
            </button>
          </div>
        ) : (
          <li
            className={`${
              pathname.endsWith("/login")
                ? "text-red-600 font-semibold underline underline-offset-4 transition"
                : "hover:text-red-600 transition"
            }`}
          >
            <Link href="/login">LOGIN</Link>
          </li>
        )}
      </ul>
      <div className="md:hidden px-2">
        <ul className="flex justify-between items-center">
          <li>
            <Logo></Logo>
          </li>
          <li>
            <Menu></Menu>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
