import React from 'react';
import a from "../../../assets/images/gifs/coding.gif";
import {IRANYekanFaNum} from "@/app/layout";
import SingleStructures from "@/components/pages/url/SingleStructures";
import ListToArray from "@/components/functions/ListToArray";

export const metadata = {
    title: "تبدیل لیست به آرایه در Dtools | ابزار رایگان برنامه‌نویسی",
    description: "ابزار رایگان تبدیل لیست به آرایه در dtools. لیست خود را به آرایه با تک یا دو کتیشن برای جاوااسکریپت، پایتون، PHP و Go تبدیل کنید. سریع و ساده!",
    author: "dtools.ir",
    robots: "index, follow",
    keywords: "تبدیل لیست به آرایه, ابزار برنامه‌نویسی, آرایه جاوااسکریپت, آرایه پایتون, آرایه PHP, آرایه Go, dtools",
};

const Page = () => {

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "تبدیل لیست به آرایه در dtools",
        "url": "https://dtools.ir/list-to-array",
        "description": "ابزار آنلاین رایگان برای تبدیل لیست به آرایه، مناسب برای جاوااسکریپت، پایتون، PHP و Go با پشتیبانی از تک و دو کتیشن و خروجی یک‌خطی.",
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
            title="تبدیل لیست به آرایه"
            abstract="تبدیل لیست به آرایه | مناسب برای جاوااسکریپت، پایتون، PHP و Go"
            image={a}
            descTag={true}
            desc={
                <>
                    <strong>ابزار تبدیل لیست به آرایه dtools</strong> ابزاری حرفه‌ای برای برنامه‌نویسان است که به شما امکان می‌دهد لیست‌های متنی را به آرایه‌های قابل استفاده در زبان‌های برنامه‌نویسی مانند جاوااسکریپت، پایتون، PHP و Go تبدیل کنید. این ابزار از تک و دو کتیشن پشتیبانی می‌کند و همچنین می‌تواند لیست را به صورت یک‌خطی با کاما ارائه دهد.
                    با <strong>ابزار تبدیل لیست به آرایه</strong>، کافی است لیست خود را وارد کنید، نوع خروجی (تک کتیشن، دو کتیشن یا یک‌خطی) و زبان برنامه‌نویسی مورد نظر را انتخاب کنید و نتیجه را فوراً دریافت کنید. این ابزار کاملاً آنلاین و بدون نیاز به نصب است.
                    <strong>چرا ابزار تبدیل لیست به آرایه dtools؟</strong> این ابزار رابط کاربری ساده‌ای دارد، از چندین زبان برنامه‌نویسی پشتیبانی می‌کند و نتایج را با دقت بالا ارائه می‌دهد. چه در حال توسعه وب باشید یا نیاز به تبدیل سریع داده‌ها داشته باشید، dtools کار شما را سریع‌تر می‌کند.
                    <strong>dtools</strong> مجموعه‌ای از ابزارهای کاربردی برای برنامه‌نویسان و کاربران روزمره ارائه می‌دهد. همین حالا ابزار تبدیل لیست به آرایه را امتحان کنید و از سهولت کار با داده‌ها لذت ببرید!
                </>
            }
        >
            <ListToArray/>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd)}}/>
        </SingleStructures>
    );
};

export default Page;
