import React from 'react';
import a from "../../../assets/images/gifs/file.gif";
import {IRANYekanFaNum} from "@/app/layout";
import SingleStructures from "@/components/pages/SingleStructures";

export const metadata = {
    title: "تبدیل آرایه به JSON",
    description: "ابزار رایگان تبدیل آرایه به JSON در dtools. آرایه‌های خود را سریع به فرمت JSON تبدیل کنید و برای پروژه‌هایتان استفاده کنید!",
    author: "dtools.ir",
    robots: "index, follow",
    keywords: "تبدیل آرایه به JSON, ابزار تبدیل آرایه, آرایه به JSON آنلاین, ابزار برنامه‌نویسی, dtools",
};


const Page = () => {

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "تبدیل آرایه به JSON",
      "url": "https://dtools.ir/convert-array-to-json",
      "description": "ابزار آنلاین رایگان برای تبدیل آرایه‌ها به فرمت JSON، مناسب برای برنامه‌نویسان و توسعه‌دهندگان وب.",
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
            title="تبدیل آرایه به json"
            abstract="تبدیل آرایه به جیسون(json)"
            image={a}
            descTag={true}
            desc={
                <div>
                    <p><strong>تبدیل آرایه به JSON با dtools</strong> ابزاری کارآمد برای برنامه‌نویسان است که به شما امکان می‌دهد آرایه‌های خود را به‌سرعت به فرمت JSON تبدیل کنید. این ابزار برای توسعه‌دهندگان وب و اپلیکیشن که با داده‌های ساختاریافته کار می‌کنند، ایده‌آل است.</p>
                    <p>با استفاده از <strong>ابزار تبدیل آرایه به JSON</strong>، می‌توانید آرایه‌های جاوااسکریپت، PHP یا هر زبان برنامه‌نویسی دیگر را به JSON تبدیل کنید. کافی است آرایه خود را وارد کنید، و این ابزار به‌صورت خودکار آن را به فرمت JSON استاندارد تبدیل می‌کند. این ابزار نیازی به نصب ندارد و کاملاً در مرورگر شما کار می‌کند.</p>
                    <p><strong>چرا ابزار تبدیل آرایه به JSON dtools؟</strong> این ابزار از ساختارهای پیچیده و آرایه‌های چندبعدی پشتیبانی می‌کند، خروجی زیبا و خوانا ارائه می‌دهد و با قابلیت کپی سریع، کار شما را آسان‌تر می‌کند. چه در حال توسعه API باشید یا نیاز به ذخیره داده‌ها داشته باشید، dtools همراه شماست.</p>
                    <p><strong>dtools</strong> مجموعه‌ای از ابزارهای برنامه‌نویسی و بهره‌وری را ارائه می‌دهد که برای ساده‌سازی کارهای روزمره طراحی شده‌اند. همین حالا ابزار تبدیل آرایه به JSON را امتحان کنید و سرعت و دقت را تجربه کنید!</p>
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