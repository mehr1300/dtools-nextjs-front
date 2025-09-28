"use client"
import React, { useState} from 'react';
import {calculatorAge,getCurrentYear} from "@/utility/functions";
import {Toast} from "@/components/section/toast/Toast";
import {dayList, dayListJalali} from "@/assets/data/DataList";
import {Kalameh} from "@/app/layout";

const AgeCalculator = () => {

    const [selectYear, setSelectYear] = useState(getCurrentYear("jalali"))
    const [selectMonth, setSelectMonth] = useState(1)
    const [selectDay, setSelectDay] = useState(1)
    const [data, setData] = useState( {
        status : "failed",
        data : [],
        message : "خطا در محاسبه.",
    })

    const onSubmit = (format) => {
        setData(calculatorAge({year: parseInt(selectYear), month: parseInt(selectMonth), day: parseInt(selectDay)}));
    };

    console.log(data)

    return (
        <div className="flex flex-col gap-12 justify-center w-full items-center">
            <div className="flex flex-col md:flex-row justify-center w-full items-center gap-6 md:gap-3">
                <div className={`flex flex-row gap-1.5 sm:gap-3`}>
                    <div className="relative">
                        <label htmlFor="" className="absolute text-xs   text-gray-400 -top-2 right-2">روز</label>
                        <select onChange={(e)=>{setSelectDay(e.target.value)}} name="" id="" className={`border border-gray-200 bg-white outline-sky-200 rounded-lg p-3 text-gray-700 ${Kalameh.className}`}>
                            {dayList.map((item) => {
                                return item.days.map((day) => (
                                    <option key={day} value={day}>{day}</option>
                                ))
                            }) }
                        </select>
                    </div>
                    <div className="relative">
                        <label htmlFor="" className="absolute text-xs text-gray-400 -top-2 right-2">ماه</label>
                        <select onChange={(e)=>{setSelectMonth(e.target.value)}} name="" id="" className="w-52 border border-gray-200 bg-white outline-sky-200 rounded-lg p-3 text-gray-700">
                            {dayListJalali.map((item) => {
                                return (
                                    <option key={item.month_id} value={item.month_id}>{item.month}</option>
                                )
                            }) }
                        </select>
                    </div>
                    <div className="relative">
                        <label htmlFor="" className="absolute text-xs   text-gray-400 -top-2 right-2">سال</label>
                        <input value={selectYear} onChange={(e)=>{setSelectYear(e.target.value)}} dir="ltr" type="text" className={`${Kalameh.className} w-20 border border-gray-200 bg-white outline-sky-200 rounded-lg p-3 text-gray-700`}/>
                    </div>
                </div>
                <div onClick={() => {onSubmit("persian")}} className="flex flex-row justify-center items-center p-3 w-40 rounded-lg bg-sky-400 hover:bg-sky-500 anime_hover text-gray-100 cursor-pointer ">تبدیل</div>
            </div>
            <div className="grid grid-cols-3 gap-5 lg:flex-row lg:gap-14">
                {data && data?.status === "success" && data.data.length > 0 && data.data.map((item,index) => (
                    <div key={index} className="flex flex-col gap-2 justify-center pb-2 px-10 border-gray-300 last:border-none items-center">
                        <span className="font-bold text-sky-500">{item.calendar}</span>
                        <span className="text-gray-600">{item.fullDate}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AgeCalculator;
