// import { useMemo } from 'react';
// import { MRT_RowData } from 'material-react-table';
// import { useQuery } from '@tanstack/react-query';
// import Realm from 'realm';
// import { useLocalRealm } from './useLocalRealm';

// function handleFilter<T extends MRT_RowData>(collection: string, db?: Realm, filterString?: string, filterArgs?: any[]) {
//     if (filterString == null || filterString.length === 0) {
//         if (db == null) throw new Error('no db');
//         const result = Array.from(db.objects<T>(collection));
//         // console.info(`result`, result);
//         return Promise.resolve(result);
//     }
//     if (db == null) throw new Error('no db');
//     const result = Array.from(db.objects<T>(collection).filtered(filterString, ...(filterArgs ?? [])));
//     // console.info(`result`, result);
//     return Promise.resolve(result);
// }
// export function useCollectionQuery<T extends MRT_RowData>(collection: string): [boolean, boolean, (Realm.Object<T> & T)[]] {
//     const db = useLocalRealm();
//     const [filterString, filterArgs] = useMemo(() => (collection === 'classifier' ? ['parent == $0', [null] as any[]] : []), [collection]);
//     const { data, isLoading, isFetching } = useQuery({
//         queryKey: [collection],
//         queryFn: () => {
//             return handleFilter<T>(collection, db, filterString, filterArgs);
//         }
//     });
//     return [isLoading, isFetching, data ?? []];
// }
