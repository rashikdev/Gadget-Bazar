"use client";
import React, { use, useState } from "react";
import { GoPlus } from "react-icons/go";
import { TbMinus } from "react-icons/tb";

const ProductDetailsPage = ({ params }) => {
  const { id } = use(params);
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(200);
  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
    setPrice((prev) => prev + 200);
  };
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
      setPrice((prev) => prev - 200);
    }
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1) {
      setQuantity(value);
      setPrice(value * 200);
    }
  };

  return (
    <div className="md:w-10/12 w-11/12 mx-auto mt-10 min-h-[calc(100vh-300px)]">
      <h2 className="text-3xl font-bold">Product ID: {id}</h2>
      <div className="md:h-[500px] h-auto flex md:flex-row flex-col justify-between gap-10">
        <div className="border flex-1">
          <div className="h-[300px]">Product Image</div>
        </div>

        {/* product details and buy button */}
        <div className="flex justify-center items-center flex-1">
          <div className="md:w-[70%] gap-8 md:gap-0 w-full h-full py-5 md:py-0 md:pt-10 px-4 flex flex-col justify-between">
            <h2 className="text-2xl font-bold mb-4">Product Name</h2>
            <p className="">Product Description</p>
            <p>Brand</p>
            <p>Rating</p>
            <p>Product Price</p>
            <div className="flex justify-between items-center">
              <div>
                <label
                  htmlFor="quantity"
                  className="flex flex-col relative mb-2"
                >
                  Quantity
                </label>
                <div className=" w-[180px] p-3 flex justify-between border">
                  <button onClick={handleDecrement} className="cursor-pointer">
                    <TbMinus size={28} />
                  </button>
                  <input
                    type="number"
                    name="quantity"
                    onChange={handleChange}
                    value={quantity}
                    id="quantity"
                    min={1}
                    className=" w-10 outline-none text-center no-spinner text-xl font-bold text-[crimson]"
                  />
                  <button onClick={handleIncrement} className="cursor-pointer">
                    <GoPlus size={28} />
                  </button>
                </div>
              </div>
              <div className="text-center">
                <p className="mb-2">Total Price</p>
                <p className="font-bold text-center p-2 text-xl text-green-500">
                  {price} $
                </p>
              </div>
            </div>
            <div className="flex justify-between">
              <button className="bg-black text-white py-2 w-1/2">
                Buy Now
              </button>
              <button className="bg-gray-200 py-2 px-4">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
