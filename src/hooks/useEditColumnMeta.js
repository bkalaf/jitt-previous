"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEditColumnMeta = void 0;
const react_1 = require("react");
function useEditColumnMeta(props, ...keys) {
    const { column: { columnDef: { meta } } } = props;
    if (meta == null)
        throw new Error('no meta');
    // const { columnName, objectType } = meta;
    // if (columnName == null || objectType == null) throw new Error('no columnName or objectType');
    return (0, react_1.useMemo)(() => (Object.assign({}, Object.fromEntries(keys.map((k) => [k, meta[k]])))), [keys, meta]);
}
exports.useEditColumnMeta = useEditColumnMeta;
//# sourceMappingURL=useEditColumnMeta.js.map