'use client'
import React from 'react';
import {LuCopy} from "react-icons/lu";
import {Toast} from "@/components/section/toast/Toast";
import {generateIranianNationalCode} from "@/utility/functions";
import {Kalameh} from "@/app/layout";

const FakeNationalCodeGenerator = () => {

    const [value, setValue] = React.useState('');
    const [result, setResult] = React.useState({
        foot  : 0,
        meter  : 0
    });

    const onSubmit = () => {
        setResult({foot:value,meter: (value * 0.3048)*100 })
    }

    return (
        <div className="flex flex-col gap-5 justify-center w-full items-center">
            <div className="flex flex-col justify-center items-center relative gap-3">
                <div className="flex flex-row justify-between items-center w-full">
                    <label className="flex flex-row justify-start gap-1" htmlFor="textArea">
                        <span>فوت</span>
                        <span className="text-sm text-gray-700"></span>
                    </label>
                </div>
                <div className="flex flex-row justify-center items-center w-80 border border-gray-200 bg-white outline-sky-200 rounded-xl p-3 text-gray-700">
                    <input id="data" type="text" value={value} onChange={(e)=>setValue(e.target.value)} placeholder="مثال : 10" className={`w-26 outline-none justify-center items-center text-lg font-semibold text-center `}/>
                </div>
            </div>
            <div onClick={() => {onSubmit()}} className="flex flex-row justify-center items-center p-3 w-40 rounded-xl bg-sky-400 hover:bg-sky-500 anime_hover text-gray-100 cursor-pointer ">تبدیل</div>
            {result.foot > 0 &&
                <div className="font-bold text-2xl mt-10 text-gray-600 flex gap-10">
                    <span>{result.foot} فونت </span>
                    <span> : </span>
                    <span>{result.meter} سانتی متر</span>
                </div>
            }

        </div>

    );
};

export default FakeNationalCodeGenerator;
