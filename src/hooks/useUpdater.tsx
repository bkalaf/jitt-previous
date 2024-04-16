import { MRT_RowData } from 'material-react-table';
import { useRealm } from './useRealm';
import * as Realm from 'realm';
import { useMemo } from 'react';
import { useEffectiveCollection } from './useEffectiveCollection';

export function useUpdater<T extends MRT_RowData>(objectType?: string): [boolean, (realm: Realm, obj: RealmObj<T>) => RealmObj<T>] {
    const route = useEffectiveCollection(objectType)
    const { types } = useRealm();
    const schema = types.find((x) => x.name === route);
    console.log('ctor', schema?.ctor);
    const func = useMemo(() => schema?.ctor?.update ?? ((realm: Realm, obj: RealmObj<T>) => obj), [schema?.ctor?.update]);
    return [schema?.ctor?.update != null, func]
}
