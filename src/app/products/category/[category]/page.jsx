import React from "react";
import Image from "next/image";
import CategoryBanner from "@/components/CategoryBanner";
import ProductCard from "@/components/ProductCard";

export const generateMetadata = async ({ params }) => {
  const category = (await params).category;
  return {
    title: `Gadget Bazar | ${category}`,
    description: `All products in ${category}`,
  };
};

const airbudsData = [
  {
    id: "ab1",
    name: "Apple AirPods Pro (2nd Gen)",
    brand: "Apple",
    price: 249,
    rating: 4.8,
    image: "https://i.ibb.co/rRmj2TJG/Air-Buds2-large.webp",
    description:
      "Active noise cancellation with adaptive transparency and personalized spatial audio.",
    inStock: true,
    category: "airbuds",
  },
  {
    id: "ab2",
    name: "Samsung Galaxy Buds2 Pro",
    brand: "Samsung",
    price: 229,
    rating: 4.6,
    image: "https://i.ibb.co/rRmj2TJG/Air-Buds2-large.webp",
    description:
      "Hi-Fi sound with ANC, 360 audio, and comfortable in-ear design.",
    inStock: true,
    category: "airbuds",
  },
  {
    id: "ab3",
    name: "Sony WF-1000XM5",
    brand: "Sony",
    price: 299,
    rating: 4.9,
    image: "https://i.ibb.co/rRmj2TJG/Air-Buds2-large.webp",
    description:
      "Industry-leading noise cancellation and superior sound quality with LDAC.",
    inStock: true,
    category: "airbuds",
  },
  {
    id: "ab4",
    name: "Nothing Ear (2)",
    brand: "Nothing",
    price: 149,
    rating: 4.5,
    image: "https://i.ibb.co/rRmj2TJG/Air-Buds2-large.webp",
    description:
      "Personalized ANC with a transparent design and crystal-clear sound.",
    inStock: true,
    category: "airbuds",
  },
  {
    id: "ab5",
    name: "JBL Tune Flex",
    brand: "JBL",
    price: 89,
    rating: 4.3,
    image: "https://i.ibb.co/rRmj2TJG/Air-Buds2-large.webp",
    description: "Deep bass sound, voice aware calls, and ergonomic fit.",
    inStock: true,
    category: "airbuds",
  },
  {
    id: "ab6",
    name: "Anker Soundcore Liberty 4 NC",
    brand: "Anker",
    price: 99,
    rating: 4.4,
    image: "https://i.ibb.co/rRmj2TJG/Air-Buds2-large.webp",
    description: "Adaptive noise cancelling earbuds with 10-hour playtime.",
    inStock: true,
    category: "airbuds",
  },
  {
    id: "ab7",
    name: "OnePlus Buds Pro 2",
    brand: "OnePlus",
    price: 179,
    rating: 4.2,
    image: "https://i.ibb.co/rRmj2TJG/Air-Buds2-large.webp",
    description: "Dual drivers, spatial audio, and noise cancellation.",
    inStock: false,
    category: "airbuds",
  },
  {
    id: "ab8",
    name: "Realme Buds Air 5 Pro",
    brand: "Realme",
    price: 69,
    rating: 4.1,
    image: "https://i.ibb.co/rRmj2TJG/Air-Buds2-large.webp",
    description: "Hi-res audio certified with ANC and dual drivers.",
    inStock: true,
    category: "airbuds",
  },
  {
    id: "ab9",
    name: "Google Pixel Buds Pro",
    brand: "Google",
    price: 199,
    rating: 4.4,
    image: "https://i.ibb.co/rRmj2TJG/Air-Buds2-large.webp",
    description:
      "Active noise cancellation with deep integration with Pixel phones.",
    inStock: true,
    category: "airbuds",
  },
  {
    id: "ab10",
    name: "Beats Fit Pro",
    brand: "Beats",
    price: 199,
    rating: 4.3,
    image: "https://i.ibb.co/rRmj2TJG/Air-Buds2-large.webp",
    description:
      "Secure-fit wing tips, ANC, and spatial audio for Apple ecosystem.",
    inStock: true,
    category: "airbuds",
  },
  {
    id: "ab11",
    name: "boAt Airdopes 441",
    brand: "boAt",
    price: 39,
    rating: 4.0,
    image: "https://i.ibb.co/rRmj2TJG/Air-Buds2-large.webp",
    description:
      "Budget-friendly earbuds with IPX7 water resistance and punchy bass.",
    inStock: true,
    category: "airbuds",
  },
  {
    id: "ab12",
    name: "Skullcandy Indy ANC",
    brand: "Skullcandy",
    price: 129,
    rating: 4.1,
    image: "https://i.ibb.co/rRmj2TJG/Air-Buds2-large.webp",
    description: "Hybrid ANC, ambient mode, and long battery life.",
    inStock: true,
    category: "airbuds",
  },
];

const CategoryPage = async ({ params }) => {
  const category = (await params).category;
  return (
    <section className="min-h-[calc(100vh-2px] bg-zinc-950 text-white">
      <div className="">
        <CategoryBanner category={category} />
      </div>
      <div className="w-11/12 mx-auto py-30">
        <h2 className="text-3xl font-bold mb-5 uppercase">
          Products: {category}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {airbudsData.map((product) => (
            <ProductCard product={product} key={product.id}></ProductCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryPage;
