"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import headphone from "@/assets/categoryImg/headphone.jpg";
import SmartWatch from "@/assets/categoryImg/smartwatch.jpg";
import wirelesscharger from "@/assets/categoryImg/wirelesscharger.jpg";
import Image from "next/image";



const bannerImages = [headphone, SmartWatch, wirelesscharger];

const BannerSlider = () => {
  return (
    <div className="md:w-full w-2/4 h-[34vh] rounded-full">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        // pagination={{ clickable: true }}
        // navigation={true}
        className="h-full w-full rounded-full"
      >
        {bannerImages.map((img, i) => (
          <SwiperSlide key={i}>
            <Image
              src={img}
              alt={`Slide ${i + 1}`}
              className="w-full h-[34vh] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlider;
