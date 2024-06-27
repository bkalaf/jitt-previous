"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeGoodsFlatwareDetails = exports.homeGoodsDinnerwareDetails = exports.homeGoodsDetails = exports.helper = exports.h = void 0;
const material_react_table_1 = require("material-react-table");
const col_1 = require("../../defs/col");
exports.h = (0, material_react_table_1.createMRTColumnHelper)();
exports.helper = (0, col_1.col)(exports.h);
exports.homeGoodsDetails = [exports.helper.string('pattern', 'Pattern', undefined)];
exports.homeGoodsDinnerwareDetails = [exports.helper.dictionary('dinnerwareInventory', 'Dinnerware List', 'piece', { enumKey: 'dinnerwareTypes' })];
exports.homeGoodsFlatwareDetails = [exports.helper.dictionary('flatwareInventory', 'Flatware List', 'int', { enumKey: 'flatwareTypes' })];
//# sourceMappingURL=homeGoodsDetails.js.map