"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.squareFootageColumns = exports.h = void 0;
const material_react_table_1 = require("material-react-table");
const col_1 = require("../defs/col");
exports.h = (0, material_react_table_1.createMRTColumnHelper)();
const helper = (0, col_1.col)(exports.h);
exports.squareFootageColumns = [helper.measure()('length', 'Length', 'ft', { min: 0 }), helper.measure()('width', 'Width', 'ft', { min: 0 })];
//# sourceMappingURL=squareFootage.js.map