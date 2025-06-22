import React from 'react';
import IndexHead from "@/components/pages/IndexHead";
import {BiCut} from "react-icons/bi";
import {GoArrowLeft} from "react-icons/go";
import {IRANYekanFaNum, Kalameh} from "@/app/layout";
import {indexHead} from "@/assets/data/Data";
import IndexItems from "@/components/pages/IndexItems";

export const metadata = {
  title: "ابزارهای رایگان ویرایش متن فارسی در Dtools | تبدیل، اصلاح و بهینه‌سازی",
  description: "ابزارهای رایگان آنلاین برای ویرایش متن فارسی: تبدیل کاراکتر، رفع کشیدگی، حذف نیم‌فاصله و بیشتر. همین حالا امتحان کنید!",
};

const Page = () => {
    return (
        <div className="flex flex-col gap-20">
            <IndexHead/>
            <div className={`flex flex-row justify-center gap-6 max-w-screen-xl mx-auto w-full`}>
                {indexHead.map((value,index)=>{
                    return (
                        <div key={index} className={`flex flex-col`}>
                            <div className={` ${value.color1} text-white rounded-t-xl flex flex-col justify-between p-5 h-42 w-70`}>
                                <div className={`text_icon *:bg-white/40 justify-between`}>
                                    <div className={`size-12 flex items-center justify-center rounded-full`}><BiCut size={26}/></div>
                                    <div className={`px-4 text-sm py-1.5 rounded-full`}>
                                        <span className={`${IRANYekanFaNum.className}`}>{value.item.length}+ </span>
                                        <span>ابزار</span>
                                    </div>
                                </div>
                                <div className={`text_icon justify-between`}>
                                    <div className={`flex flex-col gap-2.5`}>
                                        <h3 className={`font-bold line-clamp-1 text-lg ${IRANYekanFaNum.className}`}>{value.title}</h3>
                                        <h4 className={`text-sm line-clamp-1`}>{value.description}</h4>
                                    </div>
                                    <GoArrowLeft size={24}/>
                                </div>
                            </div>
                            <div className={`bg-white rounded-b-xl h-16 py-3 px-4 w-70`}>
                                <div className={` ${value.color3} text_icon justify-between px-5 rounded-xl size-full`}>
                                    <span className={`text-gray-500 flex-shrink-0 text-sm`}>ابزار ویژه :</span>
                                    <span className={` ${value.textColor} text-sm line-clamp-1`}>{value.item[0].title}</span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className={`bg-lime-50 rounded-t-3xl p-10`}>
                <div className={`max-w-screen-md mx-auto flex flex-col gap-12 w-full`}>
                    <div className={`flex flex-col text-center gap-5`}>
                        <h3 className={`${Kalameh.className} text-2xl font-bold text-gray-800`}>ابزارهای محبوب Dtools</h3>
                        <p className={`text-gray-500`}>در Dtools از بهترین ابزارها را به راحتی و رایگان استفاده کنید.</p>
                    </div>
                    <IndexItems/>
                </div>
            </div>
        </div>
    );
};

export default Page;
