"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.spreadPredicate = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const useHasDetailType_1 = require("../../hooks/useHasDetailType");
function spreadPredicate(name, predicate, isNegative = false, ...cols) {
    return cols.map((col) => {
        var _a;
        console.log(col.columnDefType);
        return (col.columnDefType === 'data' ? Object.assign(Object.assign({}, col), { Edit: function (props) {
                const { Edit } = col;
                const value = (0, useHasDetailType_1.useCheckPredicate)(name, predicate);
                const isDisabled = isNegative ? !value : value;
                if (Edit == null)
                    throw new Error('No Edit Cell');
                const EditComponent = Edit;
                return isDisabled ? (0, jsx_runtime_1.jsx)(EditComponent, Object.assign({}, props)) : null;
            } }) : col.columnDefType === 'group' ? Object.assign(Object.assign({}, col), { columns: spreadPredicate(name, predicate, isNegative, ...((_a = col.columns) !== null && _a !== void 0 ? _a : [])) }) : col);
    });
}
exports.spreadPredicate = spreadPredicate;
//# sourceMappingURL=spreadPredicate.js.map