import React from 'react';
import ConvertPersianCharactersToArabic from "@/components/functions/ConvertPersianCharactersToArabic";
import {Kalameh} from "@/app/layout";
import Image from "next/image";
import a from "../../../public/credit-card.gif"

export const metadata = {
    title: "تبدیل کارکتر های فارسی به عربی",
    description: "ابزار آنلاین تبدیل کاراکترهای فارسی به عربی با دقت بالا. متن فارسی خود را وارد کنید و به راحتی به عربی تبدیل کنید. مناسب برای سئو و تولید محتوا.",
};

const Page = () => {
    return (
        <div className="min-h-[100svh] bg-gradient-to-b from-sky-50 to-white">
            <div className="flex flex-col gap-14 p-10 max-w-screen-xl w-full mx-auto">
                <div className={`text_icon gap-0`}>
                    <Image width={60} height={60} src={a} alt=""/>
                    <h1 className={`${Kalameh.className} text-gray-800 text-2xl font-bold`}>ابزار تبدیل کاراکترهای فارسی به عربی</h1>
                </div>
                <ConvertPersianCharactersToArabic/>
                <div className="flex flex-col gap-4 border-t pt-10 border-gray-300">
                    <h2 className="font-bold text-justify">ابزار تبدیل کاراکترهای فارسی به عربی</h2>
                    <p className="text-justify leading-8 text-gray-700">ابزار تبدیل کاراکترهای فارسی به عربی یک راه‌حل سریع و دقیق برای تبدیل متن‌های فارسی به معادل عربی آن‌ها است. این ابزار با استفاده از تابع جاوااسکریپت اختصاصی، کاراکترهای فارسی مانند «ی»، «ک»، «پ» و «ژ» را به کاراکترهای معادل عربی مانند «ي» و «ك» تبدیل می‌کند. مناسب برای تولید محتوای چندزبانه، بهبود سئو سایت‌های عربی و فارسی، و استانداردسازی متون. کافی است متن خود را وارد کنید و نتیجه را فوراً دریافت کنید. این ابزار برای توسعه‌دهندگان، تولیدکنندگان محتوا و وب‌مسترها ایده‌آل است.</p>
                </div>
            </div>
        </div>
    );
};

export default Page;
