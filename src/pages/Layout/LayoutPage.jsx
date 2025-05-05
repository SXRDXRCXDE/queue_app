import React from "react";
import style from "./style.module.css";
import ListCard from "../../components/ListCard";
import {useLocation, useNavigate} from "react-router-dom";
import LogoLocation from "../../components/Logo&Location";
import {FiArrowLeft} from "react-icons/fi";
import SearchServices from "../../components/SearchServices";
import {Analiz, CardiologsList, Dietolog, Hospitals, Onkolog} from "../../mockData";


export default function LayoutPage() {

    const navigate = useNavigate();

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const title = queryParams.get("title"); // Gets 'MyTitle'

    const hospitalsList = (
        Hospitals.map((value, index) =>
            <ListCard
                onClick={() => {
                    navigate(`/services?selectedHospitalId=${value.id}`)
                }}
                key={index}
                img={value.img}
                name={value.name}
                distance={value.distance}
                categories={value.categories}
            />
        )
    );

    const CardiologList = (
        CardiologsList.map((value, index) =>
            <ListCard
                onClick={() => navigate(`/serviceMain?serviceName=${value.label}&uniqueServiceId=${value.id}`)}
                key={index}
                img={value.img}
                name={value.label}
                distance={`${value.distance} km uzoqlikda`}
                categories={value.price}
            />
        )
    );

    const OnkologList = (
        Onkolog.map((value, index) =>
            <ListCard
                onClick={() => navigate(`/serviceMain?serviceName=${value.label}&uniqueServiceId=${value.id}`)}
                key={index}
                img={value.img}
                name={value.label}
                distance={`${value.distance} km uzoqlikda`}
                categories={value.price}
            />
        )
    );

    const DietologList = (
        Dietolog.map((value, index) =>
            <ListCard
                onClick={() => navigate(`/serviceMain?serviceName=${value.label}&uniqueServiceId=${value.id}`)}
                key={index}
                img={value.img}
                name={value.label}
                distance={`${value.distance} km uzoqlikda`}
                categories={value.price}
            />
        )
    );

    const AnalizList = (
        Analiz.map((value, index) =>
            <ListCard
                onClick={() => navigate(`/serviceMain?serviceName=${value.label}&uniqueServiceId=${value.id}`)}
                key={index}
                img={value.img}
                name={value.label}
                distance={`${value.distance} km uzoqlikda`}
                categories={value.price}
            />
        )
    );


    return(
        <>
            <div className={style.container}>
                {/* Glow background — positioned absolutely relative to .container */}
                <div className={` opacity-50 duration-300 absolute -bottom-40 -right-[500px] w-[1000px] h-[1000px] bg-[radial-gradient(circle,_#7CE856,_transparent)] blur-xl z-0`}></div>

                {/* Actual content wrapper to manage full layout + scroll */}
                <div className={style.contentWrapper}>

                    {/* Sticky Header */}
                    <div className={style.stickyHeader}>

                        <div className="w-full relative h-auto flex items-center justify-between pt-5 z-20">
                            <div
                                onClick={() => {
                                    navigate(-1);
                                }}
                                className="flex items-center justify-center z-20"
                            >
                                <FiArrowLeft size={22} />
                            </div>

                            {/* LogoLocation: sent to back */}
                            <div className="absolute left-0 right-0 z-10">
                                <LogoLocation />
                            </div>
                        </div>

                        {/* Search Component */}
                        <div className="w-full h-16 relative mt-2 z-30">
                            <SearchServices />
                        </div>

                        {/* Title */}
                        <span className={` text-xl font-semibold mt-3 z-20`}>
                            {title}
                        </span>
                    </div>


                    {/* Scrollable section */}
                    <div className={style.scrollArea}>

                        <div className="w-full flex flex-col pt-2 pb-4 gap-2">

                            { title === `Shifoxonalar` && hospitalsList }
                            { title === `Kardiolog` && CardiologList }
                            { title === `Ankolog` && OnkologList }
                            { title === `Dietolog` && DietologList }
                            { title === `Analiz` && AnalizList }

                        </div>

                    </div>
                </div>
            </div>



        </>
    );

}