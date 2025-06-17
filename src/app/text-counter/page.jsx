import React from 'react';
import {Dana} from "@/app/layout";
import TextCounter from "@/components/functions/TextCounter";

export const metadata = {
    title: "ابزار شمارش متن - تعداد کاراکتر، کلمه، فاصله",
    description: "ابزار آنلاین شمارش تعداد کاراکتر، کلمه و فاصله در متن با رابط کاربری ساده و نتایج دقیق و سریع.",
    author: "dtools.ir",
    robots: "index, follow",
    keywords: "شمارش متن, ابزار شمارش کاراکتر, تعداد کلمه, تعداد فاصله, text counter, ابزار آنلاین متن",
};
const Page = () => {
    return (
        <div className="flex flex-col justify-center items-center  ">
            <div className="flex flex-col gap-6 justify-center items-center px-10 md:px-60 py-10 container">
                <h1 className={`${Dana.className} text-2xl font-bold`}>ابزار شمارش متن - تعداد کاراکتر، کلمه، فاصله</h1>
                <div className="flex flex-row w-full  justify-center items-center ">
                    <TextCounter/>
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="font-bold text-justify">ابزار شمارش متن (Text Counter)</h2>
                    <p className="text-justify">
                        <strong>ابزار شمارش متن</strong> ما یک راه‌حل <strong>سریع، دقیق و رایگان</strong> برای شمارش <strong>تعداد کاراکترها</strong>، <strong>تعداد کلمات</strong>، و <strong>تعداد فاصله‌ها</strong> در متن ارائه می‌دهد. این ابزار برای <strong>نویسندگان</strong>، <strong>ویراستاران</strong>، <strong>دانش‌آموزان</strong>، و <strong>متخصصان سئو</strong> طراحی شده است که نیاز به تحلیل سریع متن دارند. با استفاده از <strong>Text Counter</strong>، می‌توانید به‌راحتی متن خود را در کادر مربوطه وارد کنید و فوراً آمار دقیق شامل تعداد کاراکترها (با و بدون فاصله)، تعداد کلمات، و تعداد فاصله‌های موجود در متن را مشاهده کنید. این ابزار آنلاین با <strong>رابط کاربری ساده</strong> و بدون نیاز به نصب نرم‌افزار، تجربه‌ای روان و کارآمد را فراهم می‌کند. چه در حال نگارش یک مقاله، آماده‌سازی محتوای شبکه‌های اجتماعی، یا بررسی محدودیت‌های متنی برای <strong>سئو</strong> باشید، این ابزار به شما کمک می‌کند تا کنترل کاملی بر متن خود داشته باشید. کافی است متن خود را جای‌گذاری کنید تا نتایج در لحظه نمایش داده شوند. <strong>ابزار شمارش متن</strong> با هدف افزایش بهره‌وری و دقت در کار با متون طراحی شده و با <strong>بهینه‌سازی برای موتورهای جستجو</strong>، به‌راحتی قابل دسترسی است. این ابزار نه‌تنها برای متون فارسی، بلکه برای هر زبانی قابل استفاده است و با پشتیبانی از کاراکترهای یونیکد، نتایج دقیقی ارائه می‌دهد. با <strong>Text Counter</strong>، زمان خود را صرفه‌جویی کرده و متنی حرفه‌ای و مطابق با نیازهای خود تولید کنید. برای بهترین تجربه، متن خود را وارد کرده و از آمار دقیق و فوری لذت ببرید.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Page;
