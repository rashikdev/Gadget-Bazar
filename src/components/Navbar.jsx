import Link from "next/link";
import React from "react";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="border-b py-4 px-8 font-semibold sticky top-0 bg-white">
      <ul className="flex justify-between items-center">
        <div className="flex items-center gap-5">
          <li>
            <Link href="/">SHOP</Link>
          </li>
          <li>
            <Link href="/explore">EXPLORE</Link>
          </li>
        </div>
        <li>
          <Logo></Logo>
        </li>
        <li><Link href="/cart">MY CART</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
