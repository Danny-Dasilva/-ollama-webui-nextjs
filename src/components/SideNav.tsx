// components/SideNav.js
import { FaPen, FaBook, FaSearch, FaUserCircle } from 'react-icons/fa';

const SideNavItem = ({ icon, children, active }) => {
    return (
        <div
            className={`flex items-center p-3 hover:bg-gray-700 ${
                active ? 'bg-gray-700' : ''
            } cursor-pointer transition-colors`}
        >
            {icon}
            <span className="ml-3">{children}</span>
        </div>
    );
};

export default function SideNav() {
    return (
        <aside className="flex flex-col justify-between w-64 bg-black text-white h-screen">
            <div>
                <SideNavItem icon={<FaUserCircle size="1.5em" />} active>
                    New Chat
                </SideNavItem>
                <SideNavItem icon={<FaBook size="1.5em" />}>ModelFiles</SideNavItem>
                <SideNavItem icon={<FaPen size="1.5em" />} active>
                    Prompts
                </SideNavItem>
                <div className="p-3 flex items-center">
                    <FaSearch size="1em" />
                    <input
                        className="bg-transparent p-2 ml-3 placeholder-gray-400 text-white w-full focus:outline-none"
                        placeholder="Search"
                        type="text"
                    />
                </div>
            </div>
            <div className="flex flex-col justify-end items-center pb-4">
                <div className="flex items-center p-3 hover:bg-gray-700 cursor-pointer transition-colors">
                    <FaUserCircle size="2.5em" />
                    <span className="ml-3">Danny Dasilva</span>
                </div>
            </div>
        </aside>
    );
}