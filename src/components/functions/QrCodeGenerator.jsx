"use client";
import React, { useState, useRef } from "react";
import { persianToArabic } from "@/utility/functions";
import { Toast } from "@/components/section/toast/Toast";
import QRCode from "react-qr-code";

const QrCodeGenerator = () => {
    const [textOne, setTextOne] = useState("https://dtools.ir/");
    const [valueFgColor, setValueFgColor] = useState("#000000");
    const [valueBgColor, setValueBgColor] = useState("#ffffff");

    const qrRef = useRef(null); // Ref برای دسترسی به SVG

    const onSubmit = () => {
        const svg = qrRef.current.querySelector("svg"); // دسترسی به SVG
        if (!svg) return;

        // تبدیل SVG به canvas
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const svgData = new XMLSerializer().serializeToString(svg);
        const img = new Image();
        const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
        const url = URL.createObjectURL(svgBlob);

        img.onload = () => {
            canvas.width = 400; // اندازه QR Code
            canvas.height = 400;
            ctx.drawImage(img, 0, 0, 400, 400);
            URL.revokeObjectURL(url);

            // ایجاد لینک دانلود
            const link = document.createElement("a");
            link.download = "qrcode.png";
            link.href = canvas.toDataURL("image/png");
            link.click();
        };
        img.src = url;
    };

    return (
        <div className="flex flex-col gap-5 justify-center w-full items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-10 md:gap-5">
                <div className="flex flex-col gap-3 relative justify-center items-center w-full">
                    <div ref={qrRef}>
                        <QRCode value={textOne} size={220} fgColor={valueFgColor} bgColor={valueBgColor}  />
                    </div>
                    <div className="flex flex-row gap-2 relative">
                        <div className="relative h-10 w-10 rounded">
                            <label htmlFor="ddd" className="absolute h-8 w-8 rounded border border-gray-300" style={{backgroundColor : valueFgColor}}></label>
                            <input id="ddd" type="color" value={valueFgColor} onChange={(e)=>setValueFgColor(e.target.value)} className=" h-8 w-8 rounded-xl"/>
                        </div>
                       <div className="relative h-8 w-8 rounded">
                           <label htmlFor="fff" className="absolute h-8 w-8 rounded border border-gray-300" style={{backgroundColor : valueBgColor}}></label>
                           <input id="fff" type="color" value={valueBgColor} onChange={(e)=>setValueBgColor(e.target.value)} className=" h-8 w-8 rounded-xl"/>
                       </div>
                    </div>
                    <div onClick={onSubmit}
                        className="flex flex-row justify-center items-center p-3 w-40 rounded-xl bg-sky-400 hover:bg-sky-500 anime_hover text-gray-100 cursor-pointer">
                        دانلود
                    </div>

                </div>
                <div className="flex flex-col gap-3">
                    <label className="flex flex-row gap-1" htmlFor="textOne">
                        <span>متن خود را وارد کنید</span>
                    </label>
                    <textarea
                        dir="ltr"
                        id="textOne"
                        value={textOne}
                        onChange={(e) => setTextOne(e.target.value)}
                        cols="60"
                        rows="10"
                        className="border border-gray-200 bg-white outline-sky-200 rounded-xl p-3 text-gray-700"
                    ></textarea>
                </div>
            </div>
        </div>
    );
};

export default QrCodeGenerator;
