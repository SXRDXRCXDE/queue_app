import React from "react";
import style from "./style.module.css";


export default function Button({value,onClick,hide,bgColor,color,trigger,fontSize,padding}) {

    return(
        <>
            <div onClick={onClick} style={{padding:`${padding}px`}} className={`  w-full h-auto  flex flex-col `}>
                {/*Button*/}
                <div style={{
                        backgroundColor: trigger ? '#254EDB' : bgColor,
                        color: trigger ? '#ffffff' : color,
                        fontSize: fontSize ? `${fontSize}px` : `20px`,
                    }}
                     className={hide? style.buttonNextEnd : style.buttonComponent}>
                    {value}
                </div>

            </div>
        </>
    );

}