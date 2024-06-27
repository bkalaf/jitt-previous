"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generalDetails = exports.helper = exports.h = void 0;
const material_react_table_1 = require("material-react-table");
const col_1 = require("../../defs/col");
exports.h = (0, material_react_table_1.createMRTColumnHelper)();
exports.helper = (0, col_1.col)(exports.h);
exports.generalDetails = [exports.helper.date('testedOn', 'Tested On', { dateType: 'past' }), exports.helper.string('itemType', 'Item Type')];
//# sourceMappingURL=generalDetails.js.map