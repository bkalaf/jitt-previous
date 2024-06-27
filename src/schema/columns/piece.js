"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pieceColumns = exports.helper = exports.h = void 0;
const material_react_table_1 = require("material-react-table");
const col_1 = require("../defs/col");
exports.h = (0, material_react_table_1.createMRTColumnHelper)();
exports.helper = (0, col_1.col)(exports.h);
exports.pieceColumns = [exports.helper.int()('count', 'Count', { min: 1, required: true }), exports.helper.enum()('shape', 'Shape', { enumKey: 'shapeTypes' })];
//# sourceMappingURL=piece.js.map