"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mercariBrandColumns = void 0;
const material_react_table_1 = require("material-react-table");
const col_1 = require("../defs/col");
const h = (0, material_react_table_1.createMRTColumnHelper)();
const helper = (0, col_1.col)(h);
exports.mercariBrandColumns = [helper.PK(), helper.string()('name', 'Name', undefined, { maxLength: 125 }), helper.listOfObject()('hashTags', 'Hash Tags', 'hashTag')];
//# sourceMappingURL=mercariBrand.js.map