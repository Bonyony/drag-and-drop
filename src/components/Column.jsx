import React from "react";
import { useSortable } from "@dnd-kit/react/sortable";
import { CollisionPriority } from "@dnd-kit/abstract";

const Column = ({ children, id, index }) => {
  const { ref } = useSortable({
    id,
    index,
    type: "column",
    collisionPriority: CollisionPriority.Low,
    accept: ["item", "column"],
  });
  return (
    <div
      ref={ref}
      className=" m-[20px] border-[#0562d3] border-2 min-w-[200px] bg-[#003c85] rounded-md"
    >
      <h2 className="text-white flex justify-center mt-5 font-black text-2xl">
        Thing {index + 1}
      </h2>
      <div className="flex flex-col gap-3 p-[20px]">{children}</div>
    </div>
  );
};

export default Column;
