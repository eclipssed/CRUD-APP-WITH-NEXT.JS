import React from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

const getTopics = async () => {
  try {
    const res = await fetch(process.env.ROOT_URI + "/api/topics", {
      cache: "no-store",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("error while fetcing data", error);
  }
};

const TopicsList = async () => {
  const { topics } = await getTopics();
  return (
    <>
      {topics.map((topic) => (
        <div
          key={topic._id}
          className="flex justify-between items-start my-3 p-4 border gap-5 border-slate-300"
        >
          <div>
            <h2 className="font-bold text-2xl">{topic.title}</h2>
            <div>{topic.description}</div>
          </div>
          <div className="flex justify-center">
            <RemoveBtn id={topic._id} />
            <Link href={`/editTopic/${topic._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default TopicsList;
