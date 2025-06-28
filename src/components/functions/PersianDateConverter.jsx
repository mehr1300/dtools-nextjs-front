"use client"
import React, {useEffect, useState} from 'react';
import {convertDate, convertNumbers, getCurrentYear} from "@/utility/functions";
import {Toast} from "@/components/toast/Toast";
import {dayList} from "@/assets/data/DataList";

const PersianDateConverter = () => {

    const [selectType, setSelectType] = useState("jalali")
    const [selectYear, setSelectYear] = useState(getCurrentYear("jalali"))
    const [selectMonth, setSelectMonth] = useState(1)
    const [selectDay, setSelectDay] = useState(1)
    const [data, setData] = useState( {
        status : "failed",
        data : [],
        message : "خطا در محاسبه.",
    })

    useEffect(() => {
        setSelectYear(getCurrentYear(selectType))
    },[selectType])

    const onSubmit = (format) => {
        console.log("selectType", selectType)
        console.log("selectYear", selectYear)
        console.log("selectMonth", selectMonth)
        console.log("selectDay", selectDay)
        setData(convertDate({type : selectType, year: parseInt(selectYear), month: parseInt(selectMonth), day: parseInt(selectDay)}));
    };


    return (
        <div className="flex flex-col gap-12 justify-center w-full items-center">
            <div className="flex flex-row justify-center w-full items-center gap-3">
                <div className="relative">
                    <label htmlFor="" className="absolute text-xs   text-gray-400 -top-2 right-2">نوع تبدیل</label>
                    <select onChange={(e)=>{setSelectType(e.target.value)}} name="" id="" className="border border-gray-200 bg-white outline-sky-200 rounded-lg p-3 text-gray-700">
                        <option value="jalali">تبدیل شمسی به میلادی و قمری</option>
                        <option value="gregorian">تبدیل میلادی به شمسی و قمری</option>
                        <option value="hijri">تبدیل قمری به شمسی و میلادی</option>
                    </select>
                </div>
                <div className="relative">
                    <label htmlFor="" className="absolute text-xs   text-gray-400 -top-2 right-2">روز</label>
                    <select onChange={(e)=>{setSelectDay(e.target.value)}} name="" id="" className="border border-gray-200 bg-white outline-sky-200 rounded-lg p-3 text-gray-700">
                        {dayList.map((item) => {
                            if(item.type === selectType && item.month_id === parseInt(selectMonth)) {
                                return item.days.map((day) => (
                                    <option key={day} value={day}>{day}</option>
                                ))
                            }
                        }) }
                    </select>
                </div>
                <div className="relative">
                    <label htmlFor="" className="absolute text-xs   text-gray-400 -top-2 right-2">ماه</label>
                    <select onChange={(e)=>{setSelectMonth(e.target.value)}} name="" id="" className="w-52 border border-gray-200 bg-white outline-sky-200 rounded-lg p-3 text-gray-700">
                        {dayList.map((item) => {
                            if(item.type === selectType){
                                return (
                                    <option key={item.month_id} value={item.month_id}>{item.month}</option>
                                )
                            }
                        }) }
                    </select>
                </div>
                <div className="relative">
                    <label htmlFor="" className="absolute text-xs   text-gray-400 -top-2 right-2">سال</label>
                    <input value={selectYear} onChange={(e)=>{setSelectYear(e.target.value)}} dir="ltr" type="text" className="w-20 border border-gray-200 bg-white outline-sky-200 rounded-lg p-3 text-gray-700"/>
                </div>
                <div onClick={() => {onSubmit("persian")}} className="flex flex-row justify-center items-center p-3 w-40 rounded-lg bg-sky-400 hover:bg-sky-500 anime_hover text-gray-100 cursor-pointer ">تبدیل</div>
            </div>
            <div className="flex flex-row gap-24 ">
                {data && data?.status === "success" && data.data.length > 0 && data.data.map((item,index) => (
                    <div key={index} className="flex flex-col gap-2 justify-center items-center">
                        <span className="font-bold text-sky-500">{item.calendar}</span>
                        <span className="text-gray-600">{item.date}</span>
                        <span className="text-gray-600">{item.fullDate}</span>
                    </div>
                ))}
                {data && data?.status === "failed" &&
                <div className="border-2 border-red-400 w-full p-10 px-30 border-dashed rounded">
                   <span className="text-red-500 font-bold"> {data?.message}</span>
                </div>
                }
            </div>

        </div>
    );
};

export default PersianDateConverter;
