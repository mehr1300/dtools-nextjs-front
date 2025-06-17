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
