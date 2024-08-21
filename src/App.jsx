import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NoteBoard from "./pages/NoteBoard";
import Info from "./pages/Info";

function App() {
  return (
    <>
      {/* May need to change this overflow handler for the noteboard view */}
      <div className="overflow-handler">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/noteboard" element={<NoteBoard />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
