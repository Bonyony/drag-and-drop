import React from "react";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <>
      <nav className="ml-56">
        <div className="flex flex-row justify-end text-gray-100 bg-[#0d0049] py-4 px-3 ">
          <div>
            <ul className="flex flex-row gap-3 mr-1">
              <li>
                <Link
                  to="/"
                  className="bg-[#19358b] hover:bg-[#163bab] py-1 px-2 rounded-sm transition-all duration-150"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/info"
                  className="bg-[#19358b] hover:bg-[#163bab] py-1 px-2 rounded-sm transition-all duration-150"
                >
                  Info
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Topbar;
