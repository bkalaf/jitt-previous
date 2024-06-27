import * as Realm from 'realm';
export declare function runTransaction<T>(realm: Realm, func: () => T): T;
