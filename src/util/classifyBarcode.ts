import { calculateUPCCheckDigit } from './calculateUPCCheckDigit';
import { calculateISBN10CheckDigit } from './calculateISBN10CheckDigit';

export function classifyBarcode(value: string): [boolean, string] {
    const length = parseInt(value, 10).toFixed(0).length;
    const checkdigit = value.split('').reverse()[0];
    const code = value.split('').reverse().slice(1).reverse().join('');
    if (length <= 10) {
        const calcEAN = calculateUPCCheckDigit(code);
        if (calcEAN !== checkdigit) {
            const calcISBN = calculateISBN10CheckDigit(code);
            return calcISBN === checkdigit ? ([true, 'isbn-10'] as [boolean, string]) : ([false, 'unknown'] as [boolean, string]);
        }
    }
    const calcEAN = calculateUPCCheckDigit(code);
    if (length === 13 && (value.startsWith('978') || value.startsWith('979'))) {
        return [calcEAN === checkdigit, 'isbn-13'] as [boolean, string];
    }
    if (length === 12 && value.startsWith('4')) {
        return [calcEAN === checkdigit, value.startsWith('499999') ? 'locator' : 'sku'];
    }
    if (length === 12) {
        return [calcEAN === checkdigit, 'upc'];
    }
    return [calcEAN === checkdigit, 'ean'];
}


