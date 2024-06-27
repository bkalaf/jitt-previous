"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toysDetails = exports.helper = exports.h = void 0;
const material_react_table_1 = require("material-react-table");
const col_1 = require("../../defs/col");
exports.h = (0, material_react_table_1.createMRTColumnHelper)();
exports.helper = (0, col_1.col)(exports.h);
exports.toysDetails = [
    exports.helper.int('pieceCount', 'Pieces', { min: 0 }),
    exports.helper.int('ages.min', 'Age Range (min)', { min: 0 }),
    exports.helper.int('ages.max', 'Age Range (max)', { min: 0 }),
    exports.helper.int('players.min', 'Players (min)', { min: 0 }),
    exports.helper.int('players.max', 'Players (max)', { min: 0 })
];
//# sourceMappingURL=toysDetails.js.map