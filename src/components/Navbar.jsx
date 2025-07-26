import Link from "next/link";
import React from "react";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="border-b py-4 font-semibold sticky top-0 bg-white text-black z-50">
      <ul className="flex justify-between items-center w-11/12 mx-auto">
        <div className="flex items-center gap-5">
          <li className="relative group">
            <Link href="/">SHOP</Link>
            {/* Mega menu */}
            <div className="absolute top-full left-0 w-[700px] bg-white shadow-xl hidden group-hover:block z-50">
              <div className="grid grid-cols-3 gap-4 p-8">
                <div>
                  <h4 className="font-bold mb-2">Smart Devices</h4>
                  <ul className="space-y-1 text-sm">
                    <li>
                      <Link href="/category/smartphones">Smartphones</Link>
                    </li>
                    <li>
                      <Link href="/category/smartwatches">Smartwatches</Link>
                    </li>
                    <li>
                      <Link href="/category/headphones">Headphones</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Computing</h4>
                  <ul className="space-y-1 text-sm">
                    <li>
                      <Link href="/category/laptops">Laptops</Link>
                    </li>
                    <li>
                      <Link href="/category/tablets">Tablets</Link>
                    </li>
                    <li>
                      <Link href="/category/accessories">Accessories</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Gaming</h4>
                  <ul className="space-y-1 text-sm">
                    <li>
                      <Link href="/category/consoles">Consoles</Link>
                    </li>
                    <li>
                      <Link href="/category/controllers">Controllers</Link>
                    </li>
                    <li>
                      <Link href="/category/gaming-chairs">Gaming Chairs</Link>
                    </li>
                  </ul>
                </div>
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
