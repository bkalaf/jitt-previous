"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoolTableCell = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const pro_solid_svg_icons_1 = require("@fortawesome/pro-solid-svg-icons");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const free_regular_svg_icons_1 = require("@fortawesome/free-regular-svg-icons");
const useWhyDidIUpdate_1 = require("../../../hooks/useWhyDidIUpdate");
const react_1 = require("react");
function BoolTableCell(props) {
    (0, useWhyDidIUpdate_1.useWhyDidIUpdate)('BoolTableCell', props);
    const value = (0, react_1.useMemo)(() => props.cell.getValue(), [props.cell]);
    const icon = (0, react_1.useMemo)(() => (value ? pro_solid_svg_icons_1.faCheckSquare : free_regular_svg_icons_1.faSquare), [value]);
    return (0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: icon, className: 'text-blue-500', size: 'lg' });
}
exports.BoolTableCell = BoolTableCell;
//# sourceMappingURL=BoolTableCell.js.map