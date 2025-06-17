import React, {Suspense} from 'react';
import {Dana} from "@/app/layout";
import Convert from "@/components/zero-width-space-remover/Convert";
export const metadata = {
    title: "ابزار حذف نیم‌فاصله - پاکسازی سریع متن",
    description: "ابزار آنلاین حذف نیم‌فاصله (Zero-Width Space) برای پاکسازی سریع و آسان متن با رابط کاربری ساده و کارآمد.",
    author: "dtools.ir",
    robots: "index, follow",
    keywords: "حذف نیم‌فاصله, ابزار پاکسازی متن, نیم‌فاصله, zero-width space remover, ابزار آنلاین متن",
};
const Page = () => {
    return (
        <div className="flex flex-col justify-center items-center  ">
            <div className="flex flex-col gap-6 justify-center items-center px-10 md:px-60 py-10 container">
                <h1 className={`${Dana.className} text-2xl font-bold`}>ابزار حذف نیم‌فاصله از متن</h1>
                <div className="flex flex-row w-full  justify-center items-center ">
                    <Convert/>
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="font-bold text-justify">ابزار حذف نیم‌فاصله از متن</h2>
                    <p className="text-justify">ابزار حذف نیم‌فاصله ما یک راه‌حل سریع و کارآمد برای پاکسازی متن از کاراکترهای نامرئی مانند نیم‌فاصله (Zero-Width Space) ارائه می‌دهد. این ابزار برای کاربرانی طراحی شده است که با مشکل وجود نیم‌فاصله‌ها در متن‌های خود مواجه هستند، به‌ویژه در زبان فارسی که این کاراکترها ممکن است به‌طور ناخواسته در هنگام کپی و پیست یا ویرایش متن اضافه شوند. با استفاده از این ابزار، می‌توانید به‌راحتی متن خود را وارد کنید و با یک کلیک، تمام نیم‌فاصله‌های موجود را حذف کنید. این ابزار آنلاین، رایگان و بدون نیاز به نصب نرم‌افزار است و با رابط کاربری ساده خود، تجربه‌ای روان و سریع را برای کاربران فراهم می‌کند. چه نویسنده، ویراستار، یا برنامه‌نویس باشید، این ابزار به شما کمک می‌کند تا متن‌های تمیز و بدون اشکال داشته باشید. کافی است متن خود را در کادر مربوطه وارد کنید و دکمه حذف را فشار دهید تا نتیجه‌ای دقیق و فوری دریافت کنید. این ابزار با هدف بهبود کیفیت متون فارسی و افزایش کارایی کاربران طراحی شده است و با بهینه‌سازی برای موتورهای جستجو، به‌راحتی قابل دسترسی است.</p>
                </div>
            </div>
        </div>
    );
};

export default Page;
