"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductDetailsTab = exports.convertProduct = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const useLocalRealm_1 = require("./useLocalRealm");
const react_hook_form_1 = require("react-hook-form");
const runTransaction_1 = require("../util/runTransaction");
const useConvert_1 = require("./useConvert");
const realm_1 = require("realm");
const Grid_1 = require("./Grid");
const useColumns_1 = require("./useColumns");
const dayjs_1 = __importDefault(require("dayjs"));
const react_1 = require("react");
const product_1 = require("../schema/entity/product");
const EditControls_1 = require("../components/controls/EditControls");
const toJSON_1 = require("../components/Views/renderProperties/toJSON");
function convertProduct(product) {
    const _a = (0, toJSON_1.toJSON)(product), { testedOn, manufactureDate } = _a, rest = __rest(_a, ["testedOn", "manufactureDate"]);
    return Object.assign(Object.assign({}, rest), { testedOn: testedOn == null ? undefined : (0, dayjs_1.default)(testedOn), manufactureDate: manufactureDate == null ? undefined : (0, dayjs_1.default)(manufactureDate) });
}
exports.convertProduct = convertProduct;
function ProductDetailsTab(props) {
    const { original, objectType } = props;
    const columns = (0, useColumns_1.useDirectColumns)(objectType);
    const defaultValues = (0, react_1.useMemo)(() => convertProduct(original), [original]);
    const formContext = (0, react_hook_form_1.useForm)({
        defaultValues: product_1.Product.init(),
        values: defaultValues
    });
    const convert = (0, useConvert_1.useConvert)('object', 'product');
    const db = (0, useLocalRealm_1.useLocalRealm)();
    return ((0, jsx_runtime_1.jsx)(react_hook_form_1.FormProvider, Object.assign({}, formContext, { children: (0, jsx_runtime_1.jsxs)(Grid_1.Grid, { columns: 4, gap: 2, className: 'w-screen', children: [(0, jsx_runtime_1.jsx)(EditControls_1.EditControls, { columns: columns }), (0, jsx_runtime_1.jsx)(Grid_1.Item, { className: 'col-span-4 col-start-1 flex w-full justify-center', children: (0, jsx_runtime_1.jsx)(material_1.Button, { type: 'button', variant: 'contained', color: 'metal', disabled: !formContext.formState.isDirty, onClick: formContext.handleSubmit((data) => {
                            console.info('data', data);
                            const converted = convert(data);
                            console.info('converted', converted);
                            const func = () => {
                                db.create('product', converted, realm_1.Realm.UpdateMode.Modified);
                            };
                            (0, runTransaction_1.runTransaction)(db, func);
                        }), children: "Submit" }) })] }) })));
}
exports.ProductDetailsTab = ProductDetailsTab;
//# sourceMappingURL=ProductDetailsTab.js.map