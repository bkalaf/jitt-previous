export function parseNumber(str: string | number) {
    if (typeof str === 'number') return str;
    if (str.includes('.')) {
        if (str.endsWith('0') || str.endsWith('.')) {
            const newStr = str.slice(0, str.length - 1);
            return parseNumber(newStr);
        }
        return parseFloat(str);
    }
    return parseInt(str, 10);
}
