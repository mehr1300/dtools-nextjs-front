"use client";
import React, { useState } from "react";
import {LuCopy} from "react-icons/lu";
import {Toast} from "@/components/section/toast/Toast";

const parsePhpArray = (phpString) => {
    try {
        // حذف $variable = و سمی‌کالن‌ها
        let cleanedString = phpString
            .replace(/^\s*\$\w+\s*=\s*/, "") // حذف $variable =
            .replace(/;\s*$/, "") // حذف سمی‌کالن انتهایی
            .trim();

        // تابع بازگشتی برای تبدیل آرایه PHP به فرمت JSON
        const convertToJsonString = (str) => {
            // جایگزینی => با : و افزودن نقل‌قول به کلیدها
            str = str
                .replace(/=>/g, ":")
                .replace(/(\w+)\s*:/g, '"$1":')
                .replace(/'([^']*)'/g, '"$1"'); // تبدیل تک‌نقل‌قول به دو نقل‌قول

            // مدیریت آرایه‌های تو در تو
            str = str.replace(/(\[\s*[^[\]]*\])/g, (match) => {
                // اگر داخل کروشه‌ها آرایه یا شیء دیگری وجود داره، بازگشتی پردازش کن
                const inner = match.slice(1, -1).trim();
                if (inner.includes("=>") || inner.includes("[")) {
                    return `[${convertToJsonString(inner)}]`;
                }
                return match;
            });

            return str;
        };

        // تبدیل رشته به JSON
        cleanedString = convertToJsonString(cleanedString);

        // اطمینان از اینکه رشته یک آرایه یا شیء است
        if (!cleanedString.startsWith("[") && !cleanedString.startsWith("{")) {
            cleanedString = `[${cleanedString}]`;
        }

        const parsed = JSON.parse(cleanedString);
        return JSON.stringify(parsed, null, 2);
    } catch (err) {
        throw new Error("خطا در پارس آرایه PHP: فرمت نامعتبر");
    }
};

const ConvertArrayToJson = () => {
    const [input, setInput] = useState("");
    const [jsonOutput, setJsonOutput] = useState("");
    const [error, setError] = useState("");
    const [inputType, setInputType] = useState("javascript"); // نوع ورودی: javascript, php, python
    const handleConvert = () => {
        if (!input.trim()) {
            setError("لطفاً یک ورودی وارد کنید!");
            setJsonOutput("");
            return;
        }

        try {
            let jsonString;
            if (inputType === "php") {
                jsonString = parsePhpArray(input);
            } else {
                // برای JavaScript و پایتون (فرمت‌های JSON معتبر)
                const parsed = JSON.parse(input);
                jsonString = JSON.stringify(parsed, null, 2);
            }
            setJsonOutput(jsonString);
            setError("");
        } catch (err) {
            setError(`خطا: لطفاً یک ${inputType === "php" ? "آرایه PHP" : inputType === "python" ? "لیست یا دیکشنری پایتون" : "آرایه یا شیء JavaScript"} معتبر وارد کنید`);
            setJsonOutput("");
        }
    };
    const handleCopy = () => {
        if (jsonOutput) {
            navigator.clipboard.writeText(jsonOutput).then(() => {
                Toast.success("متن با موفقیت کپی شد!")
            }).catch((err) => {
                Toast.error('کپی کردن متن ناموفق بود.')
            });
        }
    };

    return (
        <div className="flex flex-col gap-5 justify-center w-full items-center">
            <div className="flex flex-col gap-7 w-full">
                <div className="flex flex-col gap-2">
                    <label className="">نوع ورودی</label>
                    <div className="flex flex-row">
                        <button
                            onClick={() => setInputType("javascript")}
                            className={`w-32 rounded-r-xl text-gray-100 cursor-pointer h-10 ${
                                inputType === "javascript" ? "bg-sky-600 text-gray-100" : "box-border border border-sky-400 text-sky-600 hover:bg-sky-400 hover:text-sky-700"
                            }`}>
                            JavaScript
                        </button>
                        <button
                            onClick={() => setInputType("php")}
                            className={`w-32  text-gray-100 cursor-pointer h-10 ${
                                inputType === "php" ? "bg-sky-600 text-gray-100" : "box-border border border-sky-400 text-sky-600 hover:bg-sky-400 hover:text-sky-700"
                            }`}>
                            PHP
                        </button>
                        <button
                            onClick={() => setInputType("python")}
                            className={`w-32 rounded-l-xl text-gray-100 cursor-pointer h-10 ${
                                inputType === "python" ? "bg-sky-600 text-gray-100" : "box-border border border-sky-400 text-sky-600 hover:bg-sky-400 hover:text-sky-700"
                            }`}
                        >
                            پایتون
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-10 md:gap-5">
                   <div className="flex flex-col gap-2">
                       <label htmlFor="2" className="">آرایه یا شیء ورودی</label>
                       <textarea id="2" dir="ltr" value={input} onChange={(e) => setInput(e.target.value)} rows="10"
                           placeholder={inputType === "php" ? 'مثال: ["key" => "value", 1, 2]' : inputType === "python"
                                       ? 'مثال: [1, 2, "text", {"key": "value"}]'
                                       : 'مثال: [1, 2, "text", {"key": "value"}]'
                           }
                           className="border border-gray-200 bg-white outline-sky-200 rounded-xl p-3 text-gray-700"
                       />
                   </div>
                   <div className="flex flex-col gap-2 relative">
                       <div className="flex flex-row justify-between items-center">
                           <label className="flex flex-row gap-1" htmlFor="textArea">
                               <span>خروجی JSON</span>
                           </label>
                           <div className={`rounded-xl cursor-pointer left-0 -top-5 text-blue-500 absolute size-10 bg-blue-200 flex items-center justify-center`}>
                               <LuCopy onClick={handleCopy} size={21}/>
                           </div>
                       </div>
                       <textarea id="textArea" dir="ltr" value={jsonOutput} readOnly rows="10" className="border border-gray-200 bg-white outline-sky-200 rounded-xl p-3 text-gray-700"/>
                   </div>
               </div>
                <div className="flex flex-row w-full justify-center items-center">
                    <button onClick={handleConvert} className="w-48 flex justify-center items-center p-3 rounded-xl bg-sky-400 hover:bg-sky-500 text-gray-100 cursor-pointer">
                        تبدیل به JSON
                    </button>
                </div>

                {error && (
                    <div className="text-red-500 text-sm">{error}</div>
                )}



            </div>
        </div>
    );
};

export default ConvertArrayToJson;
