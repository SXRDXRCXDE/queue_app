import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function ListCard({ id, img, name, distance, categories, onClick }) {
    return (
        <div
            key={id}
            onClick={onClick}
            className="w-full h-24 flex items-start justify-between rounded-xl bg-white border border-[#113600] p-4 cursor-pointer hover:shadow-md transition-shadow"
        >
            {/* Left side */}
            <div className="h-full flex items-center gap-4">
                <img
                    className="w-14 h-14 object-cover rounded-full"
                    alt={name}
                    src={img || "https://placehold.co/100x100"}
                />

                <div className="flex flex-col items-start text-start">
          <span className="text-[18px] text-[#164600] font-semibold line-clamp-1">
            {name}
          </span>
                    <span className="text-[14px] text-[#6F8D6C] font-[400] line-clamp-1">
            {distance}
          </span>
                    <span className="text-[15px] text-[#6F8D6C] font-[400] line-clamp-1">
                      {typeof categories === "number"
                          ? categories.toLocaleString("uz-UZ") + ` so'm` // outputs 150,000
                          : categories}
                    </span>

                </div>
            </div>

            {/* Right side */}
            <div className="h-full flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-[#113600] flex items-center justify-center">
                    <FaArrowRightLong color="white" size={20} />
                </div>
            </div>
        </div>
    );
}
