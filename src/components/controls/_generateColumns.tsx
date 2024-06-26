// import { createMRTColumnHelper, MRT_Cell, MRT_ColumnDef } from 'material-react-table';
// import React from 'react';
// import { setProperty } from '../../common/object';
// import { isPrimitive } from '../../schema/conversion/cnvrt';
// import { createLinkingControl } from '../createLinkingControl';
// import { groupCol } from '../../schema/defs/groupCol';

// // export function useDataStructure<T>(cell: MRT_Cell<any>, propName: string, table: MRT_TableInstance<any>, type: string, objectType?: string) {
// //     const dataStructure = useMemo(() => cell.getValue() as ListBack<T> | DictionaryBack<T>, [cell]);
// //     const realm = useLocalRealm();
// //     const setter = useCallback(
// //         (func: () => void) => {
// //             runTransaction(realm, func);
// //         },
// //         [realm]
// //     );
// //     const deleteFunction = useCallback(
// //         (index: string | number) => {
// //             return (ev: React.SyntheticEvent) => {
// //                 ev.preventDefault();
// //                 ev.stopPropagation();
// //                 setter(() => {
// //                     const result = type === 'dictionary' ? dictionaryDeleteByKey(index as string)(dataStructure) : type === 'list' ? listDeleteByIndex(index as number)(dataStructure as any) : dataStructure;
// //                     setProperty(propName, cell.row.original, result);
// //                 });
// //             };
// //         },
// //         [cell.row.original, dataStructure, propName, setter, type]
// //     );
// //     const insertFunction = useCallback(
// //         (value: any) =>
// //             setter(() =>
// //                 type === 'dictionary'
// //                     ? dictionaryInsert(cell.row.original, propName, dataStructure as any)(value)
// //                     : type === 'list'
// //                     ? listInsert(cell.row.original, propName, value)(dataStructure as any)
// //                     : listInsert(cell.row.original, propName, value)(dataStructure as any)
// //             ),
// //         [cell.row.original, dataStructure, propName, setter, type]
// //     );
// //     const { onSuccess, onError } = useNotification(
// //         () => `Success`,
// //         () => `Fail`,
// //         wrapPromise(insertFunction)
// //     );
// //     const cancelModal = useCallback(() => {
// //         if (table.getState().creatingRow) {
// //             table.setCreatingRow(null);
// //         } else if (table.getState().editingRow) {
// //             table.setEditingRow(null);
// //         }
// //     }, [table]);
// //     const init = useInitial(objectType);
// //     const formContext = useForm({
// //         defaultValues: init()
// //     });
// //     const resetModal = useCallback(() => {
// //         return formContext.reset();
// //     }, [formContext]);
// //     const insertModal = useCallback(() => {
// //         table.setCreatingRow(true);
// //     }, [table]);
// //     return {
// //         onSuccess,
// //         onError,
// //         insertModal,
// //         resetModal,
// //         cancelModal,
// //         deleteFunction,
// //         formContext,
// //         table
// //     };
// // }
// export const h = createMRTColumnHelper<DictionaryItem<any>>();

// export function generateColumns(cell: MRT_Cell<any>, types: RealmSchema, columns: MRT_ColumnDef<any>[], type: 'list' | 'dictionary' | 'set', objectType: string, labelProperty: string) {
//     const prim = isPrimitive(objectType);
//     const isEmbed = prim ? false : types.find((x) => x.name === objectType)?.embedded ?? false;
//     const typeKind =
//         prim ? 'primitive'
//         : isEmbed ? 'embedded'
//         : 'reference';
//     const effectiveCols = (
//         typeKind === 'reference' ?
//             ([
//                 h.accessor('value', {
//                     header: 'Value',
//                     Cell: () => null,
//                     Edit: createLinkingControl(objectType, labelProperty)
//                 })
//             ] as MRT_ColumnDef<any>[])
//         : typeKind === 'primitive' ? [columns[0]].map((x) => ({ ...x, Cell: () => null }))
//         : typeKind === 'embedded' ? columns.map((x) => ({ ...x, Cell: () => null }))
//         : []) as MRT_ColumnDef<any>[];
//     return {
//         name: cell.column.columnDef.accessorKey ?? cell.column.columnDef.id ?? 'n/a',
//         label: cell.column.columnDef.header,
//         typeKind,
//         dataStructureType:
//             type === 'list' ? 'list'
//             : type === 'set' ? 'set'
//             : type === 'dictionary' ? 'dictionary'
//             : undefined,
//         columns:
//             type === 'list' || type === 'set' ? [groupCol(h, 'Value', effectiveCols, 'address', 'bg-blue-700', 'text-white')]
//             : type === 'dictionary' ?
//                 [
//                     h.accessor('key', {
//                         header: 'Key'
//                     }),
//                     h.group({
//                         header: 'Value',
//                         columns: effectiveCols
//                     })
//                 ]
//             :   effectiveCols,
//         defaultValue:
//             type === 'list' || type === 'set' ? []
//             : type === 'dictionary' ? {}
//             : undefined,
//         toData: (data: any) => {
//             const inner =
//                 type === 'list' || type === 'set' ? data.toJSON().map((x: any) => ({ value: x }))
//                 : type === 'dictionary' ? (Object.entries((data.toJSON() as Record<string, any>) ?? ({} as Record<string, any>)).map(([k, v]) => ({ key: k, value: v })) as DictionaryItem<any>[])
//                 : data;
//             console.error('inner', inner);
//             return inner;
//         },
//         normalizeValues: (values: any) =>
//             typeKind === 'primitive' || typeKind === 'embedded' ? [values]
//             : Array.isArray(values) ? values
//             : [values],
//         labelProp: labelProperty ?? '',
//         initializer: (init: () => any) => () =>
//             type === 'list' || type === 'set' ? { value: typeKind === 'reference' ? [] : init() }
//             : type === 'dictionary' ? { key: '', value: init() }
//             : undefined,
//         insertFunc: (ds: any, obj: any, prop: any, converter: any) => (value: any) => {
//             if (type === 'list' || type === 'set') {
//                 const nv = [...ds, ...value.map(converter)];
//                 setProperty(prop, obj, nv);
//             } else if (type === 'dictionary') {
//                 const $value = value.map(converter);
//                 $value.forEach((el: any) => {
//                     ds[el.key] = el.value;
//                 });
//                 setProperty(prop, obj, ds);
//             }
//         },
//         deleteFunc: (ds: any, obj: any, prop: any) => (key: number | string) => (ev: React.SyntheticEvent<HTMLButtonElement>) => {
//             ev.preventDefault();
//             ev.stopPropagation();
//             if (type === 'list') {
//                 const nv = [...ds.slice(0, key), ...(ds.slice((key as number) + 1) ?? [])];
//                 setProperty(prop, obj, nv);
//             } else if (type === 'set') {
//                 (ds as DBSet<any>).delete(ds[key] as any);
//                 setProperty(prop, obj, ds);
//             } else if (type === 'dictionary') {
//                 (ds as DBDictionary<any>).remove(key as string);
//                 setProperty(prop, obj, ds);
//             }
//         }
//     };
// }
