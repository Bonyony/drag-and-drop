import React, { createContext, useState } from "react";
import { Topbar, Sidebar, MainView, Footer } from "../components";
import { DragDropProvider } from "@dnd-kit/react";

// export const ItemContext = createContext({
//   A: ["A0", "A1", "A2", "Hello", "Meet the real me!"],
//   B: [
//     "B0",
//     "B1",
//     "This is a very long note, who's only purpose is to test what happens when the subnotes are really long. I like it so far.",
//   ],
//   C: ["C0", "C1", "C2", "Give", "Me", "Cookies", "Dumb", "Stupids", "Hobbits"],
// });

const NoteBoard = () => {
  // const [items, setItems] = useState(ItemContext);
  return (
    <>
      <Sidebar />
      <Topbar />
      {/* <ItemContext.Provider value={{ items, setItems }}> */}
      <DragDropProvider>
        <MainView />
      </DragDropProvider>
      {/* </ItemContext.Provider> */}
      {/* <Footer /> */}
    </>
  );
};

export default NoteBoard;
