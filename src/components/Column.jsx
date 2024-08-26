import React, { useContext } from "react";
import { useSortable } from "@dnd-kit/react/sortable";
import { ItemContext } from "../pages/NoteBoard";
import { CollisionPriority } from "@dnd-kit/abstract";

const Column = ({ children, id, index }) => {
  const { items, setItems } = useContext(ItemContext);

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
      className="cursor-grab mx-[75px] mt-[30px] mb-[20px] border-[#0562d3] border-2  bg-[#003c85] rounded-md"
    >
      <h2 className="text-white flex justify-between px-5 mt-5 font-black text-2xl">
        {index + 1} {id}
        {/* These are buttons for functionality within each note */}
        <ul className="flex flex-row gap-3  font-thin">
          <li className="bg-[#0562d3] hover:bg-blue-500 px-1 text-base rounded-sm flex align-middle">
            {/* This button is not responding correctly due to dnd-kit, should maybe move it outside of the Column Comp */}
            <button>Add +</button>
          </li>
        </ul>
      </h2>
      <div className="grid grid-cols-3 gap-3 p-[20px] ">{children}</div>
    </div>
  );

  // function handleClick() {
  // }
};

export default Column;
