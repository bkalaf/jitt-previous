"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.truncateAuto = void 0;
function truncateAuto(value, precision = 4) {
    function inner(strValue) {
        if (strValue.endsWith('.'))
            return strValue.substring(0, strValue.length - 1);
        if (strValue.endsWith('0'))
            return inner(strValue.substring(0, strValue.length - 1));
        return strValue;
    }
    if (value == null)
        return '';
    const str = typeof value === 'number' ? value.toString() : value;
    const [integer, decimal] = inner(str).split('.');
    return [integer, decimal === null || decimal === void 0 ? void 0 : decimal.slice(0, precision)].filter((x) => x != null).join('.');
}
exports.truncateAuto = truncateAuto;
// console.log(truncateAuto(1.43100))
// console.log(truncateAuto("1.43100"));
// console.log(truncateAuto(1.431, 2));
// console.log(truncateAuto('1.43100', 2));
// console.log(truncateAuto(1.43993));
// console.log(truncateAuto('1.43993'));
// console.log(truncateAuto(1.43993, 2));
// console.log(truncateAuto('1.43993', 2));
// console.log(truncateAuto(101));
// console.log(truncateAuto('101'));
// console.log(truncateAuto(101, 2));
// console.log(truncateAuto('101', 2));
// console.log(truncateAuto(1));
// console.log(truncateAuto('1'));
// console.log(truncateAuto(1, 2));
// console.log(truncateAuto('1', 2));
//# sourceMappingURL=truncateAuto.js.map