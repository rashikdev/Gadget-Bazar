"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const ProductCard = ({ product }) => {
  const router = useRouter();
  const { image, name, price } = product;
  // console.log(product);
  const isLoggedIn = true;

  const handleNavigate = () => {
    if (!isLoggedIn) {
      return alert("You need to login first");
    }
    router.push(`/products/${product.id}`);
  };

  return (
    <div onClick={handleNavigate}>
      <div className="h-[450px] bg-zinc-800 text-white flex flex-col justify-between overflow-hidden group cursor-pointer rounded-2xl">
        <div className="h-[200%] overflow-hidden">
          <Image
            src={image}
            alt={name}
            width={200}
            height={200}
            className="object-cover h-full w-full group-hover:scale-110 duration-500"
          />
        </div>
        <div className="h-full flex flex-col justify-end p-4 gap-4 translate-y-13 group-hover:translate-y-0 duration-500">
          <h3 className="text-xl">{name}</h3>
          <p>Price ${price}</p>
          <button className="bg-black text-white py-1 px-6 w-fit uppercase">
            {isLoggedIn ? "click for details" : "Sign In to Buy"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
