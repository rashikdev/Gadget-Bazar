import clientPromise from "./mongodb";



export const getProductsByCategory = async (category) => {
  const client = await clientPromise;
  const db = client.db("gadget-bazar");

  const products = await db.collection("products").find({ category }).toArray();

  const formatted = products.map((product) => ({
    ...product,
    _id: product._id.toString(),
  }));

  return formatted;
};
