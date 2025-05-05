import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SuggestionCard from "./SuggestionCard";
import { useLocation, useNavigate } from "react-router-dom";

// Import all mock data arrays
import { Analiz, CardiologsList, Dietolog, Onkolog, Services, suggestions } from "../mockData";

export default function SuggestionSection({ onSuggestionClick }) {
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const serviceId = queryParams.get("serviceId");
    const serviceName = queryParams.get("serviceName");
    const searchId = queryParams.get("searchId");

    const [selectedId, setSelectedId] = useState(null);

    let dataToShow = suggestions;

    if (searchId || serviceId) {
        dataToShow = Services;
    } else if (serviceName === "Cardiolog") {
        dataToShow = CardiologsList;
    } else if (serviceName === "Onkolog") {
        dataToShow = Onkolog;
    } else if (serviceName === "Dietolog") {
        dataToShow = Dietolog;
    } else if (serviceName === "Analiz") {
        dataToShow = Analiz;
    }

    const handleNavigate = (value) => {
        if (!value?.id || (!value?.label && !searchId && !serviceId)) {
            console.error("Invalid suggestion item:", value);
            return;
        }

        setSelectedId(value.id);

        // Clear date and time selection
        if (onSuggestionClick) onSuggestionClick();

        if (searchId || serviceId) {
            navigate(`/serviceMain?searchId=${value.id}`);
        } else if (serviceName) {
            navigate(`/serviceMain?serviceName=${value.label}&uniqueServiceId=${value.id}`);
        }
    };

    // Sorts
    const highRated = dataToShow
        .slice()
        .sort((a, b) => (b.rating || 0) - (a.rating || 0));

    const cheapest = dataToShow
        .filter(item => item.id !== highRated[0]?.id)
        .sort((a, b) => a.price - b.price);

    const nearest = dataToShow
        .filter(item => item.id !== highRated[0]?.id && item.id !== cheapest[0]?.id)
        .sort((a, b) => a.distance - b.distance);

    return (
        <>
            {/* High Rated */}
            <div className="w-full flex-col items-start text-start mt-3">
                <span className="text-lg ml-6 text-black/50 font-semibold">Tavsiya etiladi</span>
                <div className="w-full mt-1 h-auto">
                    <Swiper spaceBetween={10} slidesPerView={2.3} style={{ paddingRight: "12px", paddingLeft: "23px" }}>
                        {highRated
                            .filter(item => item.id !== selectedId)
                            .map((value, index) => (
                                <SwiperSlide key={index}>
                                    <SuggestionCard onClick={() => handleNavigate(value)} data={value} />
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </div>
            </div>

            {/* Cheapest */}
            <div className="w-full flex-col items-start text-start mt-3">
                <span className="text-lg ml-6 text-black/50 font-semibold">Eng arzoni</span>
                <div className="w-full mt-1 h-auto">
                    <Swiper spaceBetween={10} slidesPerView={2.3} style={{ paddingRight: "12px", paddingLeft: "23px" }}>
                        {cheapest
                            .filter(item => item.id !== selectedId)
                            .map((value, index) => (
                                <SwiperSlide key={index}>
                                    <SuggestionCard onClick={() => handleNavigate(value)} data={value} />
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </div>
            </div>

            {/* Nearest */}
            <div className="w-full flex-col items-start text-start mt-3">
                <span className="text-lg ml-6 text-black/50 font-semibold">Eng yaqindagisi</span>
                <div className="w-full mt-1 h-auto">
                    <Swiper spaceBetween={10} slidesPerView={2.3} style={{ paddingRight: "12px", paddingLeft: "23px" }}>
                        {nearest
                            .filter(item => item.id !== selectedId)
                            .map((value, index) => (
                                <SwiperSlide key={index}>
                                    <SuggestionCard onClick={() => handleNavigate(value)} data={value} />
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </div>
            </div>
        </>
    );
}
