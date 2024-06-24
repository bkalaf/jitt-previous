// eslint-disable-next-line @typescript-eslint/triple-slash-reference
///<reference path="./../global.d.ts" />
import Realm, { BSON } from "realm";
import { isPrimitive } from '../schema/conversion/cnvrt';

function typeCheck<T>(name: string) {
    return function (obj?: any): obj is T {
        return obj == null ? (name === 'undefined' ? typeof obj === 'undefined' : obj == null && typeof obj === 'object') : typeof obj === name;
    };
}
function instanceCheck<T>(Ctor: { new (...args: any[]): T }) {
    return (obj?: any): obj is T => (obj == null ? false : obj instanceof Ctor);
}

const checkString = typeCheck<string>('string');
const checkNumber = typeCheck<number>('number');
const checkBoolean = typeCheck<boolean>('boolean');
const checkSymbol = typeCheck<symbol>('symbol');
const checkBigint = typeCheck<bigint>('bigint');
// eslint-disable-next-line @typescript-eslint/ban-types
const checkFunction = typeCheck<Function>('function');
const checkUndefined = typeCheck<undefined>('undefined');
const checkNull = typeCheck<null>('null');
const checkPromise = instanceCheck<Promise<any>>(Promise);
const checkMap = instanceCheck<Map<any, any>>(Map);
const checkDate = instanceCheck<Date>(Date);
const checkArrayBuffer = instanceCheck<ArrayBuffer>(ArrayBuffer);
const checkObjectId = instanceCheck<BSON.ObjectId>(BSON.ObjectId);
const checkUUID = instanceCheck<BSON.UUID>(BSON.UUID);
const checkBinary = instanceCheck<BSON.Binary>(BSON.Binary);
const checkLinkingObjects = instanceCheck<Realm.Types.LinkingObjects<any, any>>(Realm.Types.LinkingObjects);
const checkArray = (obj?: any): obj is any[] => Array.isArray(obj);
const checkObject = (obj?: any): obj is Record<string, any> => obj != null && typeof obj === 'object' && Object.getPrototypeOf(obj) === Object.prototype;
const checkDbList = instanceCheck<Realm.Types.List<any>>(Realm.Types.List);
const checkDbDictionary = instanceCheck<Realm.Types.Dictionary<any>>(Realm.Types.Dictionary);
const checkDbSet = instanceCheck<Realm.Types.Set<any>>(Realm.Types.Set);
const checkRealmObj = instanceCheck<Realm.Object<any>>(Realm.Object);
const checkEmptyString = (x?: any): x is '' => checkString(x) && x.length === 0;

export function both<T>(p1: Predicate<any>, p2: Predicate<any>) {
    return (obj?: any): obj is T => p1(obj) && p2(obj);
}
export function either<T>(p1: Predicate<any>, p2: Predicate<any>) {
    return (obj?: any): obj is T => p1(obj) || p2(obj);
}
const checkNullOrUndefined = either<null | undefined>(checkNull, checkUndefined);
const checkNil = either<null | undefined | ''>(checkNullOrUndefined, checkEmptyString);

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
    primitive: isPrimitive
};

function not<T, U>(pred1: Predicate<T>) {
    return (obj?: any): obj is Exclude<T, U> => !pred1(obj);
}

export const is = {
    ..._is,
    not: Object.fromEntries(Object.entries(_is).map(([k, v]) => [k, (o?: any) => not<any, unknown>(v)(o)] as [keyof typeof _is, (x?: any) => boolean])) as Record<keyof typeof _is, (x?: any) => boolean>
};

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
