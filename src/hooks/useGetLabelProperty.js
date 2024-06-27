"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGetLabelProperty = void 0;
const is_1 = require("../common/is");
const useGetSchema_1 = require("./useGetSchema");
function useGetLabelProperty(objectType) {
    const thisSchema = (0, useGetSchema_1.useGetSchema)(objectType);
    if (is_1.is.primitive(objectType)) {
        return undefined;
    }
    if (thisSchema == null)
        throw new Error(`no schema for ${objectType}`);
    if (thisSchema.ctor != null && 'labelProperty' in thisSchema.ctor) {
        return thisSchema.ctor.labelProperty;
    }
    throw new Error(`no labelProperty for : ${objectType}`);
}
exports.useGetLabelProperty = useGetLabelProperty;
//# sourceMappingURL=useGetLabelProperty.js.map