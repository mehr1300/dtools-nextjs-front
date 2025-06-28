import React from 'react';
import Image from "next/image";
import {Kalameh} from "@/app/layout";

const SingleStructures = ({title,abstract,desc,image,children,descTag = false}) => {
    return (
        <div className="min-h-[100svh] bg-gradient-to-b from-sky-50 to-white">
            <div className="flex flex-col gap-14 p-10 max-w-screen-xl w-full mx-auto">
                <div className={`text_icon`}>
                    <Image unoptimized={true} width={60} height={60} src={image} alt={title}/>
                    <div className={`flex flex-col gap-1.5`}>
                        <h1 className={`${Kalameh.className} text-gray-800 text-2xl font-bold`}>{title}</h1>
                        <h2 className={`${Kalameh.className} text-gray-500 font-semibold`}>{abstract}</h2>
                    </div>
                </div>
                {children}
                <div className="flex flex-col gap-4 border-t pt-10 border-gray-300">
                    <h2 className="font-bold text-justify">{title}</h2>
                    {descTag
                        ?<div className="text-justify leading-8 text-gray-700">{desc}</div>
                        :<p className="text-justify leading-8 text-gray-700">{desc}</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default SingleStructures;
