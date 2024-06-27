"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseNumber = void 0;
function parseNumber(str) {
    if (typeof str === 'number')
        return str;
    if (str.includes('.')) {
        if (str.endsWith('0') || str.endsWith('.')) {
            const newStr = str.slice(0, str.length - 1);
            return parseNumber(newStr);
        }
        return parseFloat(str);
    }
    return parseInt(str, 10);
}
exports.parseNumber = parseNumber;
//# sourceMappingURL=parseNumber.js.map