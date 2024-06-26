import { is } from '../common/is';
import { BSON } from 'realm';

export function deepEqual<T>(obj1?: T, obj2?: T): boolean {
    function inner(obj?: T) {
        if (obj == null) {
            if (typeof obj === 'undefined') return 'undefined';
            if (typeof obj === 'object') return 'null';
            return 'unknown';
        }
        if (typeof obj === 'object') {
            return (
                is.array(obj) ? 'array'
                : is.promise(obj) ? 'promise'
                : is.dbList(obj) ? 'Realm.List'
                : is.dbDictionary(obj) ? 'Realm.Dictionary'
                : is.dbSet(obj) ? 'Realm.Set'
                : is.realmObj(obj) ? 'Realm.Object'
                : is.linkingObjects(obj) ? 'Realm.LinkingObjects'
                : is.arrayBuffer(obj) ? 'data'
                : is.date(obj) ? 'date'
                : is.objectId(obj) ? 'objectId'
                : is.uuid(obj) ? 'uuid'
                : is.binary(obj) ? 'binary'
                : is.object(obj) ? 'object'
                : 'unknown'
            );
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
            return type2 === 'objectId' ? (obj2 as BSON.ObjectId).toHexString().localeCompare(obj1 as string) === 0 : obj1 === obj2;
        case 'undefined':
            return type2 === 'undefined';
        case 'function':
            // eslint-disable-next-line @typescript-eslint/ban-types
            return type2 === 'function' ? (obj1 as Function).name === (obj2 as Function).name : false;
        case 'null':
            return type2 === 'null';
        case 'promise':
            return type2 === 'promise';
        case 'objectId':
            return (
                type2 === 'objectId' ? (obj1 as BSON.ObjectId).toHexString().localeCompare((obj2 as BSON.ObjectId).toHexString()) === 0
                : type2 === 'string' ? (obj1 as BSON.ObjectId).toHexString().localeCompare(obj2 as string) === 0
                : false
            );
        case 'date':
            return type2 === 'date' ? obj1 === obj2 : false;
        case 'uuid':
            return (
                type2 === 'uuid' ? (obj1 as BSON.ObjectId).toHexString().localeCompare((obj2 as BSON.UUID).toHexString()) === 0
                : type2 === 'string' ? (obj1 as BSON.UUID).toHexString().localeCompare(obj2 as string) === 0
                : false
            );
        case 'binary':
            return type2 === 'binary' ? obj1 === obj2 : false;
        case 'array':
        case 'Realm.List':
        case 'Realm.Set':
            return type2 === 'array' || type2 === 'Realm.Set' || type2 === 'Realm.List' ? (obj1 as []).length === (obj2 as []).length && (obj1 as []).every((item) => (obj2 as []).some((item2) => deepEqual(item, item2))) : false;
        case 'Realm.Object':
            return (
                (obj1 as Realm.Object).objectSchema().name === (obj2 as Realm.Object).objectSchema().name &&
                Object.keys((obj1 as Realm.Object).objectSchema().properties).every((key) => deepEqual((obj1 as Realm.Object)[key as keyof Realm.Object], (obj2 as Realm.Object)[key as keyof Realm.Object]))
            );
        case 'Realm.LinkingObjects':
            return false;
        case 'data':
            return false;
        case 'object':
        case 'Realm.Dictionary':
            return type2 === 'object' || type2 === 'Realm.Dictionary' ?
                    Object.entries(obj1 as Record<string, any>).length === Object.entries(obj2 as Record<string, any>).length &&
                        Object.keys(obj1 as Record<string, any>).every((key) => deepEqual((obj1 as Record<string, any>)[key], (obj2 as Record<string, any>)[key]))
                :   false;
        //    (obj1 as Record<string, any>)[key] === (obj2 as Record<string, any>)[key])
        case 'unknown':
            return false;
    }
}
