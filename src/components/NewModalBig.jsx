import React from "react";
import { useRef, useState } from "react";
import "../styles/modalBasic.css";

const NewModalBig = () => {
  return (
    <div className="modal flex flex-col p-5 rounded-lg bg-gray-100 text-black  ">
      <h3 className="text-xl mb-2 ">Name your note:</h3>
      <input
        className="py-2 pl-1 text-black rounded-md border-2 border-blue-200"
        placeholder="Your note here..."
        type="text"
      />
      <div className="flex flex-row justify-between mt-3">
        <button className="text-md p-2 bg-green-400 hover:bg-green-500 rounded-md transition-all duration-200">
          ADD
        </button>
        <button className="text-md p-2 bg-red-400 hover:bg-red-500 rounded-md transition-all duration-200">
          CANCEL
        </button>
      </div>
    </div>
  );
};

export default NewModalBig;
