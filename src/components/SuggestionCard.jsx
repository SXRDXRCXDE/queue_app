import React from "react";
import { Star } from "lucide-react";

const SuggestionCard = ({ data , onClick}) => {
    if (!data) return null;

    const { distance, price, rating } = data;
    const formattedPrice = new Intl.NumberFormat("uz-UZ").format(price);

    return (
        <div onClick={onClick} className="w-auto whitespace-nowrap h-20 p-2.5 flex items-center justify-between bg-blue-50 rounded shadow-md">
            <div className="h-full flex flex-col justify-between">
                <span className="text-xs text-gray-700">{distance} km</span>
                <span className="text-xs font-semibold text-blue-900">
          {formattedPrice} so'm
        </span>
            </div>

            <div className="h-full flex flex-col items-end justify-between">
                <div className="flex items-center text-xs font-medium text-gray-800">
                    {rating}
                    <Star className="w-3 h-3 ml-1 text-orange-400 fill-orange-400" />
                </div>
                <span className="text-lg translate-y-1 font-semibold text-blue-800">→</span>
            </div>
        </div>
    );
};

export default SuggestionCard;
