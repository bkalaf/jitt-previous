"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlattenedListTableCell = void 0;
const useWhyDidIUpdate_1 = require("../../../hooks/useWhyDidIUpdate");
function FlattenedListTableCell(props) {
    (0, useWhyDidIUpdate_1.useWhyDidIUpdate)('FlattenedListTableCell', props);
    const { cell, column: { columnDef: { meta } } } = props;
    const { flattener } = (meta !== null && meta !== void 0 ? meta : {});
    const $flattener = flattener !== null && flattener !== void 0 ? flattener : ((x) => { var _a; return (_a = x === null || x === void 0 ? void 0 : x.map((item) => item.toString()).join(', ')) !== null && _a !== void 0 ? _a : ''; });
    const value = cell.getValue();
    return $flattener(value);
}
exports.FlattenedListTableCell = FlattenedListTableCell;
//# sourceMappingURL=FlattenedListTableCell.js.map