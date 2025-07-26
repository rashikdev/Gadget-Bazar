import Image from "next/image";
import React from "react";
import SmartWatch from "@/assets/categoryImg/smartwatch.jpg";
import headphone from "@/assets/categoryImg/headphone.jpg";
import earbuds from "@/assets/categoryImg/earbud.jpg";
import powerbank from "@/assets/categoryImg/powerbank.jpg";
import camera from "@/assets/categoryImg/camera.jpg";
import wirelesscharger from "@/assets/categoryImg/wirelesscharger.jpg";
import gamingaccessories from "@/assets/categoryImg/Game.jpg";
import Link from "next/link";
const CategorySection = () => {
  const categories = [
    {
      id: 1,
      name: "Smart Watches",
      image: SmartWatch,
      link: "/",
    },
    {
      id: 2,
      name: "Headphones",
      image: headphone,
      link: "/",
    },
    {
      id: 3,
      name: "Earbuds",
      image: earbuds,
      link: "/",
    },
    {
      id: 4,
      name: "Power Banks",
      image: powerbank,
      link: "/",
    },
    {
      id: 5,
      name: "Cameras",
      image: camera,
      link: "/",
    },
    {
      id: 6,
      name: "Wireless Chargers",
      image: wirelesscharger,
      link: "/",
    },
    {
      id: 7,
      name: "Gaming Accessories",
      image: gamingaccessories,
      link: "/",
    },
  ];

  const [firstCategory, ...rest] = categories;

  return (
    <section className="w-11/12 mx-auto">
      <h2 className="text-4xl font-bold mb-6">
        EXPLORE OUR TOP <br /> PRODUCTS BY CATEGORY
      </h2>
      <div className="flex gap-5">
        <Link href={firstCategory?.link}>
          <div className="flex-1 relative w-full overflow-hidden">
            <Image
              placeholder="blur"
              src={firstCategory?.image}
              alt={firstCategory?.name}
              width={200}
              height={420}
              className="w-full h-[420px] object-cover hover:scale-110 transition duration-300"
            />
            <div className="absolute top-6 left-6 w-full text-white">
              <h2 className="text-2xl font-bold mb-2">{firstCategory?.name}</h2>
              <p className="text-lg font-semibold"></p>
            </div>
          </div>
        </Link>

        {/* Grid of items */}
        <div className="grid grid-cols-3 flex-3 gap-5">
          {rest.map((category) => (
            <Link key={category.id} href={category?.link}>
              <div className=" h-[200px] relative overflow-hidden">
                <Image
                  placeholder="blur"
                  src={category?.image}
                  alt={category?.name}
                  width={200}
                  height={420}
                  className="w-full h-[200px] object-cover hover:scale-110 transition duration-300"
                />
                <div className="absolute top-6 left-6 w-full text-white">
                  <h2 className="text-2xl font-bold mb-2">{category?.name}</h2>
                  <p className="text-lg font-semibold"></p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
