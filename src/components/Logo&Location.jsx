import React from "react";
import Analislogo from "../assets/analis logo.png";

export default function LogoLocation() {

    const location = localStorage.getItem("myLocation");

    const trimmedLocation = location?.split(",").slice(0, 3).join(",").trim();

    return(
        <div className={'flex flex-col items-center text-center'}>
            {/*Logo*/}
            <img className={'w-auto h-9 object-contain'} src={Analislogo} alt={'Analis logo'}/>
            {/*Location*/}
            <span className={'text-[12px] font-semibold mt-0.5'}>{trimmedLocation}</span>

        </div>
    );

}