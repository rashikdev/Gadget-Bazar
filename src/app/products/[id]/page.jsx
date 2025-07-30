"use client";
import { GetSingleProduct } from "@/lib/GetProduct";
import { AddProductInLocal } from "@/lib/utils";
import Image from "next/image";
import { use, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { TbMinus } from "react-icons/tb";

const ProductDetailsPage = ({ params }) => {
  const { id } = use(params);
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const [product, setProduct] = useState({});

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
      setPrice(value * 200);
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await GetSingleProduct(id);
      setProduct(product);
      setPrice(product?.price);
    };
    fetchProduct();
  }, [id]);

  const { name, features, brand, rating, price: productPrice } = product;

  console.log(product);

  const handleAddToCart = () => {
    const cartItem = {
      id: product._id,
      name: product.name,
      image: product.image,
      price: product.price,
      quantity,
    };
    AddProductInLocal(cartItem);
    alert("Product added to cart");
  };

  return (
    <div className="md:w-10/12 w-11/12 mx-auto mt-10 min-h-[calc(100vh-300px)]">
      <h2 className="text-3xl font-bold">Product ID: {id}</h2>
      <div className="md:h-[500px] h-auto flex md:flex-row flex-col justify-between gap-10">
        <div className="flex-1 flex justify-center items-center">
          <div className="w-[420px]">
            {product?.image ? (
              <Image
                src={product.image}
                alt={product.name || "Product image"}
                width={500}
                height={500}
                priority
              />
            ) : (
              <div className="w-[500px] h-[500px] bg-gray-100 flex items-center justify-center">
                <p className="text-gray-500">Loading image...</p>
              </div>
            )}
          </div>
        </div>

        {/* Product Details */}
        <div className="flex justify-center items-center flex-1">
          <div className="md:w-[70%] gap-8 md:gap-0 w-full h-full py-5 md:py-0 md:pt-10 px-4 flex flex-col justify-between font-bold">
            <h2 className="text-[2rem] font-bold mb-4">{name}</h2>
            <p className="">
              {(features || []).map((feature) => (
                <li key={feature} className="">
                  {feature}
                </li>
              ))}
            </p>
            <p>Brand: {brand}</p>
            <p className="flex items-center">
              Rating: {rating}
              <span className="text-[crimson] ml-1">
                <FaStar></FaStar>
              </span>
            </p>
            <p>Product Price: ${productPrice}</p>
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
              <button
                onClick={handleAddToCart}
                className="bg-gray-200 py-2 px-4 cursor-pointer"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
