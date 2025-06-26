'use client'
import React from 'react';
import {Toast} from "@/components/toast/Toast";
import {getProvinceAndCityFromCode, isValidIranianNationalCode} from "@/utility/functions";

const ValidationNationalCode = () => {
    const [value, setValue] = React.useState('');
    const [valid, setValid] = React.useState("");
    const [province, setProvince] = React.useState("");

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
        setValid( isValidIranianNationalCode(value))
        setProvince(getProvinceAndCityFromCode(value))
    }

    return (
        <div className="flex flex-col gap-5 justify-center w-full items-center">
            <div className="flex flex-col justify-center items-center relative gap-3">
                <div className="flex flex-row justify-between items-center w-full">
                    <label className="flex flex-row justify-start gap-1  " htmlFor="textArea">
                        <span>کد ملی</span>
                        <span className="text-sm text-gray-700"></span>
                    </label>
                </div>
                <input dir="ltr" id="data"  type="text" value={value} onChange={(e)=>setValue(e.target.value)} className="flex flex-row justify-center items-center w-96 border border-gray-200 bg-white outline-sky-200 rounded-xl p-3 text-gray-700"/>

            </div>
            <div onClick={() => {onSubmit()}} className="flex flex-row justify-center items-center p-3 w-40 rounded-xl bg-sky-400 hover:bg-sky-500 anime_hover text-gray-100 cursor-pointer ">صحت سنجی</div>

            <div className="flex flex-col justify-center items-center relative gap-3 mt-10">
                {valid &&
                    <div className="flex flex-col gap-3 justify-center items-center border border-dashed border-gray-400 p-4 rounded-xl">
                        <div className="font-bold text-green-500 ">کد ملی معتبر است.</div>
                        <div className="flex flex-row gap-2">
                            <span className="font-bold text-gray-600">استان : </span>
                            <span>{province?.province}</span>
                            <span className="font-bold text-gray-600">/ شهر : </span>
                            <span >{province?.city}</span>
                        </div>
                    </div>
                }

                {valid === false &&
                    <div className="flex flex-col gap-3 justify-center items-center border border-dashed border-gray-400 p-4 rounded-xl">
                        <div className="font-bold text-red-500 ">کد ملی نامعتبر است.</div>
                    </div>
                }
            </div>

        </div>

    );
};

export default ValidationNationalCode;
