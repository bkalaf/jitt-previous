"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlattenedClothingCareCell = void 0;
const useWhyDidIUpdate_1 = require("../../../hooks/useWhyDidIUpdate");
const toFlattener_1 = require("./toFlattener");
function FlattenedClothingCareCell(section) {
    return function FlattenedCCCell(props) {
        var _a;
        (0, useWhyDidIUpdate_1.useWhyDidIUpdate)('FlattenedListTableCell', props);
        const { cell } = props;
        const flattener = (0, toFlattener_1.toFlattener)(section);
        const $flattener = flattener !== null && flattener !== void 0 ? flattener : ((x) => { var _a; return (_a = x === null || x === void 0 ? void 0 : x.map((item) => item.toString()).join(', ')) !== null && _a !== void 0 ? _a : ''; });
        const value = (_a = cell.getValue()) !== null && _a !== void 0 ? _a : [];
        return $flattener(value);
    };
}
exports.FlattenedClothingCareCell = FlattenedClothingCareCell;
//# sourceMappingURL=FlattenedClothingCareCell.js.map