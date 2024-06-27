"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computerComponentsRamDetails = exports.computerComponentsDrivesDetails = exports.computerComponentsDetails = exports.helper = exports.h = void 0;
const material_react_table_1 = require("material-react-table");
const col_1 = require("../../defs/col");
exports.h = (0, material_react_table_1.createMRTColumnHelper)();
exports.helper = (0, col_1.col)(exports.h);
exports.computerComponentsDetails = [];
exports.computerComponentsDrivesDetails = [
    exports.helper.enum('driveType', 'Drive Type', { enumKey: 'driveTypes' }),
    exports.helper.enum('driveForm', 'Drive Form', { enumKey: 'driveFormFactors' }),
    exports.helper.listofEnum('connectivity', 'Connectivity', { enumKey: 'connectivity' }),
    exports.helper.enum('driveInterface', 'Drive Interface', { enumKey: 'driveInterfaces' }),
    exports.helper.double('driveSize.value', 'Drive Size', { min: 0 }),
    exports.helper.enum('driveSize.uom', 'Drive Size UOM', { enumKey: 'capacityUOM' }),
    exports.helper.measure('writeSpeed', 'Write Speed', 'MB/s', { min: 0 }),
    exports.helper.measure('readSpeed', 'Read Speed', 'MB/s', { min: 0 }),
    exports.helper.measure('dataTransferRate', 'Data Transfer Rate', 'MBit/s', { min: 0 }),
    exports.helper.intMeasure('rpm', 'Rotational Speed', 'RPM', { min: 0 }),
    exports.helper.measure('cacheSize', 'Cache Size', 'MB', { min: 0 })
];
exports.computerComponentsRamDetails = [
    exports.helper.enum('memoryType', 'Memory Type', { enumKey: 'memoryTypes' }),
    exports.helper.enum('memoryForm', 'Memory Form', { enumKey: 'memoryFormFactors' }),
    exports.helper.enum('compatibleDevices', 'Compatible Devices', { enumKey: 'compatibleDevices' }),
    exports.helper.measure('memorySpeed', 'Memory Speed', 'MHz', { min: 0 }),
    exports.helper.double('memorySize.value', 'Drive Size', { min: 0 }),
    exports.helper.enum('memorySize.uom', 'Drive Size UOM', { enumKey: 'capacityUOM' }),
    exports.helper.int('pinCount', 'Pin Count', { min: 0 }),
    exports.helper.measure('voltage', 'Voltage', 'V', { min: 0 }),
    exports.helper.enum('CASLatency', 'Column Address Strobe Latency', { enumKey: 'casLatency' }),
    exports.helper.string('dataTransferBandwidth', 'Data Transfer Bandwidth', undefined)
];
//# sourceMappingURL=computerComponentsDetails.js.map