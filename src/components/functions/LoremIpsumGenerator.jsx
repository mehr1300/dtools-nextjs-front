"use client";
import React, { useState } from "react";
import {LuCopy} from "react-icons/lu";
import {Toast} from "@/components/toast/Toast";

const persianWords = [
    "جهان", "زندگی", "عشق", "آزادی", "خورشید", "ماه", "ستاره", "آسمان", "زمین", "دریا",
    "کوه", "جنگل", "رود", "گل", "پرنده", "آرامش", "شادی", "امید", "آینده", "گذشته"
];
const englishWords = [
    "world", "life", "love", "freedom", "sun", "moon", "star", "sky", "earth", "sea",
    "mountain", "forest", "river", "flower", "bird", "peace", "happiness", "hope", "future", "past"
];
const arabicWords = [
    "عالم", "حياة", "حب", "حرية", "شمس", "قمر", "نجم", "سماء", "أرض", "بحر",
    "جبل", "غابة", "نهر", "زهرة", "طائر", "سلام", "سعادة", "أمل", "مستقبل", "ماضي"
];

const persianSentences = [
    "جهان پر از زیبایی‌های ناشناخته است.",
    "زندگی با امید و عشق معنا پیدا می‌کند.",
    "خورشید هر روز با طلوع خود پیام امید می‌آورد.",
    "آرامش در طبیعت و سکوت جنگل یافت می‌شود.",
    "ستارگان در آسمان شب داستان‌های بی‌پایان می‌گویند.",
    "دریا با امواج خود رازهای عمیق را فاش می‌کند.",
    "آینده در دستان کسانی است که به رویاهای خود باور دارند."
];
const englishSentences = [
    "The world is full of undiscovered beauty.",
    "Life finds meaning through hope and love.",
    "The sun brings a message of hope with every sunrise.",
    "Peace is found in the silence of the forest.",
    "Stars in the night sky tell endless stories.",
    "The sea reveals deep secrets with its waves.",
    "The future belongs to those who believe in their dreams."
];
const arabicSentences = [
    "العالم مليء بالجمال الغير مكتشف.",
    "الحياة تجد معناها من خلال الأمل والحب.",
    "الشمس تجلب رسالة أمل مع كل شروق.",
    "السلام يوجد في صمت الغابة.",
    "النجوم في سماء الليل تحكي قصصًا لا نهائية.",
    "البحر يكشف أسرارًا عميقة بأمواجه.",
    "المستقبل ينتمي لمن يؤمنون بأحلامهم."
];

const generateRandomText = (language, type, count) => {
    const words = language === "persian" ? persianWords : language === "arabic" ? arabicWords : englishWords;
    const sentences = language === "persian" ? persianSentences : language === "arabic" ? arabicSentences : englishSentences;

    const getRandomWord = () => words[Math.floor(Math.random() * words.length)];

    const getRandomSentence = () => sentences[Math.floor(Math.random() * sentences.length)];

    const getRandomParagraph = () => {
        const sentenceCount = Math.floor(Math.random() * 3) + 3; // 3 تا 5 جمله
        return Array.from({ length: sentenceCount }, getRandomSentence).join(" ");
    };


    switch (type) {
        case "word":
            return Array.from({ length: count }, getRandomWord).join(" ");
        case "sentence":
            return Array.from({ length: count }, getRandomSentence).join(" ");
        case "paragraph":
            return Array.from({ length: count }, getRandomParagraph).join("\n\n");
        default:
            return "";
    }
};

const LoremIpsumGenerator = () => {
    const [language, setLanguage] = useState("persian");
    const [type, setType] = useState("paragraph");
    const [count, setCount] = useState(5);
    const [generatedText, setGeneratedText] = useState("");

    const handleGenerate = () => {
        const text = generateRandomText(language, type, count);
        setGeneratedText(text);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(generatedText).then(() => {
            Toast.success("متن با موفقیت کپی شد!")
        }).catch((err) => {
            Toast.error('کپی کردن متن ناموفق بود.')
        });
    };

    return (
        <div className="flex flex-col gap-5 justify-center w-full items-center p-6 w-full">
            <div className="flex flex-col gap-4 w-full  ">
                <div className="flex flex-col gap-2">
                    <div className="flex flex-row">
                        <button
                            onClick={() => setLanguage("persian")}
                            className={`py-2 w-28 rounded-r-xl text-gray-100 cursor-pointer ${
                                language === "persian" ? "bg-sky-600" : "bg-sky-400 hover:bg-sky-500"
                            }`}
                        >
                            فارسی
                        </button>
                        <button
                            onClick={() => setLanguage("arabic")}
                            className={`py-2 w-28  text-gray-100 cursor-pointer ${
                                language === "arabic" ? "bg-sky-600" : "bg-sky-400 hover:bg-sky-500"
                            }`}
                        >
                            عربی
                        </button>
                        <button
                            onClick={() => setLanguage("english")}
                            className={`py-2 w-28 rounded-l-xl text-gray-100 cursor-pointer ${
                                language === "english" ? "bg-sky-600" : "bg-sky-400 hover:bg-sky-500"
                            }`}
                        >
                            انگلیسی
                        </button>
                    </div>
                </div>


               <div className="flex flex-row gap-2">
                   <div className="flex flex-col gap-2">
                       <div className="flex flex-row">
                           <button
                               onClick={() => setType("word")}
                               className={`py-2 w-28 rounded-r-xl text-gray-100 cursor-pointer ${
                                   type === "word" ? "bg-sky-600" : "bg-sky-400 hover:bg-sky-500"
                               }`}
                           >
                               کلمه
                           </button>
                           <button
                               onClick={() => setType("sentence")}
                               className={`py-2 w-28   text-gray-100 cursor-pointer ${
                                   type === "sentence" ? "bg-sky-600" : "bg-sky-400 hover:bg-sky-500"
                               }`}
                           >
                               جمله
                           </button>
                           <button
                               onClick={() => setType("paragraph")}
                               className={`py-2 w-28 rounded-l-xl text-gray-100 cursor-pointer ${
                                   type === "paragraph" ? "bg-sky-600" : "bg-sky-400 hover:bg-sky-500"
                               }`}
                           >
                               پاراگراف
                           </button>
                       </div>
                   </div>


                   <div className="flex flex-col gap-2">
                       <input
                           type="number"
                           min="1"
                           max="50"
                           value={count}
                           onChange={(e) => setCount(Math.max(1, parseInt(e.target.value) || 1))}
                           className="border border-gray-200 rounded-lg p-2"
                       />
                   </div>


                   <button onClick={handleGenerate}
                       className=" flex w-40 justify-center items-center py-2 rounded-xl bg-sky-400 hover:bg-sky-500 text-gray-100 cursor-pointer">
                       تولید متن
                   </button>
               </div>

                <div className="flex flex-col gap-2 relative">
                    <div className="flex flex-row justify-between items-center">
                        <label className="flex flex-row gap-1" htmlFor="textArea">
                            <span>متن تولید‌شده</span>
                        </label>
                        <div className={`rounded-xl cursor-pointer left-0 -top-5 text-blue-500 absolute size-10 bg-blue-200 flex items-center justify-center`}>
                            <LuCopy onClick={handleCopy} size={21}/>
                        </div>
                    </div>
                    <textarea
                        dir={language === "persian" || language === "arabic" ? "rtl" : "ltr"}
                        value={generatedText}
                        onChange={(e) => setGeneratedText(e.target.value)}
                        rows="12"
                        className="w-full border border-gray-200 rounded-lg p-3 resize-none overflow-y-auto"
                    />
                </div>
            </div>
        </div>
    );
};

export default LoremIpsumGenerator;
