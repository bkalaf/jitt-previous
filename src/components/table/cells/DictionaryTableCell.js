"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DictionaryTableCell = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const useWhyDidIUpdate_1 = require("../../../hooks/useWhyDidIUpdate");
const useColumnMeta_1 = require("../../../hooks/useColumnMeta");
const useGetLIComponent_1 = require("../../../hooks/useGetLIComponent");
function DictionaryTableCell(props) {
    (0, useWhyDidIUpdate_1.useWhyDidIUpdate)('DictionaryTableCell', props);
    const { value: data, objectType } = (0, useColumnMeta_1.useColumnMeta)(props, {}, 'objectType');
    if (objectType == null)
        throw new Error('no objectType');
    const ValueCell = (0, useGetLIComponent_1.useGetLIComponent)(objectType);
    const value = Object.entries(data);
    return ((0, jsx_runtime_1.jsx)(material_1.Tooltip, { className: 'flex', title: (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)("div", { className: 'grid h-full w-full grid-cols-2 bg-slate-500 text-white', children: value.map(([key, value]) => {
                    var _a;
                    const Row = ValueCell(value);
                    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("span", { className: 'flex w-full justify-start whitespace-pre text-base', children: (_a = key === null || key === void 0 ? void 0 : key.toString()) !== null && _a !== void 0 ? _a : '' }), (0, jsx_runtime_1.jsx)("span", { className: 'flex w-full justify-start whitespace-pre text-base', children: (0, jsx_runtime_1.jsx)(Row, {}) })] })
                    // <div key={ix} className='flex justify-start w-full text-base whitespace-pre before:content-["◘_"]'>
                    //     <div className='flex w-full text-left indent-1'>
                    //         <Row />
                    //     </div>
                    // </div>
                    );
                }) }) }), children: (0, jsx_runtime_1.jsxs)("span", { children: [value.length, " keys."] }) }));
}
exports.DictionaryTableCell = DictionaryTableCell;
//# sourceMappingURL=DictionaryTableCell.js.map