"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.barcodeFormatter = void 0;
const is_1 = require("../common/is");
function barcodeFormatter(x) {
    const barcode = x;
    if (barcode == null)
        return '';
    const chars = is_1.is.string(barcode) ? barcode.split('') : barcode.value.split('');
    return [chars[0] === '0' ? undefined : chars[0], chars[1], chars.slice(2, 7).join(''), chars.slice(7, 12).join(''), chars[12]].filter((x) => x != null).join('-');
}
exports.barcodeFormatter = barcodeFormatter;
//# sourceMappingURL=barcodeFormatter.js.map