"use client";

import React from "react";
import EditTopicForm from "../../../components/editTopicForm";

const getTopicById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: "no-store",
    });
    const data = await res.json();
    return data.topic;
  } catch (error) {
    console.log("error while fetching topic for edit", error);
  }
};

const editTopic = async ({ params }) => {
  const { id } = params;
  const topics = await getTopicById(id);
  const { title, description } = await topics;

  return <EditTopicForm id={id} title={title} description={description} />;
};

export default editTopic;
