import { useLocalRealm } from './useLocalRealm';
import Realm from 'realm';

export function useTypes() {
    const realm = useLocalRealm();
    return realm.schema as (Realm.BaseObjectSchema & {
        properties: Realm.CanonicalPropertiesTypes<any>;
        ctor: MyClass<any>;
    })[];
}
