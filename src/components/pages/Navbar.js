import React from 'react';
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className={`bg-white h-18`}>
            <div dir="ltr" className={`max-w-screen-xl mx-auto items-center h-full flex px-5`}>
                <Link className={`font-bold text-2xl`} href="/">Dtools</Link>
            </div>
        </nav>
    );
};

export default Navbar;