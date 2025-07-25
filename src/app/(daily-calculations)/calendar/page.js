import React from 'react';
import a from "../../../assets/images/gifs/calendar.gif";
import {IRANYekanFaNum} from "@/app/layout";
import SingleStructures from "@/components/pages/url/SingleStructures";

export const metadata = {
    title: "ابزار رایگان تولید QR Code ",
    description: "ابزار رایگان تولید QR Code در dtools. لینک، متن یا اطلاعات خود را به QR کد تبدیل کنید. سریع و ساده، همین حالا امتحان کنید!",
    author: "dtools.ir",
    robots: "index, follow",
    keywords: "تولید QR Code, ساخت کیو آر کد, QR کد آنلاین, ابزار کیو آر کد, dtools",
};

const Page = () => {

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "ابزار رایگان تولید QR Code ",
      "url": "https://dtools.ir/qr-code-generator",
      "description": "ابزار آنلاین رایگان برای تولید QR Code از لینک، متن یا اطلاعات، مناسب برای اشتراک‌گذاری سریع داده‌ها.",
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
            title="ابزار تولید QR Code "
            abstract="تولید کیو آر کد"
            image={a}
            descTag={true}
            desc={
                <div>
                    <p><strong>ابزار تولید QR Code dtools</strong> راه‌حلی سریع و کارآمد برای کاربرانی است که می‌خواهند لینک، متن یا اطلاعات خود را به QR کد تبدیل کنند. این ابزار برای کسب‌وکارها، توسعه‌دهندگان و کاربران روزمره ایده‌آل است.</p>
                    <p>با <strong>ابزار ساخت کیو آر کد آنلاین</strong>، می‌توانید به‌راحتی لینک وب‌سایت، اطلاعات تماس، متن یا هر داده دیگری را وارد کنید و QR کد مربوطه را فوراً دریافت کنید. این ابزار نیازی به نصب ندارد و مستقیماً در مرورگر شما کار می‌کند.</p>
                    <p><strong>چرا ابزار تولید QR Code dtools؟</strong> این ابزار با رابط کاربری ساده، پشتیبانی از انواع داده‌ها و امکان دانلود QR کد در فرمت‌های مختلف، تجربه‌ای بی‌نقص ارائه می‌دهد. چه برای تبلیغات، اشتراک‌گذاری لینک یا ذخیره اطلاعات باشد، dtools کار شما را آسان می‌کند.</p>
                    <p><strong>dtools</strong> مجموعه‌ای از ابزارهای کاربردی برای برنامه‌نویسان، طراحان و کاربران عمومی ارائه می‌دهد. همین حالا ابزار تولید QR Code را امتحان کنید و اطلاعات خود را به‌سرعت به اشتراک بگذارید!</p>
                </div>
            }
        >
            <div className={`h-60 ${IRANYekanFaNum.className} font-bold text-xl text-sky-400 gap-6 text_icon justify-center`}>
                <span>در دست اقدام</span>
                <span className={`text-gray-500 animate-ping h-8 `}> . . . </span>
            </div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd)}}/>
        </SingleStructures>
    );
};

export default Page;