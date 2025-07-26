import Image from "next/image";
import headphoneBanner from "@/assets/categoryBannerImages/headphoneBanner.webp";
import smartWatchBanner from "@/assets/categoryBannerImages/smartwatchBanner.png";
import earbudsBanner from "@/assets/categoryBannerImages/earbudsBanner.webp";
import powerbankBanner from "@/assets/categoryBannerImages/powerbankBanner.webp";
import cameraBanner from "@/assets/categoryBannerImages/cameraBanner.png";
import chargerBanner from "@/assets/categoryBannerImages/chargerBanner.jpg";
import gamingBanner from "@/assets/categoryBannerImages/gamingBanner.jpg";

const categoryBanners = {
  headphones: headphoneBanner,
  smartwatches: smartWatchBanner,
  earbuds: earbudsBanner,
  powerbanks: powerbankBanner,
  cameras: cameraBanner,
  chargers: chargerBanner,
  gamings: gamingBanner,
};

const CategoryBanner = ({ category }) => {
  const banner = categoryBanners[category] || headphoneBanner;
  return (
    <Image
      src={banner}
      alt={`${category} banner`}
      className="w-full h-[55vh] object-cover"
    />
  );
};

export default CategoryBanner;
