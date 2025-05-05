import React from "react";
import {FaCheck} from "react-icons/fa";

export default function DiscountCard({newPrice,oldPrice,name,service,image}) {
    return (
        <div className="relative w-full max-w-md h-28 p-2.5 bg-white rounded-2xl border border-green-500 flex flex-col shadow-md overflow-hidden">
            {/* Green tick background decoration */}
            <div className="absolute -right-10 -top-4 w-32 h-32 flex items-center justify-center bg-green-100 rounded-full">
                <FaCheck size={65} color={'white'} />
            </div>

            {/* Top Row: Avatar, Title, Price */}
            <div className="flex items-center justify-between z-10 relative">
                <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                        <img src={image} className={'h-full w-full object-cover '} alt={`Review of  `}/>
                    </div>
                    <span className="ml-3 text-lg line-clamp-1 font-semibold">{name}</span>
                </div>
                <span className="text-green-600 font-bold text-lg line-clamp-1 whitespace-nowrap ">{(newPrice).toLocaleString("ru-RU")} so'm</span>
            </div>

            {/* Bottom Row: Description, Old Price, Badge */}
            <div className="flex justify-between items-center mt-4 z-10 relative">
                <div>
                    <span className="text-xl font-bold">{service}</span>
                    <span className="ml-2 text-gray-500 line-through">{(oldPrice).toLocaleString("ru-RU")} so'm</span>
                </div>

                <button className="bg-green-600 text-white text-sm font-semibold py-1 px-4 rounded-full shadow">
                    Chegirma
                </button>
            </div>
        </div>
    );
}
