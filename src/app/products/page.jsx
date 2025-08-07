import ProductCard from "@/components/ProductCard";
import axiosInstance from "@/lib/axiosInstance";
import { getAllProducts } from "@/lib/products";
import React from "react";

export const metadata = {
  title: "Gadget Bazar | Products",
  description: "All products page",
};

const page = async () => {
  const products = await getAllProducts();
  console.log(products);
  const headphones = products.filter(
    (product) => product.category === "headphones"
  );

  const earbuds = products.filter((product) => product.category === "earbuds");

  const smartwatches = products.filter(
    (product) => product.category === "smartwatches"
  );

  const gridClass = "grid grid-cols-1 lg:grid-cols-4 gap-8";

  return (
    <div className="min-h-[calc(100vh-522px)] bg-zinc-950 text-white">
      <div className="w-11/12 mx-auto py-2">
        <h2 className="md:text-3xl text-xl font-bold py-10 text-center uppercase">
          Choose from a wide range of gadgets
        </h2>
        <div className="space-y-10 my-10">
          <h2 className="text-2xl font-bold">Smart Watches</h2>
          <div className={gridClass}>
            {smartwatches.map((product) => (
              <ProductCard product={product} key={product._id}></ProductCard>
            ))}
          </div>
          <h2 className="text-2xl font-bold pt-10 ">Earbuds</h2>
          <div className={gridClass}>
            {earbuds.map((product) => (
              <ProductCard product={product} key={product._id}></ProductCard>
            ))}
          </div>
          <h2 className="text-2xl font-bold pt-10 ">Headphones</h2>
          <div className={gridClass}>
            {headphones.map((product) => (
              <ProductCard product={product} key={product._id}></ProductCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
