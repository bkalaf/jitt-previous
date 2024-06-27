"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToPoundsOunces = exports.convertFromGrams = void 0;
function convertFromGrams(grams) {
    if (grams == null)
        return undefined;
    const totalPounds = grams / 453.59;
    return convertToPoundsOunces(totalPounds);
}
exports.convertFromGrams = convertFromGrams;
function convertToPoundsOunces(totalPounds) {
    if (totalPounds == null)
        return undefined;
    let pounds = parseInt(totalPounds.toString().includes('.') ? totalPounds.toString().split('.')[0] : totalPounds.toFixed(0), 10);
    let ounces = Math.ceil((totalPounds - pounds) * 16);
    if (ounces === 16) {
        pounds = pounds + 1;
        ounces = 0;
    }
    return { pounds, ounces };
}
exports.convertToPoundsOunces = convertToPoundsOunces;
//# sourceMappingURL=convertFromGrams.js.map