import * as Realm from 'realm';
import { ignore } from '../common/ignore';

export function runTransaction<T>(realm: Realm, func: () => T) {
    if (realm.isInTransaction) {
        return func();
    }
    let result: T | undefined;
    realm.write(() => {
        result = func();
        if (result instanceof Promise) {
            result.then(() => ignore())
        }
    });
    return result as T;
}
