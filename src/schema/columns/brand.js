"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.brandColumns = void 0;
const material_react_table_1 = require("material-react-table");
const col_1 = require("../defs/col");
const h = (0, material_react_table_1.createMRTColumnHelper)();
const helper = (0, col_1.col)(h);
exports.brandColumns = [
    helper.PK(),
    helper.string()('name', 'Name', undefined, { maxLength: 150 }),
    helper.string()('folder', 'Folder', undefined, { maxLength: 50 }),
    helper.lookup()('mercariBrand', 'Mercari Brand', { objectType: 'mercariBrand' }),
    helper.listOfObject()('hashTags', 'Hash Tags', 'hashTag'),
    helper.listOfObject()('allHashTags', 'ALL Hash Tags', 'hashTag', true)
];
//# sourceMappingURL=brand.js.map