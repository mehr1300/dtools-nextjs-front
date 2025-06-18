import React from 'react';
import Link from "next/link";
import {TbExchange} from "react-icons/tb";
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
            <div className={`flex flex-col gap-20 max-w-screen mx-auto w-full items-center justify-center`}>
                <IndexHead/>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <div className={`bg-blue-400 flex flex-col gap-5 rounded-t-xl w-80 h-45 p-5`}>
                            <div className={`size-12 flex items-center justify-center rounded-full bg-white/40 text-white`}><TbExchange size={30}/></div>
                            <h2 className={`font-bold text-lg text-white/90`}>تبدیل کارکتر های فارسی به عربی</h2>
                        </div>
                        <div className={`h-16 rounded-b-xl w-80 bg-white py-3 px-4`}>
                            <div className={`bg-blue-100 rounded-lg text-blue-400 flex items-center justify-center text-lg size-full`}>مشاهده</div>
                        </div>
                    </div>
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
