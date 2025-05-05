import React from "react";
import {FaArrowRight} from "react-icons/fa";
import AiChatPng from "../assets/AnalisAi.png";

export default function AIwidget({bgColor,bgImage,title,bgIcon,iconColor}) {

    return(
        <>
            <div className="w-48 h-48 rounded-xl flex items-center justify-center relative overflow-hidden">

                {/* Neon Background Glow - very back */}
                <div style={{backgroundColor:`${bgColor}`}} className={`w-60 h-56 z-0 absolute  rounded-full bg-[radial-gradient(circle,_,_transparent)] opacity-70 blur-xl`}></div>

                {/* Content Layer */}
                <div className="w-full h-full  relative z-10">

                    <div className={'absolute left-3 top-0 text-[#1E4272]  flex flex-col items-start text-start'}>
                        <span className={'text-8xl font-semibold'}>AI</span>
                        <span className={'text-[19px] -translate-y-2 font-semibold'}>tavsiyalar</span>
                    </div>


                    {/* Background Image - behind content, above glow */}
                    <img className="w-40 h-40 object-contain absolute -bottom-8 -right-11 z-0" alt="Hospital" src={AiChatPng} />

                    {/* Foreground Content - on top of all */}
                    <div className="w-full h-full p-3 flex flex-col items-start justify-end relative z-20 rounded-lg">
                        {/*<span className={'text-xl text-start leading-5 font-semibold line-clamp-2'}>{title}</span>*/}

                        <div style={{backgroundColor:`${bgIcon}`}} className={'w-8 h-8 rounded-full flex items-center justify-center bg-red-500 self-end mr-1'}>
                            <FaArrowRight color={`${iconColor}`} size={20} />
                        </div>
                    </div>

                </div>
            </div>
        </>
    );

}