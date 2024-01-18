import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import Topic from "@/models/topic";

connectMongoDB();

export async function PUT(req, { params }) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await req.json();
  await Topic.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "topic edited and updated" });
}
