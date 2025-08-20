import QuantitySection from "@/components/QuantitySection";
import axiosInstance from "@/lib/axiosInstance";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { notFound } from "next/navigation";

export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  try {
    const res = await axiosInstance.get(`/products/${id}`);
    const product = res.data;
    return {
      title: `Gadget Bazar | ${product.name}`,
      description: `Product details for ${product.name}`,
    };
  } catch {
    return {
      title: "Product Not Found | Gadget Bazar",
      description: "The product you are looking for does not exist.",
    };
  }
};

export default async function ProductDetailsPage({ params }) {
  const { id } = await params;

  try {
    const res = await axiosInstance.get(`/products/${id}`);
    const product = res.data;

    const { name, price, features, rating, image, brand } = product;

    return (
      <div className="md:w-10/12 w-11/12 mx-auto mt-10 min-h-[calc(100vh-300px)]">
        <h2 className="text-3xl font-bold">Product ID: {id.slice(0, 8)}</h2>
        <div className="md:h-[500px] flex md:flex-row flex-col justify-between gap-10">
          <div className="flex-1 flex justify-center items-center">
            <div className="w-[400px] h-[400px]">
              <Image
                src={image}
                alt={name || "Product image"}
                width={400}
                height={400}
                priority
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="flex justify-center items-center flex-1">
            <div className="md:w-[70%] w-full py-5 px-4 flex flex-col justify-between font-bold space-y-4">
              <h2 className="text-[2rem] font-bold">{name}</h2>
              <ul className="list-disc list-inside">
                {(features || []).map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <p>Brand: {brand}</p>
              <p className="flex items-center">
                Rating: {rating}
                <span className="text-[crimson] ml-1">
                  <FaStar />
                </span>
              </p>
              <p>Product Price: ${price}</p>
              <QuantitySection product={product} />
            </div>
          </div>
        </div>
      </div>
    );
  } catch {
    notFound();
  }
}
