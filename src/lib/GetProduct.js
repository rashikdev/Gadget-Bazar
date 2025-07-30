import axiosInstance from "./axiosInstance";

export const GetSingleProduct = async (id) => {
  const res = await axiosInstance.get(`/products/${id}`);
  if (!res.data) {
    throw new Error("Product not found");
  } else {
    const res = await axiosInstance.get(`/products/${id}`);
    return res.data;
  }
};
