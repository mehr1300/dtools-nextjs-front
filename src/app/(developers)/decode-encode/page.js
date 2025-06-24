import React from 'react';
import a from "../../../assets/images/gifs/encryption.gif";
import {IRANYekanFaNum} from "@/app/layout";
import SingleStructures from "@/components/pages/SingleStructures";

export const metadata = {
    title: "دیکود (decode) و انکود (encode) | تبدیل رشته ها به کاکتر و برعکس",
    description: "ابزار آنلاین تبدیل متن انگلیسی به حروف بزرگ، کوچک، Snake Case و حالت‌های دیگر با رابط کاربری ساده و سریع.",
    author: "dtools.ir",
    robots: "index, follow",
    keywords: "تبدیل متن, ابزار تبدیل متن, حروف بزرگ, حروف کوچک, snake case, text transformer",
};

const Page = () => {
    return (
        <SingleStructures
            title="decode و encode"
            abstract="دیکود (decode) و انکود (encode) | تبدیل رشته ها به کاکتر و برعکس"
            image={a}
            desc=" ابزار رفع کشیدگی متن ما یک راه‌حل سریع و کارآمد برای حذف کاراکترهای کشیده (مانند «ــ» یا Tatweel) از متن‌های فارسی ارائه می‌دهد. این ابزار برای کاربرانی طراحی شده است که با مشکل وجود کاراکترهای کشیدگی در متن‌های خود مواجه هستند، به‌ویژه در متون تایپ‌شده یا کپی‌شده که ممکن است به‌طور ناخواسته شامل این کاراکترها شوند. با استفاده از این ابزار آنلاین، می‌توانید متن خود را وارد کرده و با یک کلیک، تمام کاراکترهای کشیده را حذف کنید. این ابزار رایگان، بدون نیاز به نصب نرم‌افزار و با رابط کاربری ساده، تجربه‌ای روان و سریع را فراهم می‌کند. چه نویسنده، ویراستار، یا برنامه‌نویس باشید، این ابزار به شما کمک می‌کند تا متنی تمیز و استاندارد داشته باشید. کافی است متن خود را در کادر مربوطه وارد کنید و دکمه رفع کشیدگی را فشار دهید تا نتیجه‌ای دقیق و فوری دریافت کنید. این ابزار با هدف بهبود کیفیت متون فارسی و افزایش کارایی کاربران طراحی شده و برای موتورهای جستجو بهینه‌سازی شده است تا دسترسی به آن آسان باشد."
        >
            <div className={`h-60 ${IRANYekanFaNum.className} font-bold text-xl text-sky-400 gap-6 text_icon justify-center`}>
                <span>در دست اقدام</span>
                <span className={`text-gray-500 animate-ping h-8 `}> . . . </span>
            </div>
        </SingleStructures>
    );
};

export default Page;