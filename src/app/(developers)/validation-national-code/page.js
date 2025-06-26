import React from 'react';
import a from "../../../assets/images/gifs/credit-card.gif";
import SingleStructures from "@/components/pages/SingleStructures";
import ValidationNationalCode from "@/components/functions/ValidationNationalCode";

export const metadata = {
    title: "ابزار تولید کد ملی فیک - ساخت کد ملی ایرانی جعلی",
    description: "با ابزار آنلاین رایگان ما، کد ملی ایرانی جعلی با فرمت استاندارد تولید کنید. مناسب برای تست نرم‌افزار، توسعه و شبیه‌سازی داده‌ها.",
    author: "dtools.ir",
    robots: "index, follow",
    keywords: "تولید کد ملی فیک, ساخت کد ملی جعلی, ابزار کد ملی ایرانی, داده‌های تستی, ابزار آنلاین رایگان",
};

const Page = () => {

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "ابزار تولید کد ملی فیک - ساخت کد ملی ایرانی جعلی",
      "url": "https://dtools.ir/fake-national-code-generator",
      "description": "ابزار آنلاین رایگان برای تولید کد ملی فیک و تصادفی، مناسب برای تست و توسعه نرم‌افزار.",
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
            title="اعتبار سنجی کد ملی"
            abstract="تولید کد ملی فیک برای تست برنامه ها"
            image={a}
            descTag={true}
            desc={
                <div>
                    <p>ابزار <strong>تولید کد ملی فیک</strong> یک راه‌حل کاربردی برای ایجاد <strong>کد ملی ایرانی جعلی</strong> با فرمت استاندارد 10 رقمی است. این ابزار برای توسعه‌دهندگان، برنامه‌نویسان و افرادی که نیاز به داده‌های تستی برای آزمایش نرم‌افزارها یا سیستم‌ها دارند، طراحی شده است. با استفاده از این ابزار، می‌توانید به‌راحتی کدهای ملی تصادفی و معتبر تولید کنید.</p>
                    <p>این ابزار با <strong>رابط کاربری ساده</strong> امکان تولید سریع کد ملی را فراهم می‌کند. کافی است گزینه تولید را انتخاب کنید تا یک کد ملی جعلی مطابق با استانداردهای ایران ایجاد شود. داده‌های تولیدشده کاملاً تصادفی و ایمن برای استفاده در محیط‌های آزمایشی هستند. ابزار ما <strong>رایگان</strong>، <strong>آنلاین</strong> و بدون نیاز به ثبت‌نام است و از هر دستگاهی قابل دسترسی است.</p>
                    <p>با الگوریتم‌های پیشرفته، این ابزار اطمینان می‌دهد که کدهای ملی تولیدشده از نظر فرمت و ساختار معتبر باشند. برای تست فرم‌ها، شبیه‌سازی داده‌ها یا توسعه نرم‌افزار، این ابزار انتخابی ایده‌آل است.</p>
                </div>
            }>
            <ValidationNationalCode/>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd)}}/>
        </SingleStructures>
    );
};

export default Page;
