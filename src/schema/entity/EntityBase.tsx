import Realm from 'realm';

export abstract class EntityBase<T> extends Realm.Object<T> {
    static localRealm: Realm;
}
