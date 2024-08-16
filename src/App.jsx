import { useState } from "react";
import { Topbar, Sidebar, MainView } from "./components";
import "./App.css";

function App() {
  return (
    <>
      <Topbar />
      <Sidebar />
      <MainView />
      <h1>This is my app now bitch</h1>
    </>
  );
}

export default App;
