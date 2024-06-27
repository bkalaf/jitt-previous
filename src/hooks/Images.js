"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Images = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const useWhyDidIUpdate_1 = require("./useWhyDidIUpdate");
const react_1 = require("react");
const getFolderNames_1 = require("../util/getFolderNames");
const useFileSystem_1 = require("./useFileSystem");
const checkFolder_1 = require("../contexts/checkFolder");
const Image_1 = require("./Image");
const useLocalRealm_1 = require("./useLocalRealm");
const runTransaction_1 = require("../util/runTransaction");
const react_hook_form_mui_1 = require("react-hook-form-mui");
function Images(props) {
    var _a;
    (0, useWhyDidIUpdate_1.useWhyDidIUpdate)('Images', props);
    const { productImage } = props;
    const [brandFolder, productFolder, skuFolder] = (0, getFolderNames_1.getFolderNames)(productImage.sku);
    const { filename, caption, selected } = productImage;
    const { remBgExt, remBgSuffix, products } = (0, useFileSystem_1.useFileSystem)();
    const remBgFn = filename.split('.')[0].concat(remBgSuffix).concat('.').concat(remBgExt);
    const basePath = [products, brandFolder, productFolder, skuFolder].join('\\');
    (0, checkFolder_1.checkFolder)(basePath);
    const original = [basePath, filename].join('\\');
    const removeBG = [basePath, remBgFn].join('\\');
    const db = (0, useLocalRealm_1.useLocalRealm)();
    const [isIgnored, setIsIgnored] = (0, react_1.useState)(false);
    const [isDoNotRemBG, setDoNotRemBG] = (0, react_1.useState)(false);
    const handleChange = (0, react_1.useCallback)((event) => {
        const func = () => {
            const obj = db.objectForPrimaryKey('productImage', productImage._id);
            const targetValue = event.target.value;
            const newSelected = ['original', 'rembg'].includes(targetValue) ? targetValue : undefined;
            const newIgnore = targetValue === 'ignore' ? true : undefined;
            if (obj != null) {
                if (newIgnore) {
                    // obj.flags = [...obj.flags ?? [], 'ignore'];
                }
                else if (newSelected == null) {
                    obj.selected = undefined;
                }
                else {
                    obj.selected = newSelected;
                }
            }
        };
        (0, runTransaction_1.runTransaction)(db, func);
    }, [db, productImage._id]);
    const internal = selected !== null && selected !== void 0 ? selected : (((_a = productImage.flags) === null || _a === void 0 ? void 0 : _a.includes('ignore')) ? 'ignore' : '');
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { className: 'flex w-full', children: [(0, jsx_runtime_1.jsx)(Image_1.Image, { filepath: original, caption: caption, selected: selected === 'original' }), (0, jsx_runtime_1.jsx)(Image_1.Image, { filepath: removeBG, caption: caption, selected: selected === 'rembg' })] }), (0, jsx_runtime_1.jsx)("div", { className: 'flex w-full', children: (0, jsx_runtime_1.jsxs)(material_1.FormControl, { children: [(0, jsx_runtime_1.jsxs)(material_1.RadioGroup, { row: true, value: internal, onChange: handleChange, children: [(0, jsx_runtime_1.jsx)(material_1.FormControlLabel, { control: (0, jsx_runtime_1.jsx)(material_1.Radio, {}), value: 'original', label: 'Original' }), (0, jsx_runtime_1.jsx)(material_1.FormControlLabel, { control: (0, jsx_runtime_1.jsx)(material_1.Radio, {}), value: 'rembg', label: 'Remove-BG' }), (0, jsx_runtime_1.jsx)(material_1.FormControlLabel, { control: (0, jsx_runtime_1.jsx)(material_1.Radio, {}), value: '', label: 'Unselected' })] }), (0, jsx_runtime_1.jsx)(react_hook_form_mui_1.CheckboxElement, { name: 'do-not-rembg', checked: isDoNotRemBG, onChange: (ev, checked) => {
                                ev.preventDefault();
                                ev.stopPropagation();
                                const func = () => {
                                    const obj = db.objectForPrimaryKey('productImage', productImage._id);
                                    if (obj == null)
                                        throw new Error('no productImage');
                                    if (checked) {
                                        obj.flags.push('do-not-rembg');
                                    }
                                    else {
                                        obj.flags.remove(obj.flags.indexOf('do-not-rembg'));
                                    }
                                };
                                (0, runTransaction_1.runTransaction)(db, func);
                                setDoNotRemBG(checked);
                            } }), (0, jsx_runtime_1.jsx)(react_hook_form_mui_1.CheckboxElement, { name: 'ignore', checked: isIgnored, onChange: (ev, checked) => {
                                ev.preventDefault();
                                ev.stopPropagation();
                                const func = () => {
                                    const obj = db.objectForPrimaryKey('productImage', productImage._id);
                                    if (obj == null)
                                        throw new Error('no productImage');
                                    if (checked) {
                                        obj.flags.push('ignore');
                                    }
                                    else {
                                        obj.flags.remove(obj.flags.indexOf('ignore'));
                                    }
                                };
                                (0, runTransaction_1.runTransaction)(db, func);
                                setIsIgnored(checked);
                            } })] }) })] }));
}
exports.Images = Images;
//# sourceMappingURL=Images.js.map