'use client'
import React, {useState} from 'react';
import {indexHead} from "@/assets/data/Data";
import {Kalameh} from "@/app/layout";
import {BiCut} from "react-icons/bi";

const IndexItems = () => {

    const [number, setNumber] = useState(0);
    const [data, setData] = useState();

    return (
        <div>
            <div className={`bg-white text_icon text-center justify-between rounded-full p-3 w-full`}>
                {indexHead.map((value,index)=>{
                    return (
                        <div onClick={()=>{setNumber(index)}} key={index} className={`text-gray-600 ${value.border} ${value.hover} cursor-pointer hover:text-white anime_hover duration-400 border-2 p-3 border-dashed rounded-full text_icon ${Kalameh.className}`}>
                            <BiCut size={24}/>
                            <h3 className={`font-semibold`}>{value.title}</h3>
                        </div>
                    )
                })}
            </div>
            {indexHead[number].item.map((value,index)=>{
                return (
                    <div key={index}></div>
                )
            })}
        </div>
    );
};

export default IndexItems;