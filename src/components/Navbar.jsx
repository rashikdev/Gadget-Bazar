"use client";
import Link from "next/link";
import React, { use } from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";

const Navbar = () => {
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
  return (
    <div className="py-4 font-semibold sticky top-0 bg-white text-black z-50">
      <ul className="flex justify-between items-center w-11/12 mx-auto">
        <div className="flex items-center gap-5">
          <li className="relative group">
            <Link href="/products">SHOP</Link>
            {/* Mega menu */}
            <div className="absolute top-full left-0 w-[700px] bg-white shadow-xl hidden group-hover:block z-50">
              <div className="p-12">
                <h4 className="font-bold mb-4">Product Categories</h4>
                <ul className="space-y-3 text-sm grid grid-cols-3 w-full">
                  {links.map((link) => (
                    <li
                      key={link.id}
                      className={`${
                        pathname.includes(link.link)
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

          <li>
            <Link href="/explore">EXPLORE</Link>
          </li>
        </div>
        <li>
          <Logo></Logo>
        </li>
        <li>
          <Link href="/cart">MY CART</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
