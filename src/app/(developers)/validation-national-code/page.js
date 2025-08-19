import React from 'react';
import a from "../../../assets/images/gifs/credit-card.gif";
import SingleStructures from "@/components/pages/url/SingleStructures";
import ValidationNationalCode from "@/components/functions/ValidationNationalCode";

export const metadata = {
    title: "ابزار اعتبارسنجی کدملی | تشخیص کد ملی ایرانی جعلی یا معتبر همراه شهر و استان",
    description: "با ابزار آنلاین رایگان ما، کد ملی را اعتبار سنجی کنید و از شهر و استان محل صدور آن مطلع شوید . مناسب برای تست نرم‌افزار، توسعه و شبیه‌سازی داده‌ها.",
    author: "dtools.ir",
    robots: "index, follow",
    keywords: "تشخیص کد ملی فیک,کد ملی جعلی, ابزار کد ملی ایرانی, تعیین محل صدور کدملی, ابزار آنلاین رایگان",
};

const Page = () => {

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "ابزار اعتبارسنجی کدملی",
      "url": "https://dtools.ir/validation-national-code",
      "description": "ابزار آنلاین رایگان برای اعتبارسنجی کدملی، مناسب برای تست و توسعه نرم‌افزار.",
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
            abstract="تشخیص کد ملی ایرانی جعلی یا معتبر همراه شهر و استان"
            image={a}
            desc="با ابزار آنلاین رایگان ما، کد ملی را اعتبار سنجی کنید و از شهر و استان محل صدور آن مطلع شوید . مناسب برای تست نرم‌افزار، توسعه و شبیه‌سازی داده‌ها.">
            <ValidationNationalCode/>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd)}}/>
        </SingleStructures>
    );
};

export default Page;
