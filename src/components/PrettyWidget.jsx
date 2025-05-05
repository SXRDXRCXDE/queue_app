import React from "react";
import {FaArrowRight} from "react-icons/fa";
import {FiArrowRight} from "react-icons/fi";

export default function PrettyWidget({bgColor,bgImage,title,bgIcon,iconColor,onClick}) {

    return(
        <>
            <div onClick={onClick} className="w-[45%] h-20 rounded-xl relative overflow-hidden">

                {/* Neon Background Glow - very back */}
                <div style={{backgroundColor:`${bgColor}`}} className={`w-60 h-56 z-0 absolute -bottom-14 -left-14 rounded-full bg-[radial-gradient(circle,_,_transparent)] opacity-70 blur-xl`}></div>

                {/* Content Layer */}
                <div className="w-full h-full  relative z-10">

                    {/* Background Image - behind content, above glow */}
                    <img className="absolute -bottom-5 right-5 z-0 object-contain h-20 w-auto " alt="Hospital" src={bgImage} />

                    {/* Foreground Content - on top of all */}
                    <div className="w-full h-full p-3 flex flex-col items-start justify-between relative z-20">
                        <span className={'text-[16px] text-start leading-5 font-semibold line-clamp-2'}>{title}</span>

                        <div style={{backgroundColor:`${bgIcon}`}} className={'w-8 h-8 rounded-full flex items-center absolute justify-center bg-red-500 bottom-3 right-2 mr-1'}>
                            <FiArrowRight color={`${iconColor}`} size={20} />
                        </div>
                    </div>

                </div>
            </div>
        </>
    );

}