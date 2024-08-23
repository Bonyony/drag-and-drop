import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="ml-56 text-black bg-gray-100  py-4 px-3  flex flex-col items-center">
        <h2 className="text-xl font-black italic">NoteBoardUI</h2>
        <ul className="flex flex-row gap-5 mt-5">
          <li>
            <Link
              to="/"
              className="bg-[#0562d3] hover:bg-blue-500 text-white py-1 px-2 rounded-sm transition-all duration-150"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/info"
              className="bg-[#0562d3] hover:bg-blue-500 text-white py-1 px-2 rounded-sm transition-all duration-150"
            >
              Info
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
