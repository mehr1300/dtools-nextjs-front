import React from 'react';
import Link from "next/link";
import IndexHead from "@/components/pages/IndexHead";

export const metadata = {
  title: "ابزارهای رایگان ویرایش متن فارسی در Dtools | تبدیل، اصلاح و بهینه‌سازی",
  description: "ابزارهای رایگان آنلاین برای ویرایش متن فارسی: تبدیل کاراکتر، رفع کشیدگی، حذف نیم‌فاصله و بیشتر. همین حالا امتحان کنید!",
};

const Page = () => {
    return (
        <div className="h-[100svh] bg-gray-100 flex flex-col gap-20">
            <nav className={`bg-white h-18`}>
                <div dir="ltr" className={`max-w-screen-xl mx-auto items-center h-full flex px-5`}>
                    <Link className={`font-bold text-2xl`} href="/">Dtools</Link>
                </div>
            </nav>
            <IndexHead/>
        </div>
    );
};

export default Page;
