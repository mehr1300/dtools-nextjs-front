import React from 'react';
import TextTransformer from "@/components/functions/TextTransformer";
import a from "../../../assets/images/gifs/shuffle.gif";
import SingleStructures from "@/components/pages/url/SingleStructures";

export const metadata = {
    title: "ابزار تبدیل متن - حروف بزرگ، کوچک، Snake Case",
    description: "ابزار آنلاین تبدیل متن انگلیسی به حروف بزرگ، کوچک، Snake Case و حالت‌های دیگر با رابط کاربری ساده و سریع.",
    author: "dtools.ir",
    robots: "index, follow",
    keywords: "تبدیل متن, ابزار تبدیل متن, حروف بزرگ, حروف کوچک, snake case, text transformer",
};

const Page = () => {

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "تبدیل متن به حروف بزرگ، کوچک و Snake Case",
      "url": "https://dtools.ir/text-transformer",
      "description": "ابزار آنلاین رایگان برای تبدیل متن انگلیسی به حروف بزرگ، کوچک، Snake Case و فرمت‌های دیگر، مناسب برای برنامه‌نویسان و نویسندگان.",
      "applicationCategory": "Utility Tools",
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
            title="ابزار تبدیل متن"
            abstract="حروف بزرگ (UPPERCASE)، حروف کوچک (lowercase)، Snake Case (snake_case)"
            image={a}
            descTag={true}
            desc={
                <div>
                    <strong>ابزار تبدیل متن</strong> ما یک راه‌حل <strong>سریع و رایگان</strong> برای تغییر فرمت متن انگلیسی به حالت‌های مختلف مانند <strong>حروف بزرگ (UPPERCASE)</strong>، <strong>حروف کوچک (lowercase)</strong>، <strong>Snake Case (snake_case)</strong>، و سایر فرمت‌ها ارائه می‌دهد. این ابزار برای <strong>نویسندگان</strong>، <strong>برنامه‌نویسان</strong>، و <strong>ویراستاران</strong> طراحی شده است که نیاز به تغییر سریع فرمت متن دارند. به‌عنوان مثال، می‌توانید متنی مانند «Hello World» را به «HELLO WORLD»، «hello world»، یا «hello_world» تبدیل کنید. این ابزار آنلاین با <strong>رابط کاربری ساده</strong> و بدون نیاز به نصب نرم‌افزار، تجربه‌ای روان را فراهم می‌کند. کافی است متن خود را در کادر مربوطه وارد کرده و حالت موردنظر را انتخاب کنید تا نتیجه‌ای <strong>دقیق و فوری</strong> دریافت کنید. <strong>Text Transformer</strong> برای بهبود کارایی و کیفیت کار با متون انگلیسی طراحی شده است و با <strong>بهینه‌سازی سئو</strong>، به‌راحتی از طریق موتورهای جستجو قابل دسترسی است. چه بخواهید متنی را برای کدگذاری، نگارش، یا استانداردسازی آماده کنید، این ابزار بهترین انتخاب شماست. با استفاده از این ابزار، زمان خود را صرفه‌جویی کرده و متنی تمیز و حرفه‌ای داشته باشید.
                </div>
            }
        >
            <TextTransformer/>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd)}}/>
        </SingleStructures>
    );
};

export default Page;
