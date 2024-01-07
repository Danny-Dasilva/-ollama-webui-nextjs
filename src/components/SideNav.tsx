// components/SideNav.js
import { useState } from "react";
import {
  FaPenToSquare,
  FaBook,
  FaMagnifyingGlass,
  FaCircleUser,
  FaGear,
  FaArrowRightFromBracket,
  FaRegCircleUser,
} from "react-icons/fa6";

const SideNavItem = ({ icon, children, active, rightIcon }) => {
  return (
    <div
      className={`flex items-center p-3 bg-black hover:bg-gray-700 ${
        active ? "bg-gray-700" : ""
      } cursor-pointer transition-colors`}
    >
      {icon}
      <div className="flex justify-between items-center w-full ml-3">
        <span>{children}</span>
        {rightIcon && <span>{rightIcon}</span>}
      </div>
    </div>
  );
};

export default function SideNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className="flex flex-col justify-between w-64 bg-black text-white h-screen relative overflow-visible">
      <div>
        <SideNavItem
          icon={<FaCircleUser size="1.6em" />}
          rightIcon={<FaPenToSquare size="1.5em" />}
        >
          New Chat
        </SideNavItem>
        <SideNavItem icon={<FaBook size="1.5em" />}>ModelFiles</SideNavItem>
        <SideNavItem icon={<FaPenToSquare size="1.5em" />}>Prompts</SideNavItem>
        <div className="p-3 flex items-center">
          <FaMagnifyingGlass size="1em" />
          <input
            className="bg-transparent p-2 ml-3 placeholder-gray-400 text-white w-full focus:outline-none"
            placeholder="Search"
            type="text"
          />
        </div>
      </div>
      <div className="flex flex-col justify-end items-center w-full overflow-visible">

        {isOpen && (
          <div className="bottom-full left-0 w-full bg-gray-800 text-white rounded-lg mb-1 px-4 py-2">
            <div className="flex items-center py-2 cursor-pointer hover:bg-gray-700">
              <FaRegCircleUser size="1em" className="mr-2" />
              Admin Panel
            </div>
            <div className="flex items-center py-3 cursor-pointer hover:bg-gray-700">
              <FaGear size="1em" className="mr-2" />
              Settings
            </div>
            <hr className="border-gray-600" />
            <div className="flex items-center py-3 cursor-pointer hover:bg-gray-700">
              <FaArrowRightFromBracket size="1em" className="mr-2" />
              Sign Out
            </div>
          </div>
        )}
            <hr className="border-gray-600 w-full" />

        <div
          className="flex items-center p-4 hover:bg-gray-700  mt-1 cursor-pointer transition-colors w-full rounded-lg "
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaCircleUser size="2.5em" />
          <span className="ml-3">Danny Dasilva</span>
        </div>
      </div>
    </aside>
  );
}
