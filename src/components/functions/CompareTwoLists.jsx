"use client"
import React, {useState} from 'react';
import {LuCopy} from "react-icons/lu";
import {Toast} from "@/components/section/toast/Toast";
import CodeMirror from '@uiw/react-codemirror';

const CompareTwoLists = () => {

    const [textOne, setTextOne] = useState("")
    const [textTwo, setTextTwo] = useState("")

    const onSubmit = (input) => {
        if (input === "decode") {
            setTextTwo(decodeURIComponent(textOne))
        }
        if (input === "encode") {
            setTextTwo(encodeURIComponent(textOne))
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
            <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-5">

                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-3">
                        <label className="flex flex-row gap-1" htmlFor="textOne">
                            <span>لیست اول</span>
                        </label>
                        <CodeMirror
                            value={textOne}
                            className="text-sm"
                            options={{
                                lineNumbers: true
                            }}
                            height="400px"
                            onChange={(e) => setTextOne(e.target.value)}
                            onBeforeChange={() => {}}
                        />                             </div>
                    <div className="flex flex-col gap-3">
                        <label className="flex flex-row gap-1" htmlFor="textOne">
                            <span>لیست دوم</span>
                        </label>
                        <CodeMirror
                            value={textTwo}
                            className="text-sm"
                            options={{
                                lineNumbers: true
                            }}
                            onChange={(e) => setTextTwo(e.target.value)}
                            height="400px"
                            onBeforeChange={() => {}}
                        />
                    </div>
                </div>


                <div className="flex flex-col gap-3 w-full items-center">
                    <div onClick={() => {onSubmit('encode')}} className="flex flex-row h-10 justify-center items-center p-3 w-40 rounded-xl bg-sky-400 hover:bg-sky-500 anime_hover text-gray-100 cursor-pointer ">شروع</div>
                    <div onClick={() => {onSubmit('encode')}} className="flex flex-row h-10 justify-center items-center p-3 w-40 rounded-xl bg-sky-400 hover:bg-sky-500 anime_hover text-gray-100 cursor-pointer ">شروع</div>
                    <div onClick={() => {onSubmit('encode')}} className="flex flex-row h-10 justify-center items-center p-3 w-40 rounded-xl bg-sky-400 hover:bg-sky-500 anime_hover text-gray-100 cursor-pointer ">شروع</div>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col relative gap-3">
                        <div className="flex flex-row justify-between items-center">
                            <label className="flex flex-row gap-1" htmlFor="textArea">
                                <span>تفاوت</span>
                            </label>
                            <div className={`rounded-xl cursor-pointer left-0 -top-5 text-blue-500 absolute size-10 bg-blue-200 flex items-center justify-center`}>
                                <LuCopy onClick={copyToClipboard} size={21}/>
                            </div>
                        </div>
                        <textarea dir="ltr" value={textTwo} readOnly name="" id="textArea" cols="60" rows="10" className="border border-gray-200 bg-white outline-sky-200 rounded-xl p-3 text-gray-700"></textarea>
                    </div>
                    <div className="flex flex-col relative gap-3">
                        <div className="flex flex-row justify-between items-center">
                            <label className="flex flex-row gap-1" htmlFor="textArea">
                                <span>اشتراک</span>
                            </label>
                            <div className={`rounded-xl cursor-pointer left-0 -top-5 text-blue-500 absolute size-10 bg-blue-200 flex items-center justify-center`}>
                                <LuCopy onClick={copyToClipboard} size={21}/>
                            </div>
                        </div>
                        <textarea dir="ltr" value={textTwo} readOnly name="" id="textArea" cols="60" rows="10" className="border border-gray-200 bg-white outline-sky-200 rounded-xl p-3 text-gray-700"></textarea>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default CompareTwoLists;
