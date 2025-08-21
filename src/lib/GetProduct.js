import axiosInstance from "./axiosInstance";

export const GetAllProducts = async () => {
  try {
    const res = await axiosInstance.get("/products");
    if (!res.data) {
      throw new Error("Products not found");
    }
    return res.data;
  } catch (err) {
    console.error("Error fetching products:", err);
    return null;
  }
};

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
