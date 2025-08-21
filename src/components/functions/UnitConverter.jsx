'use client';
import React, { useState, useEffect } from 'react';
import {Kalameh} from "@/app/layout";

const UnitConverter = () => {
    // دسته‌بندی‌های مختلف
    const categories = [
        'طول',
        'وزن',
        'حجم',
        'دما',
        'مساحت',
        'سرعت',
        'زمان',
        'ذخیره دیجیتال',
        'فشار'
    ];

    // واحدهای هر دسته‌بندی
    const units = {
        'طول': [
            { name: 'کیلومتر', factor: 1000 },
            { name: 'متر', factor: 1 },
            { name: 'سانتی‌متر', factor: 0.01 },
            { name: 'میلی‌متر', factor: 0.001 },
            { name: 'میکرومتر', factor: 0.000001 },
            { name: 'نانومتر', factor: 0.000000001 },
            { name: 'مایل', factor: 1609.34 },
            { name: 'یارد', factor: 0.9144 },
            { name: 'پا', factor: 0.3048 },
            { name: 'اینچ', factor: 0.0254 }
        ],
        'وزن': [
            { name: 'تن', factor: 1000 },
            { name: 'کیلوگرم', factor: 1 },
            { name: 'گرم', factor: 0.001 },
            { name: 'میلی‌گرم', factor: 0.000001 },
            { name: 'پوند', factor: 0.453592 },
            { name: 'اونس', factor: 0.0283495 },
            { name: 'قیراط', factor: 0.0002 }
        ],
        'حجم': [
            { name: 'متر مکعب', factor: 1000 },
            { name: 'لیتر', factor: 1 },
            { name: 'میلی‌لیتر', factor: 0.001 },
            { name: 'گالن (امپریال)', factor: 4.54609 },
            { name: 'گالن (آمریکا)', factor: 3.78541 },
            { name: 'پینت (امپریال)', factor: 0.568261 },
            { name: 'پینت (آمریکا)', factor: 0.473176 },
            { name: 'فنجان', factor: 0.24 },
            { name: 'اونس مایع (امپریال)', factor: 0.0284131 },
            { name: 'اونس مایع (آمریکا)', factor: 0.0295735 }
        ],
        'دما': [
            { name: 'سلسیوس', factor: 1, offset: 0 },
            { name: 'فارنهایت', factor: 5/9, offset: -32 },
            { name: 'کلوین', factor: 1, offset: -273.15 }
        ],
        'مساحت': [
            { name: 'کیلومتر مربع', factor: 1000000 },
            { name: 'متر مربع', factor: 1 },
            { name: 'سانتی‌متر مربع', factor: 0.0001 },
            { name: 'هکتار', factor: 10000 },
            { name: 'جریب', factor: 4046.86 },
            { name: 'مایل مربع', factor: 2589988.11 },
            { name: 'یارد مربع', factor: 0.836127 },
            { name: 'پا مربع', factor: 0.092903 },
            { name: 'اینچ مربع', factor: 0.00064516 }
        ],
        'سرعت': [
            { name: 'کیلومتر بر ساعت', factor: 1 },
            { name: 'متر بر ثانیه', factor: 3.6 },
            { name: 'مایل بر ساعت', factor: 1.60934 },
            { name: 'پا بر ثانیه', factor: 1.09728 },
            { name: 'گره (دریایی)', factor: 1.852 }
        ],
        'زمان': [
            { name: 'سال', factor: 31536000 },
            { name: 'ماه', factor: 2592000 },
            { name: 'هفته', factor: 604800 },
            { name: 'روز', factor: 86400 },
            { name: 'ساعت', factor: 3600 },
            { name: 'دقیقه', factor: 60 },
            { name: 'ثانیه', factor: 1 },
            { name: 'میلی‌ثانیه', factor: 0.001 }
        ],
        'ذخیره دیجیتال': [
            { name: 'ترابایت', factor: 1099511627776 },
            { name: 'گیگابایت', factor: 1073741824 },
            { name: 'مگابایت', factor: 1048576 },
            { name: 'کیلوبایت', factor: 1024 },
            { name: 'بایت', factor: 1 },
            { name: 'بیت', factor: 0.125 }
        ],
        'فشار': [
            { name: 'مگاپاسکال', factor: 1000000 },
            { name: 'کیلوپاسکال', factor: 1000 },
            { name: 'پاسکال', factor: 1 },
            { name: 'بار', factor: 100000 },
            { name: 'اتمسفر', factor: 101325 },
            { name: 'پوند بر اینچ مربع (psi)', factor: 6894.76 },
            { name: 'میلی‌متر جیوه', factor: 133.322 }
        ]
    };

    // حالت‌های مدیریت داده
    const [selectedCategory, setSelectedCategory] = useState('طول');
    const [fromUnit, setFromUnit] = useState(units[selectedCategory][0].name);
    const [toUnit, setToUnit] = useState(units[selectedCategory][1].name);
    const [inputValue, setInputValue] = useState('');
    const [outputValue, setOutputValue] = useState('');
    const [recentConversions, setRecentConversions] = useState([]);

    // تابع برای فرمت‌دهی اعداد بزرگ
    const formatNumber = (num) => {
        if (num === 0) return '0';
        if (Math.abs(num) < 0.000001) {
            return num.toExponential(4);
        }
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    // تابع تبدیل واحدها
    const convert = () => {
        if (inputValue === '' || isNaN(parseFloat(inputValue))) {
            setOutputValue('');
            return;
        }

        const value = parseFloat(inputValue);
        let result;

        // تبدیل دما نیاز به محاسبه خاص دارد
        if (selectedCategory === 'دما') {
            const fromTemp = units[selectedCategory].find(u => u.name === fromUnit);
            const toTemp = units[selectedCategory].find(u => u.name === toUnit);

            // ابتدا به سلسیوس تبدیل می‌کنیم
            let celsius;
            if (fromTemp.name === 'فارنهایت') {
                celsius = (value - 32) * 5/9;
            } else if (fromTemp.name === 'کلوین') {
                celsius = value - 273.15;
            } else {
                celsius = value;
            }

            // سپس به واحد مقصد تبدیل می‌کنیم
            if (toTemp.name === 'فارنهایت') {
                result = (celsius * 9/5) + 32;
            } else if (toTemp.name === 'کلوین') {
                result = celsius + 273.15;
            } else {
                result = celsius;
            }
        } else {
            // تبدیل سایر واحدها
            const fromFactor = units[selectedCategory].find(u => u.name === fromUnit).factor;
            const toFactor = units[selectedCategory].find(u => u.name === toUnit).factor;
            result = (value * fromFactor) / toFactor;
        }

        setOutputValue(formatNumber(result));

        // ذخیره تبدیل اخیر
        const conversion = {
            id: Date.now(),
            category: selectedCategory,
            from: `${value} ${fromUnit}`,
            to: `${formatNumber(result)} ${toUnit}`,
            timestamp: new Date().toLocaleTimeString()
        };

        setRecentConversions(prev => [conversion, ...prev.slice(0, 4)]);
    };

    // تغییر دسته‌بندی
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setFromUnit(units[category][0].name);
        setToUnit(units[category][1].name);
        setInputValue('');
        setOutputValue('');
    };

    // جابجایی واحدها
    const swapUnits = () => {
        setFromUnit(toUnit);
        setToUnit(fromUnit);
        setInputValue(outputValue);
        setOutputValue(inputValue);
    };

    // اعمال تبدیل هنگام تغییر مقادیر
    useEffect(() => {
        convert();
    }, [inputValue, fromUnit, toUnit, selectedCategory]);

    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="mb-8">
                <div className="">
                    {/* دسته‌بندی‌ها */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => handleCategoryChange(category)}
                                className={`px-4 py-2 rounded-lg  transition-all ${
                                    selectedCategory === category
                                        ? 'bg-sky-400 border border-sky-500 text-white cursor-pointer'
                                        : 'bg-white border border-gray-200 cursor-pointer text-gray-700 hover:bg-gray-300'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="space-y-2">
                            <label className="block ">از واحد:</label>
                            <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-200 bg-white rounded-xl outline-sky-300">
                                {units[selectedCategory].map((unit) => (
                                    <option key={unit.name} value={unit.name}>
                                        {unit.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="flex items-center justify-center">
                            <button onClick={swapUnits}
                                className="cursor-pointer p-3 bg-sky-200/70 text-sky-400 rounded-full hover:bg-sky-200 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                </svg>
                            </button>
                        </div>

                        <div className="space-y-2"><label className="block ">به واحد:</label>
                            <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-200 bg-white rounded-xl outline-sky-300">
                                {units[selectedCategory].map((unit) => (
                                    <option key={unit.name} value={unit.name}>
                                        {unit.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* فیلدهای ورودی و خروجی */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="block ">مقدار ورودی:</label>
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-200 bg-white rounded-xl outline-sky-300 text-lg"
                                placeholder="مقدار را وارد کنید"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block ">نتیجه تبدیل:</label>
                            <div className="w-full px-4 py-3 border border-gray-200 bg-white rounded-xl text-lg min-h-[56px] flex items-center">
                                {outputValue || '--'}
                            </div>
                        </div>
                    </div>

                    {/* اطلاعات تبدیل */}
                    <div className="mt-6 p-4 bg-white rounded-xl border border-gray-200">
                        <h3 className=" mb-2">اطلاعات تبدیل:</h3>
                        <p className={`text-sky-500 ${Kalameh.className}`}>
                            1 {fromUnit} = {formatNumber(
                            units[selectedCategory].find(u => u.name === fromUnit).factor /
                            units[selectedCategory].find(u => u.name === toUnit).factor
                        )} {toUnit}
                        </p>
                        <p className={`text-sky-500 ${Kalameh.className} mt-1.5 `}>
                            1 {toUnit} = {formatNumber(
                            units[selectedCategory].find(u => u.name === toUnit).factor /
                            units[selectedCategory].find(u => u.name === fromUnit).factor
                        )} {fromUnit}
                        </p>
                    </div>
                </div>
            </div>

            {/* تبدیل‌های اخیر */}
            {recentConversions.length > 0 && (
                <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
                    <h2 className="text-xl  mb-4 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        تبدیل‌های اخیر
                    </h2>
                    <div className="space-y-3">
                        {recentConversions.map((conversion) => (
                            <div key={conversion.id} className="flex items-center justify-between p-3 bg-sky-50 rounded-lg border border-sky-200">
                                <div>
                                    <span className="text-sky-700">{conversion.from}</span>
                                    <span className="mx-2 text-sky-500">→</span>
                                    <span className="text-sky-700 ">{conversion.to}</span>
                                </div>
                                <div className="text-sm text-sky-600">
                                    <span>{conversion.category}</span>
                                    <span className="mx-2">•</span>
                                    <span>{conversion.timestamp}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* راهنمای استفاده */}
            <div className="border-t flex flex-col gap-4 border-gray-200 pt-6">
                <h2 className="flex items-center text-gray-700 font-semibold">
                    راهنمای استفاده
                </h2>
                <ul className="list-disc text-gray-500 text-sm space-y-4 px-5">
                    <li>دسته‌بندی مورد نظر خود را انتخاب کنید.</li>
                    <li>واحد مبدا و مقصد را از لیست‌های کشویی انتخاب کنید.</li>
                    <li>مقداری که می‌خواهید تبدیل شود را در فیلد ورودی وارد کنید.</li>
                    <li>نتیجه به‌صورت خودکار در فیلد خروجی نمایش داده خواهد شد.</li>
                    <li>برای جابجایی واحدها می‌توانید از دکمه وسط استفاده کنید.</li>
                    <li>برای تبدیل دما، واحدهای سلسیوس، فارنهایت و کلوین پشتیبانی می‌شوند.</li>
                    <li>در تبدیل واحدهای دیجیتال، هر بایت معادل 8 بیت در نظر گرفته شده است.</li>
                    <li>آخرین تبدیل‌های شما در بخش "تبدیل‌های اخیر" ذخیره می‌شود.</li>
                    <li>برای اعداد خیلی بزرگ یا خیلی کوچک، از نماد علمی استفاده می‌شود.</li>
                </ul>
            </div>
        </div>
    );
};

export default UnitConverter;
