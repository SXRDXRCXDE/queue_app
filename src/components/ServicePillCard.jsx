import React from "react";

const ServicePillCard = ({ name, price, day, time }) => {



    return (
        <div className="w-full flex justify-between h-16 items-start px-3 py-2 rounded-xl  bg-gradient-to-r from-[#4a90e2] to-[#3a7bd5] text-white w-fit min-w-[300px] font-sans">
            <div className={'text-start h-full'}>
                <div className="text-[19px] line-clamp-1 font-semibold">{name}</div>
                <div className="text-[14px] ">{price.toLocaleString("ru-RU")} so'm</div>
            </div>
            <div className="text-right h-full">
                <div className="text-[19px] font-semibold">{day}</div>
                <div className="text-[15px]">Soat: {time}</div>
            </div>
        </div>
    );
};

export default ServicePillCard;
