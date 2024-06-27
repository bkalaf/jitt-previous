"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepEqual = void 0;
const is_1 = require("../common/is");
function deepEqual(obj1, obj2) {
    function inner(obj) {
        if (obj == null) {
            if (typeof obj === 'undefined')
                return 'undefined';
            if (typeof obj === 'object')
                return 'null';
            return 'unknown';
        }
        if (typeof obj === 'object') {
            return (is_1.is.array(obj) ? 'array'
                : is_1.is.promise(obj) ? 'promise'
                    : is_1.is.dbList(obj) ? 'Realm.List'
                        : is_1.is.dbDictionary(obj) ? 'Realm.Dictionary'
                            : is_1.is.dbSet(obj) ? 'Realm.Set'
                                : is_1.is.realmObj(obj) ? 'Realm.Object'
                                    : is_1.is.linkingObjects(obj) ? 'Realm.LinkingObjects'
                                        : is_1.is.arrayBuffer(obj) ? 'data'
                                            : is_1.is.date(obj) ? 'date'
                                                : is_1.is.objectId(obj) ? 'objectId'
                                                    : is_1.is.uuid(obj) ? 'uuid'
                                                        : is_1.is.binary(obj) ? 'binary'
                                                            : is_1.is.object(obj) ? 'object'
                                                                : 'unknown');
        }
        return typeof obj;
    }
    const type1 = inner(obj1);
    const type2 = inner(obj2);
    switch (type1) {
        case 'number':
        case 'bigint':
        case 'boolean':
        case 'symbol':
            return obj1 === obj2;
        case 'string':
            return type2 === 'objectId' ? obj2.toHexString().localeCompare(obj1) === 0 : obj1 === obj2;
        case 'undefined':
            return type2 === 'undefined';
        case 'function':
            // eslint-disable-next-line @typescript-eslint/ban-types
            return type2 === 'function' ? obj1.name === obj2.name : false;
        case 'null':
            return type2 === 'null';
        case 'promise':
            return type2 === 'promise';
        case 'objectId':
            return (type2 === 'objectId' ? obj1.toHexString().localeCompare(obj2.toHexString()) === 0
                : type2 === 'string' ? obj1.toHexString().localeCompare(obj2) === 0
                    : false);
        case 'date':
            return type2 === 'date' ? obj1 === obj2 : false;
        case 'uuid':
            return (type2 === 'uuid' ? obj1.toHexString().localeCompare(obj2.toHexString()) === 0
                : type2 === 'string' ? obj1.toHexString().localeCompare(obj2) === 0
                    : false);
        case 'binary':
            return type2 === 'binary' ? obj1 === obj2 : false;
        case 'array':
        case 'Realm.List':
        case 'Realm.Set':
            return type2 === 'array' || type2 === 'Realm.Set' || type2 === 'Realm.List' ? obj1.length === obj2.length && obj1.every((item) => obj2.some((item2) => deepEqual(item, item2))) : false;
        case 'Realm.Object':
            return (obj1.objectSchema().name === obj2.objectSchema().name &&
                Object.keys(obj1.objectSchema().properties).every((key) => deepEqual(obj1[key], obj2[key])));
        case 'Realm.LinkingObjects':
            return false;
        case 'data':
            return false;
        case 'object':
        case 'Realm.Dictionary':
            return type2 === 'object' || type2 === 'Realm.Dictionary' ?
                Object.entries(obj1).length === Object.entries(obj2).length &&
                    Object.keys(obj1).every((key) => deepEqual(obj1[key], obj2[key]))
                : false;
        //    (obj1 as Record<string, any>)[key] === (obj2 as Record<string, any>)[key])
        case 'unknown':
            return false;
    }
}
exports.deepEqual = deepEqual;
//# sourceMappingURL=deepEqual.js.map