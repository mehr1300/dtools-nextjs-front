import React from 'react';
import Link from "next/link";
import {indexHead} from "@/assets/data/Data";
import {Kalameh} from "@/app/layout";

export const metadata = {
    title: "ابزارهای آنلاین برای محاسبات روزمره | Dtools",
    description: "ابزارهای کاربردی برای نویسندگان، برنامه‌نویسان و کارهای روزمره. با Dtools به‌راحتی بنویسید، کدنویسی کنید و از سرگرمی‌های جذاب لذت ببرید!",
    keywords: "ابزارهای آنلاین, ابزار نویسندگی, ابزار برنامه‌نویسی, سرگرمی آنلاین, بازی آنلاین, ابزارهای روزمره, Dtools"
};

const Page = () => {
    return (
        <div className={`bg-gradient-to-b from-sky-50 to-white min-h-[100svh] p-10 md:p-20`}>
            <div className={`mx-auto max-w-screen-lg w-full flex flex-col gap-7 lg:gap-12`}>
                <div className={`flex flex-col text-center gap-5`}>
                    <h1 className={`${Kalameh.className} text-2xl font-bold text-gray-800`}>ابزارهای محبوب Dtools برای محاسبات روزمره</h1>
                    <h2 className={`text-gray-500`}>در Dtools از بهترین ابزارها به راحتی و رایگان استفاده کنید.</h2>
                </div>
                <div className={`max-w-screen-lg mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5`}>
                    {indexHead[2].item.map((value,index)=>
                        value.link === ""
                            ?<div className={`bg-gray-50 border border-gray-200 rounded-xl p-4 flex flex-col gap-3`} key={index}>
                                <div className={`text_icon items-start gap-2`}>
                                    <div className={`size-11 rounded-2xl flex-shrink-0 flex items-center justify-center ${indexHead[2].textColor} ${indexHead[2].color2} `}>{value.icon}</div>
                                    <div className={`flex flex-col gap-1.5`}>
                                        <h4 className={`line-clamp-1 font-semibold`}>{value.title}</h4>
                                        <b className={`text-xs font-normal ${indexHead[2].textColor}`}>{indexHead[2].title}</b>
                                    </div>
                                </div>
                                <h5 className={`text-gray-400 h-10 line-clamp-2 overflow-hidden leading-5 text-xs`}>{value.description}</h5>
                            </div>
                            :<Link href={value.link} className={`bg-gray-50 border border-gray-200 rounded-xl p-4 flex flex-col gap-3`} key={index}>
                                <div className={`text_icon items-start gap-2`}>
                                    <div className={`size-11 rounded-2xl flex-shrink-0 flex items-center justify-center ${indexHead[2].textColor} ${indexHead[2].color2} `}>{value.icon}</div>
                                    <div className={`flex flex-col gap-1.5`}>
                                        <h4 className={`line-clamp-1 font-semibold`}>{value.title}</h4>
                                        <b className={`text-xs font-normal ${indexHead[2].textColor}`}>{indexHead[2].title}</b>
                                    </div>
                                </div>
                                <h5 className={`text-gray-400 h-10 line-clamp-2 overflow-hidden leading-5 text-xs`}>{value.description}</h5>
                            </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Page;