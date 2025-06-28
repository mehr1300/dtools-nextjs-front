'use client';

import React, { useState, useEffect } from 'react';
import { Toast } from "@/components/toast/Toast";
import {presets, tailwindColors} from "@/assets/data/DataList";

const GradientGeneratorTailwind = () => {
    // Gradient types
    const gradientTypes = [
        { id: 'linear', name: 'خطی' },
        { id: 'radial', name: 'دایره‌ای' },
        { id: 'conic', name: 'مخروطی' },
    ];

    // Directions for linear gradients
    const linearDirections = [
        { id: 't', name: 'به بالا' },
        { id: 'tr', name: 'به بالا راست' },
        { id: 'r', name: 'به راست' },
        { id: 'br', name: 'به پایین راست' },
        { id: 'b', name: 'به پایین' },
        { id: 'bl', name: 'به پایین چپ' },
        { id: 'l', name: 'به چپ' },
        { id: 'tl', name: 'به بالا چپ' },
    ];


    // State
    const [gradientType, setGradientType] = useState(gradientTypes[0]);
    const [direction, setDirection] = useState(linearDirections[4]);
    const [colors, setColors] = useState([
        { color: 'blue', shade: '500', stop: '' },
        { color: 'purple', shade: '500', stop: '' },
    ]);
    const [copied, setCopied] = useState(false);
    const [gradientPreview, setGradientPreview] = useState('');

    // Add new color
    const addColor = () => {
        if (colors.length < 5) {
            setColors([...colors, { color: 'pink', shade: '500', stop: '' }]);
        }
    };

    // Remove color
    const removeColor = (index) => {
        if (colors.length > 2) {
            const newColors = [...colors];
            newColors.splice(index, 1);
            setColors(newColors);
        }
    };

    // Update color
    const updateColor = (index, property, value) => {
        const newColors = [...colors];
        newColors[index][property] = value;
        setColors(newColors);
    };

    // Generate Tailwind class
    useEffect(() => {
        const generateTailwindClass = () => {
            let classParts = [];

            // Add gradient type
            if (gradientType.id === 'linear') {
                classParts.push(`bg-gradient-to-${direction.id}`);
            } else if (gradientType.id === 'radial') {
                classParts.push('bg-[radial-gradient(var(--tw-gradient-stops))]');
            } else if (gradientType.id === 'conic') {
                classParts.push('bg-[conic-gradient(var(--tw-gradient-stops))]');
            }

            // Add color stops
            colors.forEach((c, i) => {
                let prefix = '';
                if (i === 0) prefix = 'from';
                else if (i === colors.length - 1) prefix = 'to';
                else prefix = 'via';

                classParts.push(`${prefix}-${c.color}-${c.shade}`);

                // Add stop percentage if specified
                if (c.stop) {
                    classParts.push(`${prefix}-[${c.stop}%]`);
                }
            });

            return classParts.join(' ');
        };

        setGradientPreview(generateTailwindClass());
    }, [gradientType, direction, colors]);

    // Copy to clipboard
    const handleCopy = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            Toast.success("متن با موفقیت کپی شد!");
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }).catch(() => {
            Toast.error('کپی کردن متن ناموفق بود.');
        });
    };



    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8" dir="rtl">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        تولید کننده گرادیان Tailwind CSS v4
                    </h1>
                    <p className="mt-3 text-xl text-gray-500">
                        ایجاد گرادیان‌های زیبا با رنگ‌های داخلی تیلویند
                    </p>
                </div>


                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Gradient Preview */}
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">پیش‌نمایش</h2>
                        <div
                            className={`w-full h-80 rounded-lg flex items-center justify-center overflow-hidden ${gradientPreview} transition-all duration-500`}
                        >
                            <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
                                <p className="text-gray-800 font-medium">گرادیان شما</p>
                            </div>
                        </div>

                        <div className="mt-6">
                            <h3 className="text-lg font-medium text-gray-700 mb-2">کلاس Tailwind</h3>
                            <div className="flex">
                                <button
                                    onClick={() => handleCopy(gradientPreview)}
                                    className={`px-4 rounded-r-md font-medium transition-colors bg-blue-600 text-white hover:bg-blue-700 cursor-pointer`}>
                                    کپی
                                </button>
                                <div className="flex flex-row w-full bg-gray-100 p-3 rounded-l-md overflow-x-auto justify-center items-center">
                                    <code className="text-gray-800 font-mono text-sm">{gradientPreview}</code>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Gradient Controls */}
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">تنظیمات</h2>

                        {/* Gradient Type */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2">نوع گرادیان</label>
                            <div className="grid grid-cols-3 gap-2">
                                {gradientTypes.map((type) => (
                                    <button
                                        key={type.id}
                                        onClick={() => setGradientType(type)}
                                        className={`py-2 px-3 rounded-md text-sm font-medium transition-colors ${gradientType.id === type.id ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                                    >
                                        {type.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Direction (only for linear) */}
                        {gradientType.id === 'linear' && (
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">جهت</label>
                                <div className="grid grid-cols-4 gap-2">
                                    {linearDirections.map((dir) => (
                                        <button
                                            key={dir.id}
                                            onClick={() => setDirection(dir)}
                                            className={`py-2 px-3 rounded-md text-sm font-medium transition-colors ${direction.id === dir.id ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                                        >
                                            {dir.name}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Color Stops */}
                        <div className="mb-6">
                            <div className="flex justify-between items-center mb-2">
                                <label className="block text-sm font-medium text-gray-700">رنگ‌ها</label>
                                {colors.length < 5 && (
                                    <button
                                        onClick={addColor}
                                        className="text-sm font-medium text-blue-600 hover:text-blue-700"
                                    >
                                        + افزودن رنگ
                                    </button>
                                )}
                            </div>

                            <div className="space-y-4">
                                {colors.map((color, index) => (
                                    <div key={index} className="flex items-center space-x-3">
                                        <div className="flex-1 grid grid-cols-2 gap-3">
                                            {/* Color selection */}
                                            <div>
                                                <label className="block text-xs text-gray-500 mb-1">رنگ</label>
                                                <select
                                                    value={color.color}
                                                    onChange={(e) => updateColor(index, 'color', e.target.value)}
                                                    className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                                                >
                                                    {tailwindColors.map((c) => (
                                                        <option key={c.name.toLowerCase()} value={c.name.toLowerCase()}>
                                                            {c.name}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>

                                            {/* Shade selection */}
                                            <div>
                                                <label className="block text-xs text-gray-500 mb-1">سایه</label>
                                                <select
                                                    value={color.shade}
                                                    onChange={(e) => updateColor(index, 'shade', e.target.value)}
                                                    className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                                                >
                                                    {tailwindColors
                                                        .find(c => c.name.toLowerCase() === color.color)?.shades
                                                        .map((s) => (
                                                            <option key={s} value={s}>
                                                                {s}
                                                            </option>
                                                        ))}
                                                </select>
                                            </div>
                                        </div>

                                        {/* Stop percentage */}
                                        <div className="w-20">
                                            <label className="block text-xs text-gray-500 mb-1">درصد</label>
                                            <input
                                                type="text"
                                                value={color.stop}
                                                onChange={(e) => updateColor(index, 'stop', e.target.value)}
                                                placeholder="%"
                                                className="block w-full rounded-md border-gray-300 py-2 px-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                                            />
                                        </div>

                                        {/* Remove button */}
                                        {colors.length > 2 && (
                                            <button
                                                onClick={() => removeColor(index)}
                                                className="mt-5 p-2 text-gray-500 hover:text-red-500 transition-colors"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                                </svg>
                                            </button>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Presets Section */}
                <div className="mt-10 bg-white p-6 rounded-xl shadow-lg">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">نمونه ها</h2>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                        {presets.map((preset, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setGradientType(gradientTypes.find(t => t.id === preset.type) || gradientTypes[0]);
                                    if (preset.direction) {
                                        setDirection(linearDirections.find(d => d.id === preset.direction) || linearDirections[4]);
                                    }
                                    setColors(preset.colors);
                                }}
                                className="group flex flex-col items-center"
                                title={preset.class}
                            >
                                <div
                                    className={`w-full h-16 rounded-lg transition-transform group-hover:scale-105 ${preset.class}`}
                                />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GradientGeneratorTailwind;
