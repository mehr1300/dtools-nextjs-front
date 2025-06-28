'use client';
import React, {useEffect, useState} from 'react';
import {addCommas, onKeyPressHandler, removeNonNumeric} from "@/utility/functions";

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
        <div className="min-h-screen bg-gradient-to-br  py-8 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">


                        <div className="space-y-5">
                            <div className="flex flex-col gap-3 bg-amber-50 p-4 rounded-xl border border-amber-200">
                                <h2 className="text-xl font-bold text-amber-800 mb-4">اطلاعات پایه</h2>
                                <div className="flex flex-col gap-1">
                                    <label htmlFor="priceInput" className="block text-amber-800 font-medium">
                                        قیمت هر گرم طلای خام (تومان)
                                    </label>
                                    <div className="relative">
                                        <input onKeyPress = {onKeyPressHandler} id="priceInput" type="text"  value={addCommas(removeNonNumeric(priceInput))} onChange={handlePriceChange} className="w-full px-4 py-3 border border-amber-300 rounded-xl outline-amber-300 " placeholder="7,500,000"/>
                                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-1">
                                    <label htmlFor="number" className="block text-amber-800 font-medium">
                                        وزن طلا (گرم)
                                    </label>
                                    <div className="relative">
                                        <input onKeyPress = {onKeyPressHandler} id="number" type="text" value={addCommas(removeNonNumeric(weight))} onChange={(e) => setWeight(Number(removeNonNumeric(e.target.value)))} className="w-full px-4 py-3 border border-amber-300 rounded-xl outline-amber-300" />
                                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
                                <h2 className="text-xl font-bold text-amber-800 mb-4">تنظیمات محاسبه</h2>
                                <div className="mb-4">
                                    <div className="flex flex-row gap-1 items-center mb-3">
                                        <input type="checkbox" id="includeFee" checked={includeFee} onChange={(e) => setIncludeFee(e.target.checked)} className="w-6 h-6 text-amber-600 rounded focus:ring-amber-500"/>
                                        <label htmlFor="includeFee" className="ml-3 block text-amber-800 font-medium">
                                            محاسبه اجرت ساخت
                                        </label>
                                    </div>

                                    {includeFee && (
                                        <div className="ml-8 space-y-4">
                                            <div className="flex space-x-6">
                                                <div className="flex flex-row gap-1 items-center">
                                                    <input type="radio" id="percentFee" name="feeType" checked={feeType === 'percent'} onChange={() => setFeeType('percent')} className="w-5 h-5 text-amber-600"/>
                                                    <label htmlFor="percentFee" className="ml-2 block text-amber-700 font-medium">
                                                        درصدی
                                                    </label>
                                                </div>
                                                <div className="flex flex-row gap-1 items-center">
                                                    <input type="radio" id="fixedFee" name="feeType" checked={feeType === 'fixed'} onChange={() => setFeeType('fixed')} className="w-5 h-5 text-amber-600"/>
                                                    <label htmlFor="fixedFee" className="ml-2 block text-amber-700 font-medium">
                                                        مبلغ ثابت
                                                    </label>
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-amber-700 mb-2">
                                                    {feeType === 'percent' ? 'درصد اجرت' : 'اجرت هر گرم (تومان)'}
                                                </label>
                                                {feeType === 'percent' ? (
                                                    <input type="text" onKeyPress = {onKeyPressHandler} value={feeValue} onChange={(e) => setFeeValue(Number(e.target.value))} className="w-full px-4 py-3 border border-amber-300 rounded-xl outline-amber-300" min="0"/>
                                                ) : (
                                                    <input type="text" onKeyPress = {onKeyPressHandler} value={addCommas(removeNonNumeric(feeInput))} onChange={handleFeeChange} className="w-full px-4 py-3 border border-amber-300 rounded-xl outline-amber-300" placeholder="مثلاً 50,000"/>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="mb-4">
                                    <div className="flex flex-row gap-1 items-center mb-3">
                                        <input type="checkbox" id="includeProfit" checked={includeProfit} onChange={(e) => setIncludeProfit(e.target.checked)} className="w-6 h-6 text-amber-600 rounded focus:ring-amber-500"/>
                                        <label htmlFor="includeProfit" className="ml-3 block text-amber-800 font-medium">
                                            محاسبه سود فروشنده
                                        </label>
                                    </div>

                                    {includeProfit && (
                                        <div className="ml-8">
                                            <div>
                                                <label className="block text-amber-700 mb-2">
                                                    درصد سود فروشنده
                                                </label>
                                                <div className="flex items-center space-x-3">
                                                    <input type="range" min="0" max="30" value={profitRate} onChange={(e) => setProfitRate(Number(e.target.value))} className="w-full accent-amber-600"/>
                                                    <span className="text-amber-800 font-medium min-w-[40px]">{profitRate}%</span>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="mb-4">
                                    <div className="flex flex-row gap-1 items-center mb-3">
                                        <input type="checkbox" id="includeVAT" checked={includeVAT} onChange={(e) => setIncludeVAT(e.target.checked)} className="w-6 h-6 text-amber-600 rounded focus:ring-amber-500"/>
                                        <label htmlFor="includeVAT" className="ml-3 block text-amber-800 font-medium">
                                            محاسبه مالیات ارزش افزوده
                                            <span className="text-xs text-amber-600 ml-2">(بر اجرت و سود فروشنده)</span>
                                        </label>
                                    </div>

                                    {includeVAT && (
                                        <div className="ml-8">
                                            <div>
                                                <label className="block text-amber-700 mb-2">
                                                    نرخ مالیات (درصد)
                                                </label>
                                                <input type="text" onKeyPress = {onKeyPressHandler} value={vatRate} onChange={(e) => setVatRate(Number(e.target.value))} className="w-full px-4 py-3 border border-amber-300 rounded-xl outline-amber-300" />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="flex space-x-4">
                                <button onClick={resetForm} className="cursor-pointer w-full bg-amber-100 hover:bg-amber-200 text-amber-800 font-bold py-3 px-4 rounded-xl transition duration-300">
                                    تنظیم مجدد
                                </button>
                                <button onClick={calculatePrice} className="cursor-pointer w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-4 rounded-xl transition duration-300">
                                    محاسبه مجدد
                                </button>
                            </div>
                        </div>

                        {/* نتایج */}
                        <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200 h-full">
                            <div className="flex items-center justify-between mb-6 pb-4 border-b border-amber-300">
                                <h2 className="text-2xl font-bold text-amber-800">نتایج محاسبه</h2>
                                <div className="bg-amber-200 rounded-full p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                                    </svg>
                                </div>
                            </div>

                            {result && pricePerGram > 0 ? (
                                <div className="flex flex-col gap-5">
                                    <div className="bg-white rounded-xl p-4 shadow-sm">
                                        <div className="flex justify-between mb-1">
                                            <span className="text-amber-700">قیمت پایه طلا:</span>
                                            <span className="font-medium">{addCommas(result.basePrice)} تومان</span>
                                        </div>
                                        <div className="text-xs text-amber-600">(قیمت هر گرم × وزن)</div>
                                    </div>

                                    {includeFee && (
                                        <div className="bg-white rounded-xl p-4 shadow-sm">
                                            <div className="flex justify-between mb-1">
                                                <span className="text-amber-700">
                                                    اجرت ساخت:
                                                    <span className="text-xs text-amber-600 ml-2">
                                                        ({feeType === 'percent' ? `${feeValue}%` : `${addCommas(feeValue)} تومان`})
                                                    </span>
                                                </span>
                                                <span className="flex flex-row justify-center items-center gap-1 font-medium text-amber-700 ">
                                                    + {addCommas(result.feeAmount)}
                                                    <span className="text-xs">تومان</span>
                                                </span>

                                            </div>
                                        </div>
                                    )}

                                    {includeProfit && (
                                        <div className="bg-white rounded-xl p-4 shadow-sm">
                                            <div className="flex justify-between mb-1">
                                                <div>
                                                    <span className="text-amber-700">
                                                    سود فروشنده:
                                                    <span className="text-xs text-amber-600 ml-2">({profitRate}%)</span>
                                                </span>
                                                    <div className="text-xs text-amber-600">((طلا + اجرت) × {profitRate} % )</div>
                                                </div>
                                                <span className="flex flex-row justify-center items-center gap-1 font-medium text-amber-700 ">
                                                    + {addCommas(result.profitAmount)}
                                                    <span className="text-xs">تومان</span>
                                                </span>
                                            </div>
                                        </div>
                                    )}

                                    {includeVAT && (
                                        <div className="bg-white rounded-xl p-4 shadow-sm">
                                            <div className="flex justify-between mb-1">
                                                <span className="flex flex-col text-amber-700">
                                                    مالیات ارزش افزوده:
                                                    <span className="text-xs text-amber-600 ml-2">
                                                        (٪{vatRate} بر اجرت و سود)
                                                    </span>
                                                </span>
                                                <span className="flex flex-row justify-center items-center gap-1 font-medium text-amber-700 ">
                                                    + {addCommas(result.vatAmount)}
                                                    <span className="text-xs">تومان</span>
                                                </span>
                                            </div>
                                        </div>
                                    )}

                                    <div className="flex flex-col gap-5 pt-4 mt-4 border-t-2 border-dashed border-amber-300">
                                        <div className="flex justify-between items-center">
                                            <span className="text-xl font-bold text-amber-800">قیمت نهایی:</span>
                                            <span className="text-2xl font-bold text-amber-800">{addCommas(result.totalPrice)} تومان</span>
                                        </div>
                                        <span className="text-orange-900 text-sm text-center">این قیمت به صورت نسبی است و احتمال بروز خطا وجود دارد.</span>
                                    </div>

                                    <div className="  bg-amber-200/50 p-4 rounded-xl border border-amber-300">
                                        <h3 className="font-bold text-amber-800 mb-2">نکات:</h3>
                                        <ul className="text-sm text-amber-700 space-y-2">
                                            <div className="flex items-start gap-1">
                                                <span className="font-bold">-</span>
                                                <span>مالیات ارزش افزوده فقط بر اجرت ساخت و سود فروشنده اعمال می‌شود</span>
                                            </div>
                                            <div className="flex items-start gap-1">
                                                <span className="font-bold">-</span>
                                                <span>سود فروشنده معمولاً بین 5% تا 30% متغیر است (پیشفرض 7%)</span>
                                            </div>
                                            <div className="flex items-start gap-1">
                                                <span className="font-bold">-</span>
                                                <span>اجرت ساخت معمولاً بین 7% تا 20% متغیر است</span>
                                            </div>
                                            <div className="flex items-start gap-1">
                                                <span className="font-bold">-</span>
                                                <span>قیمت پایه طلای خام بدون مالیات محاسبه می‌شود</span>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex flex-col items-center justify-center h-full py-10 text-center">
                                    <div className="bg-amber-200 rounded-full p-5 mb-5">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"/>
                                        </svg>
                                    </div>
                                    <p className="text-amber-600 text-lg font-medium mb-2">
                                        لطفاً اطلاعات طلا را وارد کنید </p>
                                    <p className="text-amber-500 max-w-xs">
                                        قیمت هر گرم طلای خام و وزن طلای خود را وارد کنید تا محاسبات انجام شود </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* توضیحات پایین صفحه */}
                <div className="mt-10 bg-white rounded-2xl shadow-xl p-6">
                    <h2 className="text-2xl font-bold text-amber-800 mb-5 pb-3 border-b border-amber-200">راهنمای محاسبه قیمت طلا</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-bold text-amber-800 mb-2">مالیات ارزش افزوده طلا در سال 1404</h3>
                            <p className="text-amber-700">
                                بر اساس آخرین تغییرات قانونی، مالیات ارزش افزوده طلا در سال 1404 فقط بر روی اجرت ساخت و سود فروشنده اعمال می‌شود.
                                این مالیات دیگر بر روی قیمت پایه طلای خام محاسبه نمی‌گردد. نرخ فعلی مالیات ارزش افزوده 9٪ است و توسط خریدار نهایی پرداخت می‌شود. </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-amber-800 mb-2">سود فروشنده</h3>
                            <p className="text-amber-700">
                                فروشندگان طلا معمولاً درصدی (بین 5٪ تا 30٪) به عنوان سود به قیمت پایه طلا اضافه می‌کنند.
                                این سود می‌تواند بسته به فروشنده، نوع طلا و شرایط بازار متغیر باشد. در این محاسبه‌گر می‌توانید درصد سود فروشنده را تنظیم کنید یا آن را حذف نمایید. </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-amber-800 mb-2">اجرت ساخت طلا</h3>
                            <p className="text-amber-700">
                                اجرت ساخت (یا کارمزد ساخت) هزینه‌ای است که برای تبدیل طلای خام به زیورآلات طلا دریافت می‌شود.
                                این مبلغ معمولاً به صورت درصدی از قیمت طلای خام محاسبه می‌شود و بسته به طرح و نوع زیورآلات می‌تواند متفاوت باشد.
                                اجرت ساخت معمولاً بین ۷٪ تا ۲۰٪ متغیر است. </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-amber-800 mb-2">طلای بدون اجرت</h3>
                            <p className="text-amber-700">
                                طلای بدون اجرت معمولاً به طلای آب‌شده یا شمش طلا گفته می‌شود که اجرت ساخت ندارد.
                                در این حالت فقط قیمت طلای خام و سود فروشنده (در صورت فعال بودن) به قیمت نهایی اضافه می‌شود.
                                طلای بدون اجرت برای سرمایه‌گذاری مناسب‌تر است. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GoldPriceCalculator;
