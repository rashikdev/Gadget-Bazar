import React from "react";
import Image from "next/image";
import CategoryBanner from "@/components/CategoryBanner";

const CategoryPage = ({ params }) => {
  const category = params.category;
  return (
    <section className="min-h-[calc(100vh-2px]">
      <div className="">
        <CategoryBanner category={category} />
      </div>
      <h1>Category: {category}</h1>
      <div>Category Products</div>
    </section>
  );
};

export default CategoryPage;
