"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectorColumns = void 0;
const material_react_table_1 = require("material-react-table");
const col_1 = require("../defs/col");
const _depend_1 = require("./$depend");
const h = (0, material_react_table_1.createMRTColumnHelper)();
const helper = (0, col_1.col)(h);
exports.connectorColumns = [
    helper.enum()('connectorGender', 'Gender', { enumKey: 'connectorGenders' }),
    helper.measure()('outerWidth', 'Outer Width', 'mm', {}),
    helper.measure(_depend_1.$depend.notZeroOrNull('outerWidth', true))('innerWidth', 'Inner Width', 'mm', {}),
    helper.enum(_depend_1.$depend.equalTo('cableType', 'data'))('type', 'Type', { enumKey: 'dataConnectorTypes', id: 'data-connector' }),
    helper.enum(_depend_1.$depend.equalTo('cableType', 'power'))('type', 'Type', { enumKey: 'powerConnectorTypes', id: 'power-connector' }),
    helper.enum(_depend_1.$depend.equalTo('cableType', 'video'))('type', 'Type', { enumKey: 'videoConnectorTypes', id: 'video-connector' })
];
//# sourceMappingURL=connector.js.map