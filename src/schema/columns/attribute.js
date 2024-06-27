"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attributeColumns = exports.helper = exports.h = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_react_table_1 = require("material-react-table");
const col_1 = require("../defs/col");
const react_hook_form_mui_1 = require("react-hook-form-mui");
const enums_1 = require("../enums");
exports.h = (0, material_react_table_1.createMRTColumnHelper)();
exports.helper = (0, col_1.col)(exports.h);
function AnyCell(props) {
    var _a, _b;
    const { cell } = props;
    const value = (_b = (_a = cell.getValue()) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : '';
    return value;
}
exports.attributeColumns = [
    // helper.freeSolo('path', 'Path', (x?: string, y?: string) => (x != null && y != null) ? x.localeCompare(y) as Compared : 0, { required: true }),
    // helper.bool('unset', 'Unset'),
    // helper.string('value', 'Value', undefined, { maxLength: 150 })
    exports.helper.enum()('path', 'Path', { enumKey: 'attributePaths' }),
    exports.helper.bool()('unset', 'Unset'),
    exports.h.accessor('value', {
        Cell: AnyCell,
        header: 'Value',
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        Edit: function AnyValueEdit(props) {
            const formContext = (0, react_hook_form_mui_1.useFormContext)();
            const pathValue = formContext.watch('path');
            const attribute = enums_1.attributePaths.find((x) => x.key === pathValue);
            console.info(`pathValue`, pathValue, 'attribute', attribute);
            if (attribute == null)
                return null;
            const { Component } = attribute;
            return (0, jsx_runtime_1.jsx)(Component, {});
        }
    })
];
//# sourceMappingURL=attribute.js.map