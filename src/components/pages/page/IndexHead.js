'use client'
import React, {useEffect, useState} from 'react';
import {indexHead} from "@/assets/data/Data";

const IndexHead = () => {

    const [number,setNumber] = useState(0)
    const count = indexHead.length - 1
    const nextImage = () => {
        setNumber(number < count ? number + 1 : 0)
    }
    let a = 'translate-y-full z-10 hidden'
    useEffect(() => {
        const interval = setInterval(() => {
            nextImage()
        }, 4000);
        return () => clearInterval(interval);
    }, [number,setNumber]);

    return (
        <div className={`flex flex-col gap-20 max-w-screen-xl mx-auto w-full items-center justify-center`}>
            <div className={`flex flex-col items-center justify-center gap-10`}>
                <h1 className={` items-center font-bold text-gray-800 flex flex-row gap-1.5 text-5xl`}>
                    <span>ابزارهای رایگان برای</span>
                    <span className={`flex flex-col relative h-20 w-130 overflow-hidden`}>
                        {indexHead.map((value, index) => {
                            if(number === index){
                                a = 'translate-y-0 z-20'
                            }else {
                                if(number - 1 === index || number + 1 === index){
                                    if(number - index > 0){
                                        a = '-translate-y-full z-10'
                                    }else {
                                        a = 'translate-y-full z-10'
                                    }
                                }
                                if(number === 0){
                                    if(index === count){
                                        a = '-translate-y-full z-10'
                                    }
                                }
                                if(number === count){
                                    if(index === 0){
                                        a = 'translate-y-full z-10'
                                    }
                                }
                            }
                            return (
                                <span key={index} className={` ${a} ${value.color1} absolute anime_hover duration-500 w-130 text-center text-white/90 px-3 py-4`}>{value.title}</span>
                            )
                        })}
                    </span>
                </h1>
                <h2 className={` items-center flex flex-row gap-1.5 text-gray-500`}>
                    <span>در Dtools به سادگی</span>
                    <span className={`flex flex-col relative h-10 w-65 overflow-hidden`}>
                        {indexHead.map((value, index) => {
                            if(number === index){
                                a = 'translate-y-0 z-20'
                            }else {
                                if(number - 1 === index || number + 1 === index){
                                    if(number - index > 0){
                                        a = '-translate-y-full z-10'
                                    }else {
                                        a = 'translate-y-full z-10'
                                    }
                                }
                                if(number === 0){
                                    if(index === count){
                                        a = '-translate-y-full z-10'
                                    }
                                }
                                if(number === count){
                                    if(index === 0){
                                        a = 'translate-y-full z-10'
                                    }
                                }
                            }
                            return (
                                <span key={index} className={`w-65 absolute anime_hover text-gray-600 ${value.color2} duration-500 ${a} text-center p-2`}>{value.description}</span>
                            )
                        })}
                    </span>
                    <span>همه‌چیز رایگان، سریع، با کیفیت و حرفه‌ای در دسترس شماست.</span>
                </h2>
            </div>
        </div>
    );
};

export default IndexHead;