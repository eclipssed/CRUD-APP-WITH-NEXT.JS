"use server";

import Topic from "@/models/topic";
import { revalidatePath } from "next/cache";
import connectMongoDB from "./mongodb";
import { redirect } from "next/navigation";
import {
  deleteImg,
  uploadOnCloudinary,
  uploadOnCloudinaryServerSide,
} from "./cloudinaryActions";
import Image from "@/models/image.models";
import { saveImg } from "./saveImg";

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
  const _id = "65c5a914ec2f401dccf20544";
  try {
    // const dbImages = await Image.findById({ _id });
    // const dbImagePublic_id = dbImages.logoImage.public_id;
    // const deletedImg = await deleteImg(dbImagePublic_id);
    // if (deletedImg.result === "ok") {
    // const data = await uploadOnCloudinaryServerSide(img, "nextCrud");
    const data = await saveImg(img);
    if (data) {
      const imgObj = {
        logoImage: {
          previewUrl: data,
          public_id: data,
        },
      };
      const dbData = await Image.findByIdAndUpdate({ _id }, imgObj);
      if (dbData);
      {
        return dbData;
      }
    }
    // }
    revalidatePath("/imageUpload");
  } catch (error) {
    console.log(error);
    throw error;
  }
}
