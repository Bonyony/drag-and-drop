import React from "react";
import { useDraggable } from "@dnd-kit/react";
import { useSortable } from "@dnd-kit/react/sortable";

const NoteItem = ({ id, index, column }) => {
  const { ref } = useSortable({
    id,
    index,
    type: "item",
    accept: "item",
    group: column,
  });
  return (
    <button
      ref={ref}
      className="p-2 z-20 w-auto bg-gray-100 hover:bg-gray-300 opacity-90 rounded-sm"
    >
      <div className="hidden">{id}</div> New
    </button>
  );
};

export default NoteItem;
