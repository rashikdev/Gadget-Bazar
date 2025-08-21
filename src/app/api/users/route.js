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

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get("email");

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("gadget-bazar");

    const user = await db.collection("users").findOne({ email });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(
      { email: user.email, role: user.role || "user" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch user" },
      { status: 500 }
    );
  }
}
