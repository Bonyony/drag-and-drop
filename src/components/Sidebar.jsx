import React, { useState, useContext } from "react";
import { LuPencilRuler, LuLightbulb, LuTrash2, LuCog } from "react-icons/lu";
import NewModalBig from "./NewModalBig";
import { ItemContext } from "../pages/NoteBoard";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const { items, setItems } = useContext(ItemContext);

  // Button functionality
  function makeNewBigNote() {
    console.log("it works!");

    // Logic here needs to add a key value pair to the items object such as: D: ["x"]
    // The key will be an input by the user. All keys HAVE to be unique
    let uniqueID = Date.now().toString(36) + Math.random().toString(36);
    setItems(() =>
      Object.assign({ [uniqueID]: [Math.random() * Date.now()] }, items)
    );

    console.log(items);
  }

  function makeUpdate() {
    console.log("me working!");
  }

  function deleteNote() {
    console.log("you gon get deleted!");

    // deleting the key using the index
    setItems(() => delete items[Object.keys[0]]);

    console.log(items);
  }

  return (
    <>
      <nav
        className={
          "fixed bg-gray-100 h-screen z-50 py-2 px-3 " +
          (open ? "w-56" : "w-20")
        }
      >
        <div
          className="flex items-center justify-between gap-4 py-2 mb-2"
          id="sidebar-logo"
        >
          <h1 className="font-semibold">NoteBoardUI</h1>
          <img
            className="max-w-10 max-h-10 rounded-full mr-2"
            src="src/assets/images/lookingGlass.jpeg"
            alt="logo image"
          />
        </div>
        <div id="sidebar-items">
          <ul className="flex flex-col gap-2">
            <li>
              <button
                onClick={makeNewBigNote}
                className="group bg-gray-200 hover:bg-gray-300 p-2  flex flex-row justify-between items-center w-48 rounded-md"
              >
                <LuLightbulb className="group-hover:text-blue-500" />
                <h4 className="">New</h4>
              </button>
            </li>{" "}
            <li>
              <button
                onClick={makeUpdate}
                className="group bg-gray-200 hover:bg-gray-300 p-2 flex flex-row justify-between items-center w-48 rounded-md"
              >
                <LuPencilRuler className="group-hover:text-green-600" />
                <h4>Update</h4>
              </button>
            </li>{" "}
            <li>
              <button
                onClick={deleteNote}
                className="group bg-gray-200 hover:bg-gray-300 p-2 flex flex-row justify-between items-center w-48 rounded-md"
              >
                <LuTrash2 className="group-hover:text-red-600" />
                <h4>Delete</h4>
              </button>
            </li>{" "}
            <li>
              <button className="group bg-gray-200 hover:bg-gray-300 p-2 flex flex-row justify-between items-center w-48 rounded-md">
                <LuCog className="group-hover:text-teal-700" />
                <h4>Settings</h4>
              </button>
            </li>
          </ul>
        </div>
      </nav>
      {/* {showAddModal && <NewModalBig />} */}
    </>
  );
};

export default Sidebar;
