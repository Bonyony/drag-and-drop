import React from "react";
import { useRef, useState } from "react";
import "../styles/modalBasic.css";

const NewModalBig = () => {
  return (
    <div className="modal flex flex-col p-5 rounded-md bg-gray-200 text-black border-black border-2">
      <div className="flex flex-row justify-between leading-[1.4]">
        <h3 className="text-xl  mb-2 ">Name your note container:</h3>
        <button>CLOSE</button>
      </div>
      <input className="py-2 pl-1 text-black rounded-sm" type="text" />
    </div>
  );
};

export default NewModalBig;
