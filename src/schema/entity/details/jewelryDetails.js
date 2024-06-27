"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jewelryDetails = exports.helper = exports.h = void 0;
const material_react_table_1 = require("material-react-table");
const col_1 = require("../../defs/col");
exports.h = (0, material_react_table_1.createMRTColumnHelper)();
exports.helper = (0, col_1.col)(exports.h);
exports.jewelryDetails = [
    exports.helper.measure('massInAir', 'Mass In Air', 'g', { min: 0 }),
    exports.helper.measure('massWaterDisplaced', 'Volume water displaced', 'mL', { min: 0 }),
    exports.helper.measure('density', 'Density', 'g/mL', { readonly: true }),
    exports.helper.enum('metal', 'Metal', { enumKey: 'metalTypes' })
];
//# sourceMappingURL=jewelryDetails.js.map