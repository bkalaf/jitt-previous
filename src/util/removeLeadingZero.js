"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeLeadingZeros = void 0;
function removeLeadingZeros(num) {
    if (num.startsWith('0')) {
        return removeLeadingZeros(num.slice(1));
    }
    return num;
}
exports.removeLeadingZeros = removeLeadingZeros;
//# sourceMappingURL=removeLeadingZero.js.map