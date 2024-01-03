"use client";

import React from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

const RemoveBtn = ({ id }) => {

  const router = useRouter();

  const removeTopic = async () => {
    const confirmed = confirm("Are you sure?");
    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/topics/?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        router.refresh();
      }
    }
  };
  return (
    <button onClick={removeTopic}>
      <HiOutlineTrash className="text-red-500" size={24} />
    </button>
  );
};

export default RemoveBtn;
