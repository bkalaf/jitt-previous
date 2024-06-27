"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LookupTableCell = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_1 = require("react-router");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const material_1 = require("@mui/material");
const useWhyDidIUpdate_1 = require("../../../hooks/useWhyDidIUpdate");
const useColumnMeta_1 = require("../../../hooks/useColumnMeta");
const getProperty_1 = require("../../../common/object/getProperty");
const useGetLabelProperty_1 = require("../../../hooks/useGetLabelProperty");
function LookupTableCell(props) {
    (0, useWhyDidIUpdate_1.useWhyDidIUpdate)('LookupTableCell', props);
    const { value, objectType } = (0, useColumnMeta_1.useColumnMeta)(props, undefined, 'objectType');
    if (objectType == null)
        throw new Error('no objectType');
    const navigate = (0, react_router_1.useNavigate)();
    const [searchParams] = (0, react_router_dom_1.useSearchParams)({ _id: value != null ? value._id.toHexString() : '' });
    const onClick = (0, react_1.useCallback)(() => navigate(`/data/v1/${objectType}?${searchParams.toString()}`), [navigate, objectType, searchParams]);
    const labelProperty = (0, useGetLabelProperty_1.useGetLabelProperty)(objectType);
    if (labelProperty == null)
        throw new Error(`no labelProperty for ${objectType}`);
    return ((0, jsx_runtime_1.jsx)(material_1.Link, { className: 'w-full cursor-pointer text-left indent-1 font-extrabold text-pink-500 underline decoration-pink-500 group-data-[row-depth="4"]:text-pink-500 group-data-[row-depth="5"]:text-pink-700 group-data-[row-depth="6"]:text-pink-700 group-data-[row-depth="4"]:decoration-pink-500 group-data-[row-depth="5"]:decoration-pink-700 group-data-[row-depth="6"]:decoration-pink-700', underline: 'always', variant: 'button', component: 'button', onClick: onClick, children: value == null ? '' : (0, getProperty_1.getProperty)(labelProperty, value) }));
}
exports.LookupTableCell = LookupTableCell;
//# sourceMappingURL=LookupTableCell.js.map