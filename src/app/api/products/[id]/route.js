import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb"; // ✅ import this

export async function GET(request, { params }) {
  try {
    const client = await clientPromise;
    const db = client.db("gadget-bazar");

    const id = (await params).id;

    // ✅ convert id to ObjectId
    const product = await db.collection("products").findOne({
      _id: new ObjectId(id),
    });

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch product" },
      { status: 500 }
    );
  }
}
