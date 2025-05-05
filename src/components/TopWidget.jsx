import React from "react";
import {FaArrowRightLong} from "react-icons/fa6";
import {FiArrowRight} from "react-icons/fi";


export default function TopWidget({title,subtitle,onClick}) {

    return(
        <>
            <div onClick={onClick} className="w-[55%] h-20 rounded-xl bg-blue-700 relative overflow-hidden">
                {/* Background Circles */}
                <div className="absolute -bottom-[70px] -right-24 z-0 bg-white/40 w-32 h-32 rounded-full"></div>
                <div className="absolute -bottom-20 -right-24 z-0 bg-white/40 w-40 h-40 rounded-full"></div>
                <div className="absolute -bottom-[110px] -right-28 z-0 bg-white/40 w-52 h-52 rounded-full"></div>

                {/* Foreground Content */}
                <div className="relative z-10 w-full h-full flex items-start justify-between p-4">
                    {/* Left */}
                    <div className="flex flex-col items-start text-start">
                        <span className="text-[16px] font-semibold text-white">{title}</span>
                        <div className="font-[300] text-white text-[12px] flex items-center gap-2 mt-1">
                            <span>{subtitle}</span>
                            <FaArrowRightLong className="translate-y-0.5" size={14} />
                        </div>
                    </div>

                    {/* Right */}
                    <div style={{backgroundColor:`#254EDB`}} className={'w-8 h-8 rounded-full flex items-center justify-center bg-red-500 absolute bottom-3 right-2 mr-1'}>
                        <FiArrowRight color={`white`} size={20} />
                    </div>

                </div>
            </div>
        </>
    );

}