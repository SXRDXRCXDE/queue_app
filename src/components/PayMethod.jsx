import React, { useState, useEffect } from "react";
import { FaFire } from "react-icons/fa";
import { BsCash } from "react-icons/bs";

export default function PayMethod({ data }) {

    const formattedPrice = data?.price ? data.price.toLocaleString("ru-RU") : "Not available"; // Handle undefined price

    // Truncate name if it's more than 13 characters
    const truncatedName = data?.name?.length > 13 ? `${data.name.slice(0, 13)}...` : data?.name;

    return (
        <div className="w-full flex flex-col">
            {/* Service Info Section */}
            <div className="w-full flex flex-col items-start text-start mt-8">
                <h1 className="text-5xl text-[#045DE3] font-semibold">{truncatedName}</h1>
                <p className="text-xl text-[#045DE3] mt-2">
                    Narx: {formattedPrice} so‘m
                </p>

                <div className="flex items-center p-3 mt-6 rounded-full bg-[#254EDB] text-white font-semibold">
                    <span>Xozirgi kunda</span>
                    <div className="w-6 h-6 mx-2 rounded-full bg-gradient-to-t from-[#FFBB00] via-[#FF2600] to-[#FF0000] flex items-center justify-center">
                        <FaFire size={15} color="white" />
                    </div>
                    <span>Top</span>
                </div>
            </div>

        </div>
    );
}
