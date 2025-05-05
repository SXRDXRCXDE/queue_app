import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import DiscountCard from "./DiscountCard";
import {reviews} from "../mockData";

export default function DiscountSection() {

    return(
        <div className={'w-full h-auto flex flex-col items-start'}>

            <span className={'ml-6 text-2xl font-semibold'}>Sharhlar :</span>


            <div className={'w-full h-auto mb-3 mt-2'}>

                <Swiper
                    spaceBetween={10}
                    slidesPerView={1.12}
                    centeredSlides={true}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                >

                    {reviews.map((r, i) => (
                            <SwiperSlide>
                            <DiscountCard
                                key={i}
                                image={r.image}
                                name={r.name}
                                newPrice={522255}
                                oldPrice={6996966969}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>

        </div>
    );

}