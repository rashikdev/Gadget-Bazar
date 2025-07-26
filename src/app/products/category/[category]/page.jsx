import React from "react";
import Image from "next/image";
import CategoryBanner from "@/components/CategoryBanner";

export const generateMetadata = async ({ params }) => {
  const category = (await params).category;
  return {
    title: `Gadget Bazar | ${category}`,
    description: `All products in ${category}`,
  };
};

const CategoryPage = async ({ params }) => {
  const category = (await params).category;
  return (
    <section className="min-h-[calc(100vh-2px]">
      <div className="">
        <CategoryBanner category={category} />
      </div>
      <div className="w-11/12 mx-auto mt-30">
        <h2 className="text-3xl font-bold mb-5 uppercase">
          Products: {category}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border h-[450px] bg-zinc-800"></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryPage;
