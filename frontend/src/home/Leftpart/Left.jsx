import React from "react";
import Search from "./Search";
import Users from "./Users";
import { IoMdClose } from "react-icons/io"; // Close Icon

function Left({ isDrawerOpen, setIsDrawerOpen }) {
  return (
    <div
      className={`fixed md:relative top-0 left-0 h-full w-[75%] md:w-[30%] bg-black text-gray-300 transition-transform duration-300 ${
        isDrawerOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      }`}
    >
      {/* Close Button for Mobile */}
      <button
        className="absolute top-5 right-5 text-white text-2xl md:hidden"
        onClick={() => setIsDrawerOpen(false)}
      >
        <IoMdClose />
      </button>

      <h1 className="font-bold text-3xl p-2 px-11">Chats</h1>
      <Search />
      <div className="flex-1 overflow-y-auto" style={{ minHeight: "calc(84vh - 10vh)" }}>
        <Users />
      </div>
    </div>
  );
}

export default Left;
