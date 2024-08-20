import React from "react";
import { Topbar, Sidebar, MainView } from "../components";
import { DragDropProvider } from "@dnd-kit/react";

const NoteBoard = () => {
  return (
    <>
      <Sidebar />
      <Topbar />
      <DragDropProvider>
        <MainView />
      </DragDropProvider>
    </>
  );
};

export default NoteBoard;
