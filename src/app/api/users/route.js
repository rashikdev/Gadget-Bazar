import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const user = await request.json();
    const client = await clientPromise;
    const db = client.db("gadget-bazar");

    const result = await db.collection("users").insertOne(user);

    return NextResponse.json(
      { message: "User added successfully", insertedId: result.insertedId },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json({ error: "Failed to add user" }, { status: 500 });
  }
}
