import React, {useEffect, useRef, useState} from "react";
import style from "./style.module.css";
import logo from "../../assets/analis logo.png";
import analis1 from "../../assets/analis intro layer.png";
import analis2 from "../../assets/analis intro layer 2.png";
import vector from "../../assets/analis vector.png";
import Button from "../../components/Button";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import MapSelector from "../../components/MapSelector";
import {useNavigate} from "react-router-dom";


export default function OnboardingFlow() {

    const navigate = useNavigate();

    const [stage,setStage] = useState(0);
    const [location,setLocation] = useState([]);

    useEffect(()=>{

        entryStage()

    },[])

    useEffect(() => {
        const loadLocation = () => {
            const storedLocation = localStorage.getItem('selectedLocation');
            const storedAddress = localStorage.getItem('selectedAddress');

            if (storedLocation && storedAddress) {
                console.log('Location:', JSON.parse(storedLocation));
                console.log('Address:', storedAddress);
                const trimmedLocation = storedAddress?.split(",").slice(0, 3).join(",").trim();
                setLocation(trimmedLocation); // Fixed: parse it here
            }
        };

        loadLocation(); // Initial load

        // Listen for custom event
        window.addEventListener('location-updated', loadLocation);

        // Cleanup
        return () => {
            window.removeEventListener('location-updated', loadLocation);
        };
    }, []);


    const mapRef = useRef(null); // 1️⃣ Create a ref

    const triggerFindLocation = () => {
        if (mapRef.current) {
            mapRef.current.triggerFindMe(); // Call exposed method
        }
    };


    const entryStage = ()=> {
        setTimeout(()=>{
            setStage(1);
        },650)
    };

    const HandleStage = ()=> {
        setStage(2);
        setTimeout(()=>{
            setStage(3);
        },400)
    };

    const MapStage = () => {
        setStage(4);
        setTimeout(()=>{
            setStage(5);
        },400);
    };

    const IntroAnimation = (
        <div className={style.stage1Cont}>
            <img src={logo} alt={'Analis logo'}/>
            <span>App</span>
        </div>
    );

    const Welcome = (
        <div className={stage===2? style.welcomeContEnd : style.welcomeCont}>

            <div className={'w-full h-[300px] overflow-hidden relative flex items-center justify-center'}>

                <img className={'object-contain h-12 absolute top-0 left-3'} src={vector} alt={'Analis vector logo'}/>

                <img className={'object-contain max-h-60'} src={analis1} alt={'Analis first layer'}/>

            </div>

            <span className={'text-4xl font-bold mt-10'}>Xush kelibsiz !</span>
            <span className={'text-xl font-semibold mt-6'}>
                Analiz dasturi orqali barcha tibbiy
                ko‘riklarni oson qiling
            </span>

        </div>
    );

    const ChooseMap = (
        <div className={style.chooseMapCont}>

            <div className={'w-full h-auto pt-10 overflow-hidden relative flex items-center justify-center'}>

                <img className={'object-contain h-12 absolute top-0 left-3'} src={vector} alt={'Analis vector logo'}/>

                <img className={'w-auto object-contain max-h-52'} src={analis2} alt={'Analis map layer'}/>

            </div>

            <span className={'text-4xl font-bold mt-10'}>Manzilingizni qulay belgilang</span>
            <span className={'text-xl font-semibold mt-6'}>
                Sizga eng yaqin xizmat ko‘rsatuvchi shifoxonalarni aniqlashimiz uchun joylashuvni kiriting
            </span>

        </div>
    );

    return(
        <>
            <div className={style.container}>
                <div className={style.containerWrapper}>

                    {/* First view when app starts then disappears */}
                    {stage>0?  `` : IntroAnimation}


                    {/*Container fade out when user routes to choose map*/}
                    {
                        stage>=5? ``:
                            <div className={` ${stage>=4? `opacity-0 duration-100` : `opacity-100`} w-full min-h-screen px-3 pt-3 flex flex-col pb-20 justify-between`}>

                                {/*This is Welcome view*/}
                                {stage>=3? `` : Welcome}

                                {/*Then this is view for choosing map intro*/}
                                {stage>2? ChooseMap : ``}


                                {/*Component appears after intro view ends then it disappears when it clicks */}
                                {stage>2? `` : <Button bgColor={'#254EDB'} color={'white'} hide={stage === 2} onClick={HandleStage} value={'Keyingi'}/> }


                                {/*Component appears whe*/}
                                {
                                    stage>=3?
                                        <div className={'mt-5'}>
                                            <Button
                                                onClick={() => {
                                                    MapStage(); // go to stage 5
                                                    setTimeout(triggerFindLocation, 500); // trigger auto locate after map mounts
                                                }}
                                                color={'white'}
                                                bgColor={'#254EDB'}
                                                value={
                                                    <div className={'flex gap-3 items-center'}>
                                                        <span>Joylashuvni avtomatik aniqlash</span>
                                                        <FaChevronRight size={20} />
                                                    </div>
                                                }
                                            />
                                        </div>

                                        :
                                        ``
                                }
                            </div>
                    }
                    {stage>=5?
                        <div className={style.chooseMapWrapper}>

                            <div className={'w-full h-auto flex flex-col'}>

                                <div className={`w-full h-[75px] px-4 flex items-center justify-between`}>
                                    <div onClick={()=>setStage(3)}>
                                        <FaChevronLeft color={'black'} size={20} />
                                    </div>

                                    <div>
                                        <img className={'w-fit h-10 object-contain'} src={logo}/>
                                    </div>

                                    <div></div>
                                </div>

                                <div className={'w-full h-[50vh] mt-5'}>
                                    {/*Here I want to put map choosing*/}
                                    <MapSelector ref={mapRef}  />
                                </div>

                            </div>


                            <div className={'w-full h-auto pb-10 flex flex-col px-4'}>

                                <Button value={`${location}`} />
                                <Button
                                    bgColor={'#254EDB'}
                                    color={'white'}
                                    value={'Manzilni tasdiqlash'}
                                    onClick={() => {
                                        if (location) {
                                            localStorage.setItem('myLocation', JSON.stringify(location));
                                            navigate('/home')
                                        } else {
                                            alert('Iltimos, manzilni tanlang');
                                        }
                                    }}
                                />

                            </div>

                        </div>
                        : ``
                    }

                </div>


            </div>
        </>
    )

}