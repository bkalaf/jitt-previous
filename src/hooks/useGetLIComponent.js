"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGetLIComponent = void 0;
const is_1 = require("../common/is");
const getProperty_1 = require("../common/object/getProperty");
const useGetSchema_1 = require("./useGetSchema");
const liComponents_1 = require("./liComponents");
function useGetLIComponent(objectType) {
    const thisSchema = (0, useGetSchema_1.useGetSchema)(objectType);
    if (is_1.is.primitive(objectType)) {
        return liComponents_1.liComponents[objectType];
    }
    if (thisSchema == null)
        throw new Error(`no schema for ${objectType}`);
    if (thisSchema.ctor != null && 'liComponent' in thisSchema.ctor) {
        return thisSchema.ctor.liComponent;
    }
    if (thisSchema.ctor != null && 'labelProperty' in thisSchema.ctor) {
        return (value) => () => (value != null ? (0, getProperty_1.getProperty)(thisSchema.ctor.labelProperty, value) : '');
    }
    throw new Error(`no liComponent for : ${objectType}`);
}
exports.useGetLIComponent = useGetLIComponent;
//# sourceMappingURL=useGetLIComponent.js.map