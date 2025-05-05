import React from "react";

export default function SelectedHospitalCard({ data, className = "" }) {
    const { img, name, distance, rating } = data || {};

    return (
        <div className={`w-full h-24 flex items-start justify-between ${className}`}>
            {/* Left side */}
            <div className="h-full flex items-center gap-4">
                <img
                    className="w-14 h-14 object-cover rounded-full"
                    alt={name}
                    src={img || "https://placehold.co/100x100"}
                />

                <div className="flex flex-col items-start text-start">
                    {rating && (
                        <span className="text-[16px] text-black font-[700] line-clamp-1">
              {rating} ⭐
            </span>
                    )}
                    <span className="text-[20px] text-black font-semibold line-clamp-1">
            {name}
          </span>
                    <span className="text-[17px] text-black font-[400] line-clamp-1">
            {distance}
          </span>
                </div>
            </div>
        </div>
    );
}
