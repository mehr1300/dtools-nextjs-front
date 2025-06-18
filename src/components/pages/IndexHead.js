'use client'
import React, {useEffect, useState} from 'react';
import {indexHead} from "@/assets/data/Data";
import Link from "next/link";
import {BiCalendar} from "react-icons/bi";

const IndexHead = () => {

    const [number,setNumber] = useState(0)
    const nextImage = () => {
        if (number === indexHead.length - 1){
            setNumber(0)
        } else {
            setNumber(number + 1)
        }
    }
    useEffect(() => {
        const interval = setInterval(() => {
            nextImage()
        }, 2000);
        return () => clearInterval(interval);
    }, [number,setNumber]);

    return (
        <div className={`flex flex-col items-center justify-center gap-10`}>
            <h1 className={`font-bold text-gray-800  text-5xl`}> ابزارهای رایگان برای<span className={`${indexHead[number].color} flex flex-col text-white/90 p-2`}>{indexHead[number].title}</span></h1>
            <h2 className={`text-gray-500`}>در Dtools به سادگی {indexHead[number].description} همه‌چیز رایگان، سریع و با کیفیت و حرفه‌ای در دسترس شماست.</h2>
        </div>
    );
};

export default IndexHead;