"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringTableCell = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const useWhyDidIUpdate_1 = require("../../../hooks/useWhyDidIUpdate");
const fromDepth_1 = require("../../../schema/fromDepth");
const react_1 = require("react");
const useEffectiveCollection_1 = require("../../../hooks/useEffectiveCollection");
function StringTableCell(props) {
    (0, useWhyDidIUpdate_1.useWhyDidIUpdate)('StringTableCell', props);
    const { cell, row, column: { columnDef: { meta } } } = props;
    const collection = (0, useEffectiveCollection_1.useEffectiveCollection)();
    const { columnName, formatter } = meta;
    const $formatter = formatter !== null && formatter !== void 0 ? formatter : ((x) => { var _a; return (_a = x === null || x === void 0 ? void 0 : x.toString()) !== null && _a !== void 0 ? _a : ''; });
    const className = (0, react_1.useMemo)(() => (collection === 'classifier' && columnName === 'shortName' ? (0, fromDepth_1.fromDepth)(row.depth) : ''), [collection, columnName, row.depth]);
    return (0, jsx_runtime_1.jsx)("span", { className: className, children: $formatter(cell.getValue()) });
}
exports.StringTableCell = StringTableCell;
//# sourceMappingURL=StringTableCell.js.map