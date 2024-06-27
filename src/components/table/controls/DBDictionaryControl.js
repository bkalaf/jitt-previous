"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBDictionaryControl = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const useWhyDidIUpdate_1 = require("../../../hooks/useWhyDidIUpdate");
const IconBtn_1 = require("../../IconBtn");
const pro_solid_svg_icons_1 = require("@fortawesome/pro-solid-svg-icons");
const material_1 = require("@mui/material");
const DBListEditSubComponent_1 = require("../../controls/DBListEditSubComponent");
const useToggler_1 = require("../../../hooks/useToggler");
const DBListItemSubComponent_1 = require("../../controls/DBListItemSubComponent");
const useFieldArrayControlForDictionary_1 = require("../../../hooks/useFieldArrayControlForDictionary");
function DBDictionaryControl(props) {
    (0, useWhyDidIUpdate_1.useWhyDidIUpdate)('DBDictionaryControl', props);
    const { LiComponent, append, cols, helperText, label, name, required, remove, readonly, value, objectType, KeyControl, keyType, isDisabled } = (0, useFieldArrayControlForDictionary_1.useFieldArrayControlForDictionary)(props.column);
    if (objectType == null)
        throw new Error('no objectType on DictionaryControl');
    const [open, toggleOpen] = (0, useToggler_1.useToggler)(false);
    return (!isDisabled() && ((0, jsx_runtime_1.jsxs)("fieldset", { name: name, "aria-required": required, "aria-readonly": readonly, children: [(0, jsx_runtime_1.jsxs)("legend", { className: 'relative w-full', children: [label, (0, jsx_runtime_1.jsx)(IconBtn_1.IconBtn, { icon: pro_solid_svg_icons_1.faPlusSquare, color: 'vivid', className: 'absolute right-0 top-0', tooltip: 'Insert new item', onClick: toggleOpen })] }), (0, jsx_runtime_1.jsx)("small", { children: helperText }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(DBListEditSubComponent_1.DBDictionaryEditSubComponent, { append: append, columns: cols, handleClose: toggleOpen, KeyControl: KeyControl, keyType: keyType, isOpen: open, objectType: objectType }), (0, jsx_runtime_1.jsx)(material_1.List, { children: Object.entries(value !== null && value !== void 0 ? value : {}).map(([key, v]) => ((0, jsx_runtime_1.jsx)(DBListItemSubComponent_1.DBDictionaryItemSubComponent, { index: key, value: v, remove: remove, objectType: objectType, LIComponent: LiComponent }, key))) })] })] })));
}
exports.DBDictionaryControl = DBDictionaryControl;
//# sourceMappingURL=DBDictionaryControl.js.map