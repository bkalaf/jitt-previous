// import { useMemo } from 'react';
// import { MRT_Cell, MRT_RowData, MRT_TableInstance } from 'material-react-table';
// import { useMutation } from '@tanstack/react-query';
// import { useRealm } from './useRealm';
// import { cnvrt, convert } from '../schema/conversion/cnvrt';
// import { useEffectiveCollection } from './useEffectiveCollection';
// import { runTransaction } from '../util/runTransaction';
// import { useLocalRealm } from './useLocalRealm';
// import { useNotification } from './useNotification';
// import { useObjectTypeType } from './useObjectTypeType';

// function convertByType(ott: 'embedded' | 'primitive' | 'reference', objectType: string, types: RealmSchema) {
//     switch (ott) {
//         case 'primitive':
//             return (value: any) => (cnvrt(types, objectType) as Record<string, (value?: any) => any>)[objectType as any](value.value);
//         case 'embedded':
//             return convert(types, objectType);
//         case 'reference':
//             return (value: any) => cnvrt(types, objectType).objectId(value._id);
//     }
// }
// export function useInsertIntoList<T extends MRT_RowData>(objectType: string, cell: MRT_Cell<any, DBList<T> | T[] | undefined>, table: MRT_TableInstance<T>) {
//     const route = useEffectiveCollection(objectType);
//     const { types } = useRealm();
//     const realm = useLocalRealm();
//     const objectTypeType = useObjectTypeType(route);
//     const $convert = useMemo(() => convertByType(objectTypeType, route, types), [route, objectTypeType, types]);
//     // const [, updater] = useUpdater<T>(route);
//     const list = useMemo(() => cell.getValue() ?? [], [cell]);
//     const { mutate } = useMutation({
//         mutationFn: (values: T) => {
//             console.log(`values`, values);
//             const converted = $convert(values);
//             console.log(`converted`, converted);
//             const func = () => {
//                 list.push(converted);
//             };
//             runTransaction(realm, func);
//             return Promise.resolve();
//         },
//         onSuccess: () => table.setCreatingRow(null)
//     });
//     return useNotification(
//         () => `You have added an item to the list.`,
//         (err: Error) => err.message,
//         mutate
//     );
// }
