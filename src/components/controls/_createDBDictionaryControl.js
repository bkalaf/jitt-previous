// import { List, ListItem, ListItemText, PaperProps, TableContainerProps, TableProps } from '@mui/material';
// import { useWhyDidIUpdate } from '../../hooks/useWhyDidIUpdate';
// import { useMaterialReactTable, MaterialReactTable, MRT_RowData } from 'material-react-table';
// import React, { useCallback } from 'react';
// import { IconBtn } from '../IconBtn';
// import { faPlusSquare, faTrashCan } from '@fortawesome/pro-solid-svg-icons';
// import { useMutation } from '@tanstack/react-query';
// import { is } from '../../common/is';
// import { useInvalidateCollection } from '../../hooks/useInvalidateCollection';
// import { runTransaction } from '../../util/runTransaction';
// import { useLocalRealm } from '../../hooks/useLocalRealm';
// import { createRenderCreateRowDialogContentNestedForDictionary } from '../Views/renderProperties/createRenderCreateRowDialogContentNestedForDictionary';
// import { useListItemComponent } from '../../hooks/useListItemComponent';
// import { useStopAndPrevent } from '../../hooks/useStopAndPrevent';
// import { useDictionaryControl } from '../../hooks/useDictionaryControl';
// import { useDictionaryColumns } from './createDBListContnrol';
// export function createDBDictionaryControl<T extends MRT_RowData, TValue>(objectType: string, faceted = false, enumMap?: EnumMap<string>) {
//     return function DBDictionaryControl(props: EditFunctionParams<T, DictionaryBack<TValue>>) {
//         useWhyDidIUpdate('DBDictionaryControl', props);
//         const { cell, row, column } = props;
//         // const { label, name, value, data } = useControl<T, DictionaryBack<TValue>, [string, TValue][]>(column, cell, {} as DictionaryBack<TValue>, (value: DictionaryBack<TValue>) => Object.entries(value ?? {}));
//         const { value, data, helperText, name, label } = useDictionaryControl(column, cell);
//         const invalidator = useInvalidateCollection();
//         const ValueComponent = useListItemComponent(objectType);
//         const columns = useDictionaryColumns(objectType, faceted, enumMap);
//         const table = useMaterialReactTable<any>({
//             data: [] as any[],
//             columns: columns,
//             muiTableContainerProps: {
//                 classes: {
//                     root: 'hidden'
//                 }
//             } as TableContainerProps,
//             muiTablePaperProps: {
//                 classes: {
//                     root: 'hidden'
//                 }
//             } as PaperProps,
//             muiTableProps: {
//                 classes: {
//                     root: 'hidden'
//                 }
//             } as TableProps,
//             renderCreateRowDialogContent: createRenderCreateRowDialogContentNestedForDictionary(objectType, value, row as any, name)
//         });
//         const { mutate: deleteMutate } = useMutation({
//             mutationFn: (key: string) => {
//                 if (is.dbDictionary(value)) {
//                     value.remove(key);
//                 } else {
//                     if (Object.hasOwn(value ?? {}, key)) {
//                         // eslint-disable-next-line @typescript-eslint/no-unused-vars
//                         const { [key]: _, ...remain } = value ?? {};
//                         (row.original as any)[name] = remain;
//                     }
//                 }
//                 return Promise.resolve();
//             },
//             onSuccess: () => invalidator()
//         });
//         const realm = useLocalRealm();
//         const onClickDelete = useCallback(
//             (key: string) => {
//                 return (ev: React.MouseEvent<HTMLButtonElement>) => {
//                     ev.preventDefault();
//                     ev.stopPropagation();
//                     const func = () => deleteMutate(key);
//                     runTransaction(realm, func);
//                 };
//             },
//             [deleteMutate, realm]
//         );
//         // eslint-disable-next-line @typescript-eslint/no-unused-vars
//         const onClickInsert = useStopAndPrevent((ev: MouseButtonEvent) => table.setCreatingRow(true));
//         return (
//             <div className='relative flex h-auto w-full rounded-md border border-black shadow-inner shadow-black'>
//                 <div className='flex h-auto w-full flex-col'>
//                     <MaterialReactTable table={table} />
//                     <div className='flex w-full indent-1.5 text-base font-bold'>{label}</div>
//                     <List>
//                         {data.map(([key, item], index) => {
//                             const LIComp = ValueComponent(item);
//                             return (
//                                 <ListItem key={index} secondaryAction={<IconBtn icon={faTrashCan} onClick={onClickDelete(key)} tooltip='Delete this row' />}>
//                                     <ListItemText primary={key} secondary={<LIComp />} />
//                                 </ListItem>
//                             );
//                         })}
//                     </List>
//                     <IconBtn icon={faPlusSquare} onClick={onClickInsert} tooltip='Insert a new row' className='absolute right-0 top-0' />
//                     <small className='flex w-full text-center'>{helperText}</small>
//                 </div>
//             </div>
//         );
//     };
// }
//# sourceMappingURL=_createDBDictionaryControl.js.map