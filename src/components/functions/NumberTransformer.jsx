"use client"
import React, {useState} from 'react';
import {convertNumbers, persianToArabic} from "@/utility/functions";
import {LuCopy} from "react-icons/lu";
import {Toast} from "@/components/section/toast/Toast";

const NumberTransformer = () => {

    const [textOne, setTextOne] = useState("")
    const [textTwo, setTextTwo] = useState("")

    const onSubmit = (format) => {
        setTextTwo(convertNumbers(textOne, format));
    };


    const copyToClipboard = async () => {
        try {
            const textarea = document.querySelector('#textArea');
            await navigator.clipboard.writeText(textarea.value);
            Toast.success("متن با موفقیت کپی شد!")
        } catch (err) {
            console.error('خطا در کپی کردن متن: ', err);
            Toast.error('کپی کردن متن ناموفق بود.')
        }
    };

    return (
        <div className="flex flex-col gap-10 md:gap-5 justify-center w-full items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-10 md:gap-5">
                <div className="flex flex-col gap-3">
                    <label className="flex flex-row gap-1" htmlFor="textOne">
                        <span>متن را وارد کنید</span>
                    </label>
                    <textarea id="textOne" value={textOne} onChange={(e) => {setTextOne(e.target.value)}} name=""  cols="60" rows="10" className="border border-gray-200 bg-white outline-sky-200 rounded-xl p-3 text-gray-700"></textarea>
                </div>
                <div className="flex flex-col relative gap-3">
                    <div className="flex flex-row justify-between items-center">
                        <label className="flex flex-row gap-1" htmlFor="textArea">
                            <span>خروجی</span>
                        </label>
                        <div className={`rounded-xl cursor-pointer left-0 -top-5 text-blue-500 absolute size-10 bg-blue-200 flex items-center justify-center`}>
                            <LuCopy onClick={copyToClipboard} size={21}/>
                        </div>
                    </div>
                    <textarea value={textTwo} readOnly name="" id="textArea" cols="60" rows="10" className="border border-gray-200 bg-white outline-sky-200 rounded-xl p-3 text-gray-700"></textarea>
                </div>
            </div>
            <div className="flex flex-wrap justify-center mx-auto gap-3">
                <div onClick={() => {onSubmit("persian")}} className="flex flex-row justify-center items-center p-3 w-40 rounded-xl bg-sky-400 hover:bg-sky-500 anime_hover text-gray-100 cursor-pointer ">فارسی</div>
                <div onClick={() => {onSubmit("arabic")}} className="flex flex-row justify-center items-center p-3 w-40 rounded-xl bg-sky-400 hover:bg-sky-500 anime_hover text-gray-100 cursor-pointer ">عربی</div>
                <div onClick={() => {onSubmit("english")}} className="flex flex-row justify-center items-center p-3 w-40 rounded-xl bg-sky-400 hover:bg-sky-500 anime_hover text-gray-100 cursor-pointer ">انگلیسی</div>
            </div>
        </div>
    );
};

export default NumberTransformer;
