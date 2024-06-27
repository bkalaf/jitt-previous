"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.currentSettingColumns = void 0;
const material_react_table_1 = require("material-react-table");
const groupCol_1 = require("../defs/groupCol");
const ignore_1 = require("../../common/ignore");
const h = (0, material_react_table_1.createMRTColumnHelper)();
const dimension = ignore_1.ignore;
const currentSettingColumns = (...dependencies) => [
    (0, groupCol_1.groupCol)(h, 'Amperage', dimension('amperageUnits'), 'amperage', 'bg-pink-500', 'text-white')(...dependencies),
    (0, groupCol_1.groupCol)(h, 'Voltage', dimension('voltageUOM'), 'voltage', 'bg-orange-500', 'text-black')(...dependencies),
    (0, groupCol_1.groupCol)(h, 'Wattage', dimension('wattageUOM'), 'wattage', 'bg-cyan-500', 'text-white')(...dependencies)
];
exports.currentSettingColumns = currentSettingColumns;
//# sourceMappingURL=currentSetting.js.map