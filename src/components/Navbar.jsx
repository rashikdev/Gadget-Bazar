"use client";
import Link from "next/link";
import React, { use } from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import useAuth from "@/hooks/useAuth";

const Navbar = () => {
  const { user } = useAuth();
  console.log(user);
  const pathname = usePathname();
  const links = [
    { id: 1, title: "Headphones", link: "/category/headphones" },
    { id: 2, title: "Smart Watches", link: "/category/smartwatches" },
    { id: 3, title: "Earbuds", link: "/category/earbuds" },
    { id: 4, title: "Power Banks", link: "/category/powerbanks" },
    { id: 5, title: "Cameras", link: "/category/cameras" },
    { id: 6, title: "Chargers", link: "/category/chargers" },
    { id: 7, title: "Gaming Accessories", link: "/category/gamings" },
  ];
  const otherLinks = [
    { id: 1, title: "About", link: "/about" },
    { id: 2, title: "Contact", link: "/contact" },
    { id: 3, title: "FAQ", link: "/faq" },
  ];

  return (
    <div className="py-4 font-semibold sticky top-0 bg-white text-black z-50">
      <ul className="flex justify-between items-center w-11/12 mx-auto relative">
        <div className="flex items-center gap-5">
          <li className="group cursor-default">
            SHOP
            {/* Mega menu */}
            <div className="absolute top-full left-0 w-[700px] bg-white shadow-xl hidden group-hover:block z-50">
              <div className="p-12">
                <h4 className="font-bold mb-4 uppercase">Product Categories</h4>
                <ul className="space-y-3 text-sm grid grid-cols-3 w-full">
                  <li
                    className={`${
                      pathname.endsWith("/products")
                        ? "text-red-600 font-semibold underline underline-offset-4 transition"
                        : "hover:text-red-600 transition"
                    }`}
                  >
                    <Link href="/products">All Products</Link>
                  </li>
                  {links.map((link) => (
                    <li
                      key={link.id}
                      className={`${
                        pathname.endsWith(link.link)
                          ? "text-red-600 font-semibold underline underline-offset-4 transition"
                          : "hover:text-red-600 transition"
                      }`}
                    >
                      <Link href={`/products/${link.link}`}>{link.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
          <li className="group cursor-default">
            EXPLORE
            <div className="absolute top-full left-0 w-[700px] bg-white shadow-xl hidden group-hover:block z-50">
              <div className="p-12">
                <h4 className="font-bold mb-4 uppercase">Other Links</h4>
                <ul className="space-y-3 text-sm grid grid-cols-3 w-full">
                  {otherLinks.map((link) => (
                    <li
                      key={link.id}
                      className={`${
                        pathname.endsWith(link.link)
                          ? "text-red-600 font-semibold underline underline-offset-4 transition"
                          : "hover:text-red-600 transition"
                      }`}
                    >
                      <Link href={`${link.link}`}>{link.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        </div>
        <li>
          <Logo></Logo>
        </li>
        {user ? (
          <li
            className={`${
              pathname.includes("/my-cart")
                ? "text-red-600 font-semibold underline underline-offset-4 transition"
                : "hover:text-red-600 transition"
            }`}
          >
            <Link href="/my-cart">MY CART</Link>
          </li>
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
    </div>
  );
};

export default Navbar;
