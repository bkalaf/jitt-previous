"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductImageTab = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const useWhyDidIUpdate_1 = require("./useWhyDidIUpdate");
const material_1 = require("@mui/material");
const react_1 = require("react");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const pro_solid_svg_icons_1 = require("@fortawesome/pro-solid-svg-icons");
const Images_1 = require("./Images");
const VisuallyHiddenInput_1 = require("./VisuallyHiddenInput");
const useLocalRealm_1 = require("./useLocalRealm");
const realm_1 = require("realm");
const path = __importStar(require("path"));
const fromExtensionToMimeType_1 = require("../util/fromExtensionToMimeType");
const fs = __importStar(require("graceful-fs"));
const useToggler_1 = require("./useToggler");
const react_hook_form_1 = require("react-hook-form");
const Image_1 = require("./Image");
const runTransaction_1 = require("../util/runTransaction");
const useFileSystem_1 = require("./useFileSystem");
const getFolderNames_1 = require("../util/getFolderNames");
const react_hook_form_mui_1 = require("react-hook-form-mui");
const is_1 = require("../common/is");
const generateCaption_1 = require("../util/generateCaption");
const getBaseName_1 = require("./getBaseName");
const ProductImageDisposition_1 = require("../schema/entity/ProductImageDisposition");
const checkFolder_1 = require("../contexts/checkFolder");
const Grid_1 = require("./Grid");
function ProductImageTab(props) {
    var _a;
    (0, useWhyDidIUpdate_1.useWhyDidIUpdate)('ProductImageTab', props);
    const { data, original } = props;
    const realm = (0, useLocalRealm_1.useLocalRealm)();
    const [open, toggleOpen] = (0, useToggler_1.useToggler)(false);
    const [queue, setQueue] = (0, react_1.useState)([]);
    const { products, remBgExt, remBgSuffix, downloads } = (0, useFileSystem_1.useFileSystem)();
    const popQueue = (0, react_1.useCallback)(() => {
        setQueue((prev) => {
            const [, ...tail] = prev;
            return tail;
        });
    }, []);
    const nextInQueue = (0, react_1.useMemo)(() => {
        return queue.length > 0 ? queue[0] : undefined;
    }, [queue]);
    (0, react_1.useEffect)(() => {
        if (queue.length !== 0 && !open) {
            toggleOpen();
        }
        else if (queue.length === 0 && open) {
            toggleOpen();
        }
    }, [open, queue.length, toggleOpen]);
    const onChange = (0, react_1.useCallback)((ev) => {
        console.log(ev.target.files);
        if (ev.target.files == null)
            return;
        setQueue(Array.from(ev.target.files));
        // for (const file of ev.target.files) {
        //     const filename = file.path;
        //     const buffer = file.arrayBuffer();
        //     const takenOn = fs.statSync(filename).ctime;
        //     const func = () => {
        //         realm.create<IProductImage>('productImage', {
        //             _id: new BSON.ObjectId(),
        //             fullpath: filename,
        //             filename: path.basename(filename),
        //             extension: path.extname(filename).slice(0),
        //             mimeType: fromExtensionToMimeType(path.extname(filename).slice(0)),
        //             flags: [],
        //             takenOn: takenOn ?? new Date(Date.now()),
        //             sku: original
        //             // caption, facing
        //         });
        //     };
        // }
    }, []);
    const formContext = (0, react_hook_form_1.useForm)({
        defaultValues: {
            caption: '',
            doNotRemBG: false,
            ignore: false,
            x: 'none',
            y: 'none',
            z: 'none',
            pov: []
            // isUpper: false,
            // isLower: false,
            // isRight: false,
            // isLeft: false,
            // isFront: false,
            // isBack: false,
            // isLogo: false,
            // isTag: false,
            // isDefect: false,
            // isInner: false,
            // isInfo: false,
            // isBarcode: false
        }
    });
    const onSubmit = formContext.handleSubmit((data) => {
        var _a;
        const { caption, doNotRemBG, ignore, pov, x, y, z } = data;
        const filename = (_a = nextInQueue === null || nextInQueue === void 0 ? void 0 : nextInQueue.path) !== null && _a !== void 0 ? _a : '';
        const takenOn = fs.statSync(filename).ctime;
        const folders = (0, getFolderNames_1.getFolderNames)(original);
        const baseDestination = [products, ...folders].join('\\');
        const remBgName = (0, getFolderNames_1.getRemBgName)(filename, remBgSuffix, remBgExt);
        const remBgSource = [downloads, remBgName].join('\\');
        const remBgDestination = [baseDestination, remBgName].join('\\');
        const hasRemBG = fs.existsSync(remBgSource);
        const facing = {
            pov: pov,
            x: x !== 'none' ? x : undefined,
            y: y !== 'none' ? y : undefined,
            z: z !== 'none' ? z : undefined
        };
        const capt = is_1.is.not.nil(caption) ?
            (0, generateCaption_1.generateCaption)(facing)
                .concat(' - ')
                .concat(caption)
            : (0, generateCaption_1.generateCaption)(facing);
        const func = () => {
            realm.create('productImage', {
                _id: new realm_1.BSON.ObjectId(),
                fullpath: filename,
                filename: (0, getBaseName_1.getBaseName)(filename),
                extension: path.extname(filename),
                mimeType: (0, fromExtensionToMimeType_1.fromExtensionToMimeType)(path.extname(filename)),
                flags: [...(doNotRemBG ? ['do-not-rembg'] : []), ...(ignore ? ['ignore'] : [])],
                takenOn: takenOn !== null && takenOn !== void 0 ? takenOn : new Date(Date.now()),
                sku: original,
                hasRemBG,
                disposition: hasRemBG ? ProductImageDisposition_1.ProductImageDisposition.pendingApproval
                    : doNotRemBG ? ProductImageDisposition_1.ProductImageDisposition.ready
                        : ProductImageDisposition_1.ProductImageDisposition.bgRemoval,
                selected: doNotRemBG ? 'original' : undefined,
                facing: facing,
                caption: capt
            });
        };
        (0, runTransaction_1.runTransaction)(realm, func);
        const originalDestination = [baseDestination, (0, getBaseName_1.getBaseName)(filename)].join('\\');
        (0, checkFolder_1.checkPath)(originalDestination, true);
        fs.copyFileSync(filename, originalDestination);
        fs.rmSync(filename);
        if (hasRemBG) {
            (0, checkFolder_1.checkPath)(remBgDestination, true);
            fs.copyFileSync(remBgSource, remBgDestination);
            fs.rmSync(remBgSource);
        }
        formContext.reset();
        popQueue();
    });
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'flex w-screen flex-col', children: [(0, jsx_runtime_1.jsx)("div", { className: 'flex w-full justify-start', children: (0, jsx_runtime_1.jsxs)(material_1.Button, { component: 'label', role: undefined, variant: 'contained', tabIndex: -1, disabled: queue.length > 0, startIcon: (0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: pro_solid_svg_icons_1.faUpload, size: 'lg' }), children: ["Upload file", (0, jsx_runtime_1.jsx)(VisuallyHiddenInput_1.VisuallyHiddenInput, { type: 'file', onChange: onChange })] }) }), open && ((0, jsx_runtime_1.jsx)(material_1.Dialog, { open: open, onClose: toggleOpen, fullScreen: true, children: (0, jsx_runtime_1.jsxs)(react_hook_form_1.FormProvider, Object.assign({}, formContext, { children: [(0, jsx_runtime_1.jsx)(material_1.DialogContent, { children: (0, jsx_runtime_1.jsxs)("div", { className: 'flex flex-col', children: [(0, jsx_runtime_1.jsx)("div", { className: 'flex h-2/3 w-full object-scale-down', children: (0, jsx_runtime_1.jsx)(Image_1.Image, { filepath: (_a = nextInQueue === null || nextInQueue === void 0 ? void 0 : nextInQueue.path) !== null && _a !== void 0 ? _a : '', selected: false, caption: '' }) }), (0, jsx_runtime_1.jsxs)("div", { className: 'h-full w-full', children: [(0, jsx_runtime_1.jsx)(react_hook_form_mui_1.TextFieldElement, { name: 'caption', type: 'text', label: 'Caption', control: formContext.control }), (0, jsx_runtime_1.jsx)(react_hook_form_mui_1.CheckboxElement, { name: 'doNotRemBG', label: 'Do Not Remove BG', control: formContext.control }), (0, jsx_runtime_1.jsx)(react_hook_form_mui_1.CheckboxElement, { name: 'ignore', label: 'Ignore', control: formContext.control }), (0, jsx_runtime_1.jsx)(react_hook_form_mui_1.RadioButtonGroup, { name: 'x', label: 'Facing-X', row: true, control: formContext.control, options: [
                                                    { label: 'Left', id: 'left' },
                                                    { label: 'Right', id: 'right' },
                                                    { label: 'None', id: 'none' }
                                                ] }), (0, jsx_runtime_1.jsx)(react_hook_form_mui_1.RadioButtonGroup, { name: 'y', label: 'Facing-Y', row: true, control: formContext.control, options: [
                                                    { label: 'Front', id: 'front' },
                                                    { label: 'Back', id: 'back' },
                                                    { label: 'None', id: 'none' }
                                                ] }), (0, jsx_runtime_1.jsx)(react_hook_form_mui_1.RadioButtonGroup, { name: 'z', label: 'Facing-Z', control: formContext.control, row: true, options: [
                                                    { label: 'Upper', id: 'upper' },
                                                    { label: 'Lower', id: 'lower' },
                                                    { label: 'None', id: 'none' }
                                                ] }), (0, jsx_runtime_1.jsx)(react_hook_form_mui_1.CheckboxButtonGroup, { label: 'POVs', name: 'pov', control: formContext.control, row: true, options: [
                                                    { label: 'Inner', id: 'inner' },
                                                    { label: 'Barcode', id: 'barcode' },
                                                    { label: 'Tag', id: 'tag' },
                                                    { label: 'Logo', id: 'logo' },
                                                    { label: 'Product Info', id: 'product-info' },
                                                    { label: 'Defect', id: 'defect' },
                                                    { label: 'Enhancer', id: 'enhancer' }
                                                ] })] })] }) }), (0, jsx_runtime_1.jsx)(material_1.DialogActions, { children: (0, jsx_runtime_1.jsx)(material_1.Button, { type: 'button', onClick: onSubmit, variant: 'contained', children: "Submit" }) })] })) })), (0, jsx_runtime_1.jsx)(Grid_1.Grid, { columns: 4, gap: 2, className: 'w-full', children: data.map((image, ix) => ((0, jsx_runtime_1.jsx)(Grid_1.Item, { className: 'flex w-full flex-col', children: (0, jsx_runtime_1.jsx)(Images_1.Images, { productImage: image }) }, ix))) })] }));
}
exports.ProductImageTab = ProductImageTab;
//# sourceMappingURL=ProductImageTab.js.map