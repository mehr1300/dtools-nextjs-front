import React from 'react';
import a from "../../../assets/images/gifs/calendar.gif";
import SingleStructures from "@/components/pages/url/SingleStructures";
import AgeCalculator from "@/components/functions/AgeCalculator";

export const metadata = {
    title: "ابزار رایگان محاسبه سن بر اساس تاریخ تولد",
    description: "ابزار رایگان محاسبه سن در dtools. سن خود را بر اساس تاریخ تولد در تقویم شمسی، میلادی یا قمری محاسبه کنید. سریع، دقیق و ساده، همین حالا امتحان کنید!",
    author: "dtools.ir",
    robots: "index, follow",
    keywords: "محاسبه سن, ابزار محاسبه سن, محاسبه سن بر اساس تاریخ تولد, dtools",
};

const Page = () => {

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "ابزار رایگان محاسبه سن بر اساس تاریخ تولد",
        "url": "https://dtools.ir/age-calculator",
        "description": "ابزار آنلاین رایگان برای محاسبه سن بر اساس تاریخ تولد در تقویم‌های شمسی، میلادی و قمری. مناسب برای کاربران عمومی، برنامه‌ریزان و محققان.",
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
            title="محاسبه سن بر اساس تاریخ تولد در تقویم شمسی، میلادی و قمری"
            abstract="محاسبه سن"
            image={a}
            descTag={true}
            desc={
                <>
                    <strong>ابزار محاسبه سن dtools</strong> راه‌حلی سریع و دقیق برای کاربرانی است که می‌خواهند سن خود را بر اساس تاریخ تولد محاسبه کنند. این ابزار برای کاربران روزمره، برنامه‌ریزان، محققان و دانشجویان ایده‌آل است.
                    با <strong>ابزار محاسبه سن آنلاین</strong>، می‌توانید تاریخ تولد را در یکی از تقویم‌های شمسی، میلادی یا قمری وارد کنید و سن دقیق را در سال، ماه و روز دریافت کنید. این ابزار نیازی به نصب ندارد و مستقیماً در مرورگر شما کار می‌کند.
                    <strong>چرا ابزار محاسبه سن dtools؟</strong> این ابزار با رابط کاربری ساده، دقت بالا و پشتیبانی از هر سه تقویم شمسی، میلادی و قمری، تجربه‌ای بی‌نقص ارائه می‌دهد. چه برای محاسبه سن شخصی، تحقیقات یا استفاده روزمره باشد، dtools کار شما را آسان می‌کند.
                    <strong>dtools</strong> مجموعه‌ای از ابزارهای کاربردی برای کاربران عمومی، محققان و برنامه‌نویسان ارائه می‌دهد. همین حالا ابزار محاسبه سن را امتحان کنید و سن خود را به‌سرعت محاسبه کنید!
                </>
            }
        >
            <AgeCalculator />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd)}} />
        </SingleStructures>
    );
};

export default Page;