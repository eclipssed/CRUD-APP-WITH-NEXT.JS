"use server";

import Topic from "@/models/topic";
import { revalidatePath } from "next/cache";
import connectMongoDB from "./mongodb";
import { redirect } from "next/navigation";
import {
  uploadOnCloudinary,
  uploadOnCloudinaryServerSide,
} from "./uploadOnCloudinary";

connectMongoDB();

export async function editTopic(formData) {
  const { id, title, description } = Object.fromEntries(formData);
  try {
    await Topic.findByIdAndUpdate(
      { _id: id },
      {
        title,
        description,
      }
    );
  } catch (err) {
    console.log("Error happened in editTopic: ", err);
    throw err;
  }
  revalidatePath("/");
  redirect("/");
}
export async function addTopic(formData) {
  const { title, description } = Object.fromEntries(formData);

  try {
    await Topic.create({ title, description });
  } catch (err) {
    console.log("Error happened in addTopic: ", err);
    throw err;
  }
  revalidatePath("/");
  redirect("/");
}
export async function deleteTopic(id) {
  try {
    await Topic.findByIdAndDelete({ _id: id });
  } catch (err) {
    console.log(err);
    throw err;
  }
  revalidatePath("/");
}
export async function uploadImage(formData) {
  const img = formData.get("image");
  // console.log(img);
  try {
    const data = await uploadOnCloudinaryServerSide(img, "nextCrud");
    if (data) {
      return data.secure_url;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
  // console.log(data);
  // const uploadForm = new FormData();
  // uploadForm.set("file", img);

  // try {
  // } catch (err) {
  //   console.log(err);
  //   throw err;
  // }
}
