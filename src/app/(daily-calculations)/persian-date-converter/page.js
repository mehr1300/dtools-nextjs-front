import React from 'react';
import a from "../../../assets/images/gifs/calendar.gif";
import {IRANYekanFaNum} from "@/app/layout";
import SingleStructures from "@/components/pages/url/SingleStructures";
import PersianDateConverter from "@/components/functions/PersianDateConverter";

export const metadata = {
    title: "ابزار رایگان تبدیل تاریخ شمسی به میلادی و قمری",
    description: "ابزار رایگان تبدیل تاریخ در dtools. تاریخ شمسی، میلادی و قمری را به یکدیگر تبدیل کنید. سریع، دقیق و ساده، همین حالا امتحان کنید!",
    author: "dtools.ir",
    robots: "index, follow",
    keywords: "تبدیل تاریخ شمسی, تبدیل تاریخ میلادی, تبدیل تاریخ قمری, ابزار تبدیل تاریخ, dtools",
};

const Page = () => {

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "ابزار رایگان تبدیل تاریخ شمسی به میلادی و قمری",
        "url": "https://dtools.ir/date-converter",
        "description": "ابزار آنلاین رایگان برای تبدیل تاریخ بین تقویم‌های شمسی، میلادی و قمری. مناسب برای برنامه‌ریزان، محققان و کاربران عمومی.",
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
            title="تبدیل تاریخ شمسی به میلادی و قمری و برعکس"
            abstract="تبدیل تاریخ"
            image={a}
            descTag={true}
            desc={
                <>
                    <strong>ابزار تبدیل تاریخ dtools</strong> راه‌حلی سریع و دقیق برای کاربرانی است که می‌خواهند تاریخ را بین تقویم‌های شمسی، میلادی و قمری تبدیل کنند. این ابزار برای برنامه‌ریزان، محققان، دانشجویان و کاربران روزمره ایده‌آل است.
                    با <strong>ابزار تبدیل تاریخ آنلاین</strong>، می‌توانید به‌راحتی تاریخ را در یکی از تقویم‌های شمسی، میلادی یا قمری وارد کنید و معادل آن را در سایر تقویم‌ها دریافت کنید. این ابزار نیازی به نصب ندارد و مستقیماً در مرورگر شما کار می‌کند.
                    <strong>چرا ابزار تبدیل تاریخ dtools؟</strong> این ابزار با رابط کاربری ساده، دقت بالا و پشتیبانی از هر سه تقویم شمسی، میلادی و قمری، تجربه‌ای بی‌نقص ارائه می‌دهد. چه برای برنامه‌ریزی رویدادها، تحقیقات تاریخی یا استفاده روزمره باشد، dtools کار شما را آسان می‌کند.
                    <strong>dtools</strong> مجموعه‌ای از ابزارهای کاربردی برای کاربران عمومی، محققان و برنامه‌نویسان ارائه می‌دهد. همین حالا ابزار تبدیل تاریخ را امتحان کنید و تاریخ‌ها را به‌سرعت تبدیل کنید!
                </>
            }
        >
            <PersianDateConverter />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd)}} />
        </SingleStructures>
    );
};

export default Page;
