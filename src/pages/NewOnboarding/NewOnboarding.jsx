import React, {useEffect, useRef, useState} from "react";
import style from "./style.module.css";
import logo from "../../assets/analis logo.png";
import welcomePng from "../../assets/analis intro layer.png";
import vector from "../../assets/analis vector.png";
import analis2 from "../../assets/analis intro layer 2.png";
import Button from "../../components/Button";
import {FaChevronRight} from "react-icons/fa";
import {Swiper, SwiperSlide} from "swiper/react";
import MapSelector from "../../components/MapSelector";
import LogoLocation from "../../components/Logo&Location";
import {useNavigate} from "react-router-dom";
import useMessage from "antd/es/message/useMessage";

export default function NewOnboarding() {
    const swiperRef = useRef(null);
    const mapRef = useRef(null);
    const [location, setLocation] = useState("");
    const [message,context] = useMessage();

    const navigate = useNavigate();
    const hasSlid = useRef(false); // Add this at the top of your component

    useEffect(() => {
        if (!hasSlid.current) {
            hasSlid.current = true;
            setTimeout(() => {
                if (swiperRef.current) {
                    swiperRef.current.slideNext();
                }
            }, 400);
        }
    }, []);


    const goToNextSlide = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
            triggerFindLocation();
        }
    };

    useEffect(() => {
        const loadLocation = () => {
            const storedLocation = localStorage.getItem('selectedLocation');
            const storedAddress = localStorage.getItem('selectedAddress');
            if (storedLocation && storedAddress) {
                const trimmedLocation = storedAddress?.split(",").slice(0, 3).join(",").trim();
                setLocation(trimmedLocation);
            }
        };
        loadLocation();
        window.addEventListener('location-updated', loadLocation);
        return () => window.removeEventListener('location-updated', loadLocation);
    }, []);

    const triggerFindLocation = () => {
        if (mapRef.current) {
            mapRef.current.triggerFindMe();
        }
    };

    const Intro = () => (
        <div className='w-full min-h-screen flex flex-col bg-white items-center justify-center'>
            <img className='w-52 h-auto object-contain' src={logo} alt='Analis logo' />
            <span className='font-bold text-2xl'>App</span>
        </div>
    );

    const Welcome = () => (
        <div className='w-full flex flex-col items-center justify-between h-screen  pt-10 pb-10 bg-white'>
            <div className='w-full h-auto px-6'>
                <div className="self-start">
                    <img src={vector} alt="Logo" className="w-10 h-10 object-contain" />
                </div>
                <div className="flex-grow flex items-center justify-center">
                    <img src={welcomePng} alt="Doctors Illustration" className="max-h-72 object-contain" />
                </div>
                <div className="text-center mt-14">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">Xush kelibsiz !</h1>
                    <p className="text-gray-600 text-xl">
                        Analiz dasturi orqali barcha tibbiy<br />
                        ko'riklarni oson qiling
                    </p>
                </div>
            </div>
            <div className={'w-full px-3'}>

                <Button onClick={goToNextSlide} bgColor={'#254EDB'} color={'white'} value={'Keyingi'} />

            </div>
        </div>
    );

    const ChooseMap = () => (
        <div className='w-full flex flex-col items-center justify-between h-screen  pt-10 pb-10 bg-white'>
            <div className='w-full h-auto px-6'>
                <div className="self-start">
                    <img src={vector} alt="Logo" className="w-10 h-10 object-contain" />
                </div>
                <div className="flex-grow flex items-center justify-center">
                    <img src={analis2} alt="Doctors Illustration" className="max-h-72 object-contain" />
                </div>
                <div className="text-center mt-14">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">Manzilingizni qulay belgilang</h1>
                    <p className="text-gray-600 text-xl">
                        Sizga eng yaqin xizmat ko‘rsatuvchi shifoxonalarni aniqlashimiz uchun joylashuvni kiriting
                    </p>
                </div>
            </div>
            <div className={'w-full px-3'}>

                <Button
                    onClick={goToNextSlide}
                    color={'white'}
                    bgColor={'#254EDB'}
                    fontSize={20}
                    value={
                        <div className='flex gap-3 items-center'>
                            <span>Joylashuvni avtomatik aniqlash</span>
                            <FaChevronRight size={20} />
                        </div>
                    }
                />

            </div>

        </div>
    );

    const FindLocation = () => (
        <div className='w-full flex flex-col items-center justify-between h-screen  pt-10 pb-10 bg-white'>
            <div className='w-full h-auto'>
                <div className="self-start">
                    <LogoLocation />
                </div>
                <div className="w-full h-[50vh] mt-8">
                    <MapSelector ref={mapRef} />
                </div>
            </div>
            <div className='w-full h-auto px-3 flex flex-col'>
                <span className='text-xl font-semibold mb-10'>{location}</span>
                <Button
                    onClick={() => {
                        if (location) {
                            localStorage.setItem('myLocation', JSON.stringify(location));
                            navigate('/home')
                        } else {
                            message.info('Iltimos, manzilni tanlang');
                        }
                    }}
                    color={'white'}
                    bgColor={'#254EDB'}
                    fontSize={20}
                    value={'Manzilni tasdiqlash'}
                />
            </div>
        </div>
    );

    return (
        <div className={style.mainCont}>
            {context}
            <div className='w-full h-screen flex flex-col justify-between items-center'>
                <Swiper
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    spaceBetween={0}
                    slidesPerView={1}
                    className='w-full'
                    lazy={true}
                    preloadImages={false}
                    allowTouchMove={false}
                >
                    <SwiperSlide><Intro /></SwiperSlide>
                    <SwiperSlide><Welcome /></SwiperSlide>
                    <SwiperSlide><ChooseMap /></SwiperSlide>
                    <SwiperSlide><FindLocation /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}
