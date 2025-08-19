"use client"
import React, { useState, useEffect, useCallback } from 'react';
import { FaCopy, FaRedo, FaCheck, FaEye, FaEyeSlash } from 'react-icons/fa';
import {LuCopy} from "react-icons/lu";

const RandomPasswordGenerator = () => {
    // تنظیمات رمز عبور
    const [config, setConfig] = useState({
        length: 12,
        includeLowercase: true,
        includeUppercase: true,
        includeNumbers: true,
        includeSymbols: true,
        excludeConfusing: false,
        excludeAmbiguous: false,
        excludeSpecialChars: false,
        noRepeating: false,
        noSequential: false,
    });

    // رمز تولید شده و وضعیت نمایش
    const [password, setPassword] = useState('');
    const [isCopied, setIsCopied] = useState(false);
    const [strength, setStrength] = useState(0);

    // مجموعه کاراکترها
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    const confusingChars = 'iIlL1oO0';
    const ambiguousChars = '8G0OQJL17X5V';
    const specialCharsToExclude = '|{]'; // کاراکترهای جدید برای حذف

    // تولید رمز عبور بر اساس تنظیمات
    const generatePassword = useCallback(() => {
        let charset = '';

        if (config.includeLowercase) charset += lowercase;
        if (config.includeUppercase) charset += uppercase;
        if (config.includeNumbers) charset += numbers;
        if (config.includeSymbols) charset += symbols;

        // حذف کاراکترهای گیج کننده اگر فعال باشد
        if (config.excludeConfusing) {
            charset = charset.split('').filter(c => !confusingChars.includes(c)).join('');
        }

        // حذف کاراکترهای مبهم اگر فعال باشد
        if (config.excludeAmbiguous) {
            charset = charset.split('').filter(c => !ambiguousChars.includes(c)).join('');
        }

        // حذف کاراکترهای خاص اگر فعال باشد
        if (config.excludeSpecialChars) {
            charset = charset.split('').filter(c => !specialCharsToExclude.includes(c)).join('');
        }

        if (!charset) {
            setPassword('');
            return;
        }

        let generatedPassword = '';
        const charsetLength = charset.length;

        for (let i = 0; i < config.length; i++) {
            let randomChar = charset[Math.floor(Math.random() * charsetLength)];

            // بررسی عدم تکرار کاراکترها
            if (config.noRepeating && i > 0 && randomChar === generatedPassword[i - 1]) {
                i--; // تلاش مجدد
                continue;
            }

            // بررسی عدم وجود ترتیب (abc, 123 و غیره)
            if (config.noSequential && i > 0) {
                const prevChar = generatedPassword[i - 1];
                const prevIndex = charset.indexOf(prevChar);
                const currentIndex = charset.indexOf(randomChar);

                if (Math.abs(currentIndex - prevIndex) === 1) {
                    i--; // تلاش مجدد
                    continue;
                }
            }

            generatedPassword += randomChar;
        }

        setPassword(generatedPassword);
        setIsCopied(false);
    }, [config]);

    // محاسبه قدرت رمز عبور
    useEffect(() => {
        let score = 0;

        // طول رمز تا ۵۰٪ امتیاز
        score += Math.min(config.length / 20 * 50, 50);

        // تنوع کاراکترها ۵۰٪ باقیمانده
        const varietyCount = [
            config.includeLowercase,
            config.includeUppercase,
            config.includeNumbers,
            config.includeSymbols
        ].filter(Boolean).length;

        score += (varietyCount / 4) * 50;

        // جریمه برای غیرفعال کردن ویژگی های امنیتی
        if (config.excludeConfusing) score -= 5;
        if (config.excludeAmbiguous) score -= 5;
        if (config.excludeSpecialChars) score -= 5;

        setStrength(Math.max(0, Math.min(100, score)));
    }, [config, password]);

    // تولید رمز در اولین رندر و هنگام تغییر تنظیمات
    useEffect(() => {
        generatePassword();
    }, [generatePassword]);

    // کپی رمز به کلیپ‌بورد
    const copyToClipboard = () => {
        navigator.clipboard.writeText(password);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    // تغییر تنظیمات
    const handleConfigChange = (e) => {
        const { name, value, type, checked } = e.target;
        setConfig(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : Number(value)
        }));
    };

    return (
        <div className="">
            <div className="max-w-2xl mx-auto">
                <div className="p-8">
                    <div className="flex gap-2 justify-end items-center mb-3">
                        <button onClick={generatePassword}
                                className={`rounded-xl cursor-pointer left-0 -top-5 text-blue-500   size-10 bg-blue-200 flex items-center justify-center`}>
                            <FaRedo />
                        </button>
                        <div  onClick={copyToClipboard} className={`rounded-xl cursor-pointer left-0 -top-5 text-blue-500   size-10 bg-blue-200 flex items-center justify-center`}>
                            {isCopied ? <FaCheck className="text-green-500" size={21} /> : <LuCopy size={21} />}
                        </div>
                    </div>

                    {/* نمایش رمز */}
                    <div className="mb-6">
                        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                            <input
                                type="text"
                                value={password}
                                readOnly
                                className="flex-grow p-3 px-5 outline-none text-left direction-ltr"
                            />
                            <div className="flex">

                            </div>
                        </div>
                        {password && (
                            <div className="mt-2">
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div
                                        className="h-2.5 rounded-full"
                                        style={{
                                            width: `${strength}%`,
                                            backgroundColor: strength < 40 ? '#ef4444' : strength < 70 ? '#f59e0b' : '#10b981'
                                        }}
                                    ></div>
                                </div>
                                <p className="text-xs text-gray-500 mt-1">
                                    قدرت رمز: {strength < 40 ? 'ضعیف' : strength < 70 ? 'متوسط' : 'قوی'}
                                </p>
                            </div>
                        )}
                    </div>

                    {/* گزینه‌های تنظیمات */}
                    <div className="space-y-6">
                        {/* انتخاب طول رمز */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1 text-right">
                                طول رمز عبور: {config.length}
                            </label>
                            <input
                                type="range"
                                name="length"
                                min="4"
                                max="32"
                                value={config.length}
                                onChange={handleConfigChange}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                            />
                            <div className="flex justify-between text-xs text-gray-500 mt-1">
                                <span>4</span>
                                <span>32</span>
                            </div>
                        </div>

                        {/* نوع کاراکترها */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="includeLowercase"
                                    name="includeLowercase"
                                    checked={config.includeLowercase}
                                    onChange={handleConfigChange}
                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                />
                                <label htmlFor="includeLowercase" className="mr-2 block text-sm text-gray-700">
                                    حروف کوچک (a-z)
                                </label>
                            </div>

                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="includeUppercase"
                                    name="includeUppercase"
                                    checked={config.includeUppercase}
                                    onChange={handleConfigChange}
                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                />
                                <label htmlFor="includeUppercase" className="mr-2 block text-sm text-gray-700">
                                    حروف بزرگ (A-Z)
                                </label>
                            </div>

                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="includeNumbers"
                                    name="includeNumbers"
                                    checked={config.includeNumbers}
                                    onChange={handleConfigChange}
                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                />
                                <label htmlFor="includeNumbers" className="mr-2 block text-sm text-gray-700">
                                    اعداد (0-9)
                                </label>
                            </div>

                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="includeSymbols"
                                    name="includeSymbols"
                                    checked={config.includeSymbols}
                                    onChange={handleConfigChange}
                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                />
                                <label htmlFor="includeSymbols" className="mr-2 block text-sm text-gray-700">
                                    نمادها (!@#$...)
                                </label>
                            </div>
                        </div>

                        {/* گزینه‌های امنیتی */}
                        <div className="space-y-3">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="excludeConfusing"
                                    name="excludeConfusing"
                                    checked={config.excludeConfusing}
                                    onChange={handleConfigChange}
                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                />
                                <label htmlFor="excludeConfusing" className="mr-2 block text-sm text-gray-700">
                                    حذف کاراکترهای گیج‌کننده (i, l, L, 1, o, 0, O)
                                </label>
                            </div>

                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="excludeAmbiguous"
                                    name="excludeAmbiguous"
                                    checked={config.excludeAmbiguous}
                                    onChange={handleConfigChange}
                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                />
                                <label htmlFor="excludeAmbiguous" className="mr-2 block text-sm text-gray-700">
                                    حذف کاراکترهای مبهم (8, G, 0, O, Q, J, L, T, 1, 7, X, 5, V)
                                </label>
                            </div>

                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="excludeSpecialChars"
                                    name="excludeSpecialChars"
                                    checked={config.excludeSpecialChars}
                                    onChange={handleConfigChange}
                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                />
                                <label htmlFor="excludeSpecialChars" className="mr-2 block text-sm text-gray-700">
                                    حذف کاراکترهای خاص (|, &#123;, ])
                                </label>
                            </div>

                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="noRepeating"
                                    name="noRepeating"
                                    checked={config.noRepeating}
                                    onChange={handleConfigChange}
                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                />
                                <label htmlFor="noRepeating" className="mr-2 block text-sm text-gray-700">
                                    عدم تکرار کاراکترها
                                </label>
                            </div>

                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="noSequential"
                                    name="noSequential"
                                    checked={config.noSequential}
                                    onChange={handleConfigChange}
                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                />
                                <label htmlFor="noSequential" className="mr-2 block text-sm text-gray-700">
                                    عدم وجود ترتیب (abc, 123)
                                </label>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default RandomPasswordGenerator;
