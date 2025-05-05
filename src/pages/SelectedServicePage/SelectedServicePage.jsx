import React, { useState } from "react";
import style from "./style.module.css";
import { BsArrowLeft, BsCash } from "react-icons/bs";
import SelectedHospitalCard from "../../components/SelectedHospitalCard";
import { FaFire } from "react-icons/fa";
import ReviewComponent from "../../components/ReviewComponent";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import Button from "../../components/Button";
import {FaArrowRightLong} from "react-icons/fa6";
import DiscountCard from "../../components/DiscountCard";

export default function SelectedServicePage() {

    const [card, setCard] = useState(false);
    const [timeSelect,setTimeSelect] = useState(false);
    const [active,setActive] = useState(-1);
    const [timeActive,setTimeActive] = useState(false);
    const [selectedTime,setSelectedTime] = useState(``);

    const handleTimeSelect = (index)=> {
        setActive(index);
        setTimeActive(true);
        setSelectedTime(index);
    };

    const reviews = [
        {
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            name: "Roman Sergiyev",
            review: "Просто быстро✅",
            stars: 5,
        },
        {
            image: "https://randomuser.me/api/portraits/women/44.jpg",
            name: "Anna Petrova",
            review: "Очень удобный сервис, рекомендую всем друзьям!",
            stars: 4,
        },
        {
            image: "https://randomuser.me/api/portraits/men/77.jpg",
            name: "Dmitry Ivanov",
            review: "Хорошее обслуживание и приятный персонал.",
            stars: 5,
        },
    ];

    return (
        <div className={style.container}>
            {/* Background effect */}
            <div className="duration-300 absolute -bottom-60 -right-[600px] w-[1100px] h-[1200px] bg-[radial-gradient(circle,_#00CF75,_#0AFFC6,_#FFE3BD,_#254EDB,_#081F6E,_transparent)] opacity-30 blur-2xl z-0"></div>

            <div className={style.contentWrapper}>
                {/* Sticky Top Section */}
                <div className={style.stickyHeader}>
                    <div className="w-full gap-5 h-auto flex items-center justify-between">
                        <div className="p-2.5 bg-white rounded-full flex items-center justify-center">
                            <BsArrowLeft size={28} />
                        </div>
                    </div>

                    {
                        timeSelect?
                            <span className={'text-2xl self-start ml-2 mt-4 font-semibold'}>Analiz vaqtini tanlang:</span>
                            :
                            <SelectedHospitalCard
                                className="mt-4"
                                name="4- Sonli Oilaviy Poliklinika"
                                rating="Reyting 4.97"
                                distance="Sizdan 1.5 km uzoqlikda"
                                img="https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            />
                    }

                </div>




                <div className={style.scrollableContent}>


                    {
                        timeSelect ?
                            (
                                <div className="w-full flex flex-col items-start px-2 py-2">

                                    <div className={'w-full grid grid-cols-3 gap-3 mt-6 '}>

                                        {[...Array(30)].map((value,index)=> <div onClick={()=>handleTimeSelect(index)} className={` ${active===index? `bg-blue-700 text-white` : ``} duration-200 w-full h-14 flex items-center justify-center rounded-2xl border-2 border-blue-700 text-blue-700 `}>
                                            9: {15*index}
                                        </div>)}

                                    </div>

                                </div>
                            )
                            :
                            (
                                <div className={'w-full flex flex-col'}>

                                    <div className="w-full h-auto flex flex-col items-start text-start px-2 mt-8">
                                        <span className="text-5xl text-[#045DE3] font-semibold">ANALIZ</span>
                                        <span className="text-xl text-[#045DE3]">
                                        Narx: {(180000).toLocaleString("ru-RU")} so‘m
                                    </span>

                                        <div className="p-3 rounded-full bg-[#254EDB] mt-6 flex items-center text-white font-semibold">
                                            Xozirgi kunda
                                            <div className="w-6 h-6 ml-3 mr-2 rounded-full bg-gradient-to-t from-[#FFBB00] via-[#FF2600] to-[#FF0000] flex items-center justify-center">
                                                <FaFire size={15} color={"white"} />
                                            </div>
                                            Top
                                        </div>
                                    </div>

                                    {/* Payment Options */}
                                    <div className="w-full h-auto flex flex-col items-start text-start mt-8 px-4">
                                        <span className="text-xl font-semibold">To‘lov turini tanlash</span>

                                        <div
                                            onClick={() => setCard(true)}
                                            className="w-full flex items-center justify-between mt-4"
                                        >
                                            <div className="flex items-center">
                                                <img
                                                    className="w-8 h-auto object-contain"
                                                    alt="visa logo"
                                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Visa_2021.svg/2560px-Visa_2021.svg.png"
                                                />
                                                <img
                                                    className="w-6 h-auto object-contain ml-2"
                                                    alt="masterCard logo"
                                                    src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                                                />
                                                <span className="ml-2 text-xl font-semibold">Karta orqali to‘lash</span>
                                            </div>

                                            <div className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center">
                                                <div
                                                    className={`${
                                                        card ? "w-4 h-4" : "w-0 h-0"
                                                    } duration-300 bg-white rounded-full`}
                                                ></div>
                                            </div>
                                        </div>

                                        <div
                                            onClick={() => setCard(false)}
                                            className="w-full flex items-center justify-between mt-4"
                                        >
                                            <div className="flex items-center">
                                                <BsCash color="green" size={35} />
                                                <span className="ml-2 text-xl font-semibold">Naxt pul orqali to‘lash</span>
                                            </div>

                                            <div className="border w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center">
                                                <div
                                                    className={`${
                                                        card ? "w-0 h-0" : "w-4 h-4"
                                                    } duration-300 bg-white rounded-full`}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            )
                    }




                </div>


                {/* Sticky Bottom Footer */}
                <div className={style.footer}>

                    <div className={'w-full h-full flex flex-col justify-between'}>


                        {
                            timeSelect?
                                <div className={'w-full h-auto flex flex-col items-start'}>

                                    <span className={'ml-6 text-2xl font-semibold'}>Sharhlar :</span>


                                    <div className={'w-full h-auto mt-2'}>

                                        <Swiper
                                            spaceBetween={10}
                                            slidesPerView={1.12}
                                            onSlideChange={() => console.log('slide change')}
                                            onSwiper={(swiper) => console.log(swiper)}
                                        >

                                            {reviews.map((r, i) => (
                                                <SwiperSlide className={ i===0? `pl-6` : `pl-2 pr-3`}>
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
                                :
                                <div className={'w-full h-auto flex flex-col items-start'}>

                                    <span className={'ml-6 text-2xl font-semibold'}>Sharhlar :</span>


                                    <div className={'w-full h-auto mt-2'}>

                                        <Swiper
                                            spaceBetween={10}
                                            slidesPerView={1.12}
                                            onSlideChange={() => console.log('slide change')}
                                            onSwiper={(swiper) => console.log(swiper)}
                                        >

                                            {reviews.map((r, i) => (
                                                <SwiperSlide className={ i===0? `pl-6` : `pl-2 pr-3`}>
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
                        }


                        <div className={'w-full mt-2 px-4'}>

                            {
                                timeSelect?
                                    <Button
                                        trigger={timeActive}
                                        onClick={() => {
                                            setTimeSelect(!timeSelect);
                                        }}
                                        color={'#474747'}
                                        bgColor={`#F4F4F4`}
                                        value={
                                            <div className="flex items-center gap-2">
                                                <span className="text-2xl"> {timeActive? `${selectedTime} ga borish` : `Vaqtni belgilang` } </span>
                                            </div>
                                        }
                                    />

                                    :
                                    <Button
                                        onClick={()=>{
                                            setTimeSelect(!timeSelect);
                                        }}
                                        color={'#FFFFFF'} bgColor={`#254EDB`} value={
                                        <div className={'flex items-center gap-2'}>
                                            <span className={'text-2xl'}>Keyingisi</span>
                                            <FaArrowRightLong size={30} />
                                        </div>
                                    }/>
                            }



                        </div>


                    </div>


                </div>
            </div>
        </div>
    );
}
