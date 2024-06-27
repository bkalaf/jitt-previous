"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.includedItemColumns = exports.helper = exports.h = void 0;
const material_react_table_1 = require("material-react-table");
const col_1 = require("../defs/col");
exports.h = (0, material_react_table_1.createMRTColumnHelper)();
exports.helper = (0, col_1.col)(exports.h);
exports.includedItemColumns = [exports.helper.int()('qty', 'Quantity', { min: 1, required: true }), exports.helper.string()('name', 'Name', undefined, { maxLength: 50, required: true })];
//# sourceMappingURL=includedItem.js.map