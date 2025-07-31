"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

const DealsSlider = ({ deals }) => (
  <Swiper
    modules={[Autoplay, Navigation]}
    navigation
    autoplay={{ delay: 3000, disableOnInteraction: false }}
    loop={true}
    spaceBetween={20}
    breakpoints={{
      320: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    }}
    className="text-white"
  >
    {deals.map((deal) => (
      <SwiperSlide key={deal.id}>
        <div className="bg-zinc-900 p-4 rounded shadow group">
          <div className="relative h-64 md:h-80 w-full overflow-hidden">
            <Image
              src={deal.image}
              alt={deal.title}
              fill
              sizes="100%"
              className="object-cover rounded group-hover:scale-110 transition duration-500 ease-in-out"
            />
            <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded">
              {deal.discount}
            </span>
          </div>
          <h3 className="mt-3 text-lg font-semibold">{deal.title}</h3>
          <div className="flex items-center gap-2">
            <span className="text-green-400 font-bold">{deal.price}</span>
            <span className="line-through text-gray-500 text-sm">
              {deal.oldPrice}
            </span>
          </div>
          <Link
            href={deal.link}
            className="inline-block mt-2 text-sm text-white bg-green-600 px-3 py-1 rounded hover:bg-green-700"
          >
            Shop Now
          </Link>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);

export default DealsSlider;
