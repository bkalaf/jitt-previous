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
exports.is = exports.either = exports.both = void 0;
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
///<reference path="./../global.d.ts" />
const realm_1 = __importStar(require("realm"));
const cnvrt_1 = require("../schema/conversion/cnvrt");
function typeCheck(name) {
    return function (obj) {
        return (obj == null ?
            name === 'undefined' ?
                typeof obj === 'undefined'
                : obj == null && typeof obj === 'object'
            : typeof obj === name);
    };
}
function instanceCheck(Ctor) {
    return (obj) => (obj == null ? false : obj instanceof Ctor);
}
const checkString = typeCheck('string');
const checkNumber = typeCheck('number');
const checkBoolean = typeCheck('boolean');
const checkSymbol = typeCheck('symbol');
const checkBigint = typeCheck('bigint');
// eslint-disable-next-line @typescript-eslint/ban-types
const checkFunction = typeCheck('function');
const checkUndefined = typeCheck('undefined');
const checkNull = typeCheck('null');
const checkPromise = instanceCheck(Promise);
const checkMap = instanceCheck(Map);
const checkDate = instanceCheck(Date);
const checkArrayBuffer = instanceCheck(ArrayBuffer);
const checkObjectId = instanceCheck(realm_1.BSON.ObjectId);
const checkUUID = instanceCheck(realm_1.BSON.UUID);
const checkBinary = instanceCheck(realm_1.BSON.Binary);
const checkLinkingObjects = instanceCheck(realm_1.default.Types.LinkingObjects);
const checkArray = (obj) => Array.isArray(obj);
const checkObject = (obj) => obj != null && typeof obj === 'object' && Object.getPrototypeOf(obj) === Object.prototype;
const checkDbList = instanceCheck(realm_1.default.Types.List);
const checkDbDictionary = instanceCheck(realm_1.default.Types.Dictionary);
const checkDbSet = instanceCheck(realm_1.default.Types.Set);
const checkRealmObj = instanceCheck(realm_1.default.Object);
const checkEmptyString = (x) => checkString(x) && x.length === 0;
function both(p1, p2) {
    return (obj) => p1(obj) && p2(obj);
}
exports.both = both;
function either(p1, p2) {
    return (obj) => p1(obj) || p2(obj);
}
exports.either = either;
const checkNullOrUndefined = either(checkNull, checkUndefined);
const checkNil = either(checkNullOrUndefined, checkEmptyString);
const _is = {
    string: checkString,
    number: checkNumber,
    boolean: checkBoolean,
    symbol: checkSymbol,
    bigint: checkBigint,
    function: checkFunction,
    null: checkNull,
    undefined: checkUndefined,
    array: checkArray,
    promise: checkPromise,
    object: checkObject,
    dbList: checkDbList,
    dbDictionary: checkDbDictionary,
    dbSet: checkDbSet,
    realmObj: checkRealmObj,
    emptyString: checkEmptyString,
    nullOrUndef: checkNullOrUndefined,
    nil: checkNil,
    map: checkMap,
    date: checkDate,
    arrayBuffer: checkArrayBuffer,
    objectId: checkObjectId,
    uuid: checkUUID,
    binary: checkBinary,
    linkingObjects: checkLinkingObjects,
    primitive: cnvrt_1.isPrimitive
};
function not(pred1) {
    return (obj) => !pred1(obj);
}
exports.is = Object.assign(Object.assign({}, _is), { not: Object.fromEntries(Object.entries(_is).map(([k, v]) => [k, (o) => not(v)(o)])) });
// console.log(checkUndefined(undefined));
// console.log(checkUndefined(null))
// console.log(checkUndefined(''))
// console.log(checkNull(undefined));
// console.log(checkNull(null))
// console.log(checkNull(''))
// console.log(checkPromise(undefined))
// console.log(checkPromise(null))
// console.log(checkPromise({}))
// console.log(checkPromise(Promise.resolve({})))
// console.log(checkPromise(Promise.reject(new Error())))
// console.log(checkArray(undefined))
// console.log(checkArray(null))
// console.log(checkArray({}))
// console.log(checkArray([]))
// console.log(checkObject(undefined));
// console.log(checkObject(null));
// console.log(checkObject([]));
// console.log(checkObject(new Object()));
// console.log(checkObject({}));
// console.log(is.emptyString(''))
// console.log(is.emptyString('test'))
// console.log(is.emptyString(undefined))
// console.log(checkNullOrUndefined(null));
// console.log(checkNullOrUndefined(undefined));
// console.log(checkNullOrUndefined(''));
// console.log(checkNil(null));
// console.log(checkNil(undefined));
// console.log(checkNil(''));
// console.log(checkNil({}));
// console.log(not(checkNil)(''));
// console.log(not(checkNil)({}));
// console.log(is.not.nil(''));
// console.log(is.not.array([]))
// console.log(is.not.array(''))
// console.log(is.not.nil({}));
// const slice = (list: any[], index: number) => [...list.slice(0, index), ...(list.length === index ? [] : list.slice(index + 1))]
// console.log(slice([0, 1, 2, 3, 4, 5, 6], 2))
// console.log(slice([0, 1, 2, 3, 4, 5, 6], 0))
// console.log(slice([0, 1, 2, 3, 4, 5, 6], 5))
// console.log(slice([0, 1, 2, 3, 4, 5, 6], 6))
// console.log(slice([0, 1, 2, 3, 4, 5, 6], 7))
// console.log(roundUp(5)(76));
// console.log(roundUp(5)(75));
// console.log(roundUp(5)(74));
// console.log(_roundUp(10, 91));
// console.log(calculateSize(2))
// console.log(calculateSize(100))
// console.log(calculateSize(101))
// console.log(cc()(10));
// console.log(cc()(13));
// console.log(cc(5)(13));
// console.log(cc(9)(11));
// console.log(cc(4)(11));
// export function testLoggingLevel(setAs: ConsoleLoggingLevel, testFor: ConsoleLoggingLevel) {
//     const LOG_LEVEL = setAs;
//     const shouldLog = (testFor: ConsoleLoggingLevel) => {
//         const logLevelNum = logLevels[LOG_LEVEL];
//         return logLevelNum <= logLevels[testFor]
//     }
//     return shouldLog(testFor)
// }
// console.log(testLoggingLevel('log', 'warn'));
// console.log(testLoggingLevel('info', 'log'));
// console.log(testLoggingLevel('info', 'info'));
// console.log(testLoggingLevel('warn', 'error'));
// console.log(testLoggingLevel('error', 'info'));
//# sourceMappingURL=is.js.map