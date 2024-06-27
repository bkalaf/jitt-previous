"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useColumnMeta = void 0;
const react_1 = require("react");
function useColumnMeta(props, defaultValue, ...keys) {
    const { cell, column: { columnDef: { meta } } } = props;
    if (meta == null)
        throw new Error('no meta');
    // const { columnName, objectType } = meta;
    // if (columnName == null || objectType == null) throw new Error('no columnName or objectType');
    return (0, react_1.useMemo)(() => {
        var _a;
        return (Object.assign({ value: ((_a = cell.getValue()) !== null && _a !== void 0 ? _a : defaultValue) }, Object.fromEntries(keys.map((k) => [k, meta[k]]))));
    }, [cell, defaultValue, keys, meta]);
}
exports.useColumnMeta = useColumnMeta;
//# sourceMappingURL=useColumnMeta.js.map