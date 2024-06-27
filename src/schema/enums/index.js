"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.attributePaths = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const enum_info_json_1 = __importDefault(require("./enum-info.json"));
const react_hook_form_1 = require("react-hook-form");
const react_hook_form_mui_1 = require("react-hook-form-mui");
// fs.writeFileSync('enum-info.json', JSON.stringify($masterEnum, null, '\t'));
function CheckboxValueControl() {
    const formContext = (0, react_hook_form_1.useFormContext)();
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(react_hook_form_mui_1.CheckboxElement, { name: 'value', label: 'Value', control: formContext.control }), (0, jsx_runtime_1.jsx)(react_hook_form_mui_1.CheckboxElement, { name: 'unset', label: 'Value', hidden: true, className: 'hidden', checked: true })] }));
}
function TextValueControl() {
    const formContext = (0, react_hook_form_1.useFormContext)();
    return (0, jsx_runtime_1.jsx)(react_hook_form_mui_1.TextFieldElement, { name: 'value', label: 'Value', control: formContext.control, type: 'text' });
}
function toSelectValueControl(enumKey) {
    const options = enum_info_json_1.default[enumKey].sort((l, r) => { var _a, _b, _c; return (_c = (_a = l.text) === null || _a === void 0 ? void 0 : _a.localeCompare((_b = r === null || r === void 0 ? void 0 : r.text) !== null && _b !== void 0 ? _b : '')) !== null && _c !== void 0 ? _c : 0; });
    return function SelectValueControl() {
        const formContext = (0, react_hook_form_1.useFormContext)();
        return (0, jsx_runtime_1.jsx)(react_hook_form_mui_1.SelectElement, { name: 'value', label: 'Value', labelKey: 'text', valueKey: 'key', control: formContext.control, options: options });
    };
}
exports.attributePaths = [
    {
        key: 'flags.isMediaMail',
        text: 'isMediaMail',
        Component: CheckboxValueControl
    },
    {
        key: 'flags.hasInstructionManual',
        text: 'hasInstructionManual',
        Component: CheckboxValueControl
    },
    {
        key: 'itemType',
        text: 'itemType',
        Component: TextValueControl
    },
    {
        key: 'gender',
        text: 'gender',
        Component: toSelectValueControl('genders')
    },
    {
        key: 'closureType',
        text: 'closureType',
        Component: toSelectValueControl('closureTypes')
    },
    {
        key: 'fitType',
        text: 'fitType',
        Component: toSelectValueControl('fitTypes')
    },
    {
        key: 'legStyle',
        text: 'legStyle',
        Component: toSelectValueControl('legStyles')
    },
    {
        key: 'lengthType',
        text: 'lengthType',
        Component: toSelectValueControl('garmentLengths')
    },
    {
        key: 'lifestyleType',
        text: 'lifestyleType',
        Component: toSelectValueControl('lifestyleTypes')
    },
    {
        key: 'pocketType',
        text: 'pocketType',
        Component: toSelectValueControl('pocketTypes')
    },
    {
        key: 'riseType',
        text: 'riseType',
        Component: toSelectValueControl('riseTypes')
    },
    {
        key: 'bootType',
        text: 'bootType',
        Component: toSelectValueControl('bootTypes')
    },
    {
        key: 'heightMapType',
        text: 'heightMapType',
        Component: toSelectValueControl('heightMaps')
    },
    {
        key: 'shoeHeelType',
        text: 'shoeHeelType',
        Component: toSelectValueControl('shoeHeelTypes')
    },
    {
        key: 'shoeWidth',
        text: 'shoeWidth',
        Component: toSelectValueControl('shoeWidths')
    },
    {
        key: 'strapType',
        text: 'strapType',
        Component: toSelectValueControl('strapTypes')
    },
    {
        key: 'toeStyle',
        text: 'toeStyle',
        Component: toSelectValueControl('toeStyles')
    },
    {
        key: 'swimsuitBottomStyle',
        text: 'swimsuitBottomStyle',
        Component: toSelectValueControl('swimsuitBottomStyles')
    },
    {
        key: 'swimsuitTopStyle',
        text: 'swimsuitTopStyle',
        Component: toSelectValueControl('swimsuitTopStyles')
    },
    {
        key: 'backlineType',
        text: 'backlineType',
        Component: toSelectValueControl('backlineTypes')
    },
    {
        key: 'collarType',
        text: 'collarType',
        Component: toSelectValueControl('collarTypes')
    },
    {
        key: 'cuffType',
        text: 'cuffType',
        Component: toSelectValueControl('cuffTypes')
    },
    {
        key: 'dressType',
        text: 'dressType',
        Component: toSelectValueControl('dressTypes')
    },
    {
        key: 'neckType',
        text: 'neckType',
        Component: toSelectValueControl('neckTypes')
    },
    {
        key: 'sleeveType',
        text: 'sleeveType',
        Component: toSelectValueControl('sleeveTypes')
    },
    {
        key: 'suitType',
        text: 'suitType',
        Component: toSelectValueControl('suitTypes')
    },
    {
        key: 'sleeveLength',
        text: 'sleeveLength',
        Component: toSelectValueControl('sleeveLengths')
    },
    {
        key: 'bookGenre',
        text: 'bookGenre',
        Component: toSelectValueControl('bookGenres')
    },
    {
        key: 'bookType',
        text: 'bookType',
        Component: toSelectValueControl('bookTypes')
    },
    {
        key: 'cableType',
        text: 'cableType',
        Component: toSelectValueControl('cableTypes')
    },
    {
        key: 'language',
        text: 'language',
        Component: toSelectValueControl('languages')
    },
    {
        key: 'videoFormat',
        text: 'videoFormat',
        Component: toSelectValueControl('videoFormatTypes')
    },
    {
        key: 'movieRating',
        text: 'movieRating',
        Component: toSelectValueControl('movieRatings')
    },
    {
        key: 'videoGenre',
        text: 'videoGenre',
        Component: toSelectValueControl('movieGenres')
    },
    {
        key: 'tvRating',
        text: 'tvRating',
        Component: toSelectValueControl('tvRatings')
    },
    {
        key: 'videoType',
        text: 'videoType',
        Component: toSelectValueControl('videoTypes')
    },
    {
        key: 'consoleType',
        text: 'consoleType',
        Component: toSelectValueControl('consoleTypes')
    },
    {
        key: 'musicFormat',
        text: 'musicFormat',
        Component: toSelectValueControl('musicFormatTypes')
    },
    {
        key: 'musicGenre',
        text: 'musicGenre',
        Component: toSelectValueControl('musicGenres')
    },
    {
        key: 'os',
        text: 'os',
        Component: toSelectValueControl('operatingSystems')
    },
    {
        key: 'metal',
        text: 'metal',
        Component: toSelectValueControl('metalTypes')
    },
    {
        key: 'applianceType',
        text: 'applianceType',
        Component: toSelectValueControl('applianceTypes')
    },
    {
        key: 'clubType',
        text: 'clubType',
        Component: toSelectValueControl('clubTypes')
    },
    {
        key: 'flexType',
        text: 'flexType',
        Component: toSelectValueControl('flexTypes')
    },
    {
        key: 'handOrientation',
        text: 'handOrientation',
        Component: toSelectValueControl('handOrientations')
    },
    {
        key: 'ironType',
        text: 'ironType',
        Component: toSelectValueControl('ironTypes')
    },
    {
        key: 'shaftType',
        text: 'shaftType',
        Component: toSelectValueControl('shaftTypes')
    },
    {
        key: 'wedgeType',
        text: 'wedgeType',
        Component: toSelectValueControl('wedgeTypes')
    },
    {
        key: 'material',
        text: 'material',
        Component: toSelectValueControl('materials')
    },
    {
        key: 'driveType',
        text: 'driveType',
        Component: toSelectValueControl('driveTypes')
    },
    {
        key: 'driveInterface',
        text: 'driveInterface',
        Component: toSelectValueControl('driveInterfaces')
    },
    {
        key: 'driveForm',
        text: 'driveForm',
        Component: toSelectValueControl('driveFormFactors')
    },
    {
        key: 'memoryForm',
        text: 'memoryForm',
        Component: toSelectValueControl('memoryFormFactors')
    },
    {
        key: 'memoryType',
        text: 'memoryType',
        Component: toSelectValueControl('memoryTypes')
    },
    {
        key: 'casLatency',
        text: 'casLatency',
        Component: toSelectValueControl('casLatency')
    },
    {
        key: 'compatibleDevices',
        text: 'compatibleDevices',
        Component: toSelectValueControl('compatibleDevices')
    }
];
// eslint-disable-next-line @typescript-eslint/ban-types
const $me = Object.assign(Object.assign({}, enum_info_json_1.default), { attributePaths: exports.attributePaths });
exports.default = $me;
//# sourceMappingURL=index.js.map