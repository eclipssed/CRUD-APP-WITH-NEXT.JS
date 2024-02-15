"use server";

import connectMongoDB from "@/libs/mongodb";
import Image from "@/models/image.models";
import Topic from "@/models/topic";
import { unstable_noStore as noStore } from "next/cache";

connectMongoDB();

export async function getTopics() {
  noStore();
  try {
    const topics = await Topic.find();
    return topics;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
export async function getTopic(id) {
  noStore();
  try {
    const topic = await Topic.findById(id);
    return topic;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getImage() {
  noStore();
  try {
    const img = await Image.find();
    const imgObj = JSON.stringify(img);
    return imgObj;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
