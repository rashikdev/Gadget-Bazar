import React from "react";

const Banner = () => {
  return (
    <div className="bg-[url('/assets/banner.jpg')] bg-cover bg-center h-[65vh] flex items-center justify-around text-white">
      {/* Left side: Text */}
      <div className="max-w-lg">
        <h1 className="text-4xl font-bold mb-4 leading-tight">
          Discover the Latest <br /> Gadgets at Gadget Bazar
        </h1>
        <p className="text-lg mb-6">
          Shop top tech gear, accessories, and devices with the best deals
          online.
        </p>
        <button className="border px-6 py-2">
          Shop Now
        </button>
      </div>

      {/* Right side: Image */}
      <div className="border">
        <img
          src="/assets/hero-gadget.png"
          alt="Featured Gadget"
          className="w-[300px] h-auto drop-shadow-xl"
        />
      </div>
    </div>
  );
};

export default Banner;
