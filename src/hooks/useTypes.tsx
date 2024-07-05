import { useMemo } from 'react';
import { useLocalRealm } from './useLocalRealm';
import Realm from 'realm';

export function useTypes() {
    const realm = useLocalRealm();
    return useMemo(
        () =>
            realm.schema as (Realm.BaseObjectSchema & {
                properties: Realm.CanonicalPropertiesTypes<any>;
                ctor: MyClass<any>;
            })[],
        [realm.schema]
    );
}
