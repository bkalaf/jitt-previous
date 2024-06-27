"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.minMaxColumns = void 0;
const material_react_table_1 = require("material-react-table");
const col_1 = require("../defs/col");
const h = (0, material_react_table_1.createMRTColumnHelper)();
const helper = (0, col_1.col)(h);
exports.minMaxColumns = [helper.int()('min', 'Min', { min: 0 }), helper.int()('max', 'Max', { min: 0 })];
//# sourceMappingURL=minMax.js.map