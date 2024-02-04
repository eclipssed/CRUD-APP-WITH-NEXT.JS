"use client";

import { uploadImage } from "@/libs/actions";
import { useState } from "react";
import Image from "next/image";

const ImageUploadPage = () => {
  const [imgData, setImgData] = useState({
    previewImage: "",
    heroImage: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setImgData((prev) => ({
      ...prev,
      previewImage: URL.createObjectURL(e.target.files[0]),
    }));
    setImgData((prev) => ({ ...prev, heroImage: e.target.files[0] }));
  };

  // console.log(imgData);

  const handleSubmit = async () => {
    const imgForm = new FormData();
    imgForm.append("image", imgData.heroImage);
    const imgUrl = await uploadImage(imgForm);
    // console.log(imgUrl);
    if (imgUrl) {
      setSuccess(true);
    }
  };

  return (
    <div className="border border-slate-500 py-4 px-8 space-y-4 text-center">
      <h2 className="text-2xl font-bold">Upload Image</h2>
      <div>
        {success && (
          <p className=" bg-green-800 rounded-md py-4 text-white">
            Successfully uploaded to cloudinary
          </p>
        )}
      </div>
      <form
        action={handleSubmit}
        className="border border-slate-500 py-4 px-8 flex flex-col space-y-4"
      >
        <label className="cursor-pointer bg-slate-800 rounded-full p-4 text-white">
          <input
            type="file"
            name="image"
            id="image"
            className="hidden"
            onChange={handleChange}
          />
          <span>Choose Image</span>
        </label>
        <button
          type="submit"
          className=" bg-slate-800 rounded-full p-4 text-white"
        >
          Upload Image
        </button>
      </form>
      <Image alt="image" width={500} height={500} src={imgData.previewImage} />
    </div>
  );
};

export default ImageUploadPage;
