import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import Topic from "@/models/topic";

connectMongoDB();

export async function POST(req) {
  const { title, description } = await req.json();
  await Topic.create({ title, description });
  return NextResponse.json({ message: "Topic created" });
}

export async function GET() {
  const topics = await Topic.find();
  return NextResponse.json({ topics });
}

export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get("id");
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({ message: "topic deleted" });
}
