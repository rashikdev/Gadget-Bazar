"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GetProductInLocal } from "@/lib/utils";
import toast from "react-hot-toast";

const CheckoutPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartData = GetProductInLocal("cart");
    if (cartData.length === 0) {
      toast.error("Your cart is empty!");
    }
    setCart(cartData);
  }, []);

  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handlePayment = () => {
    toast.loading("Processing Payment...");
    setTimeout(() => {
      toast.dismiss();
      toast.success("Payment Successful!");
    }, 2000);
  };

  return (
    <div className="w-11/12 mx-auto my-10 flex flex-col lg:flex-row gap-10">
      {/* Billing Info */}
      <div className="w-full lg:w-2/3 bg-white shadow-lg p-6 rounded-md">
        <h2 className="text-2xl font-bold mb-6">Billing Information</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <input
            type="text"
            placeholder="Full Name"
            className="px-4 py-2 rounded bg-black/10 outline-green-500"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="bg-black/10 outline-green-500 px-4 py-2 rounded"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="bg-black/10 outline-green-500 px-4 py-2 rounded"
          />
          <input
            type="text"
            placeholder="City"
            className="bg-black/10 outline-green-500 px-4 py-2 rounded"
          />
          <input
            type="text"
            placeholder="Postcode/Zip"
            className="bg-black/10 outline-green-500 px-4 py-2 rounded"
          />
          <input
            type="text"
            placeholder="Country"
            className="bg-black/10 outline-green-500 px-4 py-2 rounded"
          />
          <textarea
            rows="4"
            placeholder="Address"
            className="bg-black/10 outline-green-500 px-4 py-2 rounded md:col-span-2"
          ></textarea>
          <button
            type="submit"
            className="bg-black text-white w-full col-span-2 p-2"
          >
            Save Billing Info For Next
          </button>
        </form>
      </div>

      {/* Order Summary */}
      <div className="w-full lg:w-1/3 bg-zinc-100 shadow-lg p-6 rounded-md h-auto overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
        <ul className="space-y-4">
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between items-center">
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
              </div>
              <span className="font-bold">${item.price * item.quantity}</span>
            </li>
          ))}
        </ul>
        <hr className="my-4" />
        <div className="flex justify-between text-lg font-semibold">
          <span>Total:</span>
          <span className="text-green-500">${totalAmount}</span>
        </div>

        <button
          onClick={handlePayment}
          className="w-full mt-6 bg-black text-white py-2 rounded hover:bg-zinc-600 transition duration-200 cursor-pointer"
        >
          Pay Now
        </button>
        <Link
          href="/"
          className="w-fit mx-auto block text-center text-sm text-blue-500 mt-4 hover:underline"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default CheckoutPage;
