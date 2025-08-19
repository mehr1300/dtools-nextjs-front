import React from 'react';
import a from "../../../assets/images/gifs/calculator.gif";
import SingleStructures from "@/components/pages/url/SingleStructures";
import InstallmentPurchaseCalculator from "@/components/functions/InstallmentPurchaseCalculator";

export const metadata = {
    title: "ابزار رایگان محاسبه‌گر اقساط خرید",
    description: "ابزار رایگان محاسبه اقساط خرید در dtools. مبلغ خرید، نرخ سود و مدت زمان بازپرداخت را وارد کنید و اقساط خود را به‌سرعت محاسبه کنید!",
    author: "dtools.ir",
    robots: "index, follow",
    keywords: "محاسبه‌گر اقساط خرید, محاسبه قسط, اقساط آنلاین, ابزار محاسبه اقساط, dtools",
};

const Page = () => {

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "ابزار رایگان محاسبه‌گر اقساط خرید",
        "url": "https://dtools.ir/installment-calculator",
        "description": "ابزار آنلاین رایگان برای محاسبه اقساط خرید بر اساس مبلغ، نرخ سود و مدت بازپرداخت. مناسب برای برنامه‌ریزی مالی خریدهای قسطی.",
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
            title="محاسبه‌گر اقساط خرید"
            abstract="اقساط خرید"
            image={a}
            descTag={true}
            desc={
                <>
                    <strong>ابزار محاسبه‌گر اقساط خرید dtools</strong> راه‌حلی سریع و کارآمد برای کاربرانی است که می‌خواهند اقساط خرید خود را محاسبه کنند. این ابزار برای خریداران، برنامه‌ریزان مالی و کسب‌وکارها ایده‌آل است.
                    با <strong>ابزار محاسبه اقساط آنلاین</strong>، می‌توانید مبلغ خرید، نرخ سود و مدت زمان بازپرداخت را وارد کنید و به‌راحتی میزان اقساط ماهانه را محاسبه کنید. این ابزار نیازی به نصب ندارد و مستقیماً در مرورگر شما کار می‌کند.
                    <strong>چرا ابزار محاسبه‌گر اقساط dtools؟</strong> این ابزار با رابط کاربری ساده، دقت بالا و امکان محاسبه سریع، تجربه‌ای بی‌نقص ارائه می‌دهد. چه برای خرید لوازم خانگی، خودرو یا هر نوع خرید قسطی دیگر باشد، dtools کار شما را آسان می‌کند.
                    <strong>dtools</strong> مجموعه‌ای از ابزارهای کاربردی برای برنامه‌ریزان مالی، خریداران و کاربران عمومی ارائه می‌دهد. همین حالا ابزار محاسبه‌گر اقساط خرید را امتحان کنید و برنامه‌ریزی مالی خود را بهبود دهید!
                </>
            }
        >
            <InstallmentPurchaseCalculator />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd)}} />
        </SingleStructures>
    );
};

export default Page;
