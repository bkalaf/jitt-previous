"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.classifyBarcode = void 0;
const calculateUPCCheckDigit_1 = require("./calculateUPCCheckDigit");
const calculateISBN10CheckDigit_1 = require("./calculateISBN10CheckDigit");
const removeLeadingZero_1 = require("./removeLeadingZero");
function classifyBarcode(value) {
    const length = (0, removeLeadingZero_1.removeLeadingZeros)(value).length;
    const checkdigit = value.split('').reverse()[0];
    const code = value.slice(0, value.length - 1);
    // const code = value.split('').reverse().slice(1).reverse().join('');
    if (length <= 10) {
        const calcEAN = (0, calculateUPCCheckDigit_1.calculateUPCCheckDigit)(code);
        if (calcEAN !== checkdigit) {
            const calcISBN = (0, calculateISBN10CheckDigit_1.calculateISBN10CheckDigit)(code);
            return calcISBN === checkdigit ? [true, 'isbn-10'] : [false, 'unknown'];
        }
    }
    const calcEAN = (0, calculateUPCCheckDigit_1.calculateUPCCheckDigit)(code);
    if (length === 13 && (value.startsWith('978') || value.startsWith('979'))) {
        return [calcEAN === checkdigit, 'isbn-13'];
    }
    if (length === 12 && value.startsWith('4')) {
        return [calcEAN === checkdigit, value.startsWith('499999') ? 'locator' : 'sku'];
    }
    if (length === 12) {
        return [calcEAN === checkdigit, 'upc'];
    }
    return [calcEAN === checkdigit, 'ean'];
}
exports.classifyBarcode = classifyBarcode;
//# sourceMappingURL=classifyBarcode.js.map