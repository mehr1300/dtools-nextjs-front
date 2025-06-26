import React from 'react';
import a from "../../../assets/images/gifs/encryption.gif";
import {IRANYekanFaNum} from "@/app/layout";
import SingleStructures from "@/components/pages/SingleStructures";
import DecodeEncode from "@/components/functions/DecodeEncode";

export const metadata = {
    title: "دیکود (decode) و انکود (encode) تبدیل رشته ها به کاکتر و برعکس در Dtools",
    description: "ابزار رایگان انکود و دیکود رشته در dtools. رشته‌ها را به کاراکتر یا برعکس تبدیل کنید. سریع، ساده و کاربردی!",
    author: "dtools.ir",
    robots: "index, follow",
    keywords: "انکود رشته, دیکود رشته, تبدیل رشته به کاراکتر, ابزار برنامه‌نویسی, dtools",
};

const Page = () => {

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "انکود و دیکود رشته در dtools",
      "url": "https://dtools.ir/decode-encode",
      "description": "ابزار آنلاین رایگان برای انکود و دیکود رشته‌ها، مناسب برای برنامه‌نویسان و پردازش داده‌های کدشده.",
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
            title="decode و encode"
            abstract="دیکود (decode) و انکود (encode) | تبدیل رشته ها به کاکتر و برعکس"
            image={a}
            desc={
                <>
                    <strong>انکود و دیکود رشته dtools</strong> ابزاری حرفه‌ای برای برنامه‌نویسان است که به شما امکان می‌دهد رشته‌ها را به کاراکترهای کدشده تبدیل کنید یا کدهای کاراکتری را به رشته‌های خوانا برگردانید. این ابزار برای کار با داده‌های رمزنگاری‌شده یا فرمت‌های خاص ایده‌آل است.
                    با <strong>ابزار انکود و دیکود رشته</strong>، می‌توانید به‌راحتی عملیات‌هایی مثل Base64، URL Encode/Decode یا سایر فرمت‌های کدگذاری را انجام دهید. کافی است رشته یا کد خود را وارد کنید، نوع تبدیل را انتخاب کنید و نتیجه را فوراً دریافت کنید. این ابزار کاملاً آنلاین و بدون نیاز به نصب است.
                    <strong>چرا ابزار انکود و دیکود dtools؟</strong> این ابزار از چندین فرمت کدگذاری پشتیبانی می‌کند، رابط کاربری ساده‌ای دارد و نتایج را با دقت بالا ارائه می‌دهد. چه در حال توسعه وب باشید یا نیاز به پردازش داده‌ها داشته باشید، dtools کار شما را سریع‌تر می‌کند.
                    <strong>dtools</strong> مجموعه‌ای از ابزارهای کاربردی برای برنامه‌نویسان، نویسندگان و کاربران روزمره ارائه می‌دهد. همین حالا ابزار انکود و دیکود رشته را امتحان کنید و از سهولت کار با داده‌ها لذت ببرید!
                </>
            }
        >
            <DecodeEncode/>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd)}}/>
        </SingleStructures>
    );
};

export default Page;
