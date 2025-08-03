"use client";
import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { TbMinus } from "react-icons/tb";
import { useRouter } from "next/navigation";
import { AddProductInLocal } from "@/lib/utils";
import toast from "react-hot-toast";

const QuantitySection = ({ product }) => {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(product?.price || 0);
  console.log(product);

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
    setPrice((prev) => prev + product?.price);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
      setPrice((prev) => prev - product?.price);
    }
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1) {
      setQuantity(value);
      setPrice(value * product?.price);
    }
  };

  const handleAddToCart = () => {
    const cartItem = {
      id: product._id,
      name: product.name,
      image: product.image,
      price: product.price,
      features: product.features,
      quantity,
    };
    AddProductInLocal(cartItem);
    toast.success("Product added to cart");
    router.push("/my-cart");
  };

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <div>
          <label htmlFor="quantity" className="mb-1 font-semibold block">
            Quantity
          </label>
          <div className="w-[190px] p-3 flex justify-between border">
            <button onClick={handleDecrement} className="cursor-pointer">
              <TbMinus
                size={24}
                className="rounded-full hover:bg-zinc-300 transition duration-300"
              />
            </button>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={handleChange}
              min={1}
              className="w-12 outline-none text-center text-xl font-bold text-[crimson] no-spinner"
            />
            <button onClick={handleIncrement} className="cursor-pointer">
              <GoPlus
                size={24}
                className="rounded-full hover:bg-zinc-300 transition duration-300"
              />
            </button>
          </div>
        </div>

        <div className="text-center">
          <p className="mb-1 font-semibold">Total Price</p>
          <p className="text-xl font-bold text-green-600">${price}</p>
        </div>
      </div>

      <div className="flex justify-between">
        <button className="bg-black text-white py-2 w-1/2 hover:opacity-90 transition">
          Buy Now
        </button>
        <button
          onClick={handleAddToCart}
          className="bg-gray-200 text-black py-2 px-4 hover:bg-gray-300 transition cursor-pointer"
        >
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default QuantitySection;
