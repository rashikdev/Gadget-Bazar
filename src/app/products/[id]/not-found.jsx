"use client";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-300px)] text-center">
      <h1 className="text-4xl font-bold text-red-500 mb-4">
        Product Not Found
      </h1>
      <p className="text-gray-600 mb-6">
        Sorry, we couldn’t find the product you’re looking for.
      </p>
      <button
        onClick={() => router.back()}
        className="bg-black text-white px-6 py-2 hover:bg-zinc-700 cursor-pointer"
      >
        Go Back
      </button>
    </div>
  );
}
