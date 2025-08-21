'use client';
import React, {useEffect, useState} from 'react';
import {addCommas, onKeyPressHandler, removeNonNumeric} from "@/utility/functions";
import {Kalameh} from "@/app/layout";

const GoldPriceCalculator = () => {

    const [pricePerGram, setPricePerGram] = useState(0);
    const [priceInput, setPriceInput] = useState('');
    const [weight, setWeight] = useState(1);
    const [feeType, setFeeType] = useState('percent');
    const [feeValue, setFeeValue] = useState(17);
    const [feeInput, setFeeInput] = useState('17');
    const [includeFee, setIncludeFee] = useState(true);
    const [includeVAT, setIncludeVAT] = useState(true);
    const [vatRate, setVatRate] = useState(9);
    const [includeProfit, setIncludeProfit] = useState(true);
    const [profitRate, setProfitRate] = useState(7);
    const [result, setResult] = useState(null);
    // مدیریت تغییرات قیمت هر گرم
    const handlePriceChange = (e) => {
        const value = e.target.value;
        setPriceInput(value);

        // حذف کاماها و تبدیل به عدد
        const parsedValue = value.replace(/,/g, '');
        if (parsedValue === '' || parsedValue === '0') {
            setPricePerGram(0);
            return;
        }

        const num = parseInt(parsedValue, 10);
        if (!isNaN(num)) {
            setPricePerGram(num);
        }
    };
    // مدیریت تغییرات اجرت
    const handleFeeChange = (e) => {
        const value = removeNonNumeric(e.target.value);
        setFeeInput(value);

        // حذف کاماها و تبدیل به عدد
        const parsedValue = value.replace(/,/g, '');
        if (parsedValue === '' || parsedValue === '0') {
            setFeeValue(0);
            return;
        }

        const num = parseInt(parsedValue, 10);
        if (!isNaN(num)) {
            setFeeValue(num);
        }
    };
    //  قیمت
    useEffect(() => {
        if (pricePerGram > 0) {
            calculatePrice();
        }
    }, [pricePerGram, weight, feeType, feeValue, includeFee, includeVAT, vatRate, includeProfit, profitRate]);
    const calculatePrice = () => {
        //  قیمت پایه
        const basePrice = pricePerGram * weight;

        //  اجرت
        let feeAmount = 0;
        if (includeFee) {
            let rounded = 0;
            let num = 0;
            if (feeType === 'percent') {
                num = basePrice * (feeValue / 100);
            } else {
                num = feeValue * weight;
            }
            feeAmount = parseInt(num.toFixed(0))
        }

        // محاسبه سود فروشنده
        let profitAmount = 0;
        if (includeProfit) {
            const num =(basePrice + feeAmount) * (profitRate / 100);
            profitAmount = parseInt(num.toFixed(0))
        }

        // محاسبه مالیات
        let vatAmount = 0;
        if (includeVAT) {
            const num = (feeAmount + profitAmount) * (vatRate / 100);
            vatAmount = parseInt(num.toFixed(0))
        }

        // محاسبه قیمت نهایی
        const totalPrice = basePrice + feeAmount + profitAmount + vatAmount;

        setResult({
            basePrice,
            feeAmount,
            profitAmount,
            vatAmount,
            totalPrice
        });
    };
    const resetForm = () => {
        setPricePerGram(0);
        setPriceInput('');
        setWeight(1);
        setFeeType('percent');
        setFeeValue(17);
        setFeeInput('17');
        setIncludeFee(true);
        setIncludeVAT(true);
        setVatRate(9);
        setIncludeProfit(true);
        setProfitRate(7);
        setResult(null);
    };

    return (
        <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-3 gap-6">
                <div className="md:space-y-3 space-y-6">
                    <h2 className="">اطلاعات پایه</h2>
                    <div className="flex flex-col gap-3 bg-white py-6 px-4 rounded-xl border border-gray-200">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="priceInput" className="text-sm text-zinc-600">
                                قیمت هر گرم طلای خام (تومان)
                            </label>
                            <input onKeyPress = {onKeyPressHandler} id="priceInput" type="text"  value={addCommas(removeNonNumeric(priceInput))} onChange={handlePriceChange} className={`w-full px-4 py-3 border border-gray-200 rounded-xl outline-sky-300 ${Kalameh.className}`} placeholder="7,500,000"/>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="number" className="text-sm text-zinc-600">
                                وزن طلا (گرم)
                            </label>
                            <input onKeyPress = {onKeyPressHandler} id="number" type="text" value={addCommas(removeNonNumeric(weight))} onChange={(e) => setWeight(Number(removeNonNumeric(e.target.value)))} className={`w-full px-4 py-3 border border-gray-200 rounded-xl outline-sky-300 ${Kalameh.className}`} />
                        </div>
                    </div>
                    <h2 className="mt-5">تنظیمات محاسبه</h2>
                    <div className="bg-white px-4 py-8 rounded-xl border border-gray-200">

                        <div className="mb-4">
                            <div className="flex flex-row gap-1 items-center mb-3">
                                <input type="checkbox" id="includeFee" checked={includeFee} onChange={(e) => setIncludeFee(e.target.checked)} className="size-5 text-sky-500 rounded focus:ring-sky-500"/>
                                <label htmlFor="includeFee" className="ml-3 block text-gray-600 text-sm">
                                    محاسبه اجرت ساخت
                                </label>
                            </div>

                            {includeFee && (
                                <div className="ml-8 space-y-4">
                                    <div className="flex space-x-6">
                                        <div className="flex flex-row gap-1 mt-3 items-center">
                                            <input type="radio" id="percentFee" name="feeType" checked={feeType === 'percent'} onChange={() => setFeeType('percent')} className="w-5 h-5 text-sky-600"/>
                                            <label htmlFor="percentFee" className="ml-2 block text-gray-600 text-sm">
                                                درصدی
                                            </label>
                                        </div>
                                        <div className="flex flex-row gap-1 mt-3 items-center">
                                            <input type="radio" id="fixedFee" name="feeType" checked={feeType === 'fixed'} onChange={() => setFeeType('fixed')} className="w-5 h-5 text-sky-600"/>
                                            <label htmlFor="fixedFee" className="ml-2 block text-gray-600 text-sm">
                                                مبلغ ثابت
                                            </label>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-gray-600 text-sm mb-2">
                                            {feeType === 'percent' ? 'درصد اجرت' : 'اجرت هر گرم (تومان)'}
                                        </label>
                                        {feeType === 'percent' ? (
                                            <input type="text" onKeyPress = {onKeyPressHandler} value={feeValue} onChange={(e) => setFeeValue(Number(e.target.value))} className={`w-full px-4 py-3 border border-gray-200 rounded-xl outline-sky-300 ${Kalameh.className}`} min="0"/>
                                        ) : (
                                            <input type="text" onKeyPress = {onKeyPressHandler} value={addCommas(removeNonNumeric(feeInput))} onChange={handleFeeChange} className={`w-full px-4 py-3 border border-gray-200 rounded-xl outline-sky-300 ${Kalameh.className}`} placeholder="مثلاً 50,000"/>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="mb-4">
                            <div className="flex flex-row gap-1 items-center mb-3">
                                <input type="checkbox" id="includeProfit" checked={includeProfit} onChange={(e) => setIncludeProfit(e.target.checked)} className="size-5 text-sky-500 rounded focus:ring-sky-400"/>
                                <label htmlFor="includeProfit" className="ml-3 text-gray-600 text-sm">
                                    محاسبه سود فروشنده
                                </label>
                            </div>

                            {includeProfit && (
                                <div className="ml-8">
                                    <div>
                                        <label className="block text-gray-600 mb-2">
                                            درصد سود فروشنده
                                        </label>
                                        <div className="flex items-center space-x-3">
                                            <input type="range" min="0" max="30" value={profitRate} onChange={(e) => setProfitRate(Number(e.target.value))} className="w-full accent-sky-500"/>
                                            <span className={`${Kalameh.className} text-sky-800  min-w-[40px]`}>{profitRate}%</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="mb-4">
                            <div className="flex flex-row gap-1 items-center mb-3">
                                <input type="checkbox" id="includeVAT" checked={includeVAT} onChange={(e) => setIncludeVAT(e.target.checked)} className="size-5 text-sky-400 rounded focus:ring-sky-500"/>
                                <label htmlFor="includeVAT" className="ml-3 block text-gray-600 text-sm">
                                    محاسبه مالیات ارزش افزوده
                                    <span className="text-xs text-sky-600 ml-2"> (بر اجرت و سود فروشنده) </span>
                                </label>
                            </div>

                            {includeVAT && (
                                <div className="ml-8">
                                    <div>
                                        <label className="block text-gray-600 text-sm mt-5 mb-2">
                                            نرخ مالیات (درصد)
                                        </label>
                                        <input type="text" onKeyPress = {onKeyPressHandler} value={vatRate} onChange={(e) => setVatRate(Number(e.target.value))} className={`w-full px-4 py-3 border border-gray-200 rounded-xl outline-sky-300 ${Kalameh.className}`} />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex space-x-4">
                        <button onClick={resetForm} className="cursor-pointer w-full bg-white border border-gray-200 hover:bg-sky-200 text-sky-800 font-bold py-3 px-4 rounded-xl transition duration-300">
                            تنظیم مجدد
                        </button>
                        <button onClick={calculatePrice} className="cursor-pointer w-full bg-sky-400 hover:bg-sky-500 text-white font-bold py-3 px-4 rounded-xl transition duration-300">
                            محاسبه مجدد
                        </button>
                    </div>
                </div>
                <div className={`space-y-2`}>
                    <h2 className="">نتایج محاسبه</h2>
                    <div className="bg-white rounded-2xl px-5 py-6 border border-gray-200 h-full">
                        {result && pricePerGram > 0
                            ?<div className="flex flex-col gap-5">
                                <div className="">
                                    <div className="flex justify-between mb-1">
                                        <span className="">قیمت پایه طلا:</span>
                                        <span className={`${Kalameh.className}`}>{addCommas(result.basePrice)} تومان</span>
                                    </div>
                                    <div className="text-xs text-sky-600">(قیمت هر گرم × وزن)</div>
                                </div>

                                {includeFee && (
                                    <div className="">
                                        <div className="flex justify-between mb-1">
                                            <span className="flex flex-col gap-1">
                                                اجرت ساخت:
                                                <span className="text-xs text-sky-600 ml-2">({feeType === 'percent' ? `${feeValue}%` : `${addCommas(feeValue)} تومان`})</span>
                                            </span>
                                            <span className={`flex flex-row justify-center items-center gap-1 ${Kalameh.className}`}>
                                                + {addCommas(result.feeAmount)}
                                                <span className="">تومان</span>
                                            </span>
                                        </div>
                                    </div>
                                )}

                                {includeProfit && (
                                    <div className="">
                                        <div className="flex justify-between mb-1">
                                            <div>
                                                <span className="">
                                                سود فروشنده:
                                                <span className="text-xs text-sky-600 ml-2"> ({profitRate}%) </span>
                                            </span>
                                                <div className="text-xs text-sky-600">((طلا + اجرت) × {profitRate} % )</div>
                                            </div>
                                            <span className={`flex flex-row justify-center items-center gap-1 ${Kalameh.className}`}>
                                                + {addCommas(result.profitAmount)}
                                                <span className="">تومان</span>
                                            </span>
                                        </div>
                                    </div>
                                )}

                                {includeVAT && (
                                    <div className="">
                                        <div className="flex justify-between mb-1">
                                            <span className="flex flex-col ">
                                                مالیات ارزش افزوده:
                                                <span className="text-xs text-sky-600 ml-2">
                                                    (٪{vatRate} بر اجرت و سود)
                                                </span>
                                            </span>
                                            <span className={`flex flex-row justify-center items-center gap-1 ${Kalameh.className}`}>
                                                + {addCommas(result.vatAmount)}
                                                <span className="">تومان</span>
                                            </span>
                                        </div>
                                    </div>
                                )}

                                <div className="flex flex-col gap-5 pt-6 mt-4 border-t border-gray-200">
                                    <div className="flex justify-between items-center">
                                        <span className="">قیمت نهایی:</span>
                                        <span className={`text-2xl font-bold text-sky-800 ${Kalameh.className}`}>{addCommas(result.totalPrice)} تومان</span>
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-gray-200">
                                    <h3 className="text-gray-800 mb-2">نکات:</h3>
                                    <ul className="text-sm text-zinc-600 space-y-2">
                                        <div className="flex items-start gap-1">
                                            <span className="font-bold">-</span>
                                            <span>این قیمت به صورت نسبی است و احتمال بروز خطا وجود دارد.</span>
                                        </div>
                                        <div className="flex items-start gap-1">
                                            <span className="font-bold">-</span>
                                            <span>مالیات ارزش افزوده فقط بر اجرت ساخت و سود فروشنده اعمال می‌شود.</span>
                                        </div>
                                        <div className="flex items-start gap-1">
                                            <span className="font-bold">-</span>
                                            <span>سود فروشنده معمولاً بین 5% تا 30% متغیر است (پیشفرض 7%).</span>
                                        </div>
                                        <div className="flex items-start gap-1">
                                            <span className="font-bold">-</span>
                                            <span>اجرت ساخت معمولاً بین 7% تا 20% متغیر است.</span>
                                        </div>
                                        <div className="flex items-start gap-1">
                                            <span className="font-bold">-</span>
                                            <span>قیمت پایه طلای خام بدون مالیات محاسبه می‌شود.</span>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                            :<div className="flex flex-col items-center justify-center h-full text-center">
                                <p className="text-zinc-500 text-sm w-60 leading-6">قیمت هر گرم طلای خام و وزن طلای خود را وارد کنید تا محاسبات انجام شود. </p>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <h2 className="font-bold text-zinc-800 mb-5 pb-3 border-b border-gray-200">راهنمای محاسبه قیمت طلا</h2>
                <ul className="space-y-4 list-disc pr-5">
                    <li>
                        <h3 className={`font-bold text-zinc-700 ${Kalameh.className}`}>مالیات ارزش افزوده طلا در سال 1404</h3>
                        <span className="text-zinc-500 text-sm">
                            بر اساس آخرین تغییرات قانونی، مالیات ارزش افزوده طلا در سال 1404 فقط بر روی اجرت ساخت و سود فروشنده اعمال می‌شود.
                            این مالیات دیگر بر روی قیمت پایه طلای خام محاسبه نمی‌گردد. نرخ فعلی مالیات ارزش افزوده 9٪ است و توسط خریدار نهایی پرداخت می‌شود. </span>
                    </li>
                    <li>
                        <h3 className={`font-bold text-zinc-700 ${Kalameh.className}`}>سود فروشنده</h3>
                        <span className="text-zinc-500 text-sm">
                            فروشندگان طلا معمولاً درصدی (بین 5٪ تا 30٪) به عنوان سود به قیمت پایه طلا اضافه می‌کنند.
                            این سود می‌تواند بسته به فروشنده، نوع طلا و شرایط بازار متغیر باشد. در این محاسبه‌گر می‌توانید درصد سود فروشنده را تنظیم کنید یا آن را حذف نمایید. </span>
                    </li>
                    <li>
                        <h3 className={`font-bold text-zinc-700 ${Kalameh.className}`}>اجرت ساخت طلا</h3>
                        <span className="text-zinc-500 text-sm">
                            اجرت ساخت (یا کارمزد ساخت) هزینه‌ای است که برای تبدیل طلای خام به زیورآلات طلا دریافت می‌شود.
                            این مبلغ معمولاً به صورت درصدی از قیمت طلای خام محاسبه می‌شود و بسته به طرح و نوع زیورآلات می‌تواند متفاوت باشد.
                            اجرت ساخت معمولاً بین ۷٪ تا ۲۰٪ متغیر است. </span>
                    </li>
                    <li>
                        <h3 className={`font-bold text-zinc-700 ${Kalameh.className}`}>طلای بدون اجرت</h3>
                        <span className="text-zinc-500 text-sm">
                            طلای بدون اجرت معمولاً به طلای آب‌شده یا شمش طلا گفته می‌شود که اجرت ساخت ندارد.
                            در این حالت فقط قیمت طلای خام و سود فروشنده (در صورت فعال بودن) به قیمت نهایی اضافه می‌شود.
                            طلای بدون اجرت برای سرمایه‌گذاری مناسب‌تر است. </span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default GoldPriceCalculator;
