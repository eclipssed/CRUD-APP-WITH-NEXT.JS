"use client";

import { editTopic } from "@/libs/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";

const EditTopicForm = ({ id, title, description }) => {
  const [topic, setTopic] = useState({
    id: id,
    title: title,
    description: description,
  });
  const router = useRouter();

  const handleEditTopic = async () => {
    try {
      const res = await editTopic(id, topic);
      console.log(res);
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
    <form action={handleEditTopic} className="flex flex-col gap-3 ">
      <input
        required
        onChange={handleChange}
        value={topic.title}
        name="title"
        type="text"
        placeholder="Topic Title"
        className="border border-slate-500 px-8 py-2"
      />
      <input
        required
        onChange={handleChange}
        value={topic.description}
        name="description"
        type="text"
        placeholder="Topic Description"
        className="border border-slate-500 px-8 py-2"
      />
      <button
        // type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
      >
        Update Topic
      </button>
      {/* {state?.error} */}
    </form>
  );
};

export default EditTopicForm;
