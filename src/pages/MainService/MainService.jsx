import React, {useState} from "react";
import style from "./style.module.css";
import {useLocation, useNavigate} from "react-router-dom";
import {
    Analiz,
    CardiologsList,
    days,
    Dietolog,
    Onkolog,
    SelectedHospitalData,
    Services,
    suggestions
} from "../../mockData";
import {FiArrowLeft} from "react-icons/fi";
import analizVector from "../../assets/analis vector.png";
import {Swiper, SwiperSlide} from "swiper/react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import SuggestionSection from "../../components/SuggestionSection";
import {BiSolidTimeFive} from "react-icons/bi";
import useMessage from "antd/es/message/useMessage";
import Button from "../../components/Button";

export default function MainService() {

    const [selectedDay,setDay] = useState(null);
    const [selectedTime,setTime] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const serviceId = queryParams.get("serviceId");
    const hospitalId = queryParams.get("hospitalId");
    const uniqueServiceId = queryParams.get("uniqueServiceId");
    const serviceName = queryParams.get("serviceName");
    const seacrhId = queryParams.get("searchId");
    const [message,context] = useMessage();

    // Create a reset function
    const resetDateTime = () => {
        setDay(null);
        setTime('');
    };

    const handleConfirm = () => {
        if (selectedDay && selectedTime) {
            const selectedDate = days.find(day => day.id === selectedDay);
            const formattedDate = selectedDate ? `${selectedDate.day}, ${selectedDate.dayOfMonth}` : '';

            // Determine name and price
            let name = "";
            let price = "";

            if (hospitalId && SelectedHospitalData[hospitalId - 1]?.services[serviceId - 1]) {
                name = SelectedHospitalData[hospitalId - 1].services[serviceId - 1].name;
                price = SelectedHospitalData[hospitalId - 1].services[serviceId - 1].price;
            } else if (serviceName === "Cardiolog" && CardiologsList[uniqueServiceId - 1]) {
                name = CardiologsList[uniqueServiceId - 1].label;
                price = CardiologsList[uniqueServiceId - 1].price;
            } else if (serviceName === "Onkolog" && Onkolog[uniqueServiceId - 1]) {
                name = Onkolog[uniqueServiceId - 1].label;
                price = Onkolog[uniqueServiceId - 1].price;
            } else if (serviceName === "Dietolog" && Dietolog[uniqueServiceId - 1]) {
                name = Dietolog[uniqueServiceId - 1].label;
                price = Dietolog[uniqueServiceId - 1].price;
            } else if (serviceName === "Analiz" && Analiz[uniqueServiceId - 1]) {
                name = Analiz[uniqueServiceId - 1].label;
                price = Analiz[uniqueServiceId - 1].price;
            } else if (seacrhId && Services[seacrhId - 1]) {
                name = Services[seacrhId - 1].name;
                price = Services[seacrhId - 1].price;
            }

            const serviceObj = {
                id: serviceId || uniqueServiceId || seacrhId,
                name,
                day: formattedDate,
                time: selectedTime,
                price,
            };

            const existingData = JSON.parse(localStorage.getItem("selectedServices")) || [];

            // ❌ Prevent duplicate: same id, day, and time
            const isDuplicate = existingData.some(item =>
                item.id === serviceObj.id &&
                item.day === serviceObj.day &&
                item.time === serviceObj.time
            );

            if (isDuplicate) {
                message.warning("Bu xizmat allaqachon shu vaqtda band qilingan.");
                return;
            }

            localStorage.setItem("selectedServices", JSON.stringify([...existingData, serviceObj]));
            message.success("Band qilindi!");
            setTimeout(() => {
                navigate(`/history`);
            }, 400);
        } else {
            message.info("Vaqt va kunni tanlang!");
        }
    };



    return(
        <div className={style.container}>
            {context}
            {/* Background effect */}
            {/*<div className="duration-300 absolute -bottom-60 -right-[600px] w-[1100px] h-[1200px] bg-[radial-gradient(circle,_#00CF75,_#0AFFC6,_#FFE3BD,_#254EDB,_#081F6E,_transparent)] opacity-30 blur-2xl z-0"></div>*/}

            <div className={style.contentWrapper}>

                <div className="w-full sticky top-0 z-0 h-auto flex flex-col items-center justify-between pt-9 pb-10 rounded-b-3xl shadow-lg shadow-black/20 bg-white">
                    <div
                        onClick={() => {
                            // navigate(-1);
                            if (hospitalId || serviceId){
                                navigate(-1);
                            } else {
                                navigate(`/home`);
                            }
                        }}
                        className=" self-start flex items-center justify-center ml-4"
                    >
                        <FiArrowLeft size={22} />
                    </div>

                    <div className={'w-full flex flex-col'}>

                        <div className="w-full h-auto flex flex-col items-start text-start px-6 mt-0 relative">

                            <img className={`absolute w-auto h-12 object-contain right-3 top-0 bottom-0 m-auto`} src={analizVector} alt={'analiz vector'}/>

                            <span className="text-[34px] text-[#002152] font-semibold">
                                { hospitalId && SelectedHospitalData[hospitalId-1]?.services[serviceId-1]?.name}
                                { serviceName ===`Cardiolog` && CardiologsList[uniqueServiceId-1].label }
                                { serviceName ===`Onkolog` && Onkolog[uniqueServiceId-1].label }
                                { serviceName ===`Dietolog` && Dietolog[uniqueServiceId-1].label }
                                { serviceName ===`Analiz` && Analiz[uniqueServiceId-1].label }
                                { seacrhId && Services[seacrhId-1].name }
                            </span>
                            <span className="text-lg text-[#002152]">
                                Narx:
                                {hospitalId && SelectedHospitalData[hospitalId - 1]?.services?.[serviceId - 1]?.price
                                    ? SelectedHospitalData[hospitalId - 1].services[serviceId - 1].price.toLocaleString("ru-RU")
                                    : ""}
                                {serviceName === "Cardiolog" && CardiologsList[uniqueServiceId - 1]?.price
                                    ? ` ${CardiologsList[uniqueServiceId - 1].price.toLocaleString("ru-RU")}`
                                    : ""}
                                {serviceName === "Onkolog" && Onkolog[uniqueServiceId - 1]?.price
                                    ? ` ${Onkolog[uniqueServiceId - 1].price.toLocaleString("ru-RU")}`
                                    : ""}
                                {serviceName === "Dietolog" && Dietolog[uniqueServiceId - 1]?.price
                                    ? ` ${Dietolog[uniqueServiceId - 1].price.toLocaleString("ru-RU")}`
                                    : ""}
                                {serviceName === "Analiz" && Analiz[uniqueServiceId - 1]?.price
                                    ? ` ${Analiz[uniqueServiceId - 1].price.toLocaleString("ru-RU")}`
                                    : ""}
                                {seacrhId && Services[seacrhId - 1]?.price
                                    ? ` ${Services[seacrhId - 1].price.toLocaleString("ru-RU")}`
                                    : ""}
                                so‘m
                            </span>


                        </div>

                        <SuggestionSection onSuggestionClick={resetDateTime} />

                    </div>


                </div>




                <div className={style.scrollableContent}>

                    <div className={'w-full flex flex-col items-start text-start'}>

                        <span className={' ml-6 text-[30px] text-[#00254E] font-semibold'}>Borishni belgilash</span>


                        <span className={' ml-6 flex items-center text-[18px] text-black/50 font-semibold'}>Kun va vaqtni tanlang  <BiSolidTimeFive size={25} className={' ml-3'} /> </span>

                        <div className={'w-full flex flex-col mt-2'}>

                            <span className={`ml-6 opacity-50 `}>Kun</span>

                            <div className={'w-full mt-2 h-auto '}>

                                <Swiper
                                    spaceBetween={10}
                                    slidesPerView={5.3}
                                    style={{ paddingRight: '12px', paddingLeft: `20px` }} // optional
                                >
                                    {days.map((value, index) => (
                                        <SwiperSlide key={index}>
                                            <div
                                                onClick={()=>{
                                                    setDay(value.id)
                                                    setTime('')
                                                }}
                                                className={` ${value.id===selectedDay? `bg-[#2A6BCC] text-white` : ``} duration-200 w-auto h-12 rounded-xl border border-[#00254E]/40 flex flex-col items-center overflow-hidden`}>

                                                <span className={'text-sm '}>{value.day.slice(0, 4)}</span>
                                                <span className={'text-xl font-semibold -translate-y-0.5'}>{value.dayOfMonth}</span>

                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>



                            </div>

                        </div>

                        <div className={'w-full flex flex-col mt-3'}>

                            <span className={`ml-6 opacity-50 `}>Bo'sh vaqtlar</span>

                            <div className={'w-full mt-2 h-auto '}>

                                <Swiper
                                    spaceBetween={10}
                                    slidesPerView={3.3}
                                    style={{ paddingRight: '12px', paddingLeft: `20px` }} // optional
                                >
                                    {days[ selectedDay? selectedDay-1 : 0]?.timeSlots?.map((value, index) => (
                                        <SwiperSlide key={index}>
                                            <div onClick={()=>{
                                                if (selectedDay){
                                                    setTime(value)
                                                } else {
                                                    message.info(` Kunni tanlang !`)
                                                }
                                            }} className={` ${value===selectedTime? `bg-[#2A6BCC] text-white` : ``} duration-200 p-2.5 rounded-xl border border-[#00254E]/40 flex flex-col items-center justify-center overflow-hidden`}>

                                                <span className={'text-xl font-semibold -translate-y-0.5'}>{value}</span>

                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>



                            </div>

                        </div>


                        <div className={'w-full h-20 p-4 flex justify-between items-start border-y border-[#97A6B6] mt-8'}>

                            <div className={'flex flex-col items-start justify-between'}>

                                <span>Du-Se-Cho-Pa-Ju-Sha</span>
                                <span>09:00 - 13:00 gacha</span>

                            </div>

                            <div className={'flex flex-col items-start justify-between'}>

                                <span>Yak</span>
                                <span>Dam olish</span>

                            </div>

                        </div>

                        <div className={'w-full px-2 mt-4'}>

                            <Button
                                bgColor={`#EEEEEE`}
                                color={`rgba(0, 37, 78, 0.71)`}
                                value={'Telefon qilish'}/>
                        </div>
                        <div className={'w-full px-2 '}>

                            <Button
                                color={`rgba(0, 37, 78, 0.71)`}
                                value={'Ma‘lumot'}/>
                        </div>

                        <div
                            style={{
                                fontFamily: "Arial, sans-serif",
                                lineHeight: 1.6,
                                maxWidth: "400px",
                                padding: "16px",
                                border: "1px solid #ddd",
                                borderRadius: "8px",
                            }}
                        >
                            <p style={{ margin: "0 0 0px", fontSize: "16px" }}>
                                <strong>Shifokor:</strong> Dilnoza Karimova
                            </p>
                            <p style={{ margin: "4px 0" }}>
                                <strong>Lavozimi:</strong> Laboratoriya shifokori (analiz oluvchi vrach)
                            </p>
                            <p style={{ margin: "4px 0" }}>
                                <strong>Ish vaqti:</strong> Dushanba – Juma, 08:30 – 17:00
                            </p>
                            <p style={{ margin: "4px 0" }}>
                                <strong>Telefon raqami:</strong>{" "}
                                <a href="tel:+998901234567" style={{ color: "#0066cc" }}>
                                    +998 90 123 45 67
                                </a>
                            </p>
                        </div>

                    </div>

                </div>


                {/* Sticky Bottom Footer */}
                <div className={style.footer}>

                    <div className={'w-full h-full flex flex-col justify-between px-4 pb-10'}>

                        <Button
                            onClick={handleConfirm}
                            value={`Band qilish`}
                            bgColor={`#c4c4c4`}
                            trigger={selectedDay && selectedTime}
                        />

                    </div>


                </div>
            </div>
        </div>
    );

}