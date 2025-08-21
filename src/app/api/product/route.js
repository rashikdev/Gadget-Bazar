import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const body = await req.json();
    const client = await clientPromise;
    const db = client.db("gadget-bazar");
    const products = db.collection("products");
    const user = await db
      .collection("users")
      .findOne({ email: "abcd@gmail.com" });

    if (!user || user.role !== "admin") {
      return NextResponse.json(
        { error: "Unauthorized access" },
        { status: 401 }
      );
    }

    const result = await products.insertOne(body);

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to add product" },
      { status: 500 }
    );
  }
};
