import React from "react";
import { Link } from "react-router-dom";

const Info = () => {
  return (
    <>
      <div className="home flex flex-col justify-center h-screen w-screen items-center">
        <h1 className="text-5xl px-5 font-black italic text-white">
          Got a problem? Go fuck yourself.
        </h1>
        <Link
          to="/noteboard"
          className="m-5  text-white bg-[#163bab] hover:bg-[#1f50e2] font-semibold py-2 px-4 rounded transition-all duration-300"
        >
          Go to the Note Board
        </Link>
      </div>
    </>
  );
};

export default Info;
