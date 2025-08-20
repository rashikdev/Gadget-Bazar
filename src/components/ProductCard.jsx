"use client";
import useAuth from "@/hooks/useAuth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { motion } from "motion/react";
const ProductCard = ({ product }) => {
  const router = useRouter();
  const { image, name, price } = product;
  // console.log(product);
  const { user } = useAuth();

  const handleNavigate = () => {
    // if (!user) {
    //   toast.loading("Redirecting to login page...");
    //   toast.error("You need to login first");
    //   setTimeout(() => {
    //     toast.dismiss();
    //     router.push("/login");
    //   }, 2000);
    //   return;
    // }
    router.push(`/products/${product._id}`);
  };

  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.7, type: "tween" }}
    onClick={handleNavigate}>
      <div className="h-[450px] bg-zinc-800 text-white flex flex-col justify-between overflow-hidden group cursor-pointer rounded-2xl">
        <div className="h-[120vh] overflow-hidden">
          <Image
            src={image}
            alt={name}
            width={200}
            height={300}
            className="object- h-full w-full group-hover:scale-110 duration-500 bg-white"
          />
        </div>
        <div className="h-full flex flex-col justify-end p-4 gap-4 translate-y-13 group-hover:translate-y-0 duration-500">
          <h3 className="text-[1.2rem]">{name}</h3>
          <p>Price ${price}</p>
          <button className="bg-black text-white py-1 px-6 w-fit uppercase">
            click for details
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
