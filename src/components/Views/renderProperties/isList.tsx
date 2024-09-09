import Realm from 'realm';

export function isList<T>(list: DBList<T> | T[]): list is DBList<T> {
    return list instanceof Realm.Types.List;
}
