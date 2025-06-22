import React from 'react';
import TextTransformer from "@/components/functions/TextTransformer";

export const metadata = {
    title: "ابزار تبدیل متن - حروف بزرگ، کوچک، Snake Case",
    description: "ابزار آنلاین تبدیل متن انگلیسی به حروف بزرگ، کوچک، Snake Case و حالت‌های دیگر با رابط کاربری ساده و سریع.",
    author: "dtools.ir",
    robots: "index, follow",
    keywords: "تبدیل متن, ابزار تبدیل متن, حروف بزرگ, حروف کوچک, snake case, text transformer",
};
const Page = () => {
    return (
        <div className="flex flex-col justify-center items-center  ">
            <div className="flex flex-col gap-6 justify-center items-center px-10 md:px-60 py-10 container">
                <h1 className={`text-2xl font-bold`}>ابزار تبدیل متن (Text Transformer)</h1>
                <div className="flex flex-row w-full  justify-center items-center ">
                    <TextTransformer/>
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="font-bold text-justify">ابزار تبدیل متن (Text Transformer)</h2>
                    <p className="text-justify">
                        <strong>ابزار تبدیل متن</strong> ما یک راه‌حل <strong>سریع و رایگان</strong> برای تغییر فرمت متن انگلیسی به حالت‌های مختلف مانند <strong>حروف بزرگ (UPPERCASE)</strong>، <strong>حروف کوچک (lowercase)</strong>، <strong>Snake Case (snake_case)</strong>، و سایر فرمت‌ها ارائه می‌دهد. این ابزار برای <strong>نویسندگان</strong>، <strong>برنامه‌نویسان</strong>، و <strong>ویراستاران</strong> طراحی شده است که نیاز به تغییر سریع فرمت متن دارند. به‌عنوان مثال، می‌توانید متنی مانند «Hello World» را به «HELLO WORLD»، «hello world»، یا «hello_world» تبدیل کنید. این ابزار آنلاین با <strong>رابط کاربری ساده</strong> و بدون نیاز به نصب نرم‌افزار، تجربه‌ای روان را فراهم می‌کند. کافی است متن خود را در کادر مربوطه وارد کرده و حالت موردنظر را انتخاب کنید تا نتیجه‌ای <strong>دقیق و فوری</strong> دریافت کنید. <strong>Text Transformer</strong> برای بهبود کارایی و کیفیت کار با متون انگلیسی طراحی شده است و با <strong>بهینه‌سازی سئو</strong>، به‌راحتی از طریق موتورهای جستجو قابل دسترسی است. چه بخواهید متنی را برای کدگذاری، نگارش، یا استانداردسازی آماده کنید، این ابزار بهترین انتخاب شماست. با استفاده از این ابزار، زمان خود را صرفه‌جویی کرده و متنی تمیز و حرفه‌ای داشته باشید.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Page;
