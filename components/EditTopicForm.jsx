"use client";

import { editTopic } from "@/libs/actions";
import { useState } from "react";

const EditTopicForm = ({ id, title, description }) => {
  const [topic, setTopic] = useState({
    id: id,
    title: title,
    description: description,
  });

  const handleChange = (e) => {
    setTopic((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form action={editTopic} className="flex flex-col gap-3 ">
      <input value={id} name="id" type="text" className="hidden" />
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
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
      >
        Update Topic
      </button>
    </form>
  );
};

export default EditTopicForm;
