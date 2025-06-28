'use client'
import React from 'react';
import {LuCopy} from "react-icons/lu";
import {Toast} from "@/components/section/toast/Toast";
import {generateIranianNationalCode} from "@/utility/functions";

const FakeNationalCodeGenerator = () => {
    const [value, setValue] = React.useState('');

    const copyToClipboard = async () => {
        try {
            const textarea = document.querySelector('#data');
            await navigator.clipboard.writeText(textarea.value);
            Toast.success("متن با موفقیت کپی شد!")
        } catch (err) {
            console.error('خطا در کپی کردن متن: ', err);
            Toast.error('کپی کردن متن ناموفق بود.')
        }
    };

    const onSubmit = () => {
        setValue(generateIranianNationalCode())
    }

    return (
        <div className="flex flex-col gap-5 justify-center w-full items-center">
            <div className="flex flex-col justify-center items-center relative gap-3">
                <div className="flex flex-row justify-between items-center w-full">
                    <label className="flex flex-row justify-start gap-1  " htmlFor="textArea">
                        <span>کد ملی</span>
                        <span className="text-sm text-gray-700"></span>
                    </label>
                    <div className={`rounded-xl cursor-pointer left-0 -top-5 text-blue-500 absolute size-10 bg-blue-200 flex items-center justify-center`}>
                        <LuCopy onClick={copyToClipboard} size={21}/>
                    </div>
                </div>

                <div className="flex flex-row justify-center items-center w-96 border border-gray-200 bg-white outline-sky-200 rounded-xl p-3 text-gray-700">
                    <input id="data" readOnly type="text" value={value} className="w-26 outline-none justify-center items-center"/>
                </div>
            </div>
            <div onClick={() => {onSubmit()}} className="flex flex-row justify-center items-center p-3 w-40 rounded-xl bg-sky-400 hover:bg-sky-500 anime_hover text-gray-100 cursor-pointer ">تولید کد ملی</div>
        </div>

    );
};

export default FakeNationalCodeGenerator;
