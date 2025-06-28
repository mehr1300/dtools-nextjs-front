import "./globals.css";
import localFont from "next/font/local";
import ToastContainer from "@/components/section/toast/ToastContainer";
import Navbar from "@/components/pages/layout/Navbar";
import Footer from "@/components/pages/layout/Footer";

export const Pelak = localFont({
    src: [
        {
            path: '../assets/fonts/pelak/PelakFA-Bold.woff2',
            weight: 'bold',
            style: 'normal',
        },
        {
            path: '../assets/fonts/pelak/PelakFA-Regular.woff2',
            weight: 'normal',
            style: 'normal',
        },
        {
            path: '../assets/fonts/pelak/PelakFA-SemiBold.woff2',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../assets/fonts/pelak/PelakFA-Medium.woff2',
            weight: '500',
            style: 'normal',
        },
    ],
})
export const IRANYekanFaNum = localFont({
    src: [
        {
            path: '../assets/fonts/yekan/YekanBakhFaNum-Regular.woff2',
            weight: 'normal',
            style: 'normal',
        },
        {
            path: '../assets/fonts/yekan/YekanBakhFaNum-Bold.woff2',
            weight: 'bold',
            style: 'normal',
        },
    ],
})
export const Kalameh = localFont({
    src: [
        {
            path: '../assets/fonts/kalameh/KalamehWebFaNum-Regular.woff2',
            weight: 'normal',
            style: 'normal',
        },
        {
            path: '../assets/fonts/kalameh/KalamehWebFaNum-Bold.woff2',
            weight: 'bold',
            style: 'normal',
        },
        {
            path: '../assets/fonts/kalameh/KalamehWebFaNum-SemiBold.woff2',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../assets/fonts/kalameh/KalamehWebFaNum-Medium.woff2',
            weight: '500',
            style: 'normal',
        },
    ],
})

export default function RootLayout({ children }) {
    return (
        <html lang="fa" dir="rtl">
            <body className={`min-h-[100svh] selection:bg-sky-300 selection:text-white flex flex-col ${Pelak.className} `}>
                <Navbar/>
                {children}
                <Footer/>
                <ToastContainer/>
            </body>
        </html>
    );
}
