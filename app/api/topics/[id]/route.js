import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import Topic from "@/models/topic";

connectMongoDB()
  .then(() => console.log("connection was successful now you can move on."))
  .catch(() => console.log("got some issue in connection"));

export async function PUT(req, { params }) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await req.json();
  await Topic.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "topic edited and updated" });
}

export async function GET(req, { params }) {
  const { id } = params;
  const topic = await Topic.findOne({ _id: id });
  return NextResponse.json({ topic });
}
