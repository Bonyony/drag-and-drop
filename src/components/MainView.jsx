import React, { useState, useContext } from "react";
import { useDroppable } from "@dnd-kit/react";
import { DragDropProvider } from "@dnd-kit/react";
import { move } from "@dnd-kit/helpers";
import NoteItem from "./NoteItem";
import Column from "./Column";

import "../styles/mainview.css";
import { ItemContext } from "../pages/NoteBoard";

// This component is the drag and drop main menu
// It should be enitrely drag and drop - able!

const MainView = (id) => {
  const { items, setItems } = useContext(ItemContext);
  const { ref } = useDroppable({
    id,
  });

  return (
    <DragDropProvider
      // below is collision detection utilizing 'move'
      onDragOver={(event) => {
        const { source, target } = event.operation;

        setItems((items) => move(items, source, target));
      }}
    >
      <div ref={ref} className="main ml-56 min-h-screen pb-5">
        <div className="flex flex-col gap-3">
          {Object.entries(items).map(([column, item], index) => (
            <Column key={column} id={column} index={index}>
              {/* Now working as intended, state updates on each drag and drop */}
              {/* the item will change the array data based on NoteItem position and value */}
              {/* column and index do not change based on dnd-kit functionality */}
              {console.log(item, column, index)}
              {/* Need to implement logic below to handle duplicate values */}
              {item.map((value, index) => (
                <NoteItem
                  // may have to make the key a random value? something to ensure a unique key
                  key={value}
                  id={value}
                  index={index}
                  column={column}
                  activationConstraint={{
                    delay: 250,
                    tolerance: 5,
                  }}
                />
              ))}
            </Column>
          ))}
        </div>
      </div>
    </DragDropProvider>
  );
};

export default MainView;
