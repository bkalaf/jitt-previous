import { useMemo } from 'react';
import { useLocalRealm } from './useLocalRealm';
import Realm from 'realm';
import { primitives } from './primtivies';

export function useTypes() {
    const realm = useLocalRealm();
    return useMemo(
        () => [...Object.entries(primitives).map(([k, columns]) => ({ schema: { name: k }, ctor: { columns } })), ...realm.schema] as (Realm.BaseObjectSchema & {
            properties: Realm.CanonicalPropertiesTypes<any>;
            ctor: MyClass<any>;
        })[],
        [realm.schema]
    );
}
