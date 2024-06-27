"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTableCell = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const useWhyDidIUpdate_1 = require("../../../hooks/useWhyDidIUpdate");
const useGetLIComponent_1 = require("../../../hooks/useGetLIComponent");
function ListTableCell(props) {
    var _a;
    (0, useWhyDidIUpdate_1.useWhyDidIUpdate)('ListTableCell', props);
    const { cell, column: { columnDef: { meta } } } = props;
    const { objectType } = meta;
    if (objectType == null) {
        console.error('no objectType for list', props.column.columnDef);
        throw new Error('no objectType for list');
    }
    const RowCell = (0, useGetLIComponent_1.useGetLIComponent)(objectType);
    const value = (_a = cell.getValue()) !== null && _a !== void 0 ? _a : [];
    return value.length > 0 ?
        (0, jsx_runtime_1.jsx)(material_1.Tooltip, { className: 'flex', title: (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)("div", { className: 'flex h-full w-full list-inside list-disc flex-col bg-slate-500 text-white', children: value.map((el, ix) => {
                        const Row = RowCell(el);
                        return ((0, jsx_runtime_1.jsx)("div", { className: 'flex w-full justify-start whitespace-pre text-base before:content-["\u25D8_"]', children: (0, jsx_runtime_1.jsx)("div", { className: 'flex w-full text-left indent-1', children: (0, jsx_runtime_1.jsx)(Row, {}) }) }, ix));
                    }) }) }), children: (0, jsx_runtime_1.jsxs)("span", { children: [value.length, " items."] }) })
        : '';
}
exports.ListTableCell = ListTableCell;
//# sourceMappingURL=ListTableCell.js.map