import "./globals.css";
import localFont from "next/font/local";
import ToastContainer from "@/components/toast/ToastContainer";

export const IRANSansXFaNum = localFont({
    src: [
        {
            path: '../assets/fonts/IranSansxFaNum/Woff2/IRANSansXFaNum-Regular.woff2',
            weight: 'normal',
            style: 'normal',
        },
        {
            path: '../assets/fonts/IranSansxFaNum/Woff2/IRANSansXFaNum-Bold.woff2',
            weight: 'bold',
            style: 'normal',
        },
    ],
})
export const Dana = localFont({
    src: [
        {
            path: '../assets/fonts/Dana/Woff2/DanaFaNum-Regular.woff2',
            weight: 'normal',
            style: 'normal',
        },
        {
            path: '../assets/fonts/Dana/Woff2/DanaFaNum-Bold.woff2',
            weight: 'bold',
            style: 'normal',
        },
    ],
})

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${IRANSansXFaNum.className} `}
      >
        {children}
        <ToastContainer/>
      </body>
    </html>
  );
}
