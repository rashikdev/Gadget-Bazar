import clientPromise from "@/lib/mongodb";
import { getAllProducts } from "@/lib/products";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const products = await getAllProducts();
    return NextResponse.json(products);
  } catch (err) {
    console.error("GET /api/products error:", err);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const client = await clientPromise;
    const db = client.db("gadget-bazar");
    const collection = db.collection("products");

    const result = await collection.insertOne(body);

    return NextResponse.json(
      {
        success: true,
        message: "Product added successfully",
        insertedId: result.insertedId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error inserting product:", error);
    return NextResponse.json(
      { success: false, message: "Failed to add product" },
      { status: 500 }
    );
  }
}
