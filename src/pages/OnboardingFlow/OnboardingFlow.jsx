import React, {useEffect, useRef, useState} from "react";
import style from "./style.module.css";
import logo from "../../assets/analis logo.png";
import analis1 from "../../assets/analis intro layer.png";
import analis2 from "../../assets/analis intro layer 2.png";
import analis3 from "../../assets/analis layer 3.png";
import vector from "../../assets/analis vector.png";
import Button from "../../components/Button";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import MapSelector from "../../components/MapSelector";
import debounce from 'lodash.debounce';


export default function IntroRestyle() {

    const [stage,setStage] = useState(0);
    const [location,setLocation] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState(null);

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
                setLocation(storedAddress); // Fixed: parse it here
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

    // Fetch suggestions from Nominatim
    const fetchSuggestions = debounce(async (query) => {
        if (!query) return setSuggestions([]);
        const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`);
        const data = await res.json();
        setSuggestions(data);
    }, 400);

    useEffect(() => {
        fetchSuggestions(searchText);
    }, [searchText]);

    const handleSuggestionClick = (place) => {
        const latlng = {
            lat: parseFloat(place.lat),
            lng: parseFloat(place.lon),
        };
        setSelectedLocation(latlng);
        setSearchText(place.display_name);
        setSuggestions([]);

        // Save to localStorage
        localStorage.setItem('selectedLocation', JSON.stringify(latlng));
        localStorage.setItem('selectedAddress', place.display_name);

        // Dispatch custom event for sync
        window.dispatchEvent(new Event('location-updated'));
    };

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

            <div className={'w-full h-[400px] overflow-hidden relative flex items-center justify-center'}>

                <img className={'object-contain h-12 absolute top-0 left-3'} src={vector} alt={'Analis vector logo'}/>

                <img className={'object-contain h-full'} src={analis1} alt={'Analis first layer'}/>

            </div>

            <span className={'text-4xl font-bold mt-10'}>Xush kelibsiz !</span>
            <span className={'text-xl font-semibold mt-6'}>
                Analiz dasturi orqali barcha tibbiy
                ko‘riklarni oson qiling
            </span>

        </div>
    );

    console.log(stage)

    const ChooseMap = (
        <div className={style.chooseMapCont}>

            <div className={'w-full h-[400px] overflow-hidden relative flex items-center justify-center'}>

                <img className={'object-contain h-12 absolute top-0 left-3'} src={vector} alt={'Analis vector logo'}/>

                <img className={'w-[80%] object-contain h-full'} src={analis2} alt={'Analis map layer'}/>

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
                            <div className={` ${stage>=4? `opacity-0 duration-100` : `opacity-100`} w-full h-full min-h-screen p-3 flex flex-col justify-between`}>

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
                                            <Button onClick={MapStage} value={'Qo‘lda kiritish'}/>
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

                                <div className={'w-full h-16 px-4 my-4 flex items-center relative'}>

                                    <div className="w-full h-12 bg-[#F3F3F3] rounded-full overflow-hidden">
                                        <input
                                            value={searchText}
                                            onChange={(e) => setSearchText(e.target.value)}
                                            placeholder="Manzilni qidirish"
                                            className="w-full h-full text-xl px-4 outline-0 bg-[#F3F3F3] font-semibold"
                                        />
                                    </div>

                                    {suggestions.length > 0 && (
                                        <ul className="absolute top-full mt-2 left-0 w-full bg-white shadow-md rounded-md z-[1000000] max-h-60 overflow-y-auto">
                                            {suggestions.map((place, idx) => (
                                                <li
                                                    key={idx}
                                                    onClick={() => handleSuggestionClick(place)}
                                                    className="p-2 hover:bg-gray-100 cursor-pointer text-sm"
                                                >
                                                    {place.display_name}
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                </div>

                                <div className={'w-full h-[460px] bg-blue-700'}>
                                    {/*Here I want to put map choosing*/}
                                    <MapSelector ref={mapRef}  externalLocation={selectedLocation} />
                                </div>

                            </div>


                            <div className={'w-full h-auto flex flex-col px-4'}>

                                <Button value={`${location}`} />
                                <Button
                                    bgColor={'#254EDB'}
                                    color={'white'}
                                    value={'Manzilni tasdiqlash'}
                                    onClick={() => {
                                        if (location) {
                                            localStorage.setItem('myLocation', JSON.stringify(location));
                                            alert('Location saved!');
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