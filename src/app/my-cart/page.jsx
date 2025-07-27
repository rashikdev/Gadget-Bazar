import Link from "next/link";
import React from "react";

const MyCartPage = () => {
  return (
    <div className="min-h-[calc(100vh-350px)] flex flex-col items-center justify-center font-semibold text-4xl gap-5">
      <h2>My Cart</h2>
      <p>Your Cart Is Empty</p>
      <button className="uppercase text-sm py-2 px-4 border bg-black text-white">
        <Link href="/products">back to shop</Link>
      </button>
    </div>
  );
};

export default MyCartPage;
