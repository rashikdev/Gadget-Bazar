import React from "react";

export default function loading() {
  return (
    <div className="h-[calc(100vh-260px)] w-full flex flex-col items-center justify-center">
      <div className="relative flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-t-transparent border-red-600 rounded-full animate-spin"></div>
        <div className="absolute w-8 h-8 bg-red-600 rounded-full animate-ping"></div>
      </div>
      <p className="mt-6 text-xl font-semibold text-red-800 animate-pulse tracking-wide">
        Product is loading ...
      </p>
    </div>
  );
}
