import React from 'react';
import {Kalameh} from "@/app/layout";
import Link from "next/link";

const Footer = () => {
    return (
        <div className={`h-20 flex items-center justify-center bg-gray-50`}>
            <div className={`max-w-screen-xl text_icon justify-between mx-auto w-full px-5 `}>
                <span className={`text-gray-500 sm:text-base text-sm ${Kalameh.className}`}>تمام حقوق برای Dtools محفوظ است.</span>
                <Link className={`text-2xl`} href="/"><strong><span className={`text-sky-300`}>D</span>tools</strong></Link>
            </div>
        </div>
    );
};

export default Footer;