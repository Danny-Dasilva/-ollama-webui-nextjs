import { FaPenToSquare, FaUpload, FaDownload, FaCaretDown, FaPlus, FaGear } from 'react-icons/fa6';
import { useState } from 'react';

export default function TopMenu() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="text-white p-4 flex flex-col justify-between items-center">
            <div className="flex justify-between items-center w-full mb-4">
                <div className="flex items-center">
                    <FaPenToSquare className="text-white mr-2" />
                    <h1 className="font-semibold">Roman Empire Fact</h1>
                </div>
                <div className="flex items-center p-2 rounded">
                    <button className="text-gray-200 hover:text-white transition-colors border border-[#4d4f5f] rounded-lg p-2 mr-2">
                        <FaUpload />
                    </button>
                    <button className="text-gray-200 hover:text-white transition-colors border border-[#4d4f5f] rounded-lg p-2">
                        <FaDownload />
                    </button>
                </div>
            </div>
            <div className="relative  text-white px-4 w-full max-w-screen-lg mx-auto flex items-center justify-between">
                <div 
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center justify-between cursor-pointer w-full pr-2"
                >
                    <div className="flex flex-col">
                        <span className="font-semibold">dolphin-mixtral:latest</span>
                    </div>
                    <FaCaretDown />
                </div>
                <div className="flex items-center">
                    <button className="text-gray-400 hover:text-white focus:outline-none">
                        <FaPlus className="mr-4" />
                    </button>
                    <button className="text-gray-400 hover:text-white focus:outline-none">
                        <FaGear className="mr-4" />
                    </button>
                </div>
                {isOpen && (
                    <div className="absolute top-full left-0 right-0 bg-gray-700 mt-2 p-4">
                        {/* Dropdown content goes here */}
                        {/* You can fill this with the content you want to show when the caret is clicked */}
                    </div>
                )}
            </div>
            <div className="w-full text-left ml-8">
                <button className="text-sm text-gray-400">Set as default</button>
            </div>
        </nav>
    );
}