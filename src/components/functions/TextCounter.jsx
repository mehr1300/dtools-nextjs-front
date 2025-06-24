"use client"
import React, {useEffect, useState} from 'react';
import {IRANYekanFaNum} from "@/app/layout";

const TextCounter = () => {

    const [textOne, setTextOne] = useState("")
    const [charCountWithSpaces, setCharCountWithSpaces] = useState(0);
    const [charCountWithoutSpaces, setCharCountWithoutSpaces] = useState(0);
    const [wordCount, setWordCount] = useState(0);
    const [spaceCount, setSpaceCount] = useState(0);
    const [sentenceCount, setSentenceCount] = useState(0);
    const [paragraphCount, setParagraphCount] = useState(0);
    useEffect(() => {
        setCharCountWithSpaces(textOne.length);
        setCharCountWithoutSpaces(textOne.replace(/\s/g, '').length);
        setWordCount(textOne.trim() ? textOne.trim().split(/\s+/).length : 0);
        setSpaceCount((textOne.match(/\s/g) || []).length);
        setSentenceCount(textOne.trim() ? (textOne.match(/[.!?]+(?=\s|$)/g) || []).length : 0);
        setParagraphCount(textOne.trim() ? textOne.split(/\n\s*\n/).filter(p => p.trim()).length : 0);

    }, [textOne]);

    return (
        <div className="flex flex-col gap-10 justify-center items-center">
            <div className="flex flex-col gap-3 w-full">
                <label className="flex flex-row gap-1" htmlFor="textOne">
                    <span>متن را وارد کنید</span>
                    <span className="text-sm text-gray-700"></span>
                </label>
                <textarea id="textOne" value={textOne} onChange={(e) => {setTextOne(e.target.value)}} name="" cols="125" rows="10" className="border border-gray-200 bg-white outline-sky-200 rounded-xl p-3 text-gray-700"></textarea>
            </div>
            <div className=" flex flex-row gap-3">
                <div className="flex flex-col text-sm gap-1 justify-center items-center bg-sky-400 text-white px-2 py-2 rounded">
                    <span className="border-b border-gray-200 p-2">تعداد کارکتر + اسپیس</span>
                    <span className={`${IRANYekanFaNum.className} text-lg`}>{charCountWithSpaces}</span>
                </div>
                <div className="flex flex-col text-sm gap-1 justify-center items-center bg-sky-400 text-white px-2 py-2 rounded">
                    <span className="border-b border-gray-200 p-2">تعداد کارکتر بدون اسپیس</span>
                    <span className={`${IRANYekanFaNum.className} text-lg`}>{charCountWithoutSpaces}</span>
                </div>
                <div className="flex flex-col text-sm gap-1 justify-center items-center bg-sky-400 text-white px-2 py-2 rounded">
                    <span className="border-b border-gray-200 p-2">تعداد کلمه</span>
                    <span className={`${IRANYekanFaNum.className} text-lg`}>{wordCount}</span>
                </div>
                <div className="flex flex-col text-sm gap-1 justify-center items-center bg-sky-400 text-white px-2 py-2 rounded">
                    <span className="border-b border-gray-200 p-2">تعداد اسپیس</span>
                    <span className={`${IRANYekanFaNum.className} text-lg`}>{spaceCount}</span>
                </div>
                <div className="flex flex-col text-sm gap-1 justify-center items-center bg-sky-400 text-white px-2 py-2 rounded">
                    <span className="border-b border-gray-200 p-2">تعداد جمله</span>
                    <span className={`${IRANYekanFaNum.className} text-lg`}>{sentenceCount}</span>
                </div>
                <div className="flex flex-col text-sm gap-1 justify-center items-center bg-sky-400 text-white px-2 py-2 rounded">
                    <span className="border-b border-gray-200 p-2">تعداد پاراگراف</span>
                    <span className={`${IRANYekanFaNum.className} text-lg`}>{paragraphCount}</span>
                </div>
            </div>
        </div>
    );
};

export default TextCounter;
