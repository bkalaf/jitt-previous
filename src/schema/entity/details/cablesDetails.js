"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cablesVideoDetails = exports.cablesDataDetails = exports.cablesPowerDetails = exports.cablesDetails = exports.helper = exports.h = void 0;
const material_react_table_1 = require("material-react-table");
const col_1 = require("../../defs/col");
exports.h = (0, material_react_table_1.createMRTColumnHelper)();
exports.helper = (0, col_1.col)(exports.h);
exports.cablesDetails = [exports.helper.measure('cordLength', 'Cord Length', 'in', { min: 1 }), exports.helper.listOfEmbed('connectors', 'Connectors', 'connector')];
exports.cablesPowerDetails = [];
exports.cablesDataDetails = [];
exports.cablesVideoDetails = [];
//# sourceMappingURL=cablesDetails.js.map