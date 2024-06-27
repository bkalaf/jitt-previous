"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selfStorageColumns = void 0;
const material_react_table_1 = require("material-react-table");
const col_1 = require("../defs/col");
const helper = (0, material_react_table_1.createMRTColumnHelper)();
const h = (0, col_1.col)(helper);
exports.selfStorageColumns = [h.PK(), h.string()('name', 'Name', undefined, { maxLength: 100, required: true }), h.string()('website', 'URL', undefined, { maxLength: 225, minLength: 5, type: 'url' })];
//# sourceMappingURL=selfStorage.js.map