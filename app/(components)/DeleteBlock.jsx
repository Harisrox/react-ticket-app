"use client";

import { X } from "lucide-react";
import { useRouter } from "next/navigation";

const DeleteBlock = ({ id }) => {
  const router = useRouter();

  const deleteTicket = async () => {
    const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      router.refresh();
    }
  };

  return (
    <div>
      <X
        className="text-red-400 hover:text-red-500 hover:cursor-pointer"
        onClick={deleteTicket}
      />
    </div>
  );
};

export default DeleteBlock;
