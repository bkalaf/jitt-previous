"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBListItemSubComponent = exports.DBDictionaryItemSubComponent = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const react_1 = require("react");
const IconBtn_1 = require("../IconBtn");
const pro_solid_svg_icons_1 = require("@fortawesome/pro-solid-svg-icons");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
function DBDictionaryItemSubComponent(props) {
    const { index, value, remove, LIComponent } = props;
    const onDelete = (0, react_1.useCallback)((ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        remove(index);
    }, [index, remove]);
    const Primary = LIComponent(value);
    return ((0, jsx_runtime_1.jsxs)(material_1.ListItem, { secondaryAction: (0, jsx_runtime_1.jsx)(IconBtn_1.IconBtn, { icon: pro_solid_svg_icons_1.faTrashCan, color: 'success', tooltip: 'Delete item', onClick: onDelete }), children: [(0, jsx_runtime_1.jsx)(material_1.ListItemIcon, { children: (0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: pro_solid_svg_icons_1.faCircleDot }) }), (0, jsx_runtime_1.jsx)(material_1.ListItemText, { primary: index, secondary: (0, jsx_runtime_1.jsx)(Primary, {}) })] }, index));
}
exports.DBDictionaryItemSubComponent = DBDictionaryItemSubComponent;
function DBListItemSubComponent(props) {
    const { index, value, remove, LIComponent } = props;
    const onDelete = (0, react_1.useCallback)((ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        remove(index);
    }, [index, remove]);
    const Primary = LIComponent(value);
    return ((0, jsx_runtime_1.jsxs)(material_1.ListItem, { secondaryAction: (0, jsx_runtime_1.jsx)(IconBtn_1.IconBtn, { icon: pro_solid_svg_icons_1.faTrashCan, color: 'success', tooltip: 'Delete item', onClick: onDelete }), children: [(0, jsx_runtime_1.jsx)(material_1.ListItemIcon, { children: (0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: pro_solid_svg_icons_1.faCircleDot }) }), (0, jsx_runtime_1.jsx)(material_1.ListItemText, { primary: (0, jsx_runtime_1.jsx)(Primary, {}) })] }, index));
}
exports.DBListItemSubComponent = DBListItemSubComponent;
//# sourceMappingURL=DBListItemSubComponent.js.map