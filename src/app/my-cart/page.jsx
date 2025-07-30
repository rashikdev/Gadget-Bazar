"use client";
import { GetProductInLocal, RemoveProductInLocal } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { use, useEffect } from "react";
import toast from "react-hot-toast";

const MyCartPage = () => {
  const [cart, setCart] = React.useState([]);

  useEffect(() => {
    const data = GetProductInLocal("cart");
    setCart(data);
  }, []);

  console.log(cart);

  const handleRemove = (id) => {
    RemoveProductInLocal(id);
    const updatedCart = cart.filter((item) => item.id !== id);
    toast.success("Product removed from cart");
    setCart(updatedCart);
  };

  return (
    <div className="min-h-[calc(100vh-350px)] w-11/12 mx-auto flex flex-col items-center justify-center font-semibold gap-5 my-8">
      <h2 className="text-3xl">My Cart</h2>
      {cart.length > 0 ? (
        <div className="w-[60%]">
          <button className="uppercase w-full text-sm py-3 px-4 bg-black text-white mb-5">
            <Link href="/checkout">check out</Link>
          </button>
          <div className=" grid grid-cols-1">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between gap-10 *:p-3 shadow-md"
              >
                <div className="flex justify-center flex-1">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={200}
                    height={200}
                  />
                </div>
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl">{item.name}</h3>
                  <p className="text-xl">Features</p>
                  <div>
                    {item.features.map((feature) => (
                      <p key={feature} className="text-sm">
                        {feature}
                      </p>
                    ))}
                  </div>
                  <p className="text-sm">Quantity: {item.quantity}</p>
                </div>
                <div className="flex flex-col justify-between items-center">
                  <p className="text-2xl">${item.price}</p>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="uppercase text-sm py-1 px-6 bg-black text-white cursor-pointer"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between py-5 text-2xl px-2">
            <p>Total Price: </p>
            <p>${cart.reduce((acc, item) => acc + item.price, 0)}</p>
          </div>
        </div>
      ) : (
        <>
          <p>Your Cart Is Empty</p>
          <button className="uppercase text-sm py-2 px-4 bg-black text-white">
            <Link href="/products">back to shop</Link>
          </button>
        </>
      )}
    </div>
  );
};

export default MyCartPage;
