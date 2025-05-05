import React from "react";
import style from "../Home/style.module.css";
import Button from "../../components/Button";
import LogoLocation from "../../components/Logo&Location";
import ServiceCard from "../../components/ServiceCard";
import {Hospitals, selectedData, SelectedHospitalData} from "../../mockData";
import {useLocation, useNavigate} from "react-router-dom";
import SelectedHospitalCard from "../../components/SelectedHospitalCard";
import {FiArrowLeft} from "react-icons/fi";


export default function ServicesPage() {

    const navigate = useNavigate();

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const hospitalId = queryParams.get("selectedHospitalId");

    return(
        <div className={`${style.container} flex flex-col h-screen`}>
            {/* Top Section */}
            <div className={style.topCont}>
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
                <SelectedHospitalCard
                    className="mt-4"
                    data={Hospitals[hospitalId-1]}
                />
            </div>

            {/* Scrollable Middle Section */}
            <div className="flex-1 w-full h-auto px-4 pb-10 overflow-y-auto">

                <div className="w-full flex flex-col pt-2 pb-4 gap-2">

                    {
                        SelectedHospitalData[hospitalId-1].services.map((value, index)=> <ServiceCard
                            onClick={() => navigate(`/serviceMain?hospitalId=${hospitalId}&serviceId=${value.id}`)}
                            key={index}
                            id={value.id}
                            name={value.name}
                            price={value.price}
                        /> )
                    }

                </div>

            </div>


            <div className={'sticky bottom-0 z-50 h-24 w-full px-4'}>
                <Button fontSize={25} bgColor={'#F4F4F4'} color={`#474747`} value={'Kerakli xizmatni tanlang'} />
            </div>
        </div>
    );

}