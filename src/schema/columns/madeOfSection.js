"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.madeOfSectionColumns = void 0;
const material_react_table_1 = require("material-react-table");
const col_1 = require("../defs/col");
const h = (0, material_react_table_1.createMRTColumnHelper)();
const helper = (0, col_1.col)(h);
const madeOfSectionColumns = (...dependencies) => [helper.string(...dependencies)('name', 'Name', undefined, { required: true, maxLength: 40 }), helper.dictionary(...dependencies)('section', 'Section', 'double', { enumKey: 'fabric' })];
exports.madeOfSectionColumns = madeOfSectionColumns;
//# sourceMappingURL=madeOfSection.js.map