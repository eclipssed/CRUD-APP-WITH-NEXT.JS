import React from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import { getImage, getTopics } from "@/libs/data";

const TopicsList = async () => {
  const topics = await getTopics();
  return (
    <>
      {topics?.map((topic) => (
        <div
          key={topic._id}
          className="flex justify-between items-start my-3 p-4 border gap-5 border-slate-300"
        >
          <div>
            <h2 className="font-bold text-2xl">{topic.title}</h2>
            <div>{topic.description}</div>
          </div>
          <div className="flex justify-center">
            <RemoveBtn id={topic.id} />
            <Link href={`/editTopic/${topic.id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default TopicsList;
