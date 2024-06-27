"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mercariCategoryColumns = void 0;
const material_react_table_1 = require("material-react-table");
const col_1 = require("../defs/col");
const h = (0, material_react_table_1.createMRTColumnHelper)();
const helper = (0, col_1.col)(h);
exports.mercariCategoryColumns = [
    helper.string()('name', 'Name', undefined, { maxLength: 150 }),
    helper.string()('selector', 'Selector', undefined, { maxLength: 50 }),
    helper.listOfObject()('hashTags', 'Hash Tags', 'hashTag')
];
//# sourceMappingURL=mercariCategory.js.map