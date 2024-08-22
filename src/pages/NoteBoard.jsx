import React from "react";
import { Topbar, Sidebar, MainView, Footer } from "../components";
import { DragDropProvider } from "@dnd-kit/react";

const NoteBoard = () => {
  return (
    <>
      <Sidebar />
      <Topbar />
      <DragDropProvider>
        <MainView />
      </DragDropProvider>
      {/* <Footer /> */}
    </>
  );
};

export default NoteBoard;
