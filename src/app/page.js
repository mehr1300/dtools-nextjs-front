import React from 'react';
import IndexHead from "@/components/pages/page/IndexHead";
import {IRANYekanFaNum, Kalameh} from "@/app/layout";
import {indexHead} from "@/assets/data/Data";
import IndexItems from "@/components/pages/page/IndexItems";
import {GoArrowLeft} from "react-icons/go";
import Link from "next/link";

// gif color #75D8E7

export const metadata = {
    title: "ابزارهای آنلاین برای نویسندگان، برنامه‌نویسان و سرگرمی | Dtools",
    description: "ابزارهای کاربردی برای نویسندگان، برنامه‌نویسان و کارهای روزمره. با Dtools به‌راحتی بنویسید، کدنویسی کنید و از سرگرمی‌های جذاب لذت ببرید!",
    keywords: "ابزارهای آنلاین, ابزار نویسندگی, ابزار برنامه‌نویسی, سرگرمی آنلاین, بازی آنلاین, ابزارهای روزمره, Dtools"
};

const Page = () => {

    const jsonLd = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "name": "dtools.ir",
          "url": "https://dtools.ir",
          "description": "ابزارهای آنلاین برای نویسندگان، برنامه‌نویسان، کارهای روزمره، سرگرمی و بازی. با dtools خلاقیت و بهره‌وری خود را افزایش دهید!",
        },
      ]
    }

    return (
        <div className="flex flex-col">
            <div className={`flex flex-col bg-gradient-to-b from-gray-50 to-sky-50 pt-12 lg:pt-20 pb-18 lg:pb-25 gap-10 lg:gap-32`}>
                <IndexHead/>
                <div className={`flex flex-wrap items-center justify-center gap-6 px-5 max-w-screen-xl mx-auto w-full`}>
                    {indexHead.map((value,index)=>{
                        return (
                            <div key={index} className={`flex flex-col border border-gray-200 rounded-xl`}>
                                <div className={` ${value.color1} text-white rounded-t-xl flex flex-col justify-between p-5 h-42 w-70`}>
                                    <div className={`text_icon *:bg-white/40 justify-between`}>
                                        <div className={`size-12 flex items-center justify-center rounded-full`}>{value.icon}</div>
                                        <div className={`px-4 text-sm py-1.5 rounded-full`}>
                                            <span className={`${IRANYekanFaNum.className}`}>{value.item.length}+ </span>
                                            <span>ابزار</span>
                                        </div>
                                    </div>
                                    <div className={`text_icon justify-between`}>
                                        <div className={`flex flex-col gap-2.5`}>
                                            <Link href={value.link}><h3 className={`font-bold line-clamp-1 text-lg ${IRANYekanFaNum.className}`}>{value.title}</h3></Link>
                                            <h4 className={`text-sm line-clamp-1`}>{value.description}</h4>
                                        </div>
                                        <GoArrowLeft size={24}/>
                                    </div>
                                </div>
                                <div className={`bg-white rounded-b-xl h-16 py-3 px-4 w-70`}>
                                    <div className={` ${value.color3} text_icon justify-between px-5 rounded-xl size-full`}>
                                        <span className={`text-gray-500 flex-shrink-0 text-sm`}>ابزار ویژه :</span>
                                        {value.item[0].link === ""
                                            ?<div className={` ${value.textColor} text-sm line-clamp-1`}>{value.item[0].title}</div>
                                            :<Link href={value.item[0].link} className={` ${value.textColor} text-sm line-clamp-1`}>{value.item[0].title}</Link>
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={`bg-white rounded-t-3xl pb-30 -mt-5 pt-20 px-5 lg:px-10`}>
                <div className={`mx-auto max-w-screen-xl w-full flex flex-col gap-7 lg:gap-12`}>
                    <div className={`flex flex-col text-center gap-5`}>
                        <h3 className={`${Kalameh.className} text-2xl font-bold text-gray-800`}>ابزارهای محبوب Dtools</h3>
                        <p className={`text-gray-500`}>در Dtools از بهترین ابزارها به راحتی و رایگان استفاده کنید.</p>
                    </div>
                    <IndexItems/>
                </div>
            </div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd)}}/>
        </div>
    );
};

export default Page;
