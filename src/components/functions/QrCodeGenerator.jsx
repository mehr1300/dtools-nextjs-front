"use client";
import React, { useState, useRef } from "react";
import { persianToArabic } from "@/utility/functions";
import { Toast } from "@/components/toast/Toast";
import QRCode from "react-qr-code";

const QrCodeGenerator = () => {
    const [textOne, setTextOne] = useState("https://dtools.ir/");
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
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-5">
                <div className="flex flex-col gap-4 relative justify-center items-center w-full">
                    <div ref={qrRef}>
                        <QRCode value={textOne} size={220} fgColor="#000000" bgColor="#ffffff"  />
                    </div>
                    <div
                        onClick={onSubmit}
                        className="flex flex-row justify-center items-center p-3 w-40 rounded-xl bg-sky-400 hover:bg-sky-500 anime_hover text-gray-100 cursor-pointer"
                    >
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
