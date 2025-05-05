import React, {useEffect, useState} from "react";
import style from "./style.module.css";
import logo from "../../assets/analis logo.png";
import analis1 from '../../assets/analis_layer.jpg';
import analis2 from '../../assets/analis layer 2.png';
import analis3 from '../../assets/analis layer 3.png';

export default function Intro() {

    const [stage,setStage] = useState(0);

    useEffect(()=>{

        handleStages()

    },[])

    const handleStages = ()=> {
        setTimeout(()=>{
            setStage(1);
        },1000)
    }

    return(
            <div className={style.container}>
                <div className={'w-full h-full min-h-screen relative'}>

                    <div className={stage<1? style.stage1Cont : style.stage1ContDisappear}>
                        <img src={logo} alt={'Analis logo'}/>
                        <span>App</span>
                    </div>



                    <div className={` ${stage>0? `opacity-100 z-10` : `opacity-0 `} delay-500 duration-500 w-full h-full min-h-screen flex flex-col `}>

                        <div className={'relative w-full h-[460px] flex items-center justify-center overflow-hidden'}>

                            <img className={` ${stage===1? `opacity-100 z-10` : `opacity-0 z-0`} absolute top-0 left-0 delay-100 duration-700 w-full h-full object-cover`} src={analis1} alt={'analis layer'}/>
                            <img className={` ${stage===2? `opacity-100 z-10` : `opacity-0 z-0`} absolute top-0 left-0 delay-100 duration-700 w-full h-full object-cover`} src={analis2} alt={'analis layer'}/>
                            <img className={` ${stage===3? `opacity-100 z-10` : `opacity-0 z-0`} absolute top-0 left-0 delay-100 duration-700 w-full h-full object-cover`} src={analis3} alt={'analis layer'}/>

                        </div>

                        <div className={style.introBottom}>

                            <div className={style.dataContainer}>

                                <div className={`relative w-56 h-2 pl-3 my-3 flex items-center gap-3  `}>

                                    <div className={stage===1? style.activeTab : style.inActiveTab}></div>
                                    <div className={stage===2? style.activeTab : style.inActiveTab}></div>
                                    <div className={stage===3? style.activeTab : style.inActiveTab}></div>

                                </div>

                                <div className={'relative h-16 w-10'}>
                                    <span className={stage===1? style.activeTitle : style.inActiveTitle}>Xush kelibsiz</span>
                                    <span className={stage===2? style.activeTitle : style.inActiveTitle}>Analiz topshirish qulay</span>
                                    <span className={stage===3? style.activeTitle : style.inActiveTitle}>Vaqtni qulay moslash</span>
                                </div>


                                <div className={'relative h-32 w-72 '}>

                                    <span className={stage===1? style.activeDescription : style.inActiveDescription}>
                                    Shifokor qabuliga tez va oson yoziling.
                                    Ortiqcha navbat kutish endi kerak emas!
                                </span>
                                    <span className={stage===2? style.activeDescription : style.inActiveDescription}>
                                    O‘zingizga yaqin shifoxonani belgilash orqali
                                    navbat oling yoki shifokorni uyingizga chaqiring
                                </span>
                                    <span className={stage===3? style.activeDescription : style.inActiveDescription}>
                                    Vaqtlarni o‘zingizga qulay tarzda belgilang va
                                    analizlarni kutishlarsiz topshiring!
                                </span>

                                </div>

                            </div>


                            <div className={'w-full h-20 mt-12 flex justify-between items-center gap-x-4'}>

                                <div onClick={()=>setStage(3)} className={'w-1/2 h-12 border border-[#E5E7EB] flex items-center justify-center rounded-lg text-lg font-semibold'}>O'tkazish</div>
                                <div onClick={()=>setStage(stage+1)} className={'w-1/2 h-12 border-2 bg-[#254EDB] text-white flex items-center justify-center rounded-lg text-lg font-semibold'}>Keyingi</div>

                            </div>

                        </div>

                    </div>

                </div>


            </div>
    )

}