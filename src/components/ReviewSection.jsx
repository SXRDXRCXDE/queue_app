import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import ReviewComponent from "./ReviewComponent";
import {reviews} from "../mockData";


export default function ReviewSection() {

    return(
        <div className={'w-full h-auto flex flex-col items-start'}>

            <span className={'ml-6 text-2xl font-semibold'}>Sharhlar :</span>


            <div className={'w-full h-auto mb-3 mt-2'}>

                <Swiper
                    spaceBetween={10}
                    slidesPerView={1.12}
                    centeredSlides={true}
                    // onSlideChange={() => console.log('slide change 1')}
                    // onSwiper={(swiper) => console.log(swiper)}
                >

                    {reviews.map((r, i) => (
                        <SwiperSlide>
                            <ReviewComponent
                                key={i}
                                image={r.image}
                                name={r.name}
                                review={r.review}
                                stars={r.stars}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>

        </div>
    )

}