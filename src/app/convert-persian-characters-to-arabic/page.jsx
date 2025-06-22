import React from 'react';
import ConvertArabicCharactersToPersian from "@/components/functions/ConvertArabicCharactersToPersian";

export const metadata = {
    title: "تبدیل کارکتر های عربی به فارسی",
    description: "ابزار آنلاین تبدیل کاراکترهای فارسی به عربی با دقت بالا. متن فارسی خود را وارد کنید و به راحتی به عربی تبدیل کنید. مناسب برای سئو و تولید محتوا.",
};
const Page = () => {
    return (
        <div className="flex flex-col justify-center items-center  ">
            <div className="flex flex-col gap-6 justify-center items-center px-10 md:px-60 py-10 container">
                <h1 className={`text-2xl font-bold`}>ابزار تبدیل کاراکترهای فارسی به عربی</h1>
                <div className="flex flex-row w-full  justify-center items-center ">
                    <ConvertArabicCharactersToPersian/>
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="font-bold text-justify">ابزار تبدیل کاراکترهای فارسی به عربی</h2>
                    <p className="text-justify">ابزار تبدیل کاراکترهای فارسی به عربی یک راه‌حل سریع و دقیق برای تبدیل متن‌های فارسی به معادل عربی آن‌ها است. این ابزار با استفاده از تابع جاوااسکریپت اختصاصی، کاراکترهای فارسی مانند «ی»، «ک»، «پ» و «ژ» را به کاراکترهای معادل عربی مانند «ي» و «ك» تبدیل می‌کند. مناسب برای تولید محتوای چندزبانه، بهبود سئو سایت‌های عربی و فارسی، و استانداردسازی متون. کافی است متن خود را وارد کنید و نتیجه را فوراً دریافت کنید. این ابزار برای توسعه‌دهندگان، تولیدکنندگان محتوا و وب‌مسترها ایده‌آل است.</p>
                </div>
            </div>
        </div>
    );
};

export default Page;
