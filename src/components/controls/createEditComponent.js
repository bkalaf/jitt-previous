"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEditComponent = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
function createEditComponent(Wrapper) {
    return function (def) {
        var _a, _b;
        if (def.columns) {
            return def.columns.map(createEditComponent(Wrapper)).reduce((pv, cv) => [...pv, ...cv], []);
        }
        if (def.Edit == null) {
            return [];
        }
        const Wrap = Wrapper !== null && Wrapper !== void 0 ? Wrapper : function InterntalWrapper({ children }) {
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: children });
        };
        const EditCntrl = def.Edit;
        return [
            (0, jsx_runtime_1.jsx)(Wrap, { children: (0, jsx_runtime_1.jsx)(EditCntrl, { cell: undefined, row: undefined, table: undefined, column: { columnDef: def } }) }, (_b = (_a = def.id) !== null && _a !== void 0 ? _a : def.accessorKey) !== null && _b !== void 0 ? _b : 'n/a')
        ];
    };
}
exports.createEditComponent = createEditComponent;
//# sourceMappingURL=createEditComponent.js.map