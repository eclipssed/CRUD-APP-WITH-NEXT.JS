"use client";

import { deleteTopic } from "@/libs/actions";
import { HiOutlineTrash } from "react-icons/hi";

const handleDeleteTopic = async (id) => {
  const confirmed = window.confirm(
    "Are you sure that you want to delete the topic."
  );
  if (confirmed) {
    try {
      await deleteTopic(id);
    } catch (error) {
      console.error("Error deleting topic:", error);
    }
  }
};

const RemoveBtn = ({ id }) => {
  return (
    <form action={() => handleDeleteTopic(id)}>
      <button>
        <HiOutlineTrash className="text-red-500" size={24} />
      </button>
    </form>
  );
};

export default RemoveBtn;
