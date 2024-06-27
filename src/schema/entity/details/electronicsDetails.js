"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.electronicsDetails = exports.helper = exports.h = void 0;
const material_react_table_1 = require("material-react-table");
const col_1 = require("../../defs/col");
const when_1 = require("../../defs/when");
const groupCol_1 = require("../../defs/groupCol");
const currentSetting_1 = require("../../columns/currentSetting");
const colDimension_1 = require("./colDimension");
exports.h = (0, material_react_table_1.createMRTColumnHelper)();
exports.helper = (0, col_1.col)(exports.h);
exports.electronicsDetails = [
    exports.helper.enum('powerTypes', 'Power Types', { enumKey: 'powerTypes' }),
    (0, when_1.whenProperty)('powerTypes', ['battery', 'both'], exports.helper.enum('batteryType', 'Battery Types', { enumKey: 'batteryTypes' })),
    (0, when_1.whenProperty)('powerTypes', ['battery', 'both'], exports.helper.int('batteryCount', 'Battery Count', { min: 0 })),
    exports.helper.listOfPrimitive('compatibleWith', 'Compatible With', 'string'),
    exports.helper.date('manufactureDate', 'Manufacture Date', { dateType: 'past' }),
    // helper.int('rateOfEnergyCapacity.value' as any, 'Rate of Energy Capacity', { min: 0 }),
    // whenPropertyNotZero('rateOfEnergyCapacity.value', helper.enum('rateOfEnergyCapacity.uom' as any, 'Rate of Energy Capacity UOM', { enumKey: 'rateOfEnergyCapacityUOM' })),
    ...when_1.$enableWhen.property('powerTypes', ['battery', 'both'])((0, colDimension_1.colDimension)(exports.h)('rateOfEnergyCapacity', 'Rate of Energy Capacity', 'rateOfEnergyCapacityUOM', 'int')),
    ...when_1.$enableWhen.property('powerTypes', ['ac', 'both'])((0, groupCol_1.groupCol)(exports.h, 'AC Adapter', currentSetting_1.currentSettingColumns, 'acAdapter', 'bg-yellow-500', 'text-black')),
    ...when_1.$enableWhen.property('powerTypes', ['battery', 'both'])((0, groupCol_1.groupCol)(exports.h, 'Battery Stats', currentSetting_1.currentSettingColumns, 'batteryStats', 'bg-yellow-500', 'text-black'))
];
//# sourceMappingURL=electronicsDetails.js.map