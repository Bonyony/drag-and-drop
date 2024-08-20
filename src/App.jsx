import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NoteBoard from "./pages/NoteBoard";
import Info from "./pages/Info";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/noteboard" element={<NoteBoard />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </>
  );
}

export default App;
