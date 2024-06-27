"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.facing = void 0;
const material_react_table_1 = require("material-react-table");
const col_1 = require("../defs/col");
const h = (0, material_react_table_1.createMRTColumnHelper)();
const helper = (0, col_1.col)(h);
exports.facing = [
    helper.radio()('x', 'Facing (x)', { enumKey: 'face-x' }),
    helper.radio()('y', 'Facing (y)', { enumKey: 'face-y' }),
    helper.radio()('z', 'Facing (z)', { enumKey: 'face-z' }),
    helper.flags()('pov', 'POVs', ['logo', 'barcode', 'inner', 'defect', 'enhancer', 'tag', 'product-info'])
];
//# sourceMappingURL=facing.js.map