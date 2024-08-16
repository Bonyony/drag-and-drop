import React, { useState } from "react";
import { LuChevronFirst, LuLightbulb } from "react-icons/lu";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <nav
        className={
          "bg-gray-100 h-screen z-50 py-2 px-3 " + (open ? "w-56" : "w-20")
        }
      >
        <div
          className="flex items-center justify-between gap-4 py-2 mb-2"
          id="sidebar-logo"
        >
          <h1 className="font-semibold">NoteBoardUI</h1>
          <img
            className="max-w-10 max-h-10 rounded-full"
            src="src/assets/images/lookingGlass.jpeg"
            alt="logo image"
          />
        </div>
        <div id="sidebar-items">
          <ul className="flex flex-col gap-2">
            <li>
              <button className="bg-gray-200 p-2 flex flex-row justify-between items-center w-48">
                <LuLightbulb />
                <h4>New</h4>
              </button>
            </li>{" "}
            <li>
              <button className="bg-gray-200 p-2 flex flex-row justify-between items-center w-48">
                <LuLightbulb />
                <h4>Update</h4>
              </button>
            </li>{" "}
            <li>
              <button className="bg-gray-200 p-2 flex flex-row justify-between items-center w-48">
                <LuLightbulb />
                <h4>Delete</h4>
              </button>
            </li>{" "}
            <li>
              <button className="bg-gray-200 p-2 flex flex-row justify-between items-center w-48">
                <LuLightbulb />
                <h4>Find Something</h4>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
