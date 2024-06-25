// import { MRT_Cell, MRT_ColumnDef, useMaterialReactTable } from 'material-react-table';
// import React, { useCallback, useMemo } from 'react';
// import { useConvert } from './useConvert';
// import { PaperProps, TableContainerProps, TableProps } from '@mui/material';
// import { createRenderCreateRowDialogContentNested } from '../components/Views/renderProperties/createRenderCreateRowDialogContentNested';
// import { createDictionaryListItem } from '../components/controls/createDictionaryListItem';
// import { createListListItem } from '../components/controls/createListListItem';
// import { generateColumns } from '../components/controls/generateColumns';
// import { useTypes } from './useTypes';

// export function useNestedTable<TValue>(cell: MRT_Cell<any>, type: 'list' | 'dictionary' | 'set', objectType: string, cols: MRT_ColumnDef<any>[], Component: React.FunctionComponent<{ data: any }>, labelProperty?: string) {
//     const types = useTypes();
//     const { columns, normalizeValues, defaultValue, toData, name, label, labelProp, insertFunc, deleteFunc, initializer } = generateColumns(cell, types, cols, type, objectType, labelProperty ?? '');
//     const convert = useConvert(type, objectType);
//     const processInput = useMemo(() => (values: any) => normalizeValues(convert(values)), [convert, normalizeValues]);
//     const dataStructure = useMemo(() => (cell.getValue() as DBList<TValue> | DBDictionary<TValue> | DBSet<TValue>) ?? defaultValue, [cell, defaultValue]);
//     console.error(`dataStructure`, dataStructure);
//     const toInsert = useCallback((value: any) => insertFunc(dataStructure, cell.row.original, name, processInput)(value), [cell.row.original, dataStructure, insertFunc, name, processInput]);
//     const toDelete = useMemo(() => deleteFunc(dataStructure, cell.row.original, name), [cell.row.original, dataStructure, deleteFunc, name]);
//     const data = useMemo(() => toData(dataStructure), [dataStructure, toData]);
//     console.error('DATA', data);
//     const LiComponent = type === 'dictionary' ? createDictionaryListItem(Component, toDelete) : createListListItem(Component, toDelete);
//     // const columns = useMemo(
//     //     (): MRT_ColumnDef<any>[] =>
//     //         type === 'list' || type === 'set'
//     //             ? cols
//     //             : ([
//     //                   helper.string('key', 'Key', undefined, { maxLength: 50, required: true }),
//     //                   h.group({
//     //                       header: 'Value',
//     //                       columns: cols
//     //                   })
//     //               ] as MRT_ColumnDef<any>[]),
//     //     [cols, type]
//     // );
//     // const data = useMemo(() => Object.entries(dataStructure ?? {}).map(([k, v]) => ({ key: k, value: v })) as DictionaryItem<TValue>[], [dataStructure]);
//     const table = useMaterialReactTable({
//         data: [] as any,
//         columns: columns.map((x) => ({ ...x, Cell: () => null })) as MRT_ColumnDef<any>[],
//         muiTableContainerProps: {
//             classes: {
//                 root: 'hidden'
//             }
//         } as TableContainerProps,
//         muiTablePaperProps: {
//             classes: {
//                 root: 'hidden'
//             }
//         } as PaperProps,
//         muiTableProps: {
//             classes: {
//                 root: 'hidden'
//             }
//         } as TableProps,
//         renderCreateRowDialogContent: createRenderCreateRowDialogContentNested(objectType, initializer, toInsert)
//     });

//     return {
//         data: data as any[],
//         table,
//         toDelete,
//         label,
//         labelProp,
//         LiComponent
//     };
// }
