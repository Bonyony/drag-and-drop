import { useState } from "react";
import { Topbar, Sidebar, MainView, NoteItem } from "./components";
import "./App.css";
import { DndContext, closestCorners } from "@dnd-kit/core";
import { DragDropProvider } from "@dnd-kit/react";

function App() {
  const [isDropped, setIsDropped] = useState(false);
  return (
    <>
      <Sidebar />
      <Topbar />
      <DragDropProvider>
        <MainView />
      </DragDropProvider>
    </>
  );
}

export default App;
