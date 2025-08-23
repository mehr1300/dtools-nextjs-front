import React from 'react';
import a from "../../../assets/images/gifs/refresh.gif";
import SingleStructures from "@/components/pages/url/SingleStructures";
import UnitConverter from "@/components/functions/UnitConverter";

export const metadata = {
    title: "ابزار رایگان تبدیل واحدها ",
    description: "ابزار رایگان تبدیل واحدها در dtools. به سادگی واحدها را به هم تبدیل کنید. سریع و ساده، همین حالا امتحان کنید!",
    author: "dtools.ir",
    robots: "index, follow",
    keywords: "تبدیل واحدها, تبدیل واحد , dtools",
};

const Page = () => {

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "ابزار رایگان تبدیل واحد",
      "url": "https://dtools.ir/unit-converter",
      "description": "ابزار آنلاین رایگان برای تبدیل واحد",
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
            title="تبدیل واحد ها به هم"
            abstract="تبدیل واحد"
            image={a}
            descTag={true}
            desc={
                <>
                    <strong>ابزار تبدیل واحدها dtools</strong> راه‌حلی سریع و کارآمد برای کاربرانی است که می‌خواهند لینک، متن یا اطلاعات خود را به QR کد تبدیل کنند. این ابزار برای کسب‌وکارها، توسعه‌دهندگان و کاربران روزمره ایده‌آل است.
                    با <strong>ابزار ساخت کیو آر کد آنلاین</strong>، می‌توانید به‌راحتی لینک وب‌سایت، اطلاعات تماس، متن یا هر داده دیگری را وارد کنید و QR کد مربوطه را فوراً دریافت کنید. این ابزار نیازی به نصب ندارد و مستقیماً در مرورگر شما کار می‌کند.
                    <strong>چرا ابزار تبدیل واحدها dtools؟</strong> این ابزار با رابط کاربری ساده، پشتیبانی از انواع داده‌ها و امکان دانلود QR کد در فرمت‌های مختلف، تجربه‌ای بی‌نقص ارائه می‌دهد. چه برای تبلیغات، اشتراک‌گذاری لینک یا ذخیره اطلاعات باشد، dtools کار شما را آسان می‌کند.
                    <strong>dtools</strong> مجموعه‌ای از ابزارهای کاربردی برای برنامه‌نویسان، طراحان و کاربران عمومی ارائه می‌دهد. همین حالا ابزار تبدیل واحدها را امتحان کنید و اطلاعات خود را به‌سرعت به اشتراک بگذارید!
                </>
            }
        >
            <UnitConverter/>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd)}}/>
        </SingleStructures>
    );
};

export default Page;
