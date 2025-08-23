"use client"
import React, {useRef, useState} from 'react';
import Barcode from 'react-barcode';

const BarcodeGenerator = () => {

    const [inputValue, setInputValue] = useState('');
    const [barcodeFormat, setBarcodeFormat] = useState('CODE128');
    const [barcodes, setBarcodes] = useState([]);
    const [error, setError] = useState('');
    const barcodeRefs = useRef([]);
    // لیست فرمت‌های معتبر با نام نمایشی
    const formats = [
        {id: 'CODE128', name: 'CODE128', pattern: /^[\x00-\x7F]+$/},
        {id: 'ITF', name: 'Interleaved 2 of 5', pattern: /^\d+$/},
        {id: 'MSI', name: 'MSI', pattern: /^\d+$/},
        {id: 'CODE39', name: 'CODE39', pattern: /^[A-Z0-9\-\. \$\/\+\%]+$/i},
        {id: 'CODE93', name: 'CODE93', pattern: /^[\x00-\x7F]+$/},
        {id: 'codabar', name: 'Codabar', pattern: /^[A-Da-d][0-9\-\$\:\.\/\+]+[A-Da-d]$/},
        {id: 'EAN13', name: 'GS1-128 (EAN13)', pattern: /^\d{12,13}$/},
    ];
    const generateBarcodes = () => {
        if (!inputValue.trim()) {
            setError('لطفا مقادیر را وارد کنید');
            return;
        }

        setError('');
        const lines = inputValue.split('\n').filter(line => line.trim() !== '');
        const newBarcodes = [];

        for (let i = 0; i < lines.length; i++) {
            const value = lines[i].trim();
            const formatObj = formats.find(f => f.id === barcodeFormat);

            // اعتبارسنجی ورودی با الگوی هر فرمت
            if (formatObj && !formatObj.pattern.test(value)) {
                setError(`مقدار "${value}" برای فرمت ${formatObj.name} معتبر نیست`);
                continue;
            }

            newBarcodes.push({
                id: i,
                value: value,
                format: barcodeFormat,
            });
        }

        // تنظیم refs برای هر بارکد
        barcodeRefs.current = newBarcodes.map((barcode, index) => barcodeRefs.current[index] ?? React.createRef());
        setBarcodes(newBarcodes);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        generateBarcodes();
    };
    // تابع برای دانلود بارکد به عنوان PNG
    const downloadBarcode = (index) => {
        if (barcodeRefs.current[index] && barcodeRefs.current[index].current) {
            const svgElement = barcodeRefs.current[index].current.querySelector('svg');
            if (!svgElement) return;

            const svgData = new XMLSerializer().serializeToString(svgElement);
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            const img = new Image();

            img.onload = () => {
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.fillStyle = 'white';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, 0, 0);

                const pngFile = canvas.toDataURL('image/png');
                const downloadLink = document.createElement('a');
                downloadLink.download = `بارکد-${barcodes[index].value}.png`;
                downloadLink.href = pngFile;
                downloadLink.click();
            };

            img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgData)));
        }
    };

    return (
        <div className="">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                    <div className="p-6 border-b border-gray-200">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-lg font-medium text-gray-800 mb-3">
                                    فرمت بارکد
                                </label>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                                    {formats.map((format) => (
                                        <div key={format.id} className={`flex items-center p-2 rounded-lg cursor-pointer border-2 ${
                                            barcodeFormat === format.id
                                                ? 'border-sky-300 bg-sky-50'
                                                : 'border-gray-200 hover:border-sky-300'
                                        }`} onClick={() => setBarcodeFormat(format.id)}>
                                            <input id={format.id} name="barcode-format" type="radio" checked={barcodeFormat === format.id} onChange={() => setBarcodeFormat(format.id)} className="h-4 w-4 text-sky-500 focus:ring-sky-500 border-gray-300"/>
                                            <label htmlFor={format.id} className="ml-2 block text-sm font-medium text-gray-700 cursor-pointer px-1"> {format.name} </label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label htmlFor="values" className="block text-lg font-medium text-gray-800 mb-2">
                                    مقادیر بارکد
                                </label>
                                <p className="text-sm text-gray-500 mb-3">
                                    هر مقدار را در یک خط جدید وارد کنید </p>
                                <textarea id="values" rows={6} value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500" placeholder="123"/>
                            </div>

                            {error && (
                                <div className="text-red-600 text-sm py-3 px-4 bg-red-50 rounded-lg border border-red-200">
                                    {error}
                                </div>
                            )}

                            <div className="flex justify-between items-center pt-2">
                                <button type="button" onClick={() => setInputValue('')} className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                                    پاک کردن
                                </button>
                                <button type="submit" className="px-6 py-3 bg-sky-400 text-white font-medium rounded-lg hover:bg-sky-500 transition-colors shadow-md">
                                    تولید بارکد
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="bg-gray-50 px-6 py-6">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold text-gray-800">
                                بارکدهای تولید شده </h2>
                            <div className="text-sm text-gray-500">
                                تعداد: {barcodes.length}
                            </div>
                        </div>

                        {barcodes.length === 0 ? (
                            <div className="text-center py-10 bg-white rounded-xl border-2 border-dashed border-gray-300">
                                <div className="flex justify-center mb-4">
                                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 flex items-center justify-center">
                                        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"></path>
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="text-lg font-medium text-gray-700 mb-2">بارکدی وجود ندارد</h3>
                                <p className="text-gray-500 max-w-md mx-auto">
                                    مقادیر خود را در کادر بالا وارد کرده و دکمه "تولید بارکد" را بزنید </p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {barcodes.map((barcode, index) => (
                                    <div key={barcode.id} className="bg-white p-5 rounded-xl shadow-md border border-gray-100">
                                        <div className="flex justify-center mb-4 p-3 bg-gray-50 rounded-lg" ref={barcodeRefs.current[index]}>
                                            <Barcode value={barcode.value} format={barcode.format} width={1.5} height={80} displayValue={true} fontOptions="600" textMargin={6} margin={8} background="transparent"/>
                                        </div>
                                        <div className="mt-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                                            <div className="bg-gray-100 rounded-lg px-3 py-2">
                                                <p className="text-sm font-mono text-gray-700 truncate">
                                                    {barcode.value}
                                                </p>
                                            </div>
                                            <button onClick={() => downloadBarcode(index)} className="flex items-center justify-center gap-1 px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors shadow-sm">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                                                </svg>
                                                دانلود
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BarcodeGenerator;
