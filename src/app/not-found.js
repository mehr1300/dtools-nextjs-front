import React from 'react';
import Link from "next/link";
import {Kalameh} from "@/app/layout";

const NotFound = () => {
    return (
        <div className="inset-0 flex flex-col gap-6 items-center justify-center fixed bg-sky-50">
            <div className={`text-2xl ${Kalameh.className}`}>این صفحه پیدا نشد!</div>
            <Link className={`font-semibold text-gray-600`} href={`/`}>برای رفتن به صفحه اصلی <span className={`text-sky-400`}>کلیک</span> کنید.</Link>
        </div>
    );
};

export default NotFound;