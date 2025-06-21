'use client'
import React, {useEffect, useState} from 'react';
import {indexHead} from "@/assets/data/Data";
import Link from "next/link";

const IndexHead = () => {

    const [number,setNumber] = useState(0)
    const count = indexHead.length - 1
    const nextImage = () => {
        setNumber(number < count ? number + 1 : 0)
    }
    let a = 'translate-y-full z-10 hidden'
    let b = 'translate-x-full z-10 hidden'
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
                    <span className={`flex flex-col relative h-20 w-180 overflow-hidden`}>
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
                                <span key={index} className={` ${a} ${value.color1} absolute anime_hover duration-500 w-180 text-center text-white/90 px-3 py-4`}>{value.title}</span>
                            )
                        })}
                    </span>
                </h1>
                <h2 className={` items-center flex flex-row gap-1.5 text-gray-500`}>
                    <span>در Dtools به سادگی</span>
                    <span className={`flex flex-col relative h-10 w-70 overflow-hidden`}>
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
                                <span key={index} className={`w-70 absolute anime_hover ${value.color2} duration-500 ${a} text-center p-2`}>{value.description}</span>
                            )
                        })}
                    </span>
                    <span>همه‌چیز رایگان، سریع و با کیفیت و حرفه‌ای در دسترس شماست.</span>
                </h2>
            </div>
            <div className={`relative h-120 w-full overflow-hidden max-w-screen-lg mx-auto flex flex-row`}>
                {indexHead.map((value, index) => {
                    if(number === index){
                        b = 'translate-x-0 z-20'
                    }else {
                        if(number - 1 === index || number + 1 === index){
                            if(number - index > 0){
                                b = '-translate-x-full z-10'
                            }else {
                                b = 'translate-x-full z-10'
                            }
                        }
                        if(number === 0){
                            if(index === count){
                                b = '-translate-x-full z-10'
                            }
                        }
                        if(number === count){
                            if(index === 0){
                                b = 'translate-x-full z-10'
                            }
                        }
                    }
                    return (
                        <div key={index} className={`absolute ${b} anime_hover duration-500 flex flex-row px-2 gap-6`}>
                            {value.item?.map((value, index) => {
                                return (
                                    <div key={index} className={`rounded-xl drop-shadow-sm ${value.dropShadow} flex flex-col`}>
                                        <div className={`${value.color1} bg-[url('/box.png')] bg-blend-overlay flex flex-col gap-5 rounded-t-xl w-80 h-45 p-5`}>
                                            <div className={`size-11 flex-shrink-0 flex items-center justify-center rounded-full bg-white/40 text-white`}>{value.icon}</div>
                                            <div className={`flex flex-col gap-2`}>
                                                <h2 className={`font-bold text-lg text-white/90`}>{value.title}</h2>
                                                <p className={`text-sm h-10 text-white/80`}>{value.description}</p>
                                            </div>
                                        </div>
                                        <Link href={value.link} className={`h-16 rounded-b-xl w-80 bg-white py-3 px-4`}>
                                            <div className={` ${value.color2} rounded-lg cursor-pointer ${value.textColor1} flex items-center justify-center text-lg size-full`}>مشاهده</div>
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </div>

    );
};

export default IndexHead;