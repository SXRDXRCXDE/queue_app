import React from "react";
import { FaStar } from "react-icons/fa";

export default function ReviewComponent({image,name,review,stars}) {
    return (
        <div className="w-full h-28 bg-white rounded-xl border border-green-800 px-4 py-3 relative flex items-start gap-3 shadow-sm">

            <div className={'w-auto h-full flex pt-4 '}>

                <div className="w-12 h-12 rounded-full border border-green-800 bg-gray-200 flex items-center justify-center overflow-hidden">
                    <img src={image} className={'h-full w-full object-cover '} alt={`Review of ${name} `}/>
                </div>


            </div>
            {/* Avatar */}

            {/* Review content */}
            <div className="flex flex-col  flex-grow h-full pt-2">
                {/* Name + Stars */}
                <div className="flex items-center justify-between">
                    <span className="font-semibold text-black text-base">{name}</span>
                    <div className="flex gap-1">
                        {[...Array(stars)].map((_, i) => (
                            <FaStar key={i} color="orange" size={16} />
                        ))}
                    </div>
                </div>

                {/* Review Text */}
                <p className="text-gray-400 text-base mt-1 line-clamp-2">{review} </p>
            </div>

            {/* Button (absolute) */}
            <button className="absolute bottom-3 right-4 bg-gradient-to-r from-lime-400 to-green-700 text-white px-4 py-1 rounded-full text-sm font-medium shadow">
                Ko‘rish
            </button>
        </div>
    );
}
