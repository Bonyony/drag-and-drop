import React from "react";
import { Link } from "react-router-dom";
import { LuPencilRuler, LuLightbulb, LuTrash2, LuCog } from "react-icons/lu";
import { About } from "../components";
import "../styles/home.css";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="flex flex-col justify-center h-screen w-screen items-center">
          <h1 className="text-8xl font-black italic m-5 text-white">
            NoteBoardUI
          </h1>
          <div className="flex flex-row gap-10 scale-150 text-white mb-2">
            <LuPencilRuler />
            <LuLightbulb />
            <LuTrash2 />
            <LuCog />
          </div>
          <Link
            to="/noteboard"
            className="m-5  text-white bg-[#163bab] hover:bg-[#1f50e2] font-semibold py-2 px-4 rounded transition-all duration-300"
          >
            Go to the Note Board
          </Link>
        </div>
        <About />
      </div>
    </>
  );
};

export default Home;
