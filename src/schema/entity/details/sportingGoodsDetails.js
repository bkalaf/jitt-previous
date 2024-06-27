"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sportingGoodsGolfClubsDetails = exports.sportingGoodsDetails = exports.helper = exports.h = void 0;
const material_react_table_1 = require("material-react-table");
const col_1 = require("../../defs/col");
exports.h = (0, material_react_table_1.createMRTColumnHelper)();
exports.helper = (0, col_1.col)(exports.h);
exports.sportingGoodsDetails = [];
exports.sportingGoodsGolfClubsDetails = [
    exports.helper.enum('gender', 'Gender', { enumKey: 'genders' }),
    exports.helper.enum('clubType', 'Club Type', { enumKey: 'clubTypes' }),
    exports.helper.enum('handOrientation', 'Orientation', { enumKey: 'handOrientations' }),
    exports.helper.enum('ironType', 'Iron Type', { enumKey: 'ironTypes' }),
    exports.helper.enum('shaftType', 'Shaft Type', { enumKey: 'shaftTypes' }),
    exports.helper.enum('material', 'Material', { enumKey: 'materials' }),
    exports.helper.enum('wedgeType', 'Wedge Type', { enumKey: 'wedgeTypes' }),
    exports.helper.measure('clubLength', 'Club Length', 'in', { min: 0 }),
    exports.helper.string('swingWeight', 'Swing Weight', undefined),
    exports.helper.measure('lie', 'Lie', '°', { min: 0 }),
    exports.helper.measure('loft', 'Loft', '°', { min: 0 })
];
//# sourceMappingURL=sportingGoodsDetails.js.map