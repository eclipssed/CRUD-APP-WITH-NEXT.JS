"use server";

import Topic from "@/models/topic";
import { revalidatePath } from "next/cache";
import connectMongoDB from "./mongodb";

connectMongoDB();

export async function editTopic(id, topic) {
  const { title, description } = topic;
  try {
    await Topic.findByIdAndUpdate(
      { _id: id },
      {
        title,
        description,
      }
    );
    revalidatePath("/");
    return true;
  } catch (error) {
    console.log(err);
    console.log("Error happened in editTopic: ", err);
    return false;
  }
}
export async function addTopic(topic) {
  const { title, description } = topic;
  try {
    const data = await Topic.create({ title, description });
    revalidatePath("/");
    return true;
  } catch (err) {
    console.log("Error happened in addTopic: ", err);
    return false;
  }
}
export async function deleteTopic(id) {
  try {
    await Topic.findByIdAndDelete({ _id: id });
    revalidatePath("/");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
}
