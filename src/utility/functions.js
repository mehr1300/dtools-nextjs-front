import {cityCodes} from "@/assets/data/NationalCodeData";

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
