import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import hospitalPng from "../../assets/hospital.png";
import addressPng from "../../assets/address.png";
import PrettyWidget from "../../components/PrettyWidget";
import AIwidget from "../../components/AIwidget";
import AnalizDiscountWidget from "../../components/AnalizDiscountWidget";
import TopWidget from "../../components/TopWidget";
import BottomNavbar from "../../components/BottomNavbar";
import ListCard from "../../components/ListCard";
import SelectedHospitalCard from "../../components/SelectedHospitalCard";
import ServiceCard from "../../components/ServiceCard";
import Button from "../../components/Button";
import {Hospitals, selectedData, SelectedHospitalData} from "../../mockData";
import MiniAvatarsSection from "../../components/MiniAvatarSection";
import SearchServices from "../../components/SearchServices";
import CurrentLocation from "../../components/CurrentLocation";
import DrawerComponent from "../../components/DrawerComponent";
import {BsArrowLeft, BsCash} from "react-icons/bs";
import {FaArrowRightLong} from "react-icons/fa6";
import DiscountSection from "../../components/DiscountSection";
import ReviewSection from "../../components/ReviewSection";
import PayMethod from "../../components/PayMethod";


export default function Home() {
    const [currentLocation, setCurrentLocation] = useState("");
    const [isHospital, setHospital] = useState(false);

    const [selectedHospital, setSelectHospital] = useState([]);
    const [selectedHospitalId, setSelectHospitalId] = useState(null);
    const [isHospitalLayout, setHospitalLayout] = useState(false);
    const [isDrawer, setDrawer] = useState(false);
    const [timeSelect, setTimeSelect] = useState(false);
    const [card, setCard] = useState(null);
    const [isPayMethodSelected, setPayMethodSelected] = useState(false);

    const [activeIndex, setActiveIndex] = useState(-1);
    const [isTimeActive, setTimeActive] = useState(false);
    const [selectedTime, setSelectedTime] = useState(``);
    const [selectedService, setSelectedService] = useState({});

    useEffect(() => {
        const storedLocation = localStorage.getItem("myLocation");
        if (storedLocation) {
            setCurrentLocation(storedLocation);
        }
    }, []);

    const HandleBack = () => {
        if (isHospitalLayout) {
            setHospitalLayout(false);
        } else {
            setHospital(false);
        }
    };

    const handleSelectHospital = (record) => {
        setSelectHospital(record);
        setHospitalLayout(true);
        setSelectHospitalId(record.id);
    };

    const handleServiceSelection = (service) => {
        setSelectedService(service);
        setCard(null); // 👈 Reset card state
        setDrawer(true);
    };


    const handleTimeSelect = (index) => {
        setActiveIndex(index);
        setTimeActive(true);
        setSelectedTime(index);
        setSelectedService(prev => ({ ...prev, selectedTime: index }))
    };

    const HandleDrawerBack = () => {
        if (timeSelect) {
            setTimeSelect(false);
            setActiveIndex(null);
        } else {
            setDrawer(false);
            setSelectedService({});
            setActiveIndex(null);
        }
    };

    console.log(card)

    return (
        <div className={`${style.container} flex flex-col h-screen`}>
            {/* Top Section */}
            <div className={style.topCont}>
                <CurrentLocation
                    location={currentLocation}
                    showBack={isHospital}
                    onBack={() => HandleBack()}
                />
                <SearchServices />
                {!isHospital && <MiniAvatarsSection />}
                {isHospitalLayout === true && <SelectedHospitalCard data={selectedHospital} />}
            </div>

            {/* Scrollable Middle Section */}
            <div className="flex-1 w-full h-auto px-4 pb-10 overflow-y-auto">
                {
                    !isHospital && (
                        <div className="w-full h-auto flex flex-col">
                            <TopWidget title="Top shifoxonalar" subtitle="Top shifoxonalar" />
                            <div className="w-full h-auto gap-3 flex justify-between mt-4">
                                <PrettyWidget
                                    onClick={() => setHospital(true)}
                                    bgColor="#54DD22"
                                    bgIcon="#C6241F"
                                    title="Shifoxonalarni ko‘rish"
                                    iconColor="white"
                                    bgImage={hospitalPng}
                                />
                                <PrettyWidget
                                    bgColor="#CB874E"
                                    bgIcon="#5156D4"
                                    title="Xarita orqali belgilash"
                                    iconColor="white"
                                    bgImage={addressPng}
                                />
                            </div>

                            <div className="w-full h-auto flex justify-between mt-4 gap-3">
                                <AIwidget
                                    bgColor="#6789d2"
                                    bgIcon="white"
                                    iconColor="black"
                                />
                                <AnalizDiscountWidget
                                    bgColor="#59b065"
                                    bgIcon="white"
                                    iconColor="black"
                                    title="Analizlar va umumiy"
                                    discountPrice="120 000"
                                />
                            </div>
                        </div>
                    )
                }

                {
                    isHospitalLayout ? (
                        <div className={'w-full flex flex-col items-start gap-3'}>
                            {SelectedHospitalData[selectedHospitalId].services.map((service, index) =>
                                    <ServiceCard
                                        key={service.id}
                                        id={service.id}
                                        name={service.name}
                                        price={service.price}
                                        onClick={() => handleServiceSelection(service)}
                                    />
                                )
                            }
                        </div>
                    ) : (
                        !isHospital === false && (
                            <div className={'w-full flex flex-col items-start gap-3'}>
                                {Hospitals && Hospitals.length > 0 ? (
                                    Hospitals.map((record, index) => (
                                        <ListCard
                                            key={index}
                                            onClick={() => handleSelectHospital(record)}
                                            id={record.id}
                                            name={record.name}
                                            distance={record.distance || "N/A"}  // Default if distance is undefined
                                            categories={record.categories || "N/A"}  // Default if categories is undefined
                                        />
                                    ))
                                ) : null}
                            </div>
                        )
                    )
                }

                <DrawerComponent open={isDrawer} onClose={() => setDrawer(false)}>
                    <div className={style.modalContainer}>
                        {/* Background effect */}
                        <div className="duration-300 absolute -bottom-60 -right-[600px] w-[1100px] h-[1200px] bg-[radial-gradient(circle,_#00CF75,_#0AFFC6,_#FFE3BD,_#254EDB,_#081F6E,_transparent)] opacity-20 blur-xl z-0"></div>

                        <div className={style.contentWrapper}>

                            <div className={style.stickyHeader}>
                                <div className={'w-full flex items-center justify-between'}>
                                    <button
                                        onClick={HandleDrawerBack}
                                        className="mr-2 p-2.5 bg-white rounded-full flex items-center justify-center"
                                    >
                                        <BsArrowLeft size={25} />
                                    </button>
                                </div>

                                <div className={'w-full flex items-center justify-between'}>
                                    <SelectedHospitalCard
                                        className="mt-4"
                                        data={selectedData}
                                    />
                                </div>
                            </div>

                            <div className={style.scrollableContent}>
                                {
                                    timeSelect &&
                                    (
                                        <div className="w-full flex flex-col items-start px-2 py-2">
                                            <div className={'w-full grid grid-cols-3 gap-3 mt-0 '}>
                                                {[...Array(30)].map((value, index) => (
                                                    <div
                                                        onClick={() => handleTimeSelect(index)}
                                                        className={`${activeIndex === index ? `bg-blue-700 text-white` : ``} duration-200 w-full h-14 flex items-center justify-center rounded-2xl border-2 border-blue-700 text-blue-700`}>
                                                        9: {15 * index}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )
                                }

                                {
                                    !timeSelect &&
                                    (
                                        <div className={'w-full'}>

                                            <PayMethod data={selectedService} />
                                            <div className="w-full flex flex-col items-start text-start mt-8">
                                                <h2 className="text-xl font-semibold">To‘lov turini tanlash</h2>

                                                {/* Card Payment Option */}
                                                <div
                                                    onClick={() => {
                                                        setCard(true);
                                                        setPayMethodSelected(true);
                                                        setSelectedService(prev => ({ ...prev, paymethod: 1 })); // set paymethod to 1 for card
                                                    }}
                                                    className="w-full flex items-center justify-between mt-4 cursor-pointer"
                                                >
                                                    <div className="flex items-center">
                                                        <img
                                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Visa_2021.svg/2560px-Visa_2021.svg.png"
                                                            alt="Visa"
                                                            className="w-8 h-auto object-contain"
                                                        />
                                                        <img
                                                            src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                                                            alt="MasterCard"
                                                            className="w-6 h-auto ml-2 object-contain"
                                                        />
                                                        <span className="ml-2 text-xl font-semibold">Karta orqali to‘lash</span>
                                                    </div>

                                                    <div className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center">
                                                        <div className={`${card === true ? "w-4 h-4" : "w-0 h-0"} bg-white rounded-full duration-300`}></div>
                                                    </div>
                                                </div>

                                                {/* Cash Payment Option */}
                                                <div
                                                    onClick={() => {
                                                        setCard(false);
                                                        setPayMethodSelected(true);
                                                        setSelectedService(prev => ({ ...prev, paymethod: 0 })); // set paymethod to 0 for cash
                                                    }}
                                                    className="w-full flex items-center justify-between mt-4 cursor-pointer"
                                                >
                                                    <div className="flex items-center">
                                                        <BsCash color="green" size={35} />
                                                        <span className="ml-2 text-xl font-semibold">Naxt pul orqali to‘lash</span>
                                                    </div>

                                                    <div className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center">
                                                        <div className={`${card === false ? "w-4 h-4" : "w-0 h-0"} bg-white rounded-full duration-300`}></div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    )
                                }
                            </div>

                            <div className={style.footer}>
                                <div className={'w-full h-full flex flex-col justify-between'}>
                                    {
                                        timeSelect ?
                                            (
                                                <DiscountSection />
                                            )
                                            :
                                            (
                                                <ReviewSection />
                                            )
                                    }

                                    <div className={'w-full mt-2 px-4'}>
                                        {
                                            timeSelect ?
                                                (
                                                    <Button
                                                        trigger={isTimeActive}
                                                        onClick={() => {
                                                            setDrawer(false);
                                                            setTimeSelect(false);
                                                        }}
                                                        color={'#474747'}
                                                        bgColor={`#F4F4F4`}
                                                        value={
                                                            <div className="flex items-center gap-2">
                                                                <span className="text-2xl"> {isTimeActive ? `${selectedTime} ga borish` : `Vaqtni belgilang`}</span>
                                                            </div>
                                                        }
                                                    />
                                                )
                                                :
                                                (
                                                    <Button
                                                        trigger={isPayMethodSelected}
                                                        onClick={() => {
                                                            if (isPayMethodSelected){
                                                                setTimeSelect(true);
                                                            } else {
                                                                alert(`To'lov turini tanlang`)
                                                            }
                                                        }}
                                                        color={'#474747'}
                                                        bgColor={`#F4F4F4`}
                                                        value={
                                                        <div className={'flex items-center gap-2'}>
                                                            <span className={'text-2xl'}>Keyingisi</span>
                                                            <FaArrowRightLong size={30} />
                                                        </div>
                                                    } />
                                                )
                                        }
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>

                </DrawerComponent>

            </div>

            {
                isHospitalLayout &&
                (
                    <div className={'sticky bottom-0 z-50 h-24 w-full px-4'}>
                        <Button fontSize={25} bgColor={'#F4F4F4'} color={`#474747`} value={'Kerakli xizmatni tanlang'} />
                    </div>
                )
            }

            {/* Bottom Navbar */}
            {!isHospital && <BottomNavbar />}
        </div>
    );
}
