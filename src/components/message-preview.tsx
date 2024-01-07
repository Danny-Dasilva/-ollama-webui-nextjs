import React, { useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';

interface MessagePreviewProps {
    heading: string;
    subheading: string;
}

export default function MessagePreview({ heading, subheading }: MessagePreviewProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <button 
            className="bg-[#343541] text-white rounded-md flex justify-between items-start p-2 hover:bg-[#40414f] transition duration-150 ease-in-out border border-[#4d4f5f]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="flex flex-col justify-start">
                <p className="font-bold text-md text-left">{heading}</p> 
                <p className="text-sm text-gray-400">{subheading}</p>
            </div>
                <div className="flex items-center justify-center bg-[#343541] mt-2 rounded-xl h-8 w-8">
                    {isHovered && (
                    <FiArrowUp />
                    )}
                </div>
        </button>
    );
}