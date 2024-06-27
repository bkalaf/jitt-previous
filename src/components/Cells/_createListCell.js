"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createListCell = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const useWhyDidIUpdate_1 = require("../../hooks/useWhyDidIUpdate");
const useListItemComponent_1 = require("../../hooks/useListItemComponent");
function createListCell(objectType) {
    return function ListCell({ cell }) {
        var _a, _b;
        (0, useWhyDidIUpdate_1.useWhyDidIUpdate)('ListCell', { value: (_a = cell.getValue()) !== null && _a !== void 0 ? _a : [], cell });
        const RowCell = (0, useListItemComponent_1.useListItemComponent)(objectType);
        const value = (_b = cell.getValue()) !== null && _b !== void 0 ? _b : [];
        console.info(`value`, 'toJSON' in value ? value.toJSON() : value);
        // const value = (row.original as any)[column.columnDef.accessorKey] ?? [] as DBList<U> | U[] ;
        // console.info(cell.column.columnDef, `value`, value)
        return ((0, jsx_runtime_1.jsx)(material_1.Tooltip, { className: 'flex', title: (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)("div", { className: 'flex h-full w-full list-inside list-disc flex-col bg-slate-500 text-white', children: value.map((el, ix) => {
                        const Row = RowCell(el);
                        return ((0, jsx_runtime_1.jsx)("div", { className: 'flex w-full justify-start whitespace-pre text-base before:content-["\u25D8_"]', children: (0, jsx_runtime_1.jsx)("div", { className: 'flex w-full text-left indent-1', children: (0, jsx_runtime_1.jsx)(Row, {}) }) }, ix));
                    }) }) }), children: (0, jsx_runtime_1.jsxs)("span", { children: [value.length, " items."] }) }));
    };
}
exports.createListCell = createListCell;
//# sourceMappingURL=_createListCell.js.map