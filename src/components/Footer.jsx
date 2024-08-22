import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="ml-56 bg-gray-100 flex flex-col items-center">
        <h2>NoteBoardUI</h2>
        <ul className="flex flex-row gap-5">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/info">Info</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
