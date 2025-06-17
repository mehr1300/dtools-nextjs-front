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
