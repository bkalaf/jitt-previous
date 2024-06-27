import Realm from 'realm';
export declare abstract class EntityBase<T> extends Realm.Object<T> {
    static localRealm: Realm;
}
