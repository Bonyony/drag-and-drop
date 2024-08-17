import { useState } from "react";
import { Topbar, Sidebar, MainView } from "./components";
import "./App.css";

function App() {
  return (
    <>
      <Sidebar />
      <Topbar />
      <MainView />
    </>
  );
}

export default App;
