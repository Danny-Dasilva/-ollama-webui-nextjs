import React from 'react';
import { FaPaperclip, FaMicrophone, FaArrowUp } from "react-icons/fa6";

export default function ChatInput() {
    return (
        <>
            <div className="flex items-center bg-[#343541] text-white p-2 rounded-md border border-[#4d4f5f]">
                <button className="bg-transparent p-1 rounded-md">
                    <FaPaperclip className="text-gray-400" />
                </button>
                <input
                    className="bg-transparent border-none text-white placeholder-gray-400 focus:ring-0 w-full focus:outline-none focus:border-[#4d4f5f]"
                    placeholder="Send a message"
                />
                <button className="bg-transparent p-1 rounded-md">
                    <FaMicrophone className="text-gray-400" />
                </button>
                <button className="bg-white p-1 rounded-md">
                    <FaArrowUp className="text-gray-400" />
                </button>
            </div>
            <div className="flex flex-col mt-4">
                <p className="text-gray-400 text-xs font-light text-center">
                    LLMs can make mistakes. Verify important information.
                </p>
            </div>
        </>
    );
}