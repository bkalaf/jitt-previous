"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cellPhonesDetails = exports.helper = exports.h = void 0;
const material_react_table_1 = require("material-react-table");
const col_1 = require("../../defs/col");
exports.h = (0, material_react_table_1.createMRTColumnHelper)();
exports.helper = (0, col_1.col)(exports.h);
exports.cellPhonesDetails = [
    exports.helper.measure('screenSize', 'Screen Size', 'in', { min: 0 }),
    exports.helper.measure('capacity', 'Capacity', 'GB', { min: 0 }),
    exports.helper.enum('os', 'Operating System', { enumKey: 'operatingSystems' }),
    exports.helper.string('osVersion', 'OS Version', undefined),
    exports.helper.enum('cellCarrier', 'Carrier', { enumKey: 'cellCarriers' }),
    exports.helper.enum('aspectRatio', 'Aspect Ratio', { enumKey: 'aspectRatios' })
];
//# sourceMappingURL=cellPhoneDetails.js.map