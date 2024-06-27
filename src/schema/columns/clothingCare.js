"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clothingCareColumns = void 0;
const material_react_table_1 = require("material-react-table");
const col_1 = require("../defs/col");
const h = (0, material_react_table_1.createMRTColumnHelper)();
const helper = (0, col_1.col)(h);
exports.clothingCareColumns = [
    helper.clothingCare()('bleaching', 'Bleaching', 'bleaching'),
    helper.clothingCare()('dryClean', 'Dry Clean', 'dryClean'),
    helper.clothingCare()('drying', 'Drying', 'drying'),
    helper.clothingCare()('gentleOrDelicate', 'Gentle Or Delicate', 'gentleOrDelicate'),
    helper.clothingCare()('ironing', 'Ironing', 'ironing'),
    helper.clothingCare()('permanentPress', 'Permanent Press', 'permanentPress'),
    helper.clothingCare()('tumbleDry', 'Tumble Dry', 'tumbleDry'),
    helper.clothingCare()('wash', 'Wash', 'wash'),
    helper.clothingCare()('washTemperature', 'Wash Temperature', 'washTemperature')
];
//# sourceMappingURL=clothingCare.js.map