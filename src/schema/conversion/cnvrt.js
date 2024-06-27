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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = exports.ofType = exports.$cnvrt = exports.cnvrt = exports.cnvrtPrimitives = exports.isDataStructure = exports.isPrimitive = void 0;
const dayjs_1 = __importDefault(require("dayjs"));
const realm_1 = __importStar(require("realm"));
const getProperty_1 = require("../../common/object/getProperty");
const objectMap_1 = require("../../common/object/objectMap");
const isPrimitive = (type) => ['objectId', 'uuid', 'string', 'int', 'double', 'float', 'decimal128', 'bool', 'date', 'data'].includes(type);
exports.isPrimitive = isPrimitive;
const isDataStructure = (type) => ['list', 'dictionary', 'set'].includes(type);
exports.isDataStructure = isDataStructure;
const cnvrtPrimitives = () => ({
    string: (value) => value == null ? undefined
        : value != null && value.length === 0 ? undefined
            : value,
    objectId: (value) => value == null ? undefined
        : value instanceof realm_1.BSON.ObjectId ? value
            : new realm_1.BSON.ObjectId(value),
    uuid: (value) => value == null ? undefined
        : value instanceof realm_1.BSON.UUID ? value
            : new realm_1.BSON.UUID(value),
    int: (value) => value == null ? undefined
        : typeof value === 'string' ? parseInt(value, 10)
            : value,
    double: (value) => value == null ? undefined
        : typeof value === 'string' ? parseFloat(value)
            : value,
    decimal128: (value) => value == null ? undefined
        : typeof value === 'string' ? parseFloat(value)
            : value,
    float: (value) => value == null ? undefined
        : typeof value === 'string' ? parseFloat(value)
            : value,
    date: (value) => value == null ? undefined
        : value instanceof Date ? value
            : typeof value === 'string' ? new Date(Date.parse(value))
                : dayjs_1.default.isDayjs(value) ? value.toDate()
                    : undefined,
    bool: (value) => value == null ? undefined
        : typeof value === 'boolean' ? value
            : value === 'true' ? true
                : value === 'false' ? false
                    : undefined,
    data: (value) => value
});
exports.cnvrtPrimitives = cnvrtPrimitives;
// 'toDate' in value ? value.toDate()
const cnvrt = (types, objectType) => (Object.assign(Object.assign({}, (0, exports.cnvrtPrimitives)()), { object: (value, override = false) => {
        console.log(`convert object`, objectType, types, value);
        if (objectType == null)
            throw new Error(`no objectType`);
        const schema = types.find((x) => x.name === objectType);
        if (schema == null)
            throw new Error(`schema not found for : ${objectType}`);
        const { embedded } = Object.assign({ embedded: false }, schema);
        return (value == null ? value
            : value instanceof realm_1.default.Object && !(embedded || override) ? value
                : Object.fromEntries(Object.entries(schema.properties).map(([name, propSchema]) => {
                    console.log(`...${name}`);
                    if (typeof propSchema === 'string')
                        throw new Error('string type');
                    return [name, (0, exports.ofType)(types, propSchema)((0, getProperty_1.getProperty)(name, value))];
                })));
        // if (override) {
        //     // || embedded
        // }
        // return cnvrt(types, objectType).objectId(value._id);
    }, list: (value) => {
        if (objectType == null)
            throw new Error(`no objectType`);
        if ((0, exports.isPrimitive)(objectType)) {
            const func = (0, exports.$cnvrt)(types, objectType)[objectType];
            return (value !== null && value !== void 0 ? value : []).map(func({ optional: false }));
        }
        const func = (0, exports.$cnvrt)(types, objectType).object({ optional: false });
        return (value !== null && value !== void 0 ? value : []).map(func);
    }, set: (value) => {
        if (objectType == null)
            throw new Error(`no objectType`);
        if ((0, exports.isPrimitive)(objectType)) {
            const func = (0, exports.$cnvrt)(types, objectType)[objectType];
            return (value !== null && value !== void 0 ? value : []).map(func({ optional: false }));
        }
        const func = (0, exports.$cnvrt)(types, objectType).object({ optional: false });
        return (value !== null && value !== void 0 ? value : []).map(func);
    }, dictionary: (value) => {
        if (objectType == null)
            throw new Error(`no objectType`);
        if ((0, exports.isPrimitive)(objectType)) {
            const func = (0, exports.$cnvrt)(types, objectType)[objectType];
            return Object.fromEntries(Object.entries(value !== null && value !== void 0 ? value : {}).map(([k, v]) => [k, func({ optional: false })(v)]));
        }
        const func = (0, exports.$cnvrt)(types, objectType).object({ optional: false });
        return Object.fromEntries(Object.entries(value !== null && value !== void 0 ? value : {}).map(([k, v]) => [k, func({ optional: false })(v)]));
    }, mixed: (value) => value }));
exports.cnvrt = cnvrt;
function toConvert(func) {
    return ({ optional, default: defaultValue }) => (value) => {
        console.log(`value`, value);
        const opt = optional !== null && optional !== void 0 ? optional : false;
        const newValue = func(value);
        return (newValue == null ?
            opt ? newValue
                : defaultValue
            : newValue);
    };
}
const $cnvrt = (types, objectType) => (0, objectMap_1.objectMap)(toConvert)((0, exports.cnvrt)(types, objectType));
exports.$cnvrt = $cnvrt;
const ofType = (types, propSchema) => {
    const { type, objectType } = propSchema;
    return (0, exports.$cnvrt)(types, objectType)[type](propSchema);
};
exports.ofType = ofType;
const convert = (types, objectType) => (value) => ((0, exports.isPrimitive)(objectType) ? (0, exports.cnvrtPrimitives)()[objectType](value) : (0, exports.cnvrt)(types, objectType).object(value, true));
exports.convert = convert;
//# sourceMappingURL=cnvrt.js.map