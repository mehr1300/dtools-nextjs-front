'use client';
import React, { useState, useEffect } from 'react';

const InstallmentPurchaseCalculator = () => {
    // حالت‌های ورودی
    const [totalAmount, setTotalAmount] = useState(10000000);
    const [downPayment, setDownPayment] = useState(2000000);
    const [months, setMonths] = useState(12);
    const [installmentsCount, setInstallmentsCount] = useState(6);
    const [interestType, setInterestType] = useState('monthly');
    const [interestRate, setInterestRate] = useState(7);
    const [serviceFee, setServiceFee] = useState(0);

    // حالت‌های نتایج
    const [totalPaid, setTotalPaid] = useState(0);
    const [totalInstallment, setTotalInstallment] = useState(0);
    const [eachInstallment, setEachInstallment] = useState(0);
    const [totalCommission, setTotalCommission] = useState(0);
    const [priceIncrease, setPriceIncrease] = useState(0);

    // تابع برای فرمت‌دهی اعداد با کاما
    const formatNumber = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    // محاسبه نتایج
    useEffect(() => {
        // محاسبه مبلغ قابل اقساط
        const financedAmount = totalAmount - downPayment;

        // محاسبه سود کل
        let totalInterest;
        if (interestType === 'monthly') {
            // سود ماهانه: نرخ سود * تعداد ماه‌ها
            totalInterest = financedAmount * (interestRate / 100) * months;
        } else {
            // سود سالانه: نرخ سود * (تعداد ماه‌ها / 12)
            totalInterest = financedAmount * (interestRate / 100) * (months / 12);
        }

        // محاسبه مبلغ کل اقساط
        const totalInstallmentAmount = financedAmount + totalInterest;

        // محاسبه هر قسط
        const installmentAmount = totalInstallmentAmount / installmentsCount;

        // محاسبه مبلغ کل پرداختی
        const finalTotalPaid = downPayment + serviceFee + totalInstallmentAmount;

        // محاسبه افزایش قیمت
        const increase = finalTotalPaid - totalAmount;

        // به‌روزرسانی نتایج
        setEachInstallment(installmentAmount);
        setTotalCommission(totalInterest);
        setTotalInstallment(totalInstallmentAmount);
        setTotalPaid(finalTotalPaid);
        setPriceIncrease(increase);

    }, [totalAmount, downPayment, months, installmentsCount, interestType, interestRate, serviceFee]);

    // مدیریت تغییرات ورودی‌ها
    const handleTotalAmountChange = (e) => {
        const value = e.target.value.replace(/,/g, '');
        if (!isNaN(value)) {
            setTotalAmount(Number(value));
        }
    };

    const handleDownPaymentChange = (e) => {
        const value = e.target.value.replace(/,/g, '');
        if (!isNaN(value)) {
            setDownPayment(Number(value));
        }
    };

    const handleServiceFeeChange = (e) => {
        const value = e.target.value.replace(/,/g, '');
        if (!isNaN(value)) {
            setServiceFee(Number(value));
        }
    };

    // تغییر نوع سود و تنظیم مقدار پیش‌فرض
    const handleInterestTypeChange = (type) => {
        setInterestType(type);
        if (type === 'monthly') {
            setInterestRate(7);
        } else {
            setInterestRate(24);
        }
    };

    return (
        <div className=" py-8 px-4 sm:px-6">
            <div className="max-w-5xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">


                        <div className="space-y-6">
                            <div className="bg-sky-50 p-5 rounded-xl border border-sky-200">
                                <h2 className="text-xl font-bold text-sky-800 mb-4 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    اطلاعات سفارش
                                </h2>

                                <div className="mb-4">
                                    <label className="block text-sky-800 font-medium mb-2">
                                        مبلغ کل سفارش (تومان)
                                    </label>
                                    <div className="relative">
                                        <input type="text" value={formatNumber(totalAmount)} onChange={handleTotalAmountChange}
                                            className="w-full px-4 py-3 border border-sky-300 rounded-xl outline-sky-400"
                                        />
                                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sky-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sky-800 font-medium mb-2">
                                        مبلغ پیش‌پرداخت (تومان)
                                    </label>
                                    <div className="relative">
                                        <input type="text" value={formatNumber(downPayment)} onChange={handleDownPaymentChange}
                                            className="w-full px-4 py-3 border border-sky-300 rounded-xl outline-sky-400"
                                        />
                                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sky-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sky-800 font-medium mb-2">
                                        هزینه خدمات (تومان)
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            value={formatNumber(serviceFee)}
                                            onChange={handleServiceFeeChange}
                                            className="w-full px-4 py-3 border border-sky-300 rounded-xl outline-sky-400"
                                            placeholder="مثلاً 100,000"
                                        />
                                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sky-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="text-xs text-sky-600 mt-1">
                                        هزینه‌ای که در ابتدای خرید قسطی دریافت می‌شود (در دیجی کالا و اسنپ است)
                                    </p>
                                </div>
                            </div>

                            <div className="bg-sky-50 p-5 rounded-xl border border-sky-200">
                                <h2 className="text-xl font-bold text-sky-800 mb-4 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    شرایط اقساط
                                </h2>

                                <div className="mb-4">
                                    <label className="block text-sky-800 font-medium mb-2">
                                        مدت زمان بازپرداخت (ماه)
                                        <span className="text-sky-600 ml-2">{months} ماه</span>
                                    </label>
                                    <input
                                        type="range"
                                        min="1"
                                        max="24"
                                        value={months}
                                        onChange={(e) => setMonths(Number(e.target.value))}
                                        className="w-full accent-sky-600"
                                    />
                                    <div className="flex justify-between text-xs text-sky-600 mt-1">
                                        <span>1 ماه</span>
                                        <span>24 ماه</span>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sky-800 font-medium mb-2">
                                        تعداد اقساط
                                        <span className="text-sky-600 ml-2">{installmentsCount} قسط</span>
                                    </label>
                                    <input type="range" min="1" max="24" value={installmentsCount}
                                        onChange={(e) => setInstallmentsCount(Number(e.target.value))}
                                        className="w-full accent-sky-600"
                                    />
                                    <div className="flex justify-between text-xs text-sky-600 mt-1">
                                        <span>1 قسط</span>
                                        <span>24 قسط</span>
                                    </div>
                                    <p className="text-xs text-sky-600 mt-1">
                                        مثال: در 12 ماه می‌توانید 2 چک داشته باشید (هر چک برای 6 ماه)
                                    </p>
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sky-800 font-medium mb-2">
                                        نوع سود
                                    </label>
                                    <div className="flex space-x-4">
                                        <button className={`flex-1 py-2 rounded-lg font-medium ${
                                                interestType === 'monthly'
                                                    ? 'bg-sky-600 text-white'
                                                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                                            }`}
                                            onClick={() => handleInterestTypeChange('monthly')}
                                        >
                                            سود ماهانه
                                        </button>
                                        <button className={`flex-1 py-2 rounded-lg font-medium ${
                                                interestType === 'annual'
                                                    ? 'bg-sky-600 text-white'
                                                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                                            }`}
                                            onClick={() => handleInterestTypeChange('annual')}>
                                            سود سالانه
                                        </button>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sky-800 font-medium mb-2">
                                        درصد سود ({interestType === 'monthly' ? 'ماهانه' : 'سالانه'})
                                        <span className="text-sky-600 ml-2">{interestRate}%</span>
                                    </label>
                                    <input type="range" min="0" max={interestType === 'monthly' ? 30 : 100} value={interestRate}
                                        onChange={(e) => setInterestRate(Number(e.target.value))}
                                        className="w-full accent-sky-600"
                                    />
                                    <div className="flex justify-between text-xs text-sky-600 mt-1">
                                        <span>0%</span>
                                        <span>{interestType === 'monthly' ? '30%' : '100%'}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* نتایج */}
                        <div className="bg-sky-50 rounded-2xl p-6 border border-sky-200">
                            <div className="flex items-center justify-between mb-6 pb-4 border-b border-sky-300">
                                <h2 className="text-2xl font-bold text-sky-800">نتایج محاسبه</h2>
                                <div className="bg-sky-200 rounded-full p-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sky-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="bg-white rounded-lg p-4 border border-sky-200 shadow-sm">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-sky-700">مبلغ سفارش:</span>
                                        <span className="font-medium text-lg">{formatNumber(totalAmount)} تومان</span>
                                    </div>
                                </div>

                                <div className="bg-white rounded-lg p-4 border border-sky-200 shadow-sm">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-sky-700">پیش پرداخت:</span>
                                        <span className="font-medium text-lg">{formatNumber(downPayment)} تومان</span>
                                    </div>
                                </div>

                                <div className="bg-white rounded-lg p-4 border border-sky-200 shadow-sm">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-sky-700">هزینه خدمات:</span>
                                        <span className="font-medium text-lg">{formatNumber(serviceFee)} تومان</span>
                                    </div>
                                </div>

                                <div className="bg-white rounded-lg p-4 border border-sky-200 shadow-sm">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-sky-700">مبلغ کل کارمزد (سود):</span>
                                        <span className="font-medium text-lg text-sky-700">{formatNumber(Math.round(totalCommission))} تومان</span>
                                    </div>
                                </div>

                                <div className="bg-sky-100 rounded-lg p-4 border-2 border-sky-300">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sky-800 font-bold">مبلغ هر قسط:</span>
                                        <span className="font-bold text-xl text-sky-800">{formatNumber(Math.round(eachInstallment))} تومان</span>
                                    </div>
                                </div>

                                <div className="bg-red-200 rounded-lg p-4 border-2 border-red-400">
                                    <div className="flex justify-between items-center">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-sky-800 font-bold">جمع اقساط پرداختی :</span>
                                            <span className="text-sky-700 text-xs">({installmentsCount} قسط * مبلغ هر قسط)</span>
                                        </div>
                                        <span className="font-bold text-xl text-sky-800">{formatNumber(Math.round(totalInstallment))} تومان</span>
                                    </div>
                                </div>

                                <div className="bg-sky-200 rounded-lg p-4 border-2 border-sky-400">
                                    <div className="flex justify-between items-center">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-sky-800 font-bold">جمع پرداخت در انتها:</span>
                                            <span className="text-sky-700 text-xs">پیش پرداخت + مانده + کارمزد</span>
                                        </div>
                                         <span className="font-bold text-xl text-sky-800">{formatNumber(Math.round(totalPaid))} تومان</span>
                                    </div>
                                </div>


                                <div className="mt-6 p-4 bg-sky-50 rounded-lg border border-sky-200">
                                    <h3 className="font-bold text-sky-800 mb-2">نکات :</h3>
                                    <ul className="text-sm text-sky-700 space-y-2">
                                        <div className="flex items-start gap-1">
                                            <span className="font-bold">-</span>
                                            <span>سود {interestType === 'monthly' ? 'ماهانه' : 'سالانه'}: {interestRate}%</span>
                                        </div>
                                        <div className="flex items-start gap-1">
                                            <span className="font-bold">-</span>
                                            <span>تعداد اقساط: {installmentsCount} قسط در {months} ماه</span>
                                        </div>
                                        <div className="flex items-start gap-1">
                                            <span className="font-bold">-</span>
                                            <span>هزینه خدمات فقط یکبار در ابتدا دریافت می‌شود</span>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* راهنما */}
                <div className="bg-white rounded-2xl shadow-xl p-6">
                    <h2 className="text-2xl font-bold text-sky-800 mb-5 pb-3 border-b border-sky-200">
                        راهنمای استفاده
                    </h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-lg font-bold text-sky-800 mb-2">نحوه محاسبه اقساط</h3>
                            <p className="text-sky-700">
                                این محاسبه‌گر به شما کمک می‌کند هزینه واقعی خرید اقساطی را محاسبه کنید.
                                برای استفاده کافیست اطلاعات سفارش و شرایط اقساط را وارد کنید تا محاسبات به صورت خودکار انجام شود.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold text-sky-800 mb-2">تفاوت سود ماهانه و سالانه</h3>
                            <p className="text-sky-700">
                                <span className="font-semibold">سود ماهانه</span>: نرخ سود در هر ماه اعمال می‌شود (پیش‌فرض 7%)
                                <br />
                                <span className="font-semibold">سود سالانه</span>: نرخ سود سالانه محاسبه شده و بر اساس مدت زمان اقساط محاسبه می‌شود (پیش‌فرض 24%)
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold text-sky-800 mb-2">تعداد اقساط در ماه‌ها</h3>
                            <p className="text-sky-700">
                                شما می‌توانید مدت زمان بازپرداخت و تعداد اقساط را به صورت مستقل تنظیم کنید.
                                به عنوان مثال می‌توانید برای یک خرید 12 ماهه، تنها 2 قسط داشته باشید (هر قسط برای 6 ماه).
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstallmentPurchaseCalculator;
