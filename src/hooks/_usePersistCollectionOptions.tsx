// /* eslint-disable @typescript-eslint/no-unused-vars */
// import { MRT_RowData, MRT_TableState } from 'material-react-table';
// import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
// import { $storage } from './storage';
// import { deepEqual } from './deepEqual';
// import { ignore } from '../common/ignore';
// import { useCollectionOption } from './useCollectionOption';
// import { useToggler } from './useToggler';
// import * as fs from 'graceful-fs';

// export function usePersistCollectionOptions<T extends MRT_RowData>(
//     collection: string
// ): {
//     resetAllOptions: (x?: any) => void;
//     onColumnOrderChange: OnCollectionSettingChange<T, 'columnOrder'>;
//     onColumnPinningChange: OnCollectionSettingChange<T, 'columnPinning'>;
//     onColumnSizingChange: OnCollectionSettingChange<T, 'columnSizing'>;
//     onColumnVisibilityChange: OnCollectionSettingChange<T, 'columnVisibility'>;
//     onRowSelectionChange: OnCollectionSettingChange<T, 'rowSelection'>;
//     onExpandedChange: OnCollectionSettingChange<T, 'expanded'>;
//     onSortingChange: OnCollectionSettingChange<T, 'sorting'>;
//     onGroupingChange: OnCollectionSettingChange<T, 'grouping'>;
//     onPaginationChange: OnCollectionSettingChange<T, 'pagination'>;
//     onShowGlobalFilterChange: OnCollectionSettingChange<T, 'showGlobalFilter'>;
//     onShowColumnFiltersChange: OnCollectionSettingChange<T, 'showColumnFilters'>;
//     onGlobalFilterChange: OnCollectionSettingChange<T, 'globalFilter'>;
//     onColumnFiltersChange: OnCollectionSettingChange<T, 'columnFilters'>;
//     onDensityChange: OnCollectionSettingChange<T, 'density'>;
//     state: JITTTableState<T>;
//     initialState: JITTTableState<T>;
// } {
//     const [isLoading, toggleLoading, setIsLoading, setIsNotLoading] = useToggler(false);
//     const memoized = useRef(collection);
//     const [state, internalSetState] = useState<JITTTableState<T>>({
//         pagination: {
//             pageIndex: 0,
//             pageSize: 20
//         }
//     });

//     const $array = useMemo(() => [] as any[], []);
//     const $object = useMemo(() => ({}) as Record<string, any>, []);

//     const [columnFilters, onColumnFiltersChange, resetColumnFilters] = useCollectionOption(state, internalSetState, 'columnFilters', $array);
//     const [columnOrder, onColumnOrderChange, resetColumnOrder] = useCollectionOption(state, internalSetState, 'columnOrder', $array);
//     const [grouping, onGroupingChange, resetGrouping] = useCollectionOption(state, internalSetState, 'grouping', $array);
//     const [sorting, onSortingChange, resetSorting] = useCollectionOption(state, internalSetState, 'sorting', $array);


//     const [columnSizing, onColumnSizingChange, resetColumnSizing] = useCollectionOption(state, internalSetState, 'columnSizing', $object);
//     const [columnVisibility, onColumnVisibilityChange, resetColumnVisibility] = useCollectionOption(state, internalSetState, 'columnVisibility', $object);
//     const [expanded, onExpandedChange, resetExpanded] = useCollectionOption(state, internalSetState, 'expanded', $object);
//     const [rowSelection, onRowSelectionChange, resetRowSelection] = useCollectionOption(state, internalSetState, 'rowSelection', $object);
//     const [columnPinning, onColumnPinningChange, resetColumnPinning] = useCollectionOption(state, internalSetState, 'columnPinning', $object);
    
//     const [density, onDensityChange, resetDensity] = useCollectionOption(state, internalSetState, 'density', 'spacious');

//     const [pagination, onPaginationChange, resetPagination] = useCollectionOption(state, internalSetState, 'pagination', { pageIndex: 0, pageSize: 20 });

//     const [globalFilter, onGlobalFilterChange, resetGlobalFilter] = useCollectionOption(state, internalSetState, 'globalFilter', undefined);

//     const [showGlobalFilter, onShowGlobalFilterChange, resetShowGlobalFilter] = useCollectionOption(state, internalSetState, 'showGlobalFilter', false);
//     const [showColumnFilters, onShowColumnFiltersChange, resetShowColumnFilters] = useCollectionOption(state, internalSetState, 'showColumnFilters', false);

//     const setState = useCallback(
//         (value: JITTTableState<T> | ((old: JITTTableState<T>) => JITTTableState<T>)) => {
//             internalSetState((old) => {
//                 const nextValue = typeof value === 'function' ? ((value as (old: JITTTableState<T>) => JITTTableState<T>)(old) as Required<JITTTableState<T>>) : (value as Required<JITTTableState<T>>);
//                 if (deepEqual(nextValue, old)) {
//                     console.log('internalSetState-equal', old, nextValue);
//                     return old;
//                 }
//                 onDensityChange(nextValue?.density);
//                 onSortingChange(nextValue?.sorting);
//                 onColumnFiltersChange(nextValue?.columnFilters);
//                 onColumnOrderChange(nextValue?.columnOrder);
//                 onColumnVisibilityChange(nextValue?.columnVisibility);
//                 onColumnPinningChange(nextValue?.columnPinning);
//                 onGlobalFilterChange(nextValue?.globalFilter);
//                 onExpandedChange(nextValue?.expanded);
//                 onGroupingChange(nextValue?.grouping);
//                 onShowGlobalFilterChange(nextValue?.showGlobalFilter);
//                 onRowSelectionChange(nextValue?.rowSelection);
//                 onShowColumnFiltersChange(nextValue?.showColumnFilters);
//                 onPaginationChange(nextValue?.pagination);
//                 onColumnSizingChange(nextValue?.columnSizing);

//                 // if (!deepEqual(nextValue?.sorting, old?.sorting)) {

//                 // }
//                 // if (!deepEqual(nextValue?.columnFilters, old?.columnFilters)) {
//                 // }
//                 // if (!deepEqual(nextValue?.columnOrder, old?.columnOrder)) {
//                 // }
//                 // if (!deepEqual(nextValue?.columnVisibility, old?.columnVisibility)) {
//                 // }
//                 // if (!deepEqual(nextValue?.columnPinning, old?.columnPinning)) {
//                 // }
//                 // if (!deepEqual(nextValue?.globalFilter, old?.globalFilter)) {
//                 // }
//                 // if (!deepEqual(nextValue?.expanded, old?.expanded)) {
//                 // }
//                 // if (!deepEqual(nextValue?.grouping, old?.grouping)) {
//                 // }
//                 // if (!deepEqual(nextValue?.showGlobalFilter, old?.showGlobalFilter)) {
//                 // }
//                 // if (!deepEqual(nextValue?.showColumnFilters, old?.showColumnFilters)) {
//                 // }
//                 // if (!deepEqual(nextValue?.rowSelection, old?.rowSelection)) {
//                 // }
//                 // if (!deepEqual(nextValue?.columnSizing, old?.columnSizing)) {
//                 // }
//                 // if (!deepEqual(nextValue?.pagination, old?.pagination)) {
//                 // }
//                 return nextValue;
//             });
//         },
//         [
//             onColumnFiltersChange,
//             onColumnOrderChange,
//             onColumnPinningChange,
//             onColumnSizingChange,
//             onColumnVisibilityChange,
//             onDensityChange,
//             onExpandedChange,
//             onGlobalFilterChange,
//             onGroupingChange,
//             onPaginationChange,
//             onRowSelectionChange,
//             onShowColumnFiltersChange,
//             onShowGlobalFilterChange,
//             onSortingChange
//         ]
//     );
//     useEffect(() => {
//         const func = async () => {
//             console.log('useEffect', collection, memoized.current);
//             const stored = await $storage.getItem(collection);
//             if (memoized.current !== collection) {
//                 setIsLoading();
//                 memoized.current = collection;
//                 const masterSettings = JSON.parse(fs.readFileSync('C:/Users/bobby/OneDrive/Desktop/jitt-settings.json').toString());
//                 console.log('useEffect-masterSettings', masterSettings);
//                 const { [collection]: settings  } = masterSettings;
//                 const $settings = settings ?? { pageIndex: 0, pageSize: 20 };
//                 setState($settings as JITTTableState<T>);
//                 setIsNotLoading();
//             }

//             // internalSetState((old) => {
//             //     if (deepEqual(savedState, old)) {
//             //         console.log('internalSetState-equal', old, savedState);
//             //         return old;
//             //     }
//             //     if (!deepEqual(savedState.density, old.density)) {
//             //         onDensityChange(savedState.density);
//             //     }
//             //     if (!deepEqual(savedState.sorting, old.sorting)) {
//             //         onSortingChange(savedState.sorting);
//             //     }
//             //     if (!deepEqual(savedState.columnFilters, old.columnFilters)) {
//             //         onColumnFiltersChange(savedState.columnFilters);
//             //     }
//             //     if (!deepEqual(savedState.columnOrder, old.columnOrder)) {
//             //         onColumnOrderChange(savedState.columnOrder);
//             //     }
//             //     if (!deepEqual(savedState.columnVisibility, old.columnVisibility)) {
//             //         onColumnVisibilityChange(savedState.columnVisibility);
//             //     }
//             //     if (!deepEqual(savedState.columnPinning, old.columnPinning)) {
//             //         onColumnPinningChange(savedState.columnPinning);
//             //     }
//             //     if (!deepEqual(savedState.globalFilter, old.globalFilter)) {
//             //         onGlobalFilterChange(savedState.globalFilter);
//             //     }
//             //     if (!deepEqual(savedState.expanded, old.expanded)) {
//             //         onExpandedChange(savedState.expanded);
//             //     }
//             //     if (!deepEqual(savedState.grouping, old.grouping)) {
//             //         onGroupingChange(savedState.grouping);
//             //     }
//             //     if (!deepEqual(savedState.showGlobalFilter, old.showGlobalFilter)) {
//             //         onShowGlobalFilterChange(savedState.showGlobalFilter);
//             //     }
//             //     if (!deepEqual(savedState.showColumnFilters, old.showColumnFilters)) {
//             //         onShowColumnFiltersChange(savedState.showColumnFilters);
//             //     }
//             //     if (!deepEqual(savedState.rowSelection, old.rowSelection)) {
//             //         onRowSelectionChange(savedState.rowSelection);
//             //     }
//             //     if (!deepEqual(savedState.columnSizing, old.columnSizing)) {
//             //         onColumnSizingChange(savedState.columnSizing);
//             //     }
//             //     if (!deepEqual(savedState.pagination, old.pagination)) {
//             //         onPaginationChange(savedState.pagination);
//             //     }
//             //     return savedState;
//             // });
//         };
//         setImmediate(func);
//     }, [
//         collection,
//         onColumnFiltersChange,
//         onColumnOrderChange,
//         onColumnPinningChange,
//         onColumnSizingChange,
//         onColumnVisibilityChange,
//         onDensityChange,
//         onExpandedChange,
//         onGlobalFilterChange,
//         onGroupingChange,
//         onPaginationChange,
//         onRowSelectionChange,
//         onShowColumnFiltersChange,
//         onShowGlobalFilterChange,
//         onSortingChange,
//         setIsLoading,
//         setIsNotLoading,
//         setState,
//         toggleLoading
//     ]);

//     const token = useRef<undefined | NodeJS.Immediate>(undefined);
//     useEffect(() => {
//         if (token.current) {
//             clearImmediate(token.current);
//         }
//         token.current = setImmediate(async () => {
//             const stored = await $storage.getItem(collection);
//             if (!deepEqual(stored, state)) {
//                 console.log(`useEffect-inequality`, stored, state);
//                 await $storage.setItem(collection, state);
//                 fs.appendFileSync('C:/Users/bobby/OneDrive/Desktop/settings.log', [collection, ['state', JSON.stringify(state, null, '\t')].join(': ').concat('\n'), ['stored', JSON.stringify(stored, null, '\t')].join(': ').concat('\n')].join('\n'));
//             } else {
//                 console.log(`useEffect-equality`, stored, state);
//             }
//             token.current = undefined;
//         });
//     }, [collection, state]);

//     const resetAllOptions = useMemo(() => {
//         return [
//             resetColumnFilters,
//             resetColumnOrder,
//             resetColumnPinning,
//             resetColumnSizing,
//             resetColumnVisibility,
//             resetExpanded,
//             resetGrouping,
//             resetSorting,
//             resetGlobalFilter,
//             resetDensity,
//             resetPagination,
//             resetShowGlobalFilter,
//             resetShowColumnFilters,
//             resetRowSelection
//         ].reduce(
//             (pv, cv) => () => {
//                 pv();
//                 cv();
//             },
//             () => {
//                 ignore();
//             }
//         );
//     }, [
//         resetColumnFilters,
//         resetColumnOrder,
//         resetColumnPinning,
//         resetColumnSizing,
//         resetColumnVisibility,
//         resetDensity,
//         resetExpanded,
//         resetGlobalFilter,
//         resetGrouping,
//         resetPagination,
//         resetRowSelection,
//         resetShowColumnFilters,
//         resetShowGlobalFilter,
//         resetSorting
//     ]);
//     return {
//         initialState: state,
//         state: {
//             ...state,
//             isLoading: isLoading
//         },
//         onColumnFiltersChange,
//         onColumnOrderChange,
//         onColumnPinningChange,
//         onColumnSizingChange,
//         onColumnVisibilityChange,
//         onDensityChange,
//         onExpandedChange,
//         onGlobalFilterChange,
//         onGroupingChange,
//         onPaginationChange,
//         onRowSelectionChange,
//         onShowColumnFiltersChange,
//         onShowGlobalFilterChange,
//         onSortingChange,
//         resetAllOptions
//     };
// }
