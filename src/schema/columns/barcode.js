"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.barcodeColumns = void 0;
const material_react_table_1 = require("material-react-table");
const barcodeFormatter_1 = require("../../util/barcodeFormatter");
const col_1 = require("../defs/col");
const barcodeTypes_1 = require("../enums/barcodeTypes");
const h = (0, material_react_table_1.createMRTColumnHelper)();
const helper = (0, col_1.col)(h);
exports.barcodeColumns = [
    helper.PK(),
    helper.string()('value', 'Value', (x) => (0, barcodeFormatter_1.barcodeFormatter)(x), { maxLength: 13, required: true }),
    helper.enum()('type', 'Type', { options: barcodeTypes_1.barcodeTypes, required: true }),
    helper.bool()('isValidated', 'Is Validated'),
    helper.bool()('beenPrinted', 'Been Printed')
];
//# sourceMappingURL=barcode.js.map