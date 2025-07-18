'use client'
import React, {useState} from 'react';
import {indexHead} from "@/assets/data/Data";
import {Kalameh} from "@/app/layout";
import Link from "next/link";

const IndexItems = () => {

    const [number, setNumber] = useState(0);

    return (
        <div className={`flex flex-col gap-10`}>
            <div className={`max-w-screen-md mx-auto border border-gray-200 bg-gray-50 text_icon text-center justify-between rounded-full p-3 w-full`}>
                {indexHead.map((value,index)=>{
                    return (
                        <div onClick={()=>{setNumber(index)}} key={index} className={` ${index === number ? `${value.color1} text-white` : " bg-white"} ${value.hover} cursor-pointer hover:text-white anime_hover ${value.textColor} p-3 border border-gray-200 rounded-full text_icon ${Kalameh.className}`}>
                            {value.icon}
                            <h3 className={`font-semibold`}>{value.title}</h3>
                        </div>
                    )
                })}
            </div>
            <div className={`max-w-screen-xl mx-auto w-full grid grid-cols-3 xl:grid-cols-4 gap-5`}>
                {indexHead[number].item.map((value,index)=>{
                    return (
                        <Link href={value.link} className={`bg-gray-50 border border-gray-200 rounded-xl p-4 flex flex-col gap-3`} key={index}>
                            <div className={`text_icon items-start gap-2`}>
                                <div className={`size-11 rounded-2xl flex-shrink-0 flex items-center justify-center ${indexHead[number].textColor} ${indexHead[number].color2} `}>{value.icon}</div>
                                <div className={`flex flex-col gap-1.5`}>
                                    <h4 className={`line-clamp-1 font-semibold`}>{value.title}</h4>
                                    <b className={`text-xs font-normal ${indexHead[number].textColor}`}>{indexHead[number].title}</b>
                                </div>
                            </div>
                            <h5 className={`text-gray-400 h-10 line-clamp-2 overflow-hidden leading-5 text-xs`}>{value.description}</h5>
                        </Link>
                    )
                })}
            </div>
        </div>
    );
};

export default IndexItems;