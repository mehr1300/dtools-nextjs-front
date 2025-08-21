'use client';
import React, { useState, useEffect } from 'react';
import {Kalameh} from "@/app/layout";

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
        <div className="max-w-screen-lg mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-3">
                    <h2 className="">
                        اطلاعات سفارش
                    </h2>
                    <div className="bg-white p-5 rounded-xl border border-gray-200">
                        <div className="mb-4">
                            <label className="">
                                مبلغ کل سفارش (تومان)
                            </label>
                            <input type="text" value={formatNumber(totalAmount)} onChange={handleTotalAmountChange} className={`${Kalameh.className} mt-2 w-full px-4 py-3 border border-gray-200 rounded-xl outline-sky-200 `}/>
                        </div>

                        <div className="mb-4">
                            <label className="">
                                مبلغ پیش‌پرداخت (تومان)
                            </label>
                            <div className="relative">
                                <input type="text" value={formatNumber(downPayment)} onChange={handleDownPaymentChange}
                                    className={` mt-2 w-full px-4 py-3 border border-gray-200 rounded-xl outline-sky-200 ${Kalameh.className}`}
                                />
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="">
                                هزینه خدمات (تومان)
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={formatNumber(serviceFee)}
                                    onChange={handleServiceFeeChange}
                                    className={`mt-2 w-full px-4 py-3 border border-gray-200 rounded-xl outline-sky-200 ${Kalameh.className}`}
                                    placeholder="مثلاً 100,000"
                                />
                            </div>
                            <p className="text-xs text-gray-400 mt-1.5">
                                هزینه‌ای که در ابتدای خرید قسطی دریافت می‌شود (مثلا در دیجی کالا یا اسنپ.)
                            </p>
                        </div>
                    </div>
                    <h2 className="mt-6">شرایط اقساط</h2>
                    <div className="bg-white p-5 rounded-xl border border-gray-200">


                        <div className="mb-6">
                            <label className="flex flex-row items-center justify-between">
                                مدت زمان بازپرداخت (ماه)
                                <span className={`text-sky-500 ml-2 ${Kalameh.className} `}> {months}  ماه</span>
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

                        <div className="mb-6">
                            <label className="flex flex-row items-center justify-between">
                                تعداد اقساط
                                <span  className={`text-sky-500 ml-2 ${Kalameh.className} `}>{installmentsCount} قسط</span>
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

                        <div className="mb-6">
                            <label className="flex flex-row items-center justify-between">
                                نوع سود
                            </label>
                            <div className="flex space-x-4">
                                <button className={`flex-1 py-2 rounded-lg font-medium ${
                                        interestType === 'monthly'
                                            ? 'bg-sky-400 text-white'
                                            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                                    }`}
                                    onClick={() => handleInterestTypeChange('monthly')}
                                >
                                    سود ماهانه
                                </button>
                                <button className={`flex-1 py-2 rounded-lg font-medium ${
                                        interestType === 'annual'
                                            ? 'bg-sky-400 text-white'
                                            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                                    }`}
                                    onClick={() => handleInterestTypeChange('annual')}>
                                    سود سالانه
                                </button>
                            </div>
                        </div>

                        <div className="mb-6">
                            <label className="flex flex-row items-center justify-between">
                                درصد سود ({interestType === 'monthly' ? 'ماهانه' : 'سالانه'})
                                <span  className={`text-sky-500 ml-2 ${Kalameh.className} `}>{interestRate}%</span>
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
                <div className="space-y-3">
                    <h2 className="">نتایج محاسبه</h2>
                    <div className="bg-white rounded-2xl p-5 border border-gray-200 space-y-6">
                        <div className="">
                            <div className="flex justify-between items-center mb-2">
                                <span className="">مبلغ سفارش:</span>
                                <span className={`${Kalameh.className}`}>{formatNumber(totalAmount)} تومان</span>
                            </div>
                        </div>

                        <div className="">
                            <div className="flex justify-between items-center mb-2">
                                <span className="">پیش پرداخت:</span>
                                <span className={`${Kalameh.className}`}>{formatNumber(downPayment)} تومان</span>
                            </div>
                        </div>

                        <div className="">
                            <div className="flex justify-between items-center mb-2">
                                <span className="">هزینه خدمات:</span>
                                <span className={`${Kalameh.className}`}>{formatNumber(serviceFee)} تومان</span>
                            </div>
                        </div>

                        <div className="">
                            <div className="flex justify-between items-center mb-2">
                                <span className="">مبلغ کل کارمزد (سود):</span>
                                <span className={`${Kalameh.className}`}>{formatNumber(Math.round(totalCommission))} تومان</span>
                            </div>
                        </div>

                        <div className="border-t pt-6 border-gray-200">
                            <div className="flex justify-between items-center">
                                <span className="text-sky-500 ">مبلغ هر قسط:</span>
                                <span className={`${Kalameh.className}`}>{formatNumber(Math.round(eachInstallment))} تومان</span>
                            </div>
                        </div>

                        <div className="flex justify-between items-center">
                            <div className="flex flex-col gap-1">
                                <span className="text-sky-500 ">جمع اقساط پرداختی :</span>
                                <span className=" text-xs">({installmentsCount} قسط * مبلغ هر قسط)</span>
                            </div>
                            <span className={`${Kalameh.className}`}>{formatNumber(Math.round(totalInstallment))} تومان</span>
                        </div>

                        <div className="flex justify-between items-center">
                            <div className="flex flex-col gap-1">
                                <span className="text-sky-500 ">جمع پرداخت در انتها:</span>
                                <span className=" text-xs">پیش پرداخت + مانده + کارمزد</span>
                            </div>
                             <span className={`${Kalameh.className}`}>{formatNumber(Math.round(totalPaid))} تومان</span>
                        </div>


                        <div className="mt-6 p-4 bg-white rounded-lg border border-gray-200">
                            <h3 className=" text-sky-500 mb-2">نکات :</h3>
                            <ul className="text-sm  space-y-2">
                                <div className="flex items-start gap-1">
                                    <span className="">-</span>
                                    <span>سود {interestType === 'monthly' ? 'ماهانه' : 'سالانه'}: {interestRate}%</span>
                                </div>
                                <div className="flex items-start gap-1">
                                    <span className="">-</span>
                                    <span>تعداد اقساط: {installmentsCount} قسط در {months} ماه</span>
                                </div>
                                <div className="flex items-start gap-1">
                                    <span className="">-</span>
                                    <span>هزینه خدمات فقط یکبار در ابتدا دریافت می‌شود.</span>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* راهنما */}
            <div className="mt-10 border-t border-gray-200 pt-6">
                <h2 className="">
                    راهنمای استفاده
                </h2>
                <ul className="space-y-4 list-disc mt-4 px-5">
                    <li>
                        <h3 className="mb-2">نحوه محاسبه اقساط</h3>
                        <span className="text-sm text-gray-500">
                            این محاسبه‌گر به شما کمک می‌کند هزینه واقعی خرید اقساطی را محاسبه کنید.
                            برای استفاده کافیست اطلاعات سفارش و شرایط اقساط را وارد کنید تا محاسبات به صورت خودکار انجام شود.
                        </span>
                    </li>

                    <li>
                        <h3 className="mb-2">تفاوت سود ماهانه و سالانه</h3>
                        <span className="text-sm text-gray-500">
                            <span className="font-semibold">سود ماهانه</span>: نرخ سود در هر ماه اعمال می‌شود (پیش‌فرض 7%)
                            <br />
                            <span className="font-semibold">سود سالانه</span>: نرخ سود سالانه محاسبه شده و بر اساس مدت زمان اقساط محاسبه می‌شود (پیش‌فرض 24%)
                        </span>
                    </li>

                    <li>
                        <h3 className="mb-2">تعداد اقساط در ماه‌ها</h3>
                        <span className="text-sm text-gray-500">
                            شما می‌توانید مدت زمان بازپرداخت و تعداد اقساط را به صورت مستقل تنظیم کنید.
                            به عنوان مثال می‌توانید برای یک خرید 12 ماهه، تنها 2 قسط داشته باشید (هر قسط برای 6 ماه).
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default InstallmentPurchaseCalculator;
