"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashTagColumns = void 0;
const material_react_table_1 = require("material-react-table");
const col_1 = require("../defs/col");
const h = (0, material_react_table_1.createMRTColumnHelper)();
const helper = (0, col_1.col)(h);
exports.hashTagColumns = [
    helper.PK(),
    helper.string()('name', 'Name', undefined, { maxLength: 150, pattern: /^[a-z0-9]{3,150}$/, minLength: 3 }),
    helper.listOfEmbed()('usage', 'Usage', 'hashTagUsage'),
    helper.date()('mostRecent', 'Most Recent', {}, false, true),
    helper.int()('maxCount', 'Max Count', { readonly: true })
];
//# sourceMappingURL=hashTag.js.map