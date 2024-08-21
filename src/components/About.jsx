import React from "react";

const About = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <h2 className="mx-8 mt-12 text-5xl font-black italic text-white">
          What is NoteBoardUI?
        </h2>
        <div className="text-center font-semibold flex flex-row mx-4">
          <div className="bg-[#002451] p-10 mx-8 my-12 rounded-3xl border-[#0562d3] border-2">
            <p className="text-white">NoteBoardUI is a free application</p>
          </div>
          <div className="bg-[#002451] p-10 mx-8 my-12 rounded-3xl border-[#0562d3] border-2">
            <p className="text-white">That does things...</p>
          </div>
          <div className="bg-[#002451] p-10 mx-8 my-12 rounded-3xl border-[#0562d3] border-2">
            <p className="text-white">With Drag and Drop functionality!</p>
          </div>
        </div>
        <img
          className="rounded-full max-h-[300px] mb-10 border-[#0562d3] border-2"
          src="src/assets/images/lookingGlass.jpeg"
          alt=""
        />
      </div>
    </>
  );
};

export default About;
