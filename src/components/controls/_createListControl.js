// import { setProperty } from '../../common/object';
// import * as Realm from 'realm';
// import { tap } from '../../common/tap';
// function cataList<T, U>(isArray: (list: T[]) => U, isList: (list: DBList<T>) => U, isUndefined: () => U = () => [] as any) {
//     return (list: ListBack<T>) => {
//         if (list == null) return isUndefined();
//         if (list instanceof Realm.Types.List) return isList(list);
//         return isArray(list);
//     };
// }
// export const listDeleteByIndex = (index: number) =>
//     cataList<any, ListBack<any>>(
//         (list: any[]) => [...list.slice(0, index), ...(list.slice(index + 1) ?? [])],
//         (list: DBList<any>) => {
//             list.remove(index);
//             return list;
//         }
//     );
// export const listInsert = function <T>(row: any, propName: string, value: T) {
//     return (list: ListBack<T>) => {
//         const newValue = cataList<any, ListBack<any>>(
//             (list: any[]) => [...list, value],
//             (list: DBList<any>) => {
//                 list.push(value);
//                 return list;
//             },
//             () => [value]
//         )(list);
//         setProperty(propName, row, newValue);
//     };
// };
// // function cataDictionary<T, U>(isObject: (dictionary: Record<string, T>) => U, isDBDictionary: (dictionary: DBDictionary<T>) => U, isUndefined: () => U = () => ({} as U)) {
// //     return (dictionary?: DictionaryBack<T>) => {
// //         return dictionary == null ? isUndefined() : dictionary instanceof Realm.Types.Dictionary ? isDBDictionary(dictionary) : isObject(dictionary);
// //     };
// // }
// export const dictionaryInsert = function <T>(row: any, propName: string, dictionary: DictionaryBack<T>) {
//     function inner(obj: Record<string, T>) {
//         if (dictionary == null) return obj as DictionaryBack<T>;
//         if (dictionary instanceof Realm.Types.Dictionary) {
//             dictionary.set(obj);
//             return dictionary;
//         }
//         return { ...dictionary, ...obj };
//     }
//     return (obj: Record<string, T>) => {
//         const newValue = inner(obj);
//         setProperty(propName, row, newValue);
//     };
//     // return cataDictionary<T, DictionaryBack<T>>(
//     //     (obj: Record<string, T>) => {
//     //         const key = Object.getOwnPropertyNames(obj)[0];
//     //         const value = obj[key];
//     //         return setProperty(key, dictionary as Record<string, T>, value);
//     //     },
//     //     (obj: Record<string, T>) => {
//     //         (dictionary as DBDictionary<T>).set(obj);
//     //         return dictionary;
//     //     },
//     //     (obj: Record<string, T>) => obj
//     // );
// };
// export function wrapPromise<T extends any[], U>(func: (...args: T) => U, onSuccess?: (x: U) => void, onError?: (err: Error) => void) {
//     const wrapped = (...args: T): Promise<U> => {
//         try {
//             const result = func(...args);
//             tap(onSuccess)(result);
//             return Promise.resolve(result);
//         } catch (error) {
//             tap(onError)(error);
//             console.error(error);
//             return Promise.reject(error);
//         }
//     };
//     return wrapped;
// }
// // export function createListControl<T extends MRT_RowData, U extends MRT_RowData>(objectType: string, columns: MRT_ColumnDef<U>[], RowComponent: IRowCell<U>, labelProperty?: string) {
// //     return function ListControl(props: Parameters<Exclude<MRT_ColumnDef<T, DBList<U> | U[] | undefined>['Edit'], undefined>>[0]) {
// //         useWhyDidIUpdate('ListControl', { data: props.cell.getValue(), objectType, columns, RowComponent, labelProperty, ...props })
// //         const init = useInitial<U>(objectType);
// //         const data = useMemo(() => props.cell.getValue() ?? [], [props.cell]);
// //         const realm = useLocalRealm();
// //         const deleteRow = useCallback(
// //             (params: Parameters<Exclude<MRT_ColumnDef<T, DBList<U> | U[] | undefined>['Edit'], undefined>>[0]) => {
// //                 return (index: number) => {
// //                     const func = () => {
// //                         if (data instanceof Types.List) {
// //                             data.remove(index);
// //                         } else {
// //                             const name = params.column.columnDef.accessorKey ?? params.column.columnDef.id ?? 'n/a';
// //                             setProperty(name, params.row.original, [...data.slice(0, index), ...data.slice(index + 1)]);
// //                         }
// //                     };
// //                     runTransaction(realm, func);
// //                     return Promise.resolve();
// //                 };
// //             },
// //             [data, realm]
// //         );
// //         // const { mutate } = useMutation({
// //         //     mutationFn: deleteRow(props)
// //         // });
// //         // const onDelete = useNotification(
// //         //     () => `Successfully deleted (1) row.`,
// //         //     (error: Error) => error.message,
// //         //     mutate
// //         // );
// //         const ott = useObjectTypeType();
// //         console.info('ott', ott);
// //         const table = useMaterialReactTable({
// //             data: [],
// //             columns,
// //             muiTableContainerProps: {
// //                 classes: {
// //                     root: 'hidden'
// //                 }
// //             } as TableContainerProps,
// //             muiTablePaperProps: {
// //                 classes: {
// //                     root: 'hidden'
// //                 }
// //             } as PaperProps,
// //             muiTableProps: {
// //                 classes: {
// //                     root: 'hidden'
// //                 }
// //             } as TableProps,
// //             renderCreateRowDialogContent: ott === 'reference' ? createRenderCreateRowDialogContentListLink(objectType, labelProperty ?? 'n/a', props.cell) : createRenderCreateRowDialogContentList<T, U>(objectType, props.cell)
// //         });
// //         const onInsert = useCallback(() => table.setCreatingRow(createRow<U>(table, init())), [init, table]);
// //         return (
// //             <FormControl className='flex flex-col' variant='standard'>
// //                 <div className='flex justify-between w-full'>
// //                     <span className='flex flex-grow'>{props.column.columnDef.header}</span>
// //                     <MaterialReactTable table={table} />
// //                     <IconBtn className='flex' tooltip='Insert item' icon={faPlusSquare} onClick={onInsert} />
// //                 </div>
// //                 <List className='flex flex-col w-full'>
// //                     {/* {data.map((item, ix) => (
// //                         <ListItem className='flex' disablePadding key={ix} secondaryAction={<IconBtn tooltip='Delete this row' icon={faTrashCan} onClick={() => onDelete.onSuccess(ix)} />}>
// //                             <ListItemText>
// //                                 <RowComponent data={item} />
// //                             </ListItemText>
// //                         </ListItem>
// //                     ))} */}
// //                 </List>
// //             </FormControl>
// //         );
// //     };
// // }
//# sourceMappingURL=_createListControl.js.map