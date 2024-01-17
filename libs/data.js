// "use server";

import connectMongoDB from "@/libs/mongodb";
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
