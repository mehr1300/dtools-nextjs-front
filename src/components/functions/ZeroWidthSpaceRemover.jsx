"use client"
import React, {useState} from 'react';
import {removeZeroWidthSpaces} from "@/utility/functions";
import {LuCopy} from "react-icons/lu";
import {Toast} from "@/components/toast/Toast";

const ZeroWidthSpaceRemover = () => {

    const [textOne, setTextOne] = useState("")
    const [textTwo, setTextTwo] = useState("")
    const onSubmit = () => {
       setTextTwo(removeZeroWidthSpaces(textOne))
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
        <div className="flex flex-col gap-5 justify-center w-full items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-5">
                <div className="flex flex-col gap-3">
                    <label className="flex flex-row gap-1" htmlFor="textOne">
                        <span>متن را وارد کنید</span>
                        <span className="text-sm text-gray-700"></span>
                    </label>
                    <textarea id="textOne" value={textOne} onChange={(e) => {setTextOne(e.target.value)}} name=""  cols="60" rows="10" className="border border-gray-200 bg-white outline-sky-200 rounded-xl p-3 text-gray-700"></textarea>
                </div>
                <div className="flex flex-col relative gap-3">
                    <div className="flex flex-row justify-between items-center">
                        <label className="flex flex-row gap-1" htmlFor="textArea">
                            <span>خروجی</span>
                            <span className="text-sm text-gray-700"></span>
                        </label>
                        <div className={`rounded-xl cursor-pointer left-0 -top-5 text-blue-500 absolute size-10 bg-blue-200 flex items-center justify-center`}>
                            <LuCopy onClick={copyToClipboard} size={21}/>
                        </div>
                    </div>
                    <textarea value={textTwo} readOnly name="" id="textArea" cols="60" rows="10" className="border border-gray-200 bg-white outline-sky-200 rounded-xl p-3 text-gray-700"></textarea>
                </div>
            </div>
            <div onClick={() => {onSubmit()}} className="flex flex-row justify-center items-center p-3 w-40 rounded-xl bg-sky-400 hover:bg-sky-500 anime_hover text-gray-100 cursor-pointer ">تبدیل</div>
        </div>
    );
};

export default ZeroWidthSpaceRemover;
