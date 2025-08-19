import React from 'react';
import a from "../../../assets/images/gifs/encryption.gif";
import { IRANYekanFaNum } from "@/app/layout";
import SingleStructures from "@/components/pages/url/SingleStructures";
import DecodeEncode from "@/components/functions/DecodeEncode";
import DecodeEncodeURL from "@/components/functions/DecodeEncodeURL";

export const metadata = {
    title: "انکود و دیکود URL رایگان - ابزار Dtools",
    description: "ابزار آنلاین انکود و دیکود URL در Dtools. رشته‌ها را به سرعت کدگذاری یا رمزگشایی کنید. ساده، سریع و رایگان!",
    author: "dtools.ir",
    robots: "index, follow",
    keywords: "انکود URL, دیکود URL, ابزار انکود آنلاین, رمزگشایی URL, ابزار برنامه‌نویسی, Dtools",
    canonical: "https://dtools.ir/url-encode-decode",
    alternates: {
        languages: {
            "fa-IR": "https://dtools.ir/url-encode-decode",
        },
    },
    openGraph: {
        title: "انکود و دیکود URL رایگان - ابزار Dtools",
        description: "ابزار رایگان و آنلاین برای انکود و دیکود URL. مناسب برای برنامه‌نویسان و پردازش سریع داده‌ها.",
        url: "https://dtools.ir/url-encode-decode",
        type: "website",
        images: [
            {
                url: "https://dtools.ir/images/encode-decode-preview.jpg",
                width: 1200,
                height: 630,
                alt: "انکود و دیکود URL در Dtools",
            },
        ],
    },
};

const Page = () => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "ابزار انکود و دیکود URL در Dtools",
        "url": "https://dtools.ir/url-encode-decode",
        "description": "ابزار آنلاین رایگان برای انکود و دیکود URL، مناسب برای برنامه‌نویسان و پردازش داده‌های کدشده.",
        "applicationCategory": "Developer Tools",
        "operatingSystem": "Web",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "IRR",
        },
        "publisher": {
            "@type": "Organization",
            "name": "Dtools",
            "url": "https://dtools.ir",
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "150",
        },
    };

    return (
        <SingleStructures
            title="انکود و دیکود URL"
            abstract="ابزار دیکود (decode) و انکود (encode) URL آنلاین"
            image={a}
            imageAlt="انکود و دیکود URL در Dtools"
            descTag={true}
            desc={
                <div dir="rtl" className={IRANYekanFaNum}>
                    <h2>ابزار انکود و دیکود URL</h2>
                    <p>
                        با <strong>ابزار انکود و دیکود URL</strong> Dtools، به‌راحتی رشته‌های URL را کدگذاری یا رمزگشایی کنید. این ابزار آنلاین برای برنامه‌نویسان و افرادی که با داده‌های وب کار می‌کنند طراحی شده است. کافی است URL یا رشته خود را وارد کنید و نتیجه را فوراً دریافت کنید.
                    </p>
                    <h3>چرا ابزار انکود و دیکود Dtools؟</h3>
                    <ul>
                        <li>رایگان و بدون نیاز به نصب</li>
                        <li>پشتیبانی از فرمت‌های مختلف کدگذاری (مانند URL Encode/Decode)</li>
                        <li>رابط کاربری ساده و سریع</li>
                        <li>مناسب برای توسعه‌دهندگان وب و پردازش داده</li>
                    </ul>
                </div>
            }
        >
            <DecodeEncodeURL />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        </SingleStructures>
    );
};

export default Page;
