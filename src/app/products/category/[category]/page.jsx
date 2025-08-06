import React from "react";
import CategoryBanner from "@/components/CategoryBanner";
import ProductCard from "@/components/ProductCard";
import axiosInstance from "@/lib/axiosInstance";

export const generateMetadata = async ({ params }) => {
  const category = (await params).category;
  return {
    title: `Gadget Bazar | ${category}`,
    description: `All products in ${category}`,
  };
};

const CategoryPage = async ({ params }) => {
  const category = (await params).category;
  console.log(category);

  const res = await axiosInstance.get(`/products?category=${category}`);
  const products = res.data;

  return (
    <section className="min-h-[calc(100vh-2px] bg-zinc-950 text-white">
      <div className="">
        <CategoryBanner category={category} />
      </div>
      {products.length > 0 ? (
        <div className="w-11/12 mx-auto py-30">
          <h2 className="text-3xl font-bold mb-10 uppercase">
            Products: {category}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard product={product} key={product._id}></ProductCard>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-[300px] md:h-[400px]">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-800 dark:text-white">
              🚀 Products Coming Soon!
            </h1>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300">
              We're working hard to bring you amazing products. Stay tuned!
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default CategoryPage;
