import React from 'react';
import a from "../../../assets/images/gifs/letter-a.gif";
import ConvertPersianCharactersToArabic from "@/components/functions/ConvertPersianCharactersToArabic";
import SingleStructures from "@/components/pages/SingleStructures";

export const metadata = {
    title: "ابزار تبدیل کارکتر های فارسی به عربی",
    description: "ابزار آنلاین تبدیل کاراکترهای فارسی به عربی با دقت بالا. متن فارسی خود را وارد کنید و به راحتی به عربی تبدیل کنید. مناسب برای سئو و تولید محتوا.",
    keywords: "تبدیل کاراکتر فارسی به عربی, فارسی به عربی, ابزار تبدیل متن, ابزار نویسندگی, dtools"
};

const Page = () => {

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "تبدیل کاراکترهای فارسی به عربی",
      "url": "https://dtools.ir/convert-persian-characters-to-arabic",
      "description": "ابزار آنلاین رایگان برای تبدیل کاراکترهای فارسی به عربی، مناسب برای نویسندگان و ویرایش متون چندزبانه.",
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
            title="تبدیل کارکتر های فارسی به عربی"
            abstract="تغییر حروف در نوشته های فارسی به حروف عربی."
            image={a}
            desc="ابزار تبدیل کاراکترهای فارسی به عربی یک راه‌حل سریع و دقیق برای تبدیل متن‌های فارسی به معادل عربی آن‌ها است. این ابزار با استفاده از تابع جاوااسکریپت اختصاصی، کاراکترهای فارسی مانند «ی»، «ک»، «پ» و «ژ» را به کاراکترهای معادل عربی مانند «ي» و «ك» تبدیل می‌کند. مناسب برای تولید محتوای چندزبانه، بهبود سئو سایت‌های عربی و فارسی، و استانداردسازی متون. کافی است متن خود را وارد کنید و نتیجه را فوراً دریافت کنید. این ابزار برای توسعه‌دهندگان، تولیدکنندگان محتوا و وب‌مسترها ایده‌آل است."
        >
            <ConvertPersianCharactersToArabic/>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd)}}/>
        </SingleStructures>
    );
};

export default Page;
