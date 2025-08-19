import React from 'react';
import a from "../../../assets/images/gifs/calculator.gif";
import SingleStructures from "@/components/pages/url/SingleStructures";
import GoldPriceCalculator from "@/components/functions/GoldPriceCalculator";

export const metadata = {
    title: "ابزار رایگان محاسبه قیمت طلا با اجرت و مالیات",
    description: "ابزار رایگان محاسبه قیمت طلا در dtools. قیمت طلا را با یا بدون اجرت و مالیات محاسبه کنید. سریع، دقیق و ساده، همین حالا امتحان کنید!",
    author: "dtools.ir",
    robots: "index, follow",
    keywords: "محاسبه قیمت طلا, قیمت طلا با اجرت, قیمت طلا بدون اجرت, ابزار محاسبه طلا, مالیات طلا, dtools",
};

const Page = () => {

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "ابزار رایگان محاسبه قیمت طلا با اجرت و مالیات",
        "url": "https://dtools.ir/gold-price-calculator",
        "description": "ابزار آنلاین رایگان برای محاسبه قیمت طلا بر اساس وزن، قیمت روز، اجرت و مالیات. مناسب برای خریداران، فروشندگان و سرمایه‌گذاران طلا.",
        "applicationCategory": "Financial Tools",
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
            title="محاسبه قیمت طلا با اجرت و مالیات"
            abstract="محاسبه قیمت طلا"
            image={a}
            descTag={true}
            desc={
                <>
                    <strong>ابزار محاسبه قیمت طلا dtools</strong> راه‌حلی سریع و دقیق برای کاربرانی است که می‌خواهند قیمت طلا را با یا بدون احتساب اجرت و مالیات محاسبه کنند. این ابزار برای خریداران، فروشندگان، سرمایه‌گذاران و علاقه‌مندان به بازار طلا ایده‌آل است.
                    با <strong>ابزار محاسبه قیمت طلا آنلاین</strong>، می‌توانید وزن طلا، قیمت روز، درصد اجرت و نرخ مالیات را وارد کنید و به‌سرعت قیمت نهایی را محاسبه کنید. همچنین، امکان محاسبه قیمت طلا بدون احتساب اجرت برای مقایسه بهتر فراهم است. این ابزار نیازی به نصب ندارد و مستقیماً در مرورگر شما کار می‌کند.
                    <strong>چرا ابزار محاسبه قیمت طلا dtools؟</strong> این ابزار با رابط کاربری ساده، دقت بالا و امکان محاسبه قیمت با یا بدون اجرت و مالیات، تجربه‌ای بی‌نقص ارائه می‌دهد. چه برای خرید زیورآلات، سرمایه‌گذاری در طلا یا بررسی قیمت بازار باشد، dtools کار شما را آسان می‌کند.
                    <strong>dtools</strong> مجموعه‌ای از ابزارهای کاربردی برای خریداران، سرمایه‌گذاران و کاربران عمومی ارائه می‌دهد. همین حالا ابزار محاسبه قیمت طلا را امتحان کنید و تصمیم‌گیری مالی خود را بهبود دهید!
                </>
            }
        >
            <GoldPriceCalculator />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd)}} />
        </SingleStructures>
    );
};

export default Page;
