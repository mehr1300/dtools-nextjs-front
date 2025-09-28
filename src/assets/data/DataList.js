export const presets = [
    {
        type: 'linear',
        direction: 'br',
        colors: [
            {color: 'blue', shade: '500', stop: ''},
            {color: 'cyan', shade: '400', stop: ''},
        ],
        class: 'bg-gradient-to-br from-blue-500 to-cyan-400'
    },
    {
        type: 'linear',
        direction: 'r',
        colors: [
            {color: 'orange', shade: '500', stop: ''},
            {color: 'pink', shade: '500', stop: ''},
        ],
        class: 'bg-gradient-to-r from-orange-500 to-pink-500'
    },
    {
        type: 'linear',
        direction: 't',
        colors: [
            {color: 'emerald', shade: '500', stop: ''},
            {color: 'teal', shade: '500', stop: ''},
        ],
        class: 'bg-gradient-to-t from-emerald-500 to-teal-500'
    },
    {
        type: 'linear',
        direction: 'tl',
        colors: [
            {color: 'purple', shade: '600', stop: ''},
            {color: 'indigo', shade: '600', stop: ''},
        ],
        class: 'bg-gradient-to-tl from-purple-600 to-indigo-600'
    },
    {
        type: 'linear',
        direction: 'r',
        colors: [
            {color: 'slate', shade: '600', stop: ''},
            {color: 'gray', shade: '600', stop: ''},
        ],
        class: 'bg-gradient-to-r from-slate-600 to-gray-600'
    },
    {
        type: 'linear',
        direction: 'tr',
        colors: [
            {color: 'orange', shade: '600', stop: ''},
            {color: 'red', shade: '600', stop: ''},
        ],
        class: 'bg-gradient-to-tr from-orange-600 to-red-600'
    },
    {
        type: 'linear',
        direction: 'l',
        colors: [
            {color: 'green', shade: '400', stop: ''},
            {color: 'lime', shade: '400', stop: ''},
        ],
        class: 'bg-gradient-to-l from-green-400 to-lime-400'
    },
    {
        type: 'linear',
        direction: 'b',
        colors: [
            {color: 'sky', shade: '300', stop: ''},
            {color: 'cyan', shade: '300', stop: ''},
        ],
        class: 'bg-gradient-to-b from-sky-300 to-cyan-300'
    },
    {
        type: 'linear',
        direction: 'bl',
        colors: [
            {color: 'green', shade: '700', stop: ''},
            {color: 'emerald', shade: '700', stop: ''},
        ],
        class: 'bg-gradient-to-bl from-green-700 to-emerald-700'
    },
    {
        type: 'linear',
        direction: 'tl',
        colors: [
            {color: 'violet', shade: '800', stop: ''},
            {color: 'purple', shade: '800', stop: ''},
        ],
        class: 'bg-gradient-to-tl from-violet-800 to-purple-800'
    },
    {
        type: 'conic',
        colors: [
            {color: 'yellow', shade: '300', stop: '0'},
            {color: 'orange', shade: '500', stop: '50'},
            {color: 'red', shade: '600', stop: '100'},
        ],
        class: 'bg-[conic-gradient(var(--tw-gradient-stops))] from-yellow-300 from-0% via-orange-500 via-50% to-red-600 to-100%'
    },
    {
        type: 'conic',
        colors: [
            {color: 'red', shade: '500', stop: '0'},
            {color: 'orange', shade: '400', stop: '50'},
            {color: 'amber', shade: '300', stop: '100'},
        ],
        class: 'bg-[conic-gradient(var(--tw-gradient-stops))] from-red-500 from-0% via-orange-400 via-50% to-amber-300 to-100%'
    },
    {
        type: 'radial',
        colors: [
            {color: 'sky', shade: '400', stop: ''},
            {color: 'blue', shade: '500', stop: ''},
        ],
        class: 'bg-[radial-gradient(var(--tw-gradient-stops))] from-sky-400 to-blue-500'
    },
    {
        type: 'radial',
        colors: [
            {color: 'pink', shade: '400', stop: ''},
            {color: 'rose', shade: '400', stop: ''},
        ],
        class: 'bg-[radial-gradient(var(--tw-gradient-stops))] from-pink-400 to-rose-400'
    },
    {
        type: 'linear',
        direction: 'r',
        colors: [
            {color: 'red', shade: '500', stop: '0'},
            {color: 'orange', shade: '500', stop: '25'},
            {color: 'yellow', shade: '500', stop: '50'},
            {color: 'green', shade: '500', stop: '75'},
            {color: 'blue', shade: '500', stop: '100'},
        ],
        class: 'bg-gradient-to-r from-red-500 from-0% via-orange-500 via-25% via-yellow-500 via-50% via-green-500 via-75% to-blue-500 to-100%'
    },
    {
        type: 'linear',
        direction: 'br',
        colors: [
            {color: 'sky', shade: '300', stop: '0'},
            {color: 'cyan', shade: '300', stop: '50'},
            {color: 'teal', shade: '300', stop: '100'},
        ],
        class: 'bg-gradient-to-br from-sky-300 from-0% via-cyan-300 via-50% to-teal-300 to-100%'
    },
    {
        type: 'radial',
        colors: [
            {color: 'indigo', shade: '500', stop: ''},
            {color: 'purple', shade: '500', stop: ''},
            {color: 'pink', shade: '500', stop: ''},
        ],
        class: 'bg-[radial-gradient(var(--tw-gradient-stops))] from-indigo-500 via-purple-500 to-pink-500'
    },
    {
        type: 'linear',
        direction: 'r',
        colors: [
            {color: 'indigo', shade: '500', stop: '10'},
            {color: 'sky', shade: '500', stop: '30'},
            {color: 'emerald', shade: '500', stop: '90'},
        ],
        class: 'bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'
    },
];

export const tailwindColors = [
    {name: 'Slate', shades: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950']},
    {name: 'Gray', shades: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950']},
    {name: 'Zinc', shades: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950']},
    {name: 'Neutral', shades: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950']},
    {name: 'Stone', shades: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950']},
    {name: 'Red', shades: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950']},
    {name: 'Orange', shades: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950']},
    {name: 'Amber', shades: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950']},
    {name: 'Yellow', shades: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950']},
    {name: 'Lime', shades: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950']},
    {name: 'Green', shades: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950']},
    {name: 'Emerald', shades: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950']},
    {name: 'Teal', shades: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950']},
    {name: 'Cyan', shades: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950']},
    {name: 'Sky', shades: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950']},
    {name: 'Blue', shades: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950']},
    {name: 'Indigo', shades: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950']},
    {name: 'Violet', shades: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950']},
    {name: 'Purple', shades: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950']},
    {name: 'Fuchsia', shades: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950']},
    {name: 'Pink', shades: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950']},
    {name: 'Rose', shades: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950']},
];


export const dayList = [
    // Jalali Calendar (Persian)
    {
        id: 1,
        type: "jalali",
        month_id: 1,
        month: "فروردین - ماه اول",
        days: Array.from({length: 31}, (_, i) => i + 1)
    },
    {
        id: 2,
        type: "jalali",
        month_id: 2,
        month: "اردیبهشت - ماه دوم",
        days: Array.from({length: 31}, (_, i) => i + 1)
    },
    {
        id: 3,
        type: "jalali",
        month_id: 3,
        month: "خرداد - ماه سوم",
        days: Array.from({length: 31}, (_, i) => i + 1)
    },
    {
        id: 4,
        type: "jalali",
        month_id: 4,
        month: "تیر - ماه چهارم",
        days: Array.from({length: 31}, (_, i) => i + 1)
    },
    {
        id: 5,
        type: "jalali",
        month_id: 5,
        month: "مرداد - ماه پنجم",
        days: Array.from({length: 31}, (_, i) => i + 1)
    },
    {
        id: 6,
        type: "jalali",
        month_id: 6,
        month: "شهریور - ماه ششم",
        days: Array.from({length: 31}, (_, i) => i + 1)
    },
    {
        id: 7,
        type: "jalali",
        month_id: 7,
        month: "مهر - ماه هفتم",
        days: Array.from({length: 30}, (_, i) => i + 1)
    },
    {
        id: 8,
        type: "jalali",
        month_id: 8,
        month: "آبان - ماه هشتم",
        days: Array.from({length: 30}, (_, i) => i + 1)
    },
    {
        id: 9,
        type: "jalali",
        month_id: 9,
        month: "آذر - ماه نهم",
        days: Array.from({length: 30}, (_, i) => i + 1)
    },
    {
        id: 10,
        type: "jalali",
        month_id: 10,
        month: "دی - ماه دهم",
        days: Array.from({length: 30}, (_, i) => i + 1)
    },
    {
        id: 11,
        type: "jalali",
        month_id: 11,
        month: "بهمن - ماه یازدهم",
        days: Array.from({length: 30}, (_, i) => i + 1)
    },
    {
        id: 12,
        type: "jalali",
        month_id: 12,
        month: "اسفند - ماه دوازدهم",
        days: Array.from({length: 30}, (_, i) => i + 1) // 29 days in non-leap years, 30 in leap years
    },

    // Gregorian Calendar (Miladi)
    {
        id: 13,
        type: "gregorian",
        month_id: 1,
        month: "January - Month 1",
        days: Array.from({length: 31}, (_, i) => i + 1)
    },
    {
        id: 14,
        type: "gregorian",
        month_id: 2,
        month: "February - Month 2",
        days: Array.from({length: 28}, (_, i) => i + 1) // 28 days in non-leap years, 29 in leap years
    },
    {
        id: 15,
        type: "gregorian",
        month_id: 3,
        month: "March - Month 3",
        days: Array.from({length: 31}, (_, i) => i + 1)
    },
    {
        id: 16,
        type: "gregorian",
        month_id: 4,
        month: "April - Month 4",
        days: Array.from({length: 30}, (_, i) => i + 1)
    },
    {
        id: 17,
        type: "gregorian",
        month_id: 5,
        month: "May - Month 5",
        days: Array.from({length: 31}, (_, i) => i + 1)
    },
    {
        id: 18,
        type: "gregorian",
        month_id: 6,
        month: "June - Month 6",
        days: Array.from({length: 30}, (_, i) => i + 1)
    },
    {
        id: 19,
        type: "gregorian",
        month_id: 7,
        month: "July - Month 7",
        days: Array.from({length: 31}, (_, i) => i + 1)
    },
    {
        id: 20,
        type: "gregorian",
        month_id: 8,
        month: "August - Month 8",
        days: Array.from({length: 31}, (_, i) => i + 1)
    },
    {
        id: 21,
        type: "gregorian",
        month_id: 9,
        month: "September - Month 9",
        days: Array.from({length: 30}, (_, i) => i + 1)
    },
    {
        id: 22,
        type: "gregorian",
        month_id: 10,
        month: "October - Month 10",
        days: Array.from({length: 31}, (_, i) => i + 1)
    },
    {
        id: 23,
        type: "gregorian",
        month_id: 11,
        month: "November - Month 11",
        days: Array.from({length: 30}, (_, i) => i + 1)
    },
    {
        id: 24,
        type: "gregorian",
        month_id: 12,
        month: "December - Month 12",
        days: Array.from({length: 31}, (_, i) => i + 1)
    },

    // Hijri Calendar (Qamari)
    {
        id: 25,
        type: "hijri",
        month_id: 1,
        month: "محرم - ماه اول",
        days: Array.from({length: 30}, (_, i) => i + 1)
    },
    {
        id: 26,
        type: "hijri",
        month_id: 2,
        month: "صفر - ماه دوم",
        days: Array.from({length: 29}, (_, i) => i + 1)
    },
    {
        id: 27,
        type: "hijri",
        month_id: 3,
        month: "ربیع‌الاول - ماه سوم",
        days: Array.from({length: 30}, (_, i) => i + 1)
    },
    {
        id: 28,
        type: "hijri",
        month_id: 4,
        month: "ربیع‌الثانی - ماه چهارم",
        days: Array.from({length: 29}, (_, i) => i + 1)
    },
    {
        id: 29,
        type: "hijri",
        month_id: 5,
        month: "جمادی‌الاول - ماه پنجم",
        days: Array.from({length: 30}, (_, i) => i + 1)
    },
    {
        id: 30,
        type: "hijri",
        month_id: 6,
        month: "جمادی‌الثانی - ماه ششم",
        days: Array.from({length: 29}, (_, i) => i + 1)
    },
    {
        id: 31,
        type: "hijri",
        month_id: 7,
        month: "رجب - ماه هفتم",
        days: Array.from({length: 30}, (_, i) => i + 1)
    },
    {
        id: 32,
        type: "hijri",
        month_id: 8,
        month: "شعبان - ماه هشتم",
        days: Array.from({length: 29}, (_, i) => i + 1)
    },
    {
        id: 33,
        type: "hijri",
        month_id: 9,
        month: "رمضان - ماه نهم",
        days: Array.from({length: 30}, (_, i) => i + 1)
    },
    {
        id: 34,
        type: "hijri",
        month_id: 10,
        month: "شوال - ماه دهم",
        days: Array.from({length: 29}, (_, i) => i + 1)
    },
    {
        id: 35,
        type: "hijri",
        month_id: 11,
        month: "ذوالقعده - ماه یازدهم",
        days: Array.from({length: 30}, (_, i) => i + 1)
    },
    {
        id: 36,
        type: "hijri",
        month_id: 12,
        month: "ذوالحجه - ماه دوازدهم",
        days: Array.from({length: 30}, (_, i) => i + 1)
    }
]

export const dayListJalali = [
    // Jalali Calendar (Persian)
    {
        id: 1,
        type: "jalali",
        month_id: 1,
        month: "فروردین - ماه اول",
        days: Array.from({length: 31}, (_, i) => i + 1)
    },
    {
        id: 2,
        type: "jalali",
        month_id: 2,
        month: "اردیبهشت - ماه دوم",
        days: Array.from({length: 31}, (_, i) => i + 1)
    },
    {
        id: 3,
        type: "jalali",
        month_id: 3,
        month: "خرداد - ماه سوم",
        days: Array.from({length: 31}, (_, i) => i + 1)
    },
    {
        id: 4,
        type: "jalali",
        month_id: 4,
        month: "تیر - ماه چهارم",
        days: Array.from({length: 31}, (_, i) => i + 1)
    },
    {
        id: 5,
        type: "jalali",
        month_id: 5,
        month: "مرداد - ماه پنجم",
        days: Array.from({length: 31}, (_, i) => i + 1)
    },
    {
        id: 6,
        type: "jalali",
        month_id: 6,
        month: "شهریور - ماه ششم",
        days: Array.from({length: 31}, (_, i) => i + 1)
    },
    {
        id: 7,
        type: "jalali",
        month_id: 7,
        month: "مهر - ماه هفتم",
        days: Array.from({length: 30}, (_, i) => i + 1)
    },
    {
        id: 8,
        type: "jalali",
        month_id: 8,
        month: "آبان - ماه هشتم",
        days: Array.from({length: 30}, (_, i) => i + 1)
    },
    {
        id: 9,
        type: "jalali",
        month_id: 9,
        month: "آذر - ماه نهم",
        days: Array.from({length: 30}, (_, i) => i + 1)
    },
    {
        id: 10,
        type: "jalali",
        month_id: 10,
        month: "دی - ماه دهم",
        days: Array.from({length: 30}, (_, i) => i + 1)
    },
    {
        id: 11,
        type: "jalali",
        month_id: 11,
        month: "بهمن - ماه یازدهم",
        days: Array.from({length: 30}, (_, i) => i + 1)
    },
    {
        id: 12,
        type: "jalali",
        month_id: 12,
        month: "اسفند - ماه دوازدهم",
        days: Array.from({length: 30}, (_, i) => i + 1) // 29 days in non-leap years, 30 in leap years
    }
]
