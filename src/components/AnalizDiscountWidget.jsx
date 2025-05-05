import React from "react";
import {FaArrowRight} from "react-icons/fa";
import probirka from "../assets/probirka.png";

export default function AnalizDiscountWidget({bgColor,title,bgIcon,iconColor,discountPrice}) {

    return(
        <>
            <div className="w-48 h-48 rounded-xl relative overflow-hidden">

                {/* Neon Background Glow - very back */}
                <div style={{backgroundColor:`${bgColor}`}} className={`w-60 h-56 z-0 absolute -bottom-14 -left-14 rounded-full bg-[radial-gradient(circle,_,_transparent)] opacity-70 blur-xl`}></div>

                {/* Content Layer */}
                <div className="w-full h-full  relative z-10">

                    {/* Background Image - behind content, above glow */}
                    <img className="absolute h-80 object-contain -bottom-28 -left-6 rotate-[12deg] z-0" alt="Hospital" src={probirka} />

                    {/* Foreground Content - on top of all */}
                    <div className="w-full h-full p-3 flex flex-col items-end justify-between relative z-20 rounded-lg">
                        <span className={'w-1/2 text-[15px] text-end leading-4 font-semibold line-clamp-2'}>{title}</span>


                        <div className={'w-1/2 flex flex-col items-end text-end relative'}>

                            <span className={'text-[18px] font-semibold -translate-y-4 line-clamp-2'}>Chegirmalar</span>
                            <span className={'absolute whitespace-nowrap font-semibold line-clamp-2 translate-y-1.5 '}>{discountPrice} so‘m</span>

                        </div>


                        <div style={{backgroundColor:`${bgIcon}`}} className={'w-8 h-8 rounded-full flex items-center justify-center bg-red-500 self-end mr-1'}>
                            <FaArrowRight color={`${iconColor}`} size={20} />
                        </div>
                    </div>

                </div>
            </div>
        </>
    );

}