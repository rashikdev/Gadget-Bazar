// utils/cartStorage.js

export const AddProductInLocal = (product) => {
  if (typeof window === "undefined") return;

  try {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = cart.find((p) => p.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += product.quantity || 1;
    } else {
      cart.push({ ...product, quantity: product.quantity || 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  } catch (error) {
    console.error("Failed to add product to localStorage", error);
  }
};

export const GetProductInLocal = () => {
  if (typeof window === "undefined") return [];

  try {
    return JSON.parse(localStorage.getItem("cart")) || [];
  } catch (error) {
    console.error("Failed to get cart from localStorage", error);
    return [];
  }
};

export const RemoveProductInLocal = (productId) => {
  if (typeof window === "undefined") return;

  try {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = existingCart.filter((p) => p.id !== productId);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  } catch (error) {
    console.error("Failed to remove product from localStorage", error);
  }
};
