"use client";

import { addTopic } from "@/libs/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AddTopicPage = () => {
  const [topic, setTopic] = useState({
    title: "",
    description: "",
  });
  const router = useRouter();

  const handleAddTopic = async () => {
    try {
      const res = await addTopic(topic);
      if (res) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    setTopic((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form action={handleAddTopic} className="flex flex-col gap-3 ">
      <input
        onChange={handleChange}
        value={topic.title}
        required
        name="title"
        type="text"
        placeholder="Topic Title..."
        className="border border-slate-500 px-8 py-2"
      />
      <input
        onChange={handleChange}
        value={topic.description}
        required
        name="description"
        type="text"
        placeholder="Topic Description..."
        className="border border-slate-500 px-8 py-2"
      />
      <button
        type="submit"
        className={"bg-green-600 font-bold text-white py-3 px-6 w-fit"}
        // disabled={isSubmitting}
      >
        Add Topic
      </button>
    </form>
  );
};

export default AddTopicPage;
