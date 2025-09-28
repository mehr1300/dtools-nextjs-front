import {cityCodes} from "@/assets/data/NationalCodeData";
import momentJalaali from 'moment-jalaali';
import momentHijri from 'moment-hijri';
import momentGregorian from 'moment';
import 'moment/locale/fa'; // برای فارسی (شمسی)
import 'moment/locale/ar'; // برای عربی (قمری)
import 'moment/locale/en-gb'; // برای انگلیسی (میلادی)


export const addCommas = num => num?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
export const removeNonNumeric = num => num?.toString()?.replace(/[^0-9]/g, "");
export const onKeyPressHandler = (e) => {
    if (!/[0-9]/.test(e.key)) {
        e.preventDefault();
    }
}



export function persianToArabic(text) {
    // Mapping of Persian characters to Arabic equivalents
    const charMap = {
        'آ': 'آ',
        'ا': 'ا',
        'ب': 'ب',
        'پ': 'ب',
        'ت': 'ت',
        'ث': 'ث',
        'ج': 'ج',
        'چ': 'ج',
        'ح': 'ح',
        'خ': 'خ',
        'د': 'د',
        'ذ': 'ذ',
        'ر': 'ر',
        'ز': 'ز',
        'ژ': 'ز',
        'س': 'س',
        'ش': 'ش',
        'ص': 'ص',
        'ض': 'ض',
        'ط': 'ط',
        'ظ': 'ظ',
        'ع': 'ع',
        'غ': 'غ',
        'ف': 'ف',
        'ق': 'ق',
        'ک': 'ك',
        'گ': 'ك',
        'ل': 'ل',
        'م': 'م',
        'ن': 'ن',
        'و': 'و',
        'ه': 'ه',
        'ی': 'ي',
        'ي': 'ي',
        'ك': 'ك',
        'ء': 'ء',
        'ۀ': 'ه',
        'ئ': 'ئ'
    };

    // Convert each character using the mapping
    return text.split('').map(char => charMap[char] || char).join('');
}
export function removeZeroWidthSpaces(text) {
    return text.replace(/[\u200B-\u200D\uFEFF]/g, ' ');
}
export function removeTatweel(text) {
    return text.replace(/[\u0640]+/g, '');
}
export function transformText(text, transformType) {
    switch (transformType) {
        case 'uppercase':
            return text.toUpperCase();
        case 'lowercase':
            return text.toLowerCase();
        case 'titlecase':
            return text.replace(/\w\S*/g, word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
        case 'snakecase':
            return text
                .replace(/([a-z])([A-Z])/g, '$1_$2')
                .replace(/\s+/g, '_')
                .toLowerCase()
                .replace(/[^a-z0-9_]/g, '');
        case 'kebabcase':
            return text
                .replace(/([a-z])([A-Z])/g, '$1-$2')
                .replace(/\s+/g, '-')
                .toLowerCase()
                .replace(/[^a-z0-9-]/g, '');
        case 'camelcase':
            return text
                .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
                    index === 0 ? word.toLowerCase() : word.toUpperCase()
                )
                .replace(/\s+/g, '')
                .replace(/[^a-zA-Z0-9]/g, '');
        case 'pascalcase':
            return text
                .replace(/(?:^\w|[A-Z]|\b\w)/g, word => word.toUpperCase())
                .replace(/\s+/g, '')
                .replace(/[^a-zA-Z0-9]/g, '');
        case 'screaming_snakecase':
            return text
                .replace(/([a-z])([A-Z])/g, '$1_$2')
                .replace(/\s+/g, '_')
                .toUpperCase()
                .replace(/[^A-Z0-9_]/g, '');
        case 'screaming_kebabcase':
            return text
                .replace(/([a-z])([A-Z])/g, '$1-$2')
                .replace(/\s+/g, '-')
                .toUpperCase()
                .replace(/[^A-Z0-9-]/g, '');
        case 'sentencecase':
            return text
                .toLowerCase()
                .replace(/(^\s*\w|[\.\!\?]\s*\w)/g, c => c.toUpperCase());
        default:
            return text;
    }
}


function getRandomProvinceCode() {
    const ranges = Object.keys(cityCodes);
    const randomRange = ranges[Math.floor(Math.random() * ranges.length)];
    if (randomRange.includes('-')) {
        const [start, end] = randomRange.split('-').map(Number);
        const code = Math.floor(Math.random() * (end - start + 1)) + start;
        return code.toString().padStart(3, '0');
    } else {
        return randomRange.padStart(3, '0');
    }
}

export function generateIranianNationalCode() {
    let provinceCode = getRandomProvinceCode();
    let middleDigits = '';
    for (let i = 0; i < 6; i++) {
        middleDigits += Math.floor(Math.random() * 10).toString();
    }
    let code = provinceCode + middleDigits;
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += parseInt(code[i]) * (10 - i);
    }
    let remainder = sum % 11;
    let controlDigit = remainder < 2 ? remainder : 11 - remainder;
    code += controlDigit.toString();
    return code;
}

export function isValidIranianNationalCode(code) {
    if (!/^\d{10}$/.test(code)) return false;
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += parseInt(code[i]) * (10 - i);
    }
    let remainder = sum % 11;
    let controlDigit = parseInt(code[9]);
    return (remainder < 2 && controlDigit === remainder) || (remainder >= 2 && controlDigit === 11 - remainder);
}

export function getProvinceAndCityFromCode(code) {
    if (!isValidIranianNationalCode(code)) {
        return { city: 'کد ملی نامعتبر', province: 'نامعتبر' };
    }
    const cityCode = parseInt(code.slice(0, 3));
    for (let range in cityCodes) {
        if (range.includes('-')) {
            const [start, end] = range.split('-').map(Number);
            if (cityCode >= start && cityCode <= end) {
                return cityCodes[range];
            }
        } else if (cityCode === parseInt(range)) {
            return cityCodes[range];
        }
    }
    return { city: 'شهر نامشخص', province: 'استان نامشخص' };
}

export const convertNumbers = (text, format) => {
    const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    const arabicNumbers = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
    const englishNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    return text.replace(/[0-9٠-٩۰-۹]/g, (match) => {
        const index = persianNumbers.indexOf(match) !== -1
            ? persianNumbers.indexOf(match)
            : arabicNumbers.indexOf(match) !== -1
                ? arabicNumbers.indexOf(match)
                : englishNumbers.indexOf(match);

        switch (format) {
            case "persian":
                return persianNumbers[index];
            case "arabic":
                return arabicNumbers[index];
            case "english":
                return englishNumbers[index];
            default:
                return match;
        }
    });
};



export function getCurrentYear(input) {
    const today = new Date();
    const gregorianYear = today.getFullYear();
    const jalaliYear = momentJalaali(today).jYear() || gregorianYear;
    const hijriYear = momentHijri(today).iYear() || gregorianYear;
    console.log(input)
    switch (input) {
        case "jalali":
            return jalaliYear.toString(); // اطمینان از بازگشت رشته
        case "gregorian":
            return gregorianYear.toString(); // اطمینان از بازگشت رشته
        case "hijri":
            return hijriYear.toString(); // اطمینان از بازگشت رشته
        default:
            throw new Error("Invalid calendar type. Use 'jalali', 'gregorian', or 'hijri'.");
    }
}



const hijriMonthsArabic = [
    'محرم', 'صفر', 'ربيع الأول', 'ربيع الثاني', 'جمادى الأولى', 'جمادى الآخرة',
    'رجب', 'شعبان', 'رمضان', 'شوال', 'ذو القعدة', 'ذو الحجة'
];

const zodiacImages = {
    'حمل': '/images/zodiac/aries.png',
    'ثور': '/images/zodiac/taurus.png',
    'جوزا': '/images/zodiac/gemini.png',
    'سرطان': '/images/zodiac/cancer.png',
    'اسد': '/images/zodiac/leo.png',
    'سنبله': '/images/zodiac/virgo.png',
    'میزان': '/images/zodiac/libra.png',
    'عقرب': '/images/zodiac/scorpio.png',
    'قوس': '/images/zodiac/sagittarius.png',
    'جدی': '/images/zodiac/capricorn.png',
    'دلو': '/images/zodiac/aquarius.png',
    'حوت': '/images/zodiac/pisces.png'
};

function getZodiacSign(month, day) {
    const zodiacs = [
        { name: 'حمل', start: { month: 3, day: 21 }, end: { month: 4, day: 19 } },
        { name: 'ثور', start: { month: 4, day: 20 }, end: { month: 5, day: 20 } },
        { name: 'جوزا', start: { month: 5, day: 21 }, end: { month: 6, day: 20 } },
        { name: 'سرطان', start: { month: 6, day: 21 }, end: { month: 7, day: 22 } },
        { name: 'اسد', start: { month: 7, day: 23 }, end: { month: 8, day: 22 } },
        { name: 'سنبله', start: { month: 8, day: 23 }, end: { month: 9, day: 22 } },
        { name: 'میزان', start: { month: 9, day: 23 }, end: { month: 10, day: 22 } },
        { name: 'عقرب', start: { month: 10, day: 23 }, end: { month: 11, day: 21 } },
        { name: 'قوس', start: { month: 11, day: 22 }, end: { month: 12, day: 21 } },
        { name: 'جدی', start: { month: 12, day: 22 }, end: { month: 1, day: 19 } },
        { name: 'دلو', start: { month: 1, day: 20 }, end: { month: 2, day: 18 } },
        { name: 'حوت', start: { month: 2, day: 19 }, end: { month: 3, day: 20 } },
    ];

    for (const zodiac of zodiacs) {
        if ((month === zodiac.start.month && day >= zodiac.start.day) ||
            (month === zodiac.end.month && day <= zodiac.end.day)) {
            return zodiac.name;
        }
    }
    return 'نامشخص';
}

export function convertDate({ type, year, month, day }) {
    if (!['jalali', 'gregorian', 'hijri'].includes(type)) {
        throw new Error("Invalid calendar type. Use 'jalali', 'gregorian', or 'hijri'.");
    }
    if (!Number.isInteger(year) || year < 1) {
       return {
           status : "failed",
           data : [],
           message : "سال ارسالی صحیح نیست.",
       }
    }
    if (!Number.isInteger(month) || month < 1 || month > 12) {
        return {
            status : "failed",
            data : [],
            message : "ماه ارسالی صحیح نیست.",
        }
    }
    if (!Number.isInteger(day) || day < 1 || day > 31) {
        return {
            status : "failed",
            data : [],
            message : "روز ارسالی صحیح نیست.",
        }
    }

    let gregorianMoment, jalaliMoment, hijriMoment;

    if (type === 'gregorian') {
        gregorianMoment = momentGregorian(`${year}-${month}-${day}`, 'YYYY-MM-DD');
        if (!gregorianMoment.isValid()) {
            return {
                status : "failed",
                data : [],
                message : "خطا در محاسبه.",
            }
        }
    } else if (type === 'jalali') {
        jalaliMoment = momentJalaali(`${year}-${month}-${day}`, 'jYYYY-jMM-jDD');
        if (!jalaliMoment.isValid()) {
            return {
                status : "failed",
                data : [],
                message : "خطا در محاسبه.",
            }
        }
        gregorianMoment = momentGregorian(jalaliMoment.toDate());
    } else if (type === 'hijri') {
        hijriMoment = momentHijri(`${year}-${month}-${day}`, 'iYYYY-iMM-iDD');
        if (!hijriMoment.isValid()) {
            return {
                status : "failed",
                data : [],
                message : "خطا در محاسبه.",
            }
        }
        gregorianMoment = momentGregorian(hijriMoment.toDate());
    }

    jalaliMoment = jalaliMoment || momentJalaali(gregorianMoment.toDate());
    hijriMoment = hijriMoment || momentHijri(gregorianMoment.toDate());
    gregorianMoment = gregorianMoment || momentGregorian(gregorianMoment.toDate());

    jalaliMoment.locale('fa');
    gregorianMoment.locale('en-gb');
    hijriMoment.locale('ar');

    const jalaliDayName = jalaliMoment.format('dddd');
    const gregorianDayName = gregorianMoment.format('dddd');
    const hijriDayName = hijriMoment.format('dddd');

    const jalaliFormatted = jalaliMoment.format('jYYYY/jMM/jDD');
    const gregorianFormatted = gregorianMoment.format('YYYY-MM-DD');
    const hijriFormatted = hijriMoment.format('iYYYY/iMM/iDD');

    // گرفتن نام ماه قمری به عربی
    const hijriMonthIndex = hijriMoment.iMonth(); // ماه از 0 تا 11
    const hijriMonthName = hijriMonthsArabic[hijriMonthIndex];

    const zodiacName = getZodiacSign(gregorianMoment.month() + 1, gregorianMoment.date());
    const zodiacImage = zodiacImages[zodiacName] || '/images/zodiac/default.png';

    return {
        status : "success",
        data : [
            {
                calendar: 'تاریخ خورشیدی',
                date: jalaliFormatted,
                fullDate: `${jalaliDayName} - ${jalaliMoment.jDate()} ${jalaliMoment.format('jMMMM')} ${jalaliMoment.jYear()}`
            },
            {
                calendar: 'تاریخ میلادی',
                date: gregorianFormatted,
                fullDate: `${gregorianDayName} - ${gregorianMoment.date()} ${gregorianMoment.format('MMMM')} ${gregorianMoment.year()}`
            },
            {
                calendar: 'تاریخ قمری',
                date: hijriFormatted,
                fullDate: `${hijriDayName} - ${hijriMoment.iDate()} ${hijriMonthName} ${hijriMoment.iYear()}`
            },
            {
                calendar: 'برج فلکی',
                date: zodiacImage, // آدرس عکس برج
                fullDate: zodiacName // نام برج (اختیاری)
            }
        ],
        message : null,
    }
}

export function calculatorAge({ year, month, day }) {
    if (!Number.isInteger(year) || year < 1) {
        return {
            status: "failed",
            data: [],
            message: "سال ارسالی صحیح نیست.",
        }
    }
    if (!Number.isInteger(month) || month < 1 || month > 12) {
        return {
            status: "failed",
            data: [],
            message: "ماه ارسالی صحیح نیست.",
        }
    }
    if (!Number.isInteger(day) || day < 1 || day > 31) {
        return {
            status: "failed",
            data: [],
            message: "روز ارسالی صحیح نیست.",
        }
    }

    const birthJalali = momentJalaali(`${year}-${month}-${day}`, 'jYYYY-jMM-jDD');
    if (!birthJalali.isValid()) {
        return {
            status: "failed",
            data: [],
            message: "خطا در محاسبه.",
        }
    }

    const nowGreg = momentGregorian('2025-09-28', 'YYYY-MM-DD');
    const nowJalali = momentJalaali(nowGreg);

    if (birthJalali.isAfter(nowJalali)) {
        return {
            status: "failed",
            data: [],
            message: "تاریخ تولد نمی‌تواند بعد از تاریخ فعلی باشد.",
        }
    }

    // محاسبه سن در سال‌های شمسی
    let ageYears = nowJalali.jYear() - birthJalali.jYear();
    const birthdayPassed = nowJalali.jMonth() > birthJalali.jMonth() ||
        (nowJalali.jMonth() === birthJalali.jMonth() && nowJalali.jDate() >= birthJalali.jDate());
    if (!birthdayPassed) {
        ageYears--;
    }

    // آخرین تولد
    const lastBirthdayYear = birthdayPassed ? nowJalali.jYear() : nowJalali.jYear() - 1;
    const lastBirthday = birthJalali.clone().jYear(lastBirthdayYear);

    // محاسبه ماه‌ها و روزها
    let temp = lastBirthday.clone();
    let ageMonths = 0;
    while (temp.clone().add(1, 'jMonth') <= nowJalali) {
        temp.add(1, 'jMonth');
        ageMonths++;
    }
    const ageDays = nowJalali.diff(temp, 'days');

    // محاسبه کل زمان‌ها
    const totalSeconds = nowGreg.diff(birthJalali, 'seconds');
    const totalMinutes = nowGreg.diff(birthJalali, 'minutes');
    const totalHours = nowGreg.diff(birthJalali, 'hours');
    const totalDays = nowGreg.diff(birthJalali, 'days');

    // روزهای باقی‌مانده تا تولد بعدی
    const nextBirthdayYear = birthdayPassed ? nowJalali.jYear() + 1 : nowJalali.jYear();
    const nextBirthday = birthJalali.clone().jYear(nextBirthdayYear);
    const daysToNext = nextBirthday.diff(nowJalali, 'days');

    return {
        status: "success",
        data: [
            {
                calendar: 'سن عادی',
                date: `${ageYears}/${ageMonths}/${ageDays}`,
                fullDate: `${ageYears} سال ${ageMonths} ماه ${ageDays} روز`
            },
            {
                calendar: 'سن به روز',
                date: totalDays.toString(),
                fullDate: `${addCommas(totalDays)} روز`
            },
            {
                calendar: 'سن به ساعت',
                date: totalHours.toString(),
                fullDate: `${addCommas(totalHours)} ساعت`
            },
            {
                calendar: 'سن به دقیقه',
                date: totalMinutes.toString(),
                fullDate: `${addCommas(totalMinutes)} دقیقه`
            },
            {
                calendar: 'سن به ثانیه',
                date: totalSeconds.toString(),
                fullDate: `${addCommas(totalSeconds)} ثانیه`
            },
            {
                calendar: 'چند روز تا تولد؟',
                date: daysToNext.toString(),
                fullDate: `${daysToNext} روز`
            }
        ],
        message: null,
    }
}
