import React from 'react';
import a from "../../../assets/images/gifs/coding.gif";
import {IRANYekanFaNum} from "@/app/layout";
import SingleStructures from "@/components/pages/SingleStructures";

export const metadata = {
    title: "کد ادیتور جاوا اسکریپت آنلاین",
    description: "کد ادیتور جاوا اسکریپت آنلاین رایگان در dtools. کدهای خود را بنویسید، تست کنید و نتیجه را فوری ببینید. همین حالا شروع کنید!",
    author: "dtools.ir",
    robots: "index, follow",
    keywords: "کد ادیتور جاوا اسکریپت آنلاین, ابزار جاوا اسکریپت, ویرایش کد آنلاین, ابزار برنامه‌نویسی, dtools",
};

const Page = () => {

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "کد ادیتور جاواسکریپت آنلاین",
      "url": "https://dtools.ir/js-online-editor",
      "description": "ابزار آنلاین رایگان برای نوشتن، تست و اجرای کدهای جاواسکریپت، مناسب برای برنامه‌نویسان و توسعه‌دهندگان وب.",
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
            title="ویرایشگر (ادیتور) js آنلاین"
            abstract="js online editor"
            image={a}
            descTag={true}
            desc={
                <div>
                    <p><strong>کد ادیتور جاواسکریپت آنلاین dtools</strong> ابزاری قدرتمند برای برنامه‌نویسان است که امکان نوشتن، تست و اجرای کدهای جاوا اسکریپت را به‌صورت آنلاین فراهم می‌کند. این ابزار برای توسعه‌دهندگان وب و یادگیری سریع ایده‌آل است.</p>
                    <p>با <strong>ابزار کد ادیتور جاوا اسکریپت</strong>، می‌توانید کدهای خود را در محیطی ساده و تعاملی بنویسید، اشکالات را بررسی کنید و خروجی را بلافاصله مشاهده کنید. این ابزار از HTML، CSS و جاوا اسکریپ پشتیبانی می‌کند و نیازی به نصب ندارد، همه‌چیز در مرورگر شما اجرا می‌شود.</p>
                    <p><strong>چرا کد ادیتور جاوا اسکریپت dtools؟</strong> این ابزار با رابط کاربری کاربرپسند، قابلیت‌های پیشرفته مثل هایلایت سینتکس و پیش‌نمایش زنده، و پشتیبانی از کتابخانه‌های محبوب، کار شما را سریع‌تر می‌کند. چه مبتدی باشید و چه حرفه‌ای، dtools همراه شماست.</p>
                    <p><strong>dtools</strong> مجموعه‌ای از ابزارهای کاربردی برای برنامه‌نویسان، نویسندگان و علاقه‌مندان به فناوری ارائه می‌دهد. همین حالا کد ادیتور جاوا اسکریپت آنلاین را امتحان کنید و پروژه‌های خود را به سطح بعدی ببرید!</p>
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