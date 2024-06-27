"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateISBN10CheckDigit = void 0;
function calculateISBN10CheckDigit(value) {
    const chars = value.padStart(12, '0').split('');
    const multipliers = [0, 0, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2];
    let checkdigit = 0;
    for (let index = 0; index < chars.length; index++) {
        const digit = parseInt(chars[index], 10) * multipliers[index];
        checkdigit += digit;
    }
    checkdigit = 11 - (checkdigit % 11);
    return checkdigit === 10 ? 'X' : checkdigit.toFixed(0);
}
exports.calculateISBN10CheckDigit = calculateISBN10CheckDigit;
//# sourceMappingURL=calculateISBN10CheckDigit.js.map