"use client"
import React, {useState} from 'react';
import {persianToArabic} from "@/utility/functions";
import {LuCopy} from "react-icons/lu";
import {Toast} from "@/components/toast/Toast";

const ConvertPersianCharactersToArabic = () => {
    const [textOne, setTextOne] = useState("")
    const [textTwo, setTextTwo] = useState("")

    const onSubmit = () => {
       setTextTwo(persianToArabic(textOne))
    }

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
        <div className="flex flex-col gap-5 justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex flex-col">
                    <label className="flex flex-row gap-1" htmlFor="textOne">
                        <span>متن را وارد کنید</span>
                        <span className="text-sm text-gray-700">(فارسی)</span>
                    </label>
                    <textarea id="textOne" value={textOne} onChange={(e) => {setTextOne(e.target.value)}} name=""  cols="60" rows="10" className="border border-gray-300 rounded-xl p-3 text-gray-700"></textarea>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-row justify-between items-center">
                        <label className="flex flex-row gap-1" htmlFor="textArea">
                            <span>خروجی</span>
                            <span className="text-sm text-gray-700">(عربی)</span>
                        </label>
                        <LuCopy onClick={copyToClipboard} className="text-gray-800 hover:text-gray-600 cursor-pointer" size={18}/>
                    </div>
                    <textarea value={textTwo} readOnly name="" id="textArea" cols="60" rows="10" className="border border-gray-300 rounded-xl p-3 text-gray-700"></textarea>
                </div>
            </div>
            <div onClick={() => {onSubmit()}} className="flex flex-row justify-center items-center p-3 w-40 rounded-xl bg-blue-500 hover:bg-blue-400 text-gray-100 cursor-pointer ">تبدیل</div>

        </div>

    );
};

export default ConvertPersianCharactersToArabic;
