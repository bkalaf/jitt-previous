// import { MRT_RowData } from 'material-react-table';
// import { useMemo } from 'react';
// import { useEffectiveCollection } from './useEffectiveCollection';
// import { useTypes } from './useTypes';

// export function useUpdater<T extends MRT_RowData>(objectType?: string): [boolean, UpdateFunction<RealmObj<T>>] {
//     const route = useEffectiveCollection(objectType);
//     const types = useTypes();
//     const schema = useMemo(() => types.find((x) => x.name === route), [route, types]);
//     const func = useMemo(() => (schema?.ctor?.update as UpdateFunction<RealmObj<T>>) ?? (((obj: RealmObj<T>) => obj) as UpdateFunction<RealmObj<T>>), [schema?.ctor?.update]);
//     console.info(`useUpdater`, route, func);
//     return [schema?.ctor?.update != null, func];
// }


