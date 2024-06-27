"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseCol = void 0;
const NullCell_1 = require("./NullCell");
const camelToProper_1 = require("../../common/text/camelToProper");
function baseCol(helper, name, Cell, Edit, $header, required = false, readonly = false, _a = {}, onChange, ...dependencies) {
    var { id, multiple } = _a, options = __rest(_a, ["id", "multiple"]);
    const header = $header !== null && $header !== void 0 ? $header : (0, camelToProper_1.camelToProper)(name);
    return helper.accessor(name, {
        header,
        enableEditing: !readonly,
        Edit: readonly ? NullCell_1.NullCell : Edit,
        Cell,
        id: id,
        meta: Object.assign({ dependencies,
            onChange, columnName: name, required: required, readonly: readonly, multiple: multiple !== null && multiple !== void 0 ? multiple : false }, options),
        muiTableBodyCellProps: {
            'aria-required': required,
            'aria-readonly': readonly
        }
    });
}
exports.baseCol = baseCol;
//# sourceMappingURL=baseCol.js.map