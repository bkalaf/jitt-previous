"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pk = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const pro_solid_svg_icons_1 = require("@fortawesome/pro-solid-svg-icons");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const material_1 = require("@mui/material");
function pk(helper) {
    return () => helper.accessor('_id', {
        header: 'ID',
        size: 50,
        muiTableBodyCellProps: {
            className: 'text-center'
        },
        Cell: function ({ cell }) {
            const value = cell.getValue().toHexString();
            return ((0, jsx_runtime_1.jsx)(material_1.Tooltip, { title: value, children: (0, jsx_runtime_1.jsx)(material_1.IconButton, { className: 'm-0 bg-blue-700 p-0 text-yellow-500', children: (0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { className: 'm-0.5 ', icon: pro_solid_svg_icons_1.faKey, size: 'sm' }) }) }));
        },
        enableEditing: false,
        filterFn: ((row, columnId, filterValue) => {
            return row.original._id.toHexString() === filterValue;
        })
    });
}
exports.pk = pk;
//# sourceMappingURL=pk.js.map