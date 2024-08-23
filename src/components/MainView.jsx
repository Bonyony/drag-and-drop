import React, { useState, useContext } from "react";
import { useDroppable } from "@dnd-kit/react";
import { DragDropProvider } from "@dnd-kit/react";
import { move } from "@dnd-kit/helpers";
import NoteItem from "./NoteItem";
import Column from "./Column";

import "../styles/mainview.css";
// import { ItemContext } from "../pages/NoteBoard";

// This component is the drag and drop main menu
// It should be enitrely drag and drop - able!

const MainView = (id) => {
  // const { items, setItems } = useContext(ItemContext);
  // console.log(items);

  const { ref } = useDroppable({
    id,
  });
  // Items are hard-coded for now
  const [items, setItems] = useState({
    A: ["A0", "A1", "A2", "Hello", "Meet the real me!"],
    B: [
      "B0",
      "B1",
      "This is a very long note, who's only purpose is to test what happens when the subnotes are really long. I like it so far.",
    ],
    C: [
      "C0",
      "C1",
      "C2",
      "Give",
      "Me",
      "Cookies",
      "Dumb",
      "Stupids",
      "Hobbits",
    ],
  });

  return (
    <DragDropProvider
      // below is collision detection utilizing 'move'
      onDragOver={(event) => {
        const { source, target } = event.operation;

        setItems((items) => move(items, source, target));
      }}
    >
      <div ref={ref} className="main ml-56 ">
        <div className="flex flex-col gap-3">
          {Object.entries(items).map(([column, items], index) => (
            <Column key={column} id={column} index={index}>
              {items.map((id, index) => (
                <NoteItem key={id} id={id} index={index} column={column} />
              ))}
            </Column>
          ))}
        </div>
      </div>
    </DragDropProvider>
  );
};

export default MainView;
