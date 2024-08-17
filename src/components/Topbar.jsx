import React from "react";

const Topbar = () => {
  return (
    <>
      <nav className="ml-56">
        <div className="flex flex-row justify-end text-gray-100 bg-[#0d0049] py-4 px-3 ">
          <div>
            <ul className="flex flex-row gap-3 mr-1">
              <li>
                <a
                  href=""
                  className="bg-[#19358b] hover:bg-[#163bab] py-1 px-2 rounded-sm transition-all duration-150"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="bg-[#19358b] hover:bg-[#163bab] py-1 px-2 rounded-sm transition-all duration-150"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Topbar;
