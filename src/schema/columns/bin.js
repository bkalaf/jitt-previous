"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.binColumns = void 0;
const material_react_table_1 = require("material-react-table");
const col_1 = require("../defs/col");
const h = (0, material_react_table_1.createMRTColumnHelper)();
const helper = (0, col_1.col)(h);
exports.binColumns = [
    helper.PK(),
    helper.lookup()('barcode', 'Barcode', { objectType: 'bin' }),
    helper.string()('name', 'Name', undefined, { maxLength: 50, required: true }),
    helper.string()('notes', 'Notes', undefined, { maxLength: 250, required: false })
];
//# sourceMappingURL=bin.js.map