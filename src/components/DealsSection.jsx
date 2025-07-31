import React from "react";
import DealsSlider from "./DealSlider";
import wirelessHeadphones from "@/assets/offerDealsImages/wirelessHeadphone.jpg";
import Smartwatch from "@/assets/offerDealsImages/smartWatch.jpg";
import WirelessCharger from "@/assets/offerDealsImages/WirelessCharger.jpg";
import ActionCamera from "@/assets/offerDealsImages/actionCamera.jpg";
import Mouse from "@/assets/offerDealsImages/mouse.jpg";

const deals = [
  {
    id: 1,
    title: "Wireless Headphones",
    image: wirelessHeadphones,
    price: "$89.99",
    oldPrice: "$129.99",
    discount: "30% OFF",
    link: "/products/headphones",
  },
  {
    id: 2,
    title: "Smartwatch Series 6",
    image: Smartwatch,
    price: "$149.99",
    oldPrice: "$199.99",
    discount: "25% OFF",
    link: "/products/smartwatch",
  },
  {
    id: 3,
    title: "4K Action Camera",
    image: ActionCamera,
    price: "$99.99",
    oldPrice: "$159.99",
    discount: "37% OFF",
    link: "/products/camera",
  },
  {
    id: 4,
    title: "Wireless Charger",
    image: WirelessCharger,
    price: "$29.99",
    oldPrice: "$49.99",
    discount: "30% OFF",
    link: "/products/wirelesscharger",
  },
  {
    id: 5,
    title: "Gaming Mouse",
    image: Mouse,
    price: "$39.99",
    oldPrice: "$59.99",
    discount: "30% OFF",
    link: "/products/mouse",
  },
];

const DealsSection = () => {
  return (
    <section className="bg-black text-white py-16 flex items-center">
      <div className="w-10/12 mx-auto flex flex-col gap-10">
        <div>
          <h2 className="text-3xl font-bold mb-2">🔥 Hot Deals & Offers</h2>
          <p className="text-gray-400 mb-8">
            Limited time deals on top gadgets. Grab yours now!
          </p>
        </div>
        <div>
          <DealsSlider deals={deals}></DealsSlider>
        </div>
      </div>
    </section>
  );
};

export default DealsSection;
