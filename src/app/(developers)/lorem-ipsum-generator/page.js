import React from 'react';
import a from "../../../assets/images/gifs/text-box.gif";
import {IRANYekanFaNum} from "@/app/layout";
import SingleStructures from "@/components/pages/SingleStructures";
import LoremIpsumGenerator from "@/components/functions/LoremIpsumGenerator";

export const metadata = {
    title: "ابزار تولید متن تصادفی - لورم ایپسوم فارسی و انگلیسی",
    description: "با ابزار آنلاین رایگان ما، متن تصادفی لورم ایپسوم فارسی و انگلیسی برای طراحی و تست تولید کنید. مناسب برای طراحان، توسعه‌دهندگان و پروژه‌های آزمایشی.",
    author: "dtools.ir",
    robots: "index, follow",
    keywords: "تولید متن تصادفی, لورم ایپسوم فارسی, لورم ایپسوم انگلیسی, ابزار متن جعلی, متن آزمایشی, ابزار آنلاین رایگان",
};

const Page = () => {

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "تولید متن تصادفی لورم ایپسوم dtools",
      "url": "https://dtools.ir/lorem-ipsum-generator",
      "description": "ابزار آنلاین رایگان برای تولید متن تصادفی لورم ایپسوم، مناسب برای طراحی وب و تست قالب‌ها.",
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
            title="ابزار تولید متن تصادفی - لورم ایپسوم"
            abstract="تولید متن تصادفی"
            image={a}
            descTag={true}
            desc={
                <div>
                    <p>ابزار <strong>تولید متن تصادفی - لورم ایپسوم</strong> یک راه‌حل کارآمد برای ایجاد متن جعلی در قالب <strong>لورم ایپسوم</strong> به زبان‌های فارسی و انگلیسی است. این ابزار برای طراحان گرافیک، توسعه‌دهندگان وب و افرادی که نیاز به متن پرکننده برای تست طرح‌ها یا پروژه‌ها دارند، طراحی شده است. با این ابزار می‌توانید متنی تصادفی و استاندارد تولید کنید.</p>
                    <p>این ابزار امکان تولید <strong>لورم ایپسوم فارسی</strong> و <strong>انگلیسی</strong> را با طول دلخواه فراهم می‌کند. کاربران می‌توانند تعداد پاراگراف‌ها، جملات یا کلمات را مشخص کنند تا متن مناسب با نیازشان تولید شود. رابط کاربری <strong>ساده</strong> و کاربرپسند، استفاده از ابزار را آسان کرده و نتایج به‌سرعت نمایش داده می‌شوند.</p>
                    <p>ابزار ما <strong>رایگان</strong>، <strong>آنلاین</strong> و بدون نیاز به ثبت‌نام است و از هر دستگاهی قابل دسترسی است. متن‌های تولیدشده برای پر کردن موقت طرح‌های گرافیکی، تست رابط کاربری یا پیش‌نمایش محتوا ایده‌آل هستند. با این ابزار، کار طراحی و توسعه شما سریع‌تر و حرفه‌ای‌تر خواهد بود.</p>
                </div>
            }
        >
            <LoremIpsumGenerator/>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd)}}/>
        </SingleStructures>
    );
};

export default Page;
