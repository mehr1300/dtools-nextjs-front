"use client";
import React, { useState } from "react";
import { LuCopy } from "react-icons/lu";
import { Toast } from "@/components/section/toast/Toast";
import CodeBlock from "@/components/pages/tools/CodeBlock";

/* ---------------- Utils ---------------- */

const normalizeInput = (str) =>
    str.replace(/^\s*\$\w+\s*=\s*/, "").replace(/;\s*$/, "").trim();

const convertPhpToJsonString = (str) => {
    let s = normalizeInput(str)
        .replace(/array\s*\(/g, "[")
        .replace(/\)/g, "]")
        .replace(/=>/g, ":")
        .replace(/'([^']*)'/g, '"$1"')
        .replace(/([{,]\s*)([A-Za-z0-9_]+)\s*:/g, '$1"$2":')
        .replace(/,\s*([\]}])/g, "$1")
        .trim();

    // اگر key:value وجود داشت یعنی object است
    if (/:\s*/.test(s)) {
        if (s.startsWith("[")) s = "{" + s.slice(1);
        if (s.endsWith("]")) s = s.slice(0, -1) + "}";
    }

    return s;
};

const convertPythonToJsonString = (str) => {
    return normalizeInput(str)
        .replace(/\bNone\b/g, "null")
        .replace(/\bTrue\b/g, "true")
        .replace(/\bFalse\b/g, "false")
        .replace(/'([^']*)'/g, '"$1"')
        .replace(/,\s*([\]}])/g, "$1");
};

const convertJsLikeToJsonString = (str) => {
    return normalizeInput(str)
        .replace(/'([^']*)'/g, '"$1"')
        .replace(/([{,]\s*)([A-Za-z0-9_]+)\s*:/g, '$1"$2":')
        .replace(/,\s*([\]}])/g, "$1");
};

const parseInput = (input, type) => {
    let jsonString;

    if (type === "php") jsonString = convertPhpToJsonString(input);
    else if (type === "python") jsonString = convertPythonToJsonString(input);
    else jsonString = convertJsLikeToJsonString(input);

    const parsed = JSON.parse(jsonString);
    return JSON.stringify(parsed, null, 2);
};

/* ---------------- Component ---------------- */

const ConvertArrayToJson = () => {
    const [input, setInput] = useState("");
    const [jsonOutput, setJsonOutput] = useState("");
    const [error, setError] = useState("");
    const [inputType, setInputType] = useState("javascript");

    const handleConvert = () => {
        if (!input.trim()) {
            setError("لطفاً یک ورودی وارد کنید");
            setJsonOutput("");
            return;
        }

        try {
            const result = parseInput(input, inputType);
            setJsonOutput(result);
            setError("");
        } catch {
            setJsonOutput("");
            setError("فرمت ورودی معتبر نیست");
        }
    };

    const handleCopy = () => {
        if (!jsonOutput) return;

        navigator.clipboard
            .writeText(jsonOutput)
            .then(() => Toast.success("کپی شد"))
            .catch(() => Toast.error("خطا در کپی"));
    };

    const buttonClass = (type) =>
        `w-32 h-10 cursor-pointer ${
            inputType === type
                ? "bg-sky-600 text-white"
                : "border border-sky-400 text-sky-600 hover:bg-sky-400 hover:text-white"
        }`;

    return (
        <div className="flex flex-col gap-6 w-full items-center">

            <div className="flex flex-col gap-2 w-full">
                <label>نوع ورودی</label>

                <div className="flex">
                    <button
                        onClick={() => setInputType("javascript")}
                        className={`${buttonClass("javascript")} rounded-r-xl`}
                    >
                        JavaScript
                    </button>

                    <button
                        onClick={() => setInputType("php")}
                        className={buttonClass("php")}
                    >
                        PHP
                    </button>

                    <button
                        onClick={() => setInputType("python")}
                        className={`${buttonClass("python")} rounded-l-xl`}
                    >
                        پایتون
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">

                <div className="flex flex-col gap-2">
                    <label>آرایه یا شیء ورودی</label>

                    <textarea
                        dir="ltr"
                        rows="9"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder={
                            inputType === "php"
                                ? `[ 'amount' => "int", 'name' => "Ali" ]`
                                : inputType === "python"
                                    ? `[1,2,"text",{"name":"Ali"}]`
                                    : `[1,2,"text",{name:"Ali"}]`
                        }
                        className="border border-gray-200 bg-white rounded-xl p-3 outline-sky-200"
                    />
                </div>

                <div className="flex flex-col gap-2 relative">
                    <label>خروجی JSON</label>

                    <button
                        onClick={handleCopy}
                        className="absolute left-0 -top-5 size-10 flex items-center justify-center bg-blue-200 text-blue-500 rounded-xl"
                    >
                        <LuCopy size={20} />
                    </button>

                    <CodeBlock code={jsonOutput} language="json" />

                </div>
            </div>

            <button
                onClick={handleConvert}
                className="w-48 p-3 rounded-xl bg-sky-400 hover:bg-sky-500 text-white"
            >
                تبدیل به JSON
            </button>

            {error && <div className="text-red-500 text-sm">{error}</div>}
        </div>
    );
};

export default ConvertArrayToJson;
