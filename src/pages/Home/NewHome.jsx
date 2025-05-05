import React from "react";
import style from "./style.module.css";
import BottomNavbar from "../../components/BottomNavbar";
import {categories} from "../../mockData";
import TopWidget from "../../components/TopWidget";
import addressPng from "../../assets/address.png";
import PrettyWidget from "../../components/PrettyWidget";
import {useNavigate} from "react-router-dom";
import LogoLocation from "../../components/Logo&Location";
import SearchServices from "../../components/SearchServices";


export default function NewHome() {

    const navigate = useNavigate();

    return(
        <div className={`${style.container} flex flex-col pb-20 min-h-screen`}>
            {/* Top Section */}
            <div className={style.topCont}>

                {/*Here top section shows logo, location and searching component */}
                <LogoLocation/>

                {/*Search*/}
                <SearchServices/>

            </div>

            {/* Scrollable Middle Section */}
            <div className="flex-1 w-full h-auto px-4 pb-10 overflow-y-auto">

                {/*Categories*/}

                <div className="flex w-full justify-between items-center py-4">
                    {categories.map((cat, idx) => (
                        <div onClick={()=> {
                            navigate(`/layout?title=${cat.label}`);
                        }}
                             key={idx}
                             className="flex flex-col items-center">
                            <div
                                className={`w-14 h-14 rounded-full flex items-center justify-center ${cat.color}`}
                            >
                                {cat.icon ? cat.icon : null}
                            </div>
                            <span className="mt-2 text-sm font-medium">{cat.label}</span>
                        </div>
                    ))}
                </div>

                {/* widgets */}
                <div className={'w-full flex items-start gap-2 '}>

                    <TopWidget
                        onClick={() => navigate(`/layout?title=Shifoxonalar`)}
                        title={'Top shifoxonalar'}
                        subtitle={'Hammasini ko‘rish '}
                    />
                    <PrettyWidget
                        bgColor="#CB874E"
                        bgIcon="#5156D4"
                        title="Xarita orqali belgilash"
                        iconColor="white"
                        bgImage={addressPng}
                    />

                </div>

                {/* Integration for ads */}
                <div className={'w-full h-28 bg-[#D9D9D9] rounded-xl mt-2'}></div>


            </div>



            {/* Bottom Navbar */}
            {/*<BottomNavbar />*/}
        </div>
    );

}