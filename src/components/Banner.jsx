import React from "react";
import BannerSlider from "./BannerSlider";
import Link from "next/link";
const Banner = () => {
  return (
    <div className="bg-[url('/assets/banner.jpg')] bg-cover bg-center h-[65vh] flex flex-col-reverse md:flex-row items-center justify-around text-white">
      {/* Left side: Text */}
      <div className="max-w-lg">
        <h1 className="text-4xl font-bold mb-4 leading-tight">
          Discover the Latest <br /> Gadgets at Gadget Bazar
        </h1>
        <p className="text-lg mb-6">
          Shop top tech gear, accessories, and devices with the best deals
          online.
        </p>
        <button>
          <Link href="/products" className="bg-black border border-zinc-600 text-white px-6 py-3">Shop Now</Link>
        </button>
      </div>

      {/* Right side: Image */}
      <div className="w-1/3">
        <BannerSlider></BannerSlider>
      </div>
    </div>
  );
};

export default Banner;
