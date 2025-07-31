import axiosInstance from "./axiosInstance";

export const GetSingleProduct = async (id) => {
  try {
    const res = await axiosInstance.get(`/products/${id}`);
    if (!res.data) {
      throw new Error("Product not found");
    }
    return res.data;
  } catch (err) {
    console.error("Error fetching product:", err);
    return null;
  }
};
