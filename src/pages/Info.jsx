import React from "react";
import { Link } from "react-router-dom";
import {
  LuPencilRuler,
  LuLightbulb,
  LuTrash2,
  LuCog,
  LuGithub,
  LuGlobe,
} from "react-icons/lu";

const Info = () => {
  return (
    <>
      <div className="home text-white flex flex-col justify-center h-screen w-screen items-center">
        <h1 className="text-5xl px-5 font-black italic mb-6">
          Why NoteBoardUI?
        </h1>

        <div className="flex flex-row gap-10 scale-150">
          <LuPencilRuler />
          <LuLightbulb />
          <LuTrash2 />
          <LuCog />
        </div>
        <p className="max-w-[700px] text-center m-5">
          NoteBoardUI is for structuring your thoughts and objectives. Currently
          it is open to anything you wish to place on the board. Should you want
          to structure your ideas, add an overall Title or something.
        </p>
        <div className="mb-5 mx-8 flex flex-row">
          <Link
            to="/noteboard"
            className=" bg-[#163bab] hover:bg-[#1f50e2] font-semibold py-2 px-4 rounded transition-all duration-300"
          >
            Go to the Note Board
          </Link>
        </div>
        <div className="flex flex-row gap-5 scale-110 mt-2  rounded-sm py-2 px-2 text-white">
          <a
            className="hover:text-red-400"
            href="https://frankfrancione.com/"
            target="_blank"
          >
            <LuGlobe />
          </a>
          <a
            className="hover:text-red-400"
            href="https://github.com/Bonyony"
            target="_blank"
          >
            <LuGithub />
          </a>
        </div>
      </div>
    </>
  );
};

export default Info;
