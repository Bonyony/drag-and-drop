import React from "react";
import { useDroppable } from "@dnd-kit/react";
import { CollisionPriority } from "@dnd-kit/abstract";

const Column = ({ children, id }) => {
  const { ref } = useDroppable({
    id,
    type: "column",
    accept: "item",
    collisionPriority: CollisionPriority.Low,
  });
  return (
    <div className=" m-[20px]  min-w-[200px] bg-[#003c85] rounded-md">
      <h2 className="text-white flex justify-center mt-5 font-black text-2xl">
        Thing
      </h2>
      <div className="flex flex-col gap-3 p-[20px]">{children}</div>
    </div>
  );
};

export default Column;
