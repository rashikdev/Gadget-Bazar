import clientPromise from "./mongodb";

export const getAllProducts = async () => {
  const client = await clientPromise;
  const db = client.db("gadget-bazar");

  const products = await db.collection("products").find().toArray();

  // Convert _id to string for each product
  const formatted = products.map((product) => ({
    ...product,
    _id: product._id.toString(),
  }));

  return formatted;
};
