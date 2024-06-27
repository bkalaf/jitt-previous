"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateUPCCheckDigit = void 0;
function calculateUPCCheckDigit(value) {
    const chars = value.padStart(12, '0').split('');
    const multipliers = [1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3];
    let checkdigit = 0;
    for (let index = 0; index < chars.length; index++) {
        const digit = parseInt(chars[index], 10) * multipliers[index];
        checkdigit += digit;
    }
    checkdigit = 10 - (checkdigit % 10);
    return checkdigit === 10 ? '0' : checkdigit.toFixed(0);
}
exports.calculateUPCCheckDigit = calculateUPCCheckDigit;
//# sourceMappingURL=calculateUPCCheckDigit.js.map