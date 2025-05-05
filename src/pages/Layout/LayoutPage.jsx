import React from "react";
import style from "./style.module.css";

export default function Layout() {

    return(
        <>
            <div className={style.container}>

                {/* Background glow */}
                <div className={'absolute -bottom-60 -right-[500px] w-[1000px] h-[1000px] bg-[radial-gradient(circle,_#7CE856,_transparent)] opacity-70 blur-xl z-0'}></div>

                {/* Foreground content (on top) */}
                <div className={style.containerWrapper}>

                    <div></div>

                </div>

            </div>
        </>
    );

}