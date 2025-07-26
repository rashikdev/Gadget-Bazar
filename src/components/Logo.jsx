import Link from "next/link";
import React from "react";
import { SiOverleaf } from "react-icons/si";
import { PiCpuFill } from "react-icons/pi";

const Logo = () => {
  const text = "Gadget Bazar";
  return (
    <div className="">
      <Link href="/" className="flex items-center">
        <SiOverleaf className="text-2xl text-[crimson]" />
        {text.split("").map((char, index) => (
          <span key={index} className="text-2xl ml-2 font-semibold">
            {char}
          </span>
        ))}
      </Link>
    </div>
  );
};

export default Logo;
