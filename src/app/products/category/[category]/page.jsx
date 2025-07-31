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
    </section>
  );
};

export default CategoryPage;
