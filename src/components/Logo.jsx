import Link from "next/link";
import React from "react";

const Logo = () => {
  const text = "Gadget Bazar";
  return (
    <div className="">
      <Link href="/">
        {text.split("").map((char, index) => (
          <span key={index} className="text-3xl ml-2 font-semibold">
            {char}
          </span>
        ))}
      </Link>
    </div>
  );
};

export default Logo;
