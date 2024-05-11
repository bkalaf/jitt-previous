import { MRT_RowData } from 'material-react-table';
import * as Realm from 'realm';
import { useMemo } from 'react';
import { useEffectiveCollection } from './useEffectiveCollection';
import { useTypes } from './useTypes';

export function useUpdater<T extends MRT_RowData>(objectType?: string): [boolean, (realm: Realm, obj: RealmObj<T>) => RealmObj<T>] {
    const route = useEffectiveCollection(objectType)
    const types = useTypes();
    const schema = useMemo(() => types.find((x) => x.name === route), [route, types]);
    console.log('ctor', schema?.ctor);
    const func = useMemo(() => schema?.ctor?.update ?? ((realm: Realm, obj: RealmObj<T>) => obj), [schema?.ctor?.update]);
    return [schema?.ctor?.update != null, func]
}
