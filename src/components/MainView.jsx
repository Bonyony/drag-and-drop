import React from "react";
import { useDroppable } from "@dnd-kit/core";
import { DndContext } from "@dnd-kit/core";

import "../styles/mainview.css";

// This component is the drag and drop main menu
// It should be enitrely drag and drop - able!

const MainView = () => {
  return (
    <div className="main h-screen">
      <DndContext></DndContext>
    </div>
  );
};

export default MainView;
