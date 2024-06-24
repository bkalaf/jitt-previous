import Realm from 'realm';


export abstract class EntityBase<T> extends Realm.Object<T> implements T {
    static localRealm: Realm;
}
