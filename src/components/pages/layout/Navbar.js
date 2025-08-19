import React from 'react';
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className={`bg-white h-18`}>
            <div className={`max-w-screen-xl mx-auto text_icon h-full justify-between px-5`}>
                <Link className={`text-zinc-600 font-semibold text-lg anime_hover hover:text-sky-700`} href={`/`}>صفحه اصلی</Link>
                <Link className={`text-2xl`} href="/"><strong><span className={`text-sky-300`}>D</span>tools</strong></Link>
            </div>
        </nav>
    );
};

export default Navbar;
