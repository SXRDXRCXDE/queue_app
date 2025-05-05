import React from "react";
import {BsArrowLeft} from "react-icons/bs";


export default function CurrentLocation({ location, onBack, showBack }) {
    return (
        <div className="w-full flex items-center">
            {showBack && (
                <button
                    onClick={onBack}
                    className="mr-2 p-2.5 flex items-center justify-center"
                >
                    <BsArrowLeft size={25} />
                </button>
            )}
            <div className="w-full min-w-0 h-12 border-2 rounded-lg flex items-center text-start px-2 font-semibold text-[17px]">
        <span className="line-clamp-1 whitespace-nowrap overflow-x-scroll">
          {location}
        </span>
            </div>
        </div>
    );
}