import React from 'react';
import ZeroWidthSpaceRemover from "@/components/functions/ZeroWidthSpaceRemover";
import a from "../../../assets/images/gifs/bin.gif";
import SingleStructures from "@/components/pages/url/SingleStructures";

export const metadata = {
    title: "ابزار حذف نیم‌فاصله - پاکسازی سریع متن",
    description: "ابزار آنلاین حذف نیم‌فاصله (Zero-Width Space) برای پاکسازی سریع و آسان متن با رابط کاربری ساده و کارآمد.",
    author: "dtools.ir",
    robots: "index, follow",
    keywords: "حذف نیم‌فاصله, ابزار پاکسازی متن, نیم‌فاصله, zero-width space remover, ابزار آنلاین متن",
};

const Page = () => {

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "حذف نیم‌فاصله از متن به صورت آنلاین در dtools",
      "url": "https://dtools.ir/zero-width-space-remover",
      "description": "ابزار آنلاین رایگان برای حذف نیم‌فاصله از متون فارسی، مناسب برای نویسندگان و ویرایش حرفه‌ای متن.",
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
            title="ابزار حذف نیم‌فاصله از متن"
            abstract="حذف نیم فاصله های متن ها"
            image={a}
            desc="ابزار حذف نیم‌فاصله ما یک راه‌حل سریع و کارآمد برای پاکسازی متن از کاراکترهای نامرئی مانند نیم‌فاصله (Zero-Width Space) ارائه می‌دهد. این ابزار برای کاربرانی طراحی شده است که با مشکل وجود نیم‌فاصله‌ها در متن‌های خود مواجه هستند، به‌ویژه در زبان فارسی که این کاراکترها ممکن است به‌طور ناخواسته در هنگام کپی و پیست یا ویرایش متن اضافه شوند. با استفاده از این ابزار، می‌توانید به‌راحتی متن خود را وارد کنید و با یک کلیک، تمام نیم‌فاصله‌های موجود را حذف کنید. این ابزار آنلاین، رایگان و بدون نیاز به نصب نرم‌افزار است و با رابط کاربری ساده خود، تجربه‌ای روان و سریع را برای کاربران فراهم می‌کند. چه نویسنده، ویراستار، یا برنامه‌نویس باشید، این ابزار به شما کمک می‌کند تا متن‌های تمیز و بدون اشکال داشته باشید. کافی است متن خود را در کادر مربوطه وارد کنید و دکمه حذف را فشار دهید تا نتیجه‌ای دقیق و فوری دریافت کنید. این ابزار با هدف بهبود کیفیت متون فارسی و افزایش کارایی کاربران طراحی شده است و با بهینه‌سازی برای موتورهای جستجو، به‌راحتی قابل دسترسی است."
        >
            <ZeroWidthSpaceRemover/>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd)}}/>
        </SingleStructures>
    );
};

export default Page;
