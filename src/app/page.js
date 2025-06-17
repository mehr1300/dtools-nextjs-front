import React from 'react';
import {Dana} from "@/app/layout";
import Link from "next/link";

const Page = () => {
    return (
        <div className="bg-gray-300 h-screen">
            <div className="flex flex-col gap-10 justify-center items-center p-15">
                <span className="text-9xl font-bold Dana text-gray-500 ">Dtools</span>
                <div className="grid grid-cols-2 gap-4">
                    <Link href="/convert-persian-characters-to-arabic" className="flex flex-row justify-center border-gray-300 hover:bg-blue-600 rounded text-gray-100 cursor-pointer bg-blue-500 p-3">تبدیل کارکتر های فارسی به عربی</Link>
                    <Link href="/convert-persian-characters-to-arabic" className="flex flex-row justify-center border-gray-300 hover:bg-blue-600 rounded text-gray-100 cursor-pointer bg-blue-500 p-3">تبدیل کارکتر های فارسی به عربی</Link>
                    <Link href="/zero-width-space-remover" className="flex flex-row justify-center border-gray-300 hover:bg-blue-600 rounded text-gray-100 cursor-pointer bg-blue-500 p-3">ابزار حذف نیم‌فاصله از متن</Link>
                    <Link href="/tatweel-remover" className="flex flex-row justify-center border-gray-300 hover:bg-blue-600 rounded text-gray-100 cursor-pointer bg-blue-500 p-3">ابزار رفع کشیدگی متن</Link>
                </div>
            </div>
        </div>
    );
};

export default Page;
