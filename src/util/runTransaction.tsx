import * as Realm from 'realm';

export function runTransaction<T>(realm: Realm, func: () => T) {
    if (realm.isInTransaction) {
        return func();
    }
    let result: T | undefined;
    realm.write(() => {
        result = func();
    });
    return result as T;
}
