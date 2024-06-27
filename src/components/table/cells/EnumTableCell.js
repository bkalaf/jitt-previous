"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toEnumMap = exports.EnumTableCell = void 0;
const useWhyDidIUpdate_1 = require("../../../hooks/useWhyDidIUpdate");
function EnumTableCell(props) {
    (0, useWhyDidIUpdate_1.useWhyDidIUpdate)('EnumTableCell', props);
    const { cell, column: { columnDef: { meta } } } = props;
    if (meta == null)
        throw new Error('no meta');
    const $meta = meta;
    const { enumInfo } = Object.assign({}, ($meta !== null && $meta !== void 0 ? $meta : {}));
    if (enumInfo == null)
        throw new Error('no enuminfo in enumtablecell');
    const value = cell.getValue();
    const lookup = value != null ? enumInfo.asRecord[value] : undefined;
    return (lookup == null ? ''
        : typeof lookup === 'string' ? lookup
            : lookup.text);
}
exports.EnumTableCell = EnumTableCell;
function toEnumMap(enumItems, modifier) {
    return Object.fromEntries(enumItems
        .map((x) => [[x.key, x], ...x.aliases.map((y) => [y, x])])
        .reduce((pv, cv) => [...pv, ...cv], [])
        .map((ei) => [ei[0], (modifier !== null && modifier !== void 0 ? modifier : ((item) => item))(ei[1])]));
}
exports.toEnumMap = toEnumMap;
//# sourceMappingURL=EnumTableCell.js.map