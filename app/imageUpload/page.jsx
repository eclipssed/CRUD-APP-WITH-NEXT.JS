"use client";

import { uploadImage } from "@/libs/actions";
import Image from "next/image";
import { getImage } from "@/libs/data";
import { useEffect, useState } from "react";
// import ImageSkeleton from "@/components/ImageSkeleton";

const ImageUploadPage = () => {
  const [imgData, setImgData] = useState({
    previewImage: "",
    heroImage: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getImage()
      .then((res) => JSON.parse(res))
      .then((data) => {
        console.log(data[0]);
        setImgData((prev) => ({
          ...prev,
          previewImage: data[0].logoImage.previewUrl,
        }));
      });
  }, []);

  const handleChange = (e) => {
    setImgData((prev) => ({
      ...prev,
      previewImage: URL.createObjectURL(e.target.files[0]),
      heroImage: e.target.files[0],
    }));
  };

  // console.log(imgData);

  const handleSubmit = async () => {
    const imgForm = new FormData();
    imgForm.append("image", imgData.heroImage);
    const imgUrl = await uploadImage(imgForm);
    // console.log(imgUrl);
    if (imgUrl) {
      setLoading(false);
    }
  };

  return (
    <div className="border border-slate-500 py-4 px-8 space-y-4 text-center">
      <h2 className="text-2xl font-bold">Upload Image</h2>

      <form
        action={handleSubmit}
        onSubmit={() => setLoading(true)}
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
          {loading ? "Uploading..." : "Upload Image"}
        </button>
      </form>
      <div className="mx-auto flex justify-center items-center">
        <Image
          alt="image"
          width={500}
          height={500}
          src={imgData?.previewImage}
        />
      </div>
    </div>
  );
};

export default ImageUploadPage;
