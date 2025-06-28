import React from 'react';
import TatweelRemover from "@/components/functions/TatweelRemover";
import a from "../../../assets/images/gifs/ruler.gif";
import SingleStructures from "@/components/pages/url/SingleStructures";

export const metadata = {
    title: "ابزار رفع کشیدگی متن - پاکسازی سریع متن",
    description: "ابزار آنلاین رفع کشیدگی متن (Tatweel) برای پاکسازی سریع و آسان متن‌های فارسی با رابط کاربری ساده.",
    author: "dtools.ir",
    robots: "index, follow",
    keywords: "رفع کشیدگی متن, ابزار پاکسازی متن, حذف کشیدگی, tatweel remover, ابزار آنلاین متن",
};

const Page = () => {

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "رفع کشیدگی متن (تطویل) در dtools",
      "url": "https://dtools.ir/tatweel-remover",
      "description": "ابزار آنلاین رایگان برای حذف کشیدگی (Tatweel) کارکترها از متون عربی و فارسی، مناسب برای ویرایش حرفه‌ای متن.",
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
            title="ابزار رفع کشیدگی متن"
            abstract="از بین بردن کشیدگی های حروف در متن ها"
            image={a}
            desc=" ابزار رفع کشیدگی متن ما یک راه‌حل سریع و کارآمد برای حذف کاراکترهای کشیده (مانند «ــ» یا Tatweel) از متن‌های فارسی ارائه می‌دهد. این ابزار برای کاربرانی طراحی شده است که با مشکل وجود کاراکترهای کشیدگی در متن‌های خود مواجه هستند، به‌ویژه در متون تایپ‌شده یا کپی‌شده که ممکن است به‌طور ناخواسته شامل این کاراکترها شوند. با استفاده از این ابزار آنلاین، می‌توانید متن خود را وارد کرده و با یک کلیک، تمام کاراکترهای کشیده را حذف کنید. این ابزار رایگان، بدون نیاز به نصب نرم‌افزار و با رابط کاربری ساده، تجربه‌ای روان و سریع را فراهم می‌کند. چه نویسنده، ویراستار، یا برنامه‌نویس باشید، این ابزار به شما کمک می‌کند تا متنی تمیز و استاندارد داشته باشید. کافی است متن خود را در کادر مربوطه وارد کنید و دکمه رفع کشیدگی را فشار دهید تا نتیجه‌ای دقیق و فوری دریافت کنید. این ابزار با هدف بهبود کیفیت متون فارسی و افزایش کارایی کاربران طراحی شده و برای موتورهای جستجو بهینه‌سازی شده است تا دسترسی به آن آسان باشد."
        >
            <TatweelRemover/>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd)}}/>
        </SingleStructures>
    );
};

export default Page;
