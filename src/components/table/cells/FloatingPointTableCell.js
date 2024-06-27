"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FloatingPointTableCell = void 0;
const useWhyDidIUpdate_1 = require("../../../hooks/useWhyDidIUpdate");
const truncateAuto_1 = require("../../../common/number/truncateAuto");
function FloatingPointTableCell(props) {
    (0, useWhyDidIUpdate_1.useWhyDidIUpdate)('FloatingPointTableCell', props);
    const { column: { columnDef: { meta } } } = props;
    const { formatter } = meta;
    const $formatter = formatter !== null && formatter !== void 0 ? formatter : ((value) => (0, truncateAuto_1.truncateAuto)(value));
    const value = props.cell.getValue();
    return $formatter(value);
}
exports.FloatingPointTableCell = FloatingPointTableCell;
//# sourceMappingURL=FloatingPointTableCell.js.map