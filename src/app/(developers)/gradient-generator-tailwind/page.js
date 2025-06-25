import React from 'react';
import a from "../../../assets/images/gifs/gradient.gif";
import {IRANYekanFaNum} from "@/app/layout";
import SingleStructures from "@/components/pages/SingleStructures";

export const metadata = {
    title: "ابزار تولید گرادیانت دلخواه با کد Tailwind CSS",
    description: "گرادیانت دلخواه خود را با ابزار رایگان dtools بسازید و کد Tailwind CSS دریافت کنید. طراحی وب حرفه‌ای، سریع و ساده!",
    author: "dtools.ir",
    robots: "index, follow",
    keywords: "ابزار تولید گرادیانت, گرادیانت دلخواه, کد Tailwind CSS, ابزار طراحی وب, dtools",
};

const Page = () => {

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "ابزار تولید گرادیانت دلخواه با کد Tailwind CSS",
      "url": "https://dtools.ir/gradient-generator-tailwind",
      "description": "ابزار آنلاین رایگان برای تولید گرادیانت دلخواه و دریافت کد Tailwind CSS، مناسب برای طراحی وب.",
      "applicationCategory": "Design Tools",
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
            title="gradient in tailwind"
            abstract="ابزار تولید گرادیانت دلخواه در تیلویند"
            image={a}
            desc={
                <div>
                    <p><strong>ابزار تولید گرادیانت دلخواه dtools</strong> انتخابی عالی برای طراحان وب است که می‌خواهند گرادیانت‌های زیبا و سفارشی بسازند و کد Tailwind CSS آن را دریافت کنند. این ابزار برای پروژه‌های طراحی مدرن ایده‌آل است.</p>
                    <p>با <strong>ابزار تولید گرادیانت Tailwind</strong>، می‌توانید رنگ‌ها، جهت و نوع گرادیانت (خطی یا شعاعی) را به‌دلخواه تنظیم کنید و پیش‌نمایش زنده آن را ببینید. پس از ساخت گرادیانت، کد Tailwind CSS آماده کپی و استفاده در پروژه‌های شما ارائه می‌شود.</p>
                    <p><strong>چرا ابزار گرادیانت dtools؟</strong> این ابزار با رابط کاربری ساده، پشتیبانی از تنظیمات پیشرفته و خروجی کد بهینه‌شده، کار طراحی شما را سریع‌تر می‌کند. چه در حال طراحی وب‌سایت یا اپلیکیشن باشید، dtools به شما کمک می‌کند تا ظاهری حرفه‌ای خلق کنید.</p>
                    <p><strong>dtools</strong> مجموعه‌ای از ابزارهای کاربردی برای طراحان، برنامه‌نویسان و کاربران روزمره ارائه می‌دهد. همین حالا ابزار تولید گرادیانت دلخواه را امتحان کنید و کد Tailwind CSS خود را دریافت کنید!</p>
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