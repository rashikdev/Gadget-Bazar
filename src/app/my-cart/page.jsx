"use client";
import { GetProductInLocal, RemoveProductInLocal } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { motion } from "motion/react";

const MyCartPage = () => {
  const [cart, setCart] = React.useState([]);

  useEffect(() => {
    const data = GetProductInLocal("cart");
    setCart(data);
  }, []);

  const handleRemove = (id) => {
    RemoveProductInLocal(id);
    const updatedCart = cart.filter((item) => item.id !== id);
    toast.success("Product removed from cart");
    setCart(updatedCart);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-[calc(100vh-350px)] w-11/12 max-w-4xl mx-auto flex flex-col items-center justify-center font-semibold gap-5 my-8">
      <h2 className="text-2xl sm:text-3xl text-center">My Cart</h2>

      {cart.length > 0 ? (
        <div className="w-full">
          <Link href="/my-cart/checkout">
            <button className="uppercase w-full text-sm py-3 px-4 bg-black text-white mb-5 cursor-pointer">
              Check Out
            </button>
          </Link>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {cart.map((item) => (
              <div key={item.id}>
                <motion.div
                  variants={childVariants}
                  className="flex flex-col md:flex-row justify-between gap-4 p-4 rounded-md shadow-md"
                >
                  <div className="flex justify-center md:flex-1">
                    <Link href={`/products/${item.id}`}>
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={200}
                        height={200}
                        className="object-contain max-h-[200px]"
                      />
                    </Link>
                  </div>

                  <div className="flex-1 space-y-3">
                    <h3 className="text-lg sm:text-xl">{item.name}</h3>
                    <p className="text-base font-medium">Features:</p>
                    <ul className="list-disc list-inside text-sm">
                      {item.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                    <p className="text-sm">Quantity: {item.quantity}</p>
                  </div>

                  <div className="flex flex-row md:flex-col items-center justify-between md:justify-between gap-2 md:gap-10 mt-4 md:mt-0">
                    <p className="text-lg font-bold">${item.price}</p>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => handleRemove(item.id)}
                      className="uppercase text-sm py-1 px-4 cursor-pointer bg-black text-white"
                    >
                      Remove
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>

          <div className="flex justify-between items-center py-5 text-lg md:text-2xl px-2 mt-5 border-t">
            <p>Total Price:</p>
            <p>${cart.reduce((acc, item) => acc + item.price, 0)}</p>
          </div>
        </div>
      ) : (
        <div className="text-center space-y-3">
          <p className="text-lg sm:text-xl">Your Cart Is Empty</p>
          <Link
            href="/products"
            className="inline-block uppercase text-sm py-2 px-4 bg-black text-white"
          >
            back to shop
          </Link>
        </div>
      )}
    </div>
  );
};

export default MyCartPage;
