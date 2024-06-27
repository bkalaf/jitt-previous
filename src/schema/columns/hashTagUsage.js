"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashTagUsageColumns = void 0;
const material_react_table_1 = require("material-react-table");
const col_1 = require("../defs/col");
const h = (0, material_react_table_1.createMRTColumnHelper)();
const helper = (0, col_1.col)(h);
exports.hashTagUsageColumns = [helper.date()('from', 'From', { dateType: 'past' }, true), helper.int()('count', 'Count', { min: 0, required: true })];
//# sourceMappingURL=hashTagUsage.js.map