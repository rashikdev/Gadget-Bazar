export const AddProductInLocal = (product) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingProduct = cart.find((p) => p.id === product.id);
  if (existingProduct) {
    existingProduct.quantity += product.quantity;
    localStorage.setItem("cart", JSON.stringify(cart));
  } else {
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

export const RemoveProductInLocal = (productId) => {
  const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
  const updatedCart = existingCart.filter((p) => p._id !== productId);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
};
