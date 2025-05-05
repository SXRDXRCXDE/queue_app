import React, { useEffect, useState } from "react";
import style from "../Home/style.module.css";
import LogoLocation from "../../components/Logo&Location";
import SearchServices from "../../components/SearchServices";
import { useNavigate } from "react-router-dom";
import ServicePillCard from "../../components/ServicePillCard";

export default function History() {
    const navigate = useNavigate();
    const [services, setServices] = useState([]);

    useEffect(() => {
        const selectedService = localStorage.getItem("selectedServices");
        if (selectedService) {
            setServices(JSON.parse(selectedService));
        }
    }, []);

    return (
        <div className={`${style.container} relative flex flex-col pb-20`}>
            <div className="absolute bottom-0 right-0 w-full h-screen bg-[radial-gradient(circle,_#7CE856,_transparent)] blur-xl opacity-50 -z-10 pointer-events-none"></div>

            {/* Top Section */}
            <div className={style.topCont}>
                <LogoLocation />
                <SearchServices />
            </div>

            {/* Scrollable Content Section */}
            <div className="flex-1 w-full h-auto gap-3 px-4 pb-10 overflow-y-auto">

                <div className={'w-full flex flex-col gap-2'}>

                    {services.length === 0 ? (
                        <div className="w-full mt-4 text-center text-gray-400">
                            <p>Tarix bo'sh.... </p>
                        </div>
                    ) : (
                        services.map((value, index) => (
                            <ServicePillCard
                                key={index}
                                name={value.name}
                                day={value.day}
                                time={value.time}
                                price={value.price}
                            />
                        ))
                    )}

                </div>

            </div>
        </div>
    );
}
