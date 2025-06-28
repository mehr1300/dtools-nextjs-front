import React from 'react';
import Link from "next/link";
import {Kalameh} from "@/app/layout";
import Image from "next/image";
import a from "../assets/images/gifs/error.gif"

const NotFound = () => {
    return (
        <div className="inset-0 flex flex-col gap-6 items-center justify-center fixed bg-sky-50">
            <Image width={120} height={120} src={a} alt="این صفحه پیدا نشد"/>
            <div className={`text-2xl ${Kalameh.className}`}>این صفحه پیدا نشد!</div>
            <Link className={`font-semibold text-gray-600`} href={`/`}>برای رفتن به صفحه اصلی <span className={`text-sky-400`}>کلیک</span> کنید.</Link>
        </div>
    );
};

export default NotFound;