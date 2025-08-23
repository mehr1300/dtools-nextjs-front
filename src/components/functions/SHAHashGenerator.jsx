"use client"
import React, {useState} from 'react';
import {LuCopy} from "react-icons/lu";
import {Toast} from "@/components/section/toast/Toast";
import sha1 from 'crypto-js/sha1';
import sha3 from 'crypto-js/sha3';
import sha224 from 'crypto-js/sha224';
import sha256 from 'crypto-js/sha256';
import sha384 from 'crypto-js/sha384';
import sha512 from 'crypto-js/sha512';

const SHAHashGenerator = () => {

    const [textOne, setTextOne] = useState("")
    const [textTwo, setTextTwo] = useState("")
    const [selector, setSelector] = useState("sha1")
    const onSubmit = () => {
        switch (selector) {
            case "sha1":
                setTextTwo(sha1(textOne))
                break;
            case "sha3":
                setTextTwo(sha3(textOne))
                break;
            case "sha224":
                setTextTwo(sha224(textOne))
                break;
            case "sha256":
                setTextTwo(sha256(textOne))
                break;
            case "sha384":
                setTextTwo(sha384(textOne))
                break;
            case "sha512":
                setTextTwo(sha512(textOne))
                break;



        }
    }
    const copyToClipboard = async () => {
        try {
            const textarea = document.querySelector('#textArea');
            await navigator.clipboard.writeText(textarea.value);
            Toast.success("متن با موفقیت کپی شد!")
        } catch (err) {
            console.error('خطا در کپی کردن متن: ', err);
            Toast.error('کپی کردن متن ناموفق بود.')
        }
    };

    return (
        <div className="flex flex-col gap-5 justify-center w-full items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-10 md:gap-5">
                <div className="flex flex-col gap-3">
                    <label className="flex flex-row gap-1" htmlFor="textOne">
                        <span>متن را وارد کنید</span>
                    </label>
                    <textarea id="textOne" value={textOne} onChange={(e) => {setTextOne(e.target.value)}} name="" cols="60" rows="10" className="border border-gray-200 bg-white outline-sky-200 rounded-xl p-3 text-gray-700"></textarea>
                </div>
                <div className="flex flex-col relative gap-3">
                    <div className="flex flex-row justify-between items-center">
                        <label className="flex flex-row gap-1" htmlFor="textArea">
                            <span>خروجی</span>
                        </label>
                        <div className={`rounded-xl cursor-pointer left-0 -top-5 text-blue-500 absolute size-10 bg-blue-200 flex items-center justify-center`}>
                            <LuCopy onClick={copyToClipboard} size={21}/>
                        </div>
                    </div>
                    <textarea value={textTwo} readOnly name="" id="textArea" cols="60" rows="10" className="border border-gray-200 bg-white outline-sky-200 rounded-xl p-3 text-gray-700"></textarea>
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
                <div className={`flex flex-row justify-center  px-5 pt-2 rounded cursor-pointer ${selector === "sha1" ? "bg-sky-400 text-white" : "border-2 border-sky-400"}`} onClick={() => setSelector("sha1")}>
                    <span>SHA-1</span>
                </div>
                <div className={`flex flex-row justify-center  px-5 pt-2 rounded cursor-pointer ${selector === "sha3" ? "bg-sky-400 text-white" : "border-2 border-sky-400"}`} onClick={() => setSelector("sha3")}>
                    <span>SHA-3</span>
                </div>
                <div className={`flex flex-row justify-center  px-5 pt-2 rounded cursor-pointer ${selector === "sha224" ? "bg-sky-400 text-white" : "border-2 border-sky-400"}`} onClick={() => setSelector("sha224")}>
                    <span>SHA-224</span>
                </div>
                <div className={`flex flex-row justify-center  px-5 pt-2 rounded cursor-pointer ${selector === "sha256" ? "bg-sky-400 text-white" : "border-2 border-sky-400"}`} onClick={() => setSelector("sha256")}>
                    <span>SHA-256</span>
                </div>
                <div className={`flex flex-row justify-center  px-5 pt-2 rounded cursor-pointer ${selector === "sha384" ? "bg-sky-400 text-white" : "border-2 border-sky-400"}`} onClick={() => setSelector("sha384")}>
                    <span>SHA-384</span>
                </div>
                <div className={`flex flex-row justify-center  px-5 pt-2 rounded cursor-pointer ${selector === "sha512" ? "bg-sky-400 text-white" : "border-2 border-sky-400"}`} onClick={() => setSelector("sha512")}>
                    <span>SHA-512</span>
                </div>

            </div>
            <div onClick={() => {onSubmit()}} className="flex flex-row justify-center items-center p-3 w-40 rounded-xl bg-sky-400 hover:bg-sky-400 anime_hover text-gray-100 cursor-pointer ">تبدیل</div>
        </div>
    );
};

export default SHAHashGenerator;
