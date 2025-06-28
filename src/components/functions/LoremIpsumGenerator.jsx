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
    "جهان مملو از فرصت‌های بی‌پایان برای کشف امید و شادی است.",
    "عشق نیروی قدرتمندی است که به زندگی انسان معنا و هدف می‌بخشد.",
    "خورشید با طلوع هر روز، پیام‌آور نور و انگیزه برای ادامه‌ی راه است.",
    "طبیعت با زیبایی‌های بی‌کران خود، آرامش و تعادل را به روح انسان هدیه می‌دهد.",
    "ستارگان در آسمان شب، داستان‌های کهن و رازهای عمیق هستی را بازگو می‌کنند.",
    "دریا با امواج بی‌پایان و ژرفای خود، اسرار زندگی و طبیعت را آشکار می‌سازد.",
    "باور به رویاها و تلاش برای تحقق آن‌ها، آینده‌ای روشن و موفق را رقم می‌زند."
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
        const sentenceCount = Math.floor(Math.random() * 3) + 11; // 3 تا 5 جمله
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
        <div className="flex flex-col gap-5 justify-center w-full items-center p-6">
            <div className="flex flex-col gap-4 w-full  ">
                <div className="flex flex-col gap-2">
                    <div className="flex flex-row">
                        <button onClick={() => setLanguage("persian")} className={`py-2 w-28 rounded-r-xl cursor-pointer h-10 ${
                                language === "persian" ? "bg-sky-600 text-gray-100" : "box-border border border-sky-400 text-sky-600 hover:bg-sky-400 hover:text-sky-700"
                            }`}>
                            فارسی
                        </button>
                        <button onClick={() => setLanguage("arabic")} className={`py-2 w-28  text-gray-100 cursor-pointer h-10 ${
                                language === "arabic" ? "bg-sky-600 text-gray-100" : "box-border border border-sky-400 text-sky-600 hover:bg-sky-400 hover:text-sky-700"
                            }`}>
                            عربی
                        </button>
                        <button onClick={() => setLanguage("english")}
                            className={`py-2 w-28 rounded-l-xl text-gray-100 cursor-pointer h-10 ${
                                language === "english" ? "bg-sky-600 text-gray-100" : "box-border border border-sky-400 text-sky-600 hover:bg-sky-400 hover:text-sky-700"
                            }`}>
                            انگلیسی
                        </button>
                    </div>
                </div>


               <div className="flex flex-row gap-2">
                   <div className="flex flex-col gap-2">
                       <div className="flex flex-row">
                           <button onClick={() => setType("word")} className={`py-2 w-28 rounded-r-xl text-gray-100 cursor-pointer h-10 ${
                                   type === "word" ? "bg-sky-600 text-gray-100" : "box-border border border-sky-400 text-sky-600 hover:bg-sky-400 hover:text-sky-700"
                               }`}>
                               کلمه
                           </button>
                           <button onClick={() => setType("sentence")} className={`py-2 w-28   text-gray-100 cursor-pointer h-10 ${
                                   type === "sentence" ? "bg-sky-600 text-gray-100" : "box-border border border-sky-400 text-sky-600 hover:bg-sky-400 hover:text-sky-700"
                               }`}>
                               جمله
                           </button>
                           <button onClick={() => setType("paragraph")} className={`py-2 w-28 rounded-l-xl text-gray-100 cursor-pointer h-10 ${
                                   type === "paragraph" ? "bg-sky-600 text-gray-100" : "box-border border border-sky-400 text-sky-600 hover:bg-sky-400 hover:text-sky-700"
                               }`}>
                               پاراگراف
                           </button>
                       </div>
                   </div>


                   <div className="flex flex-col gap-2">
                       <input type="number" min="1" max="50" value={count} className=" w-40 border border-gray-200 rounded-lg p-2"
                              onChange={(e) => setCount(Math.max(1, parseInt(e.target.value) || 1))}
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
                        className="border border-gray-200 bg-white outline-sky-200 rounded-xl p-3 text-gray-700 resize-none"
                    />
                </div>
            </div>
        </div>
    );
};

export default LoremIpsumGenerator;
