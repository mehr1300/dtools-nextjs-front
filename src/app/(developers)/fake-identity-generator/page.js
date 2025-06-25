import React from 'react';
import a from "../../../assets/images/gifs/profile.gif";
import {IRANYekanFaNum} from "@/app/layout";
import SingleStructures from "@/components/pages/SingleStructures";

export const metadata = {
    title: "ابزار تولید اطلاعات هویتی - ساخت کد ملی، شماره تماس و آدرس",
    description: "با ابزار آنلاین رایگان ما، اطلاعات هویتی جعلی مانند کد ملی، شماره تماس و کد پستی را به‌راحتی تولید کنید. مناسب برای تست و توسعه.",
    author: "dtools.ir",
    robots: "index, follow",
    keywords: "تولید کد ملی, ساخت شماره تماس, تولید آدرس, ابزار اطلاعات هویتی, داده‌های تستی, ابزار آنلاین رایگان",
};

const Page = () => {

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "تولید اطلاعات هویتی dtools",
      "url": "https://dtools.ir/identity-info-generator",
      "description": "ابزار آنلاین رایگان برای تولید کد ملی، شماره تماس و آدرس تصادفی، مناسب برای تست و توسعه نرم‌افزار.",
      "applicationCategory": "Developer Tools",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "IRR"
      },
      "publisher": {
        "@type": "Organization",
        "name": "dtools",
        "url": "https://dtools.ir"
      }
    }

    return (
        <SingleStructures
            title="تولید اطلاعات هویتی"
            abstract="تولید اطلاعات هویتی فیک (کد ملی، شماره همراه ، تلفن ثابت و آدرس)"
            image={a}
            descTag={true}
            desc={
                <div>
                    <p>ابزار <strong>تولید اطلاعات هویتی</strong> یک راه‌حل کارآمد برای ایجاد اطلاعات هویتی جعلی مانند <strong>کد ملی</strong>، <strong>شماره تماس</strong>، <strong>آدرس</strong> و <strong>کد پستی</strong> است. این ابزار برای برنامه‌نویسان، توسعه‌دهندگان و افرادی که نیاز به داده‌های تستی برای سیستم‌های خود دارند، طراحی شده است. با رابط کاربری ساده، کاربران می‌توانند به‌راحتی اطلاعات هویتی معتبر و تصادفی تولید کنند.</p>
                    <p>این ابزار امکان تولید <strong>کد ملی ایرانی</strong> با فرمت استاندارد، شماره‌های تماس معتبر و آدرس‌های واقعی‌مانند همراه با کد پستی را فراهم می‌کند. تمام داده‌ها به‌صورت تصادفی تولید شده و برای استفاده در محیط‌های آزمایشی ایمن هستند. ابزار ما <strong>رایگان</strong>، <strong>آنلاین</strong> و بدون نیاز به ثبت‌نام است و از هر دستگاهی قابل دسترسی است.</p>
                    <p>با دقت بالا و الگوریتم‌های پیشرفته، این ابزار اطمینان می‌دهد که داده‌های تولیدشده مطابق با استانداردهای محلی باشند. برای توسعه‌دهندگان نرم‌افزار، تست فرم‌ها یا شبیه‌سازی داده‌ها، این ابزار انتخابی ایده‌آل است.</p>
                </div>
            }
        >
            <div className={`h-60 ${IRANYekanFaNum.className} font-bold text-xl text-sky-400 gap-6 text_icon justify-center`}>
                <span>در دست اقدام</span>
                <span className={`text-gray-500 animate-ping h-8 `}> . . . </span>
            </div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd)}}/>
        </SingleStructures>
    );
};

export default Page;