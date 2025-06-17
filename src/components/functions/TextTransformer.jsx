"use client";
import React, {useState} from 'react';
import {transformText} from "@/utility/functions";
import {LuCopy} from "react-icons/lu";
import {Toast} from "@/components/toast/Toast";

const TextTransformer = () => {
    const [textOne, setTextOne] = useState("this is test")
    const [textTwo, setTextTwo] = useState("")

    const onSubmit = (input) => {
        setTextTwo(transformText(textOne,input))
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
                    <div className="flex flex-row justify-between items-center">
                        <label className="flex flex-row gap-1" htmlFor="textArea">
                            <span>خروجی</span>
                            <span className="text-sm text-gray-700"></span>
                        </label>
                        <LuCopy onClick={copyToClipboard} className="text-gray-800 hover:text-gray-600 cursor-pointer" size={18}/>
                    </div>
                    <textarea dir="ltr" value={textTwo} readOnly name="" id="textArea" cols="60" rows="10" className="border border-gray-300 rounded-xl p-3 text-gray-700"></textarea>
                </div>
                <div className="flex flex-col">
                    <label className="flex flex-row gap-1" htmlFor="textOne">
                        <span>ورودی</span>
                        <span className="text-sm text-gray-700"></span>
                    </label>
                    <textarea dir="ltr" id="textOne" value={textOne} onChange={(e) => {setTextOne(e.target.value)}} name="" cols="60" rows="10" className="border border-gray-300 rounded-xl p-3 text-gray-700"></textarea>
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div onClick={() => onSubmit('uppercase')} className="flex flex-col justify-center items-center p-3 w-48 rounded-xl bg-blue-500 hover:bg-blue-400 text-gray-100 cursor-pointer transform-button">
                    UPPER CASE
                </div>
                <div onClick={() => onSubmit('lowercase')} className="flex flex-col justify-center items-center p-3 w-48 rounded-xl bg-blue-500 hover:bg-blue-400 text-gray-100 cursor-pointer transform-button">
                    lower case
                </div>
                <div onClick={() => onSubmit('titlecase')} className="flex flex-col justify-center items-center p-3 w-48 rounded-xl bg-blue-500 hover:bg-blue-400 text-gray-100 cursor-pointer transform-button">
                    Title Case
                </div>
                <div onClick={() => onSubmit('snakecase')} className="flex flex-col justify-center items-center p-3 w-48 rounded-xl bg-blue-500 hover:bg-blue-400 text-gray-100 cursor-pointer transform-button">
                    snake_case
                </div>
                <div onClick={() => onSubmit('kebabcase')} className="flex flex-col justify-center items-center p-3 w-48 rounded-xl bg-blue-500 hover:bg-blue-400 text-gray-100 cursor-pointer transform-button">
                    kebab-case
                </div>
                <div onClick={() => onSubmit('camelcase')} className="flex flex-col justify-center items-center p-3 w-48 rounded-xl bg-blue-500 hover:bg-blue-400 text-gray-100 cursor-pointer transform-button">
                    camelCase
                </div>
                <div onClick={() => onSubmit('pascalcase')} className="flex flex-col justify-center items-center p-3 w-48 rounded-xl bg-blue-500 hover:bg-blue-400 text-gray-100 cursor-pointer transform-button">
                    PascalCase
                </div>
                <div onClick={() => onSubmit('screaming_snakecase')} className="flex flex-col justify-center items-center p-3 w-48 rounded-xl bg-blue-500 hover:bg-blue-400 text-gray-100 cursor-pointer transform-button">
                    SCREAMING_SNAKE
                </div>
                <div onClick={() => onSubmit('screaming_kebabcase')} className="flex flex-col justify-center items-center p-3 w-48 rounded-xl bg-blue-500 hover:bg-blue-400 text-gray-100 cursor-pointer transform-button">
                    SCREAMING-KEBAB
                </div>
                <div onClick={() => onSubmit('sentencecase')} className="flex flex-col justify-center items-center p-3 w-48 rounded-xl bg-blue-500 hover:bg-blue-400 text-gray-100 cursor-pointer transform-button">
                    Sentence case
                </div>
            </div>
        </div>

    );
};

export default TextTransformer;
