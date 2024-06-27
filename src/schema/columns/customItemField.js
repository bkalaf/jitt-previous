"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customItemFieldColumns = void 0;
const material_react_table_1 = require("material-react-table");
const col_1 = require("../defs/col");
const h = (0, material_react_table_1.createMRTColumnHelper)();
const helper = (0, col_1.col)(h);
exports.customItemFieldColumns = [
    helper.PK(),
    helper.string()('id', 'ID', undefined, { required: true, maxLength: 100 }),
    helper.string()('linkedType', 'Linked Type', undefined, { required: true, maxLength: 50 })
    // helper.string('value', 'Value', undefined, { required: true, maxLength: 150 })
];
//# sourceMappingURL=customItemField.js.map