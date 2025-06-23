import React from 'react';
import TatweelRemover from "@/components/functions/TatweelRemover";

export const metadata = {
    title: "ابزار رفع کشیدگی متن - پاکسازی سریع متن",
    description: "ابزار آنلاین رفع کشیدگی متن (Tatweel) برای پاکسازی سریع و آسان متن‌های فارسی با رابط کاربری ساده.",
    author: "dtools.ir",
    robots: "index, follow",
    keywords: "رفع کشیدگی متن, ابزار پاکسازی متن, حذف کشیدگی, tatweel remover, ابزار آنلاین متن",
};

const Page = () => {
    return (
        <div className="flex flex-col justify-center items-center  ">
            <div className="flex flex-col gap-6 justify-center items-center px-10 md:px-60 py-10 container">
                <h1 className={`text-2xl font-bold`}>ابزار رفع کشیدگی متن</h1>
                <div className="flex flex-row w-full  justify-center items-center ">
                    <TatweelRemover/>
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="font-bold text-justify">ابزار رفع کشیدگی متن</h2>
                    <p className="text-justify"> ابزار رفع کشیدگی متن ما یک راه‌حل سریع و کارآمد برای حذف کاراکترهای کشیده (مانند «ــ» یا Tatweel) از متن‌های فارسی ارائه می‌دهد. این ابزار برای کاربرانی طراحی شده است که با مشکل وجود کاراکترهای کشیدگی در متن‌های خود مواجه هستند، به‌ویژه در متون تایپ‌شده یا کپی‌شده که ممکن است به‌طور ناخواسته شامل این کاراکترها شوند. با استفاده از این ابزار آنلاین، می‌توانید متن خود را وارد کرده و با یک کلیک، تمام کاراکترهای کشیده را حذف کنید. این ابزار رایگان، بدون نیاز به نصب نرم‌افزار و با رابط کاربری ساده، تجربه‌ای روان و سریع را فراهم می‌کند. چه نویسنده، ویراستار، یا برنامه‌نویس باشید، این ابزار به شما کمک می‌کند تا متنی تمیز و استاندارد داشته باشید. کافی است متن خود را در کادر مربوطه وارد کنید و دکمه رفع کشیدگی را فشار دهید تا نتیجه‌ای دقیق و فوری دریافت کنید. این ابزار با هدف بهبود کیفیت متون فارسی و افزایش کارایی کاربران طراحی شده و برای موتورهای جستجو بهینه‌سازی شده است تا دسترسی به آن آسان باشد.</p>
                </div>
            </div>
        </div>
    );
};

export default Page;
