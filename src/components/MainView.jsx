import React, { useState } from "react";
import { useDroppable } from "@dnd-kit/react";
import { DragDropProvider } from "@dnd-kit/react";
import { move } from "@dnd-kit/helpers";
import NoteItem from "./NoteItem";
import Column from "./Column";

import "../styles/mainview.css";

// This component is the drag and drop main menu
// It should be enitrely drag and drop - able!

const MainView = (id) => {
  const { ref } = useDroppable({
    id,
  });
  const [items, setItems] = useState({
    A: ["A0", "A1", "A2"],
    B: ["B0", "B1"],
    C: ["C0", "C1", "C2"],
  });

  return (
    <DragDropProvider
      onDragOver={(event) => {
        const { source, target } = event.operation;

        setItems((items) => move(items, source, target));
      }}
    >
      <div ref={ref} className="main ml-56 h-screen">
        <div className="flex flex-row gap-3">
          {Object.entries(items).map(([column, items]) => (
            <Column key={column} id={column}>
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
