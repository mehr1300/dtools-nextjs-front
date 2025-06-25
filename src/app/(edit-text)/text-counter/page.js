import React from 'react';
import TextCounter from "@/components/functions/TextCounter";
import a from "../../../assets/images/gifs/garlands.gif";
import SingleStructures from "@/components/pages/SingleStructures";

export const metadata = {
    title: "ابزار شمارش متن - تعداد کاراکتر، کلمه، فاصله",
    description: "ابزار آنلاین شمارش تعداد کاراکتر، کلمه و فاصله در متن با رابط کاربری ساده و نتایج دقیق و سریع.",
    author: "dtools.ir",
    robots: "index, follow",
    keywords: "شمارش متن, ابزار شمارش کاراکتر, تعداد کلمه, تعداد فاصله, text counter, ابزار آنلاین متن",
};

const Page = () => {

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "شمارش متن، کاراکتر و کلمه در dtools",
      "url": "https://dtools.ir/text-counter",
      "description": "ابزار آنلاین رایگان برای شمارش تعداد کاراکتر، کلمه و فاصله در متن، مناسب برای نویسندگان و ویراستاران.",
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
            title="ابزار شمارشگر"
            abstract="شمارش تعداد کارکتر، جمله و فاصله بین کلمات"
            image={a}
            descTag={true}
            desc={
                <div>
                    <strong className={`font-semibold`}>ابزار شمارش متن</strong> ما یک راه‌حل <strong className={`font-semibold`}>سریع، دقیق و رایگان</strong> برای شمارش <strong className={`font-semibold`}>تعداد کاراکترها</strong>، <strong className={`font-semibold`}>تعداد کلمات</strong>، و <strong className={`font-semibold`}>تعداد فاصله‌ها</strong> در متن ارائه می‌دهد. این ابزار برای <strong className={`font-semibold`}>نویسندگان</strong>، <strong className={`font-semibold`}>ویراستاران</strong>، <strong className={`font-semibold`}>دانش‌آموزان</strong>، و <strong className={`font-semibold`}>متخصصان سئو</strong> طراحی شده است که نیاز به تحلیل سریع متن دارند. با استفاده از <strong className={`font-semibold`}>Text Counter</strong>، می‌توانید به‌راحتی متن خود را در کادر مربوطه وارد کنید و فوراً آمار دقیق شامل تعداد کاراکترها (با و بدون فاصله)، تعداد کلمات، و تعداد فاصله‌های موجود در متن را مشاهده کنید. این ابزار آنلاین با <strong className={`font-semibold`}>رابط کاربری ساده</strong> و بدون نیاز به نصب نرم‌افزار، تجربه‌ای روان و کارآمد را فراهم می‌کند. چه در حال نگارش یک مقاله، آماده‌سازی محتوای شبکه‌های اجتماعی، یا بررسی محدودیت‌های متنی برای <strong className={`font-semibold`}>سئو</strong> باشید، این ابزار به شما کمک می‌کند تا کنترل کاملی بر متن خود داشته باشید. کافی است متن خود را جای‌گذاری کنید تا نتایج در لحظه نمایش داده شوند. <strong className={`font-semibold`}>ابزار شمارش متن</strong> با هدف افزایش بهره‌وری و دقت در کار با متون طراحی شده و با <strong className={`font-semibold`}>بهینه‌سازی برای موتورهای جستجو</strong>، به‌راحتی قابل دسترسی است. این ابزار نه‌تنها برای متون فارسی، بلکه برای هر زبانی قابل استفاده است و با پشتیبانی از کاراکترهای یونیکد، نتایج دقیقی ارائه می‌دهد. با <strong className={`font-semibold`}>Text Counter</strong>، زمان خود را صرفه‌جویی کرده و متنی حرفه‌ای و مطابق با نیازهای خود تولید کنید. برای بهترین تجربه، متن خود را وارد کرده و از آمار دقیق و فوری لذت ببرید.
                </div>
            }
        >
            <TextCounter/>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd)}}/>
        </SingleStructures>
    );
};

export default Page;
