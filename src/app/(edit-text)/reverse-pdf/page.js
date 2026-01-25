import React from 'react';
import a from "@/assets/images/gifs/letter-f.gif";
import SingleStructures from "@/components/pages/url/SingleStructures";
import ReversePersianForPdf from "@/components/functions/ReversePersianForPDF";

export const metadata = {
    title: "برعکس کننده کلمات فارسی برای جستجو در pdf",
    description: "ابزار آنلاین برعکس کننده کلمات فارسی برای جستجو در pdf با دقت بالا. متن فارسی خود را وارد کنید و به راحتی برعکس آن را برای جستجو در متن pdf تحویل بگیرید.",
    keywords: "ابزار تبدیل متن,dtools"
};

const Page = () => {

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "برعکس کننده کلمات فارسی برای جستجو در pdf",
      "url": "https://dtools.ir/reverse-pdf",
      "description": "ابزار آنلاین برعکس کننده کلمات فارسی برای جستجو در pdf با دقت بالا. متن فارسی خود را وارد کنید و به راحتی برعکس آن را برای جستجو در متن pdf تحویل بگیرید.",
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
            title="برعکس کننده کلمات فارسی برای جستجو در pdf"
            abstract="تغییر حروف در نوشته های عربی به حروف فارسی."
            image={a}
            desc="ابزار آنلاین برعکس کننده کلمات فارسی برای جستجو در pdf با دقت بالا. متن فارسی خود را وارد کنید و به راحتی برعکس آن را برای جستجو در متن pdf تحویل بگیرید."
        >
            <ReversePersianForPdf/>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd)}}/>
        </SingleStructures>
    );
};

export default Page;