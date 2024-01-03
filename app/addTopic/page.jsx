"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import React from "react";

const addTopic = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(isSubmitting){
      return;
    }

    if (!title || !description) {
      alert("Title and description are required");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("http://localhost:3000/api/topics/", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });
      if (res.ok) {
        router.push("/");
        router.refresh()
      }
    } catch (error) {
      console.log("error while submitting the form", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 ">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text"
        placeholder="Topic Title"
        className="border border-slate-500 px-8 py-2"
      />
      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        type="text"
        placeholder="Topic Description"
        className="border border-slate-500 px-8 py-2"
      />
       <button
        type="submit"
        className={`bg-green-600 font-bold text-white py-3 px-6 w-fit ${
          isSubmitting ? "cursor-not-allowed opacity-50" : "" // Disable button and change cursor if submitting
        }`}
        disabled={isSubmitting} // Disable the button if submitting
      >
        Add Topic
      </button>
    </form>
  );
};

export default addTopic;
