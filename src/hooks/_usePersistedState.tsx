// import localforage from 'localforage';
// import { useCallback, useMemo } from 'react';
// import { MRT_RowData } from 'material-react-table';
// import { composeR } from '../common/composeR.1';
// import { usePersistedSetting } from './usePersistedSetting';
// import { ignore } from '../common/ignore';

// const constantArray = [] as any[];
// const constantObject = {} as Record<string, any>;

// export function usePersistedState<T extends MRT_RowData>(collection: string) {
//     const storage = useMemo(
//         () =>
//             localforage.createInstance({
//                 name: 'JITT',
//                 storeName: 'JITT',
//                 version: 2
//             }),
//         []
//     );
//     const [density, onDensityChange, resetDensity] = usePersistedSetting<T, 'density'>(collection, storage, 'density', 'spacious');
//     const [showGlobalFilter, onShowGlobalFilterChange, resetShowGlobalFilter] = usePersistedSetting<T, 'showGlobalFilter'>(collection, storage, 'showGlobalFilter', false);
//     const [showColumnFilters, onShowColumnFiltersChange, resetShowColumnFilters] = usePersistedSetting<T, 'showColumnFilters'>(collection, storage, 'showColumnFilters', false);
//     const [globalFilter, onGlobalFilterChange, resetGlobalFilter] = usePersistedSetting<T, 'globalFilter'>(collection, storage, 'globalFilter', undefined);
//     const [columnFilters, onColumnFiltersChange, resetColumnFilters] = usePersistedSetting<T, 'columnFilters'>(collection, storage, 'columnFilters', constantArray);
//     const [columnOrder, onColumnOrderChange, resetColumnOrder] = usePersistedSetting<T, 'columnOrder'>(collection, storage, 'columnOrder', constantArray);
//     const [columnPinning, onColumnPinningChange, resetColumnPinning] = usePersistedSetting<T, 'columnPinning'>(collection, storage, 'columnPinning', constantObject);
//     const [columnSizing, onColumnSizingChange, resetColumnSizing] = usePersistedSetting<T, 'columnSizing'>(collection, storage, 'columnSizing', constantObject);
//     const [columnVisibility, onColumnVisibilityChange, resetColumnVisibility] = usePersistedSetting<T, 'columnVisibility'>(collection, storage, 'columnVisibility', constantObject);
//     const [expanded, onExpandedChange, resetExpanded] = usePersistedSetting<T, 'expanded'>(collection, storage, 'expanded', constantObject);
//     const [grouping, onGroupingChange, resetGrouping] = usePersistedSetting<T, 'grouping'>(collection, storage, 'grouping', constantArray);
//     const [rowSelection, onRowSelectionChange, resetRowSelection] = usePersistedSetting<T, 'rowSelection'>(collection, storage, 'rowSelection', constantObject);
//     const [sorting, onSortingChange, resetSorting] = usePersistedSetting<T, 'sorting'>(collection, storage, 'sorting', constantArray);
//     const [pagination, onPaginationChange, resetPagination] = usePersistedSetting<T, 'pagination'>(collection, storage, 'pagination', { pageIndex: 0, pageSize: 20 });
//     // const [showSkeletons, onShowSkeletonsChange, resetShowSkeletons] = usePersistedSetting<T, 'showSkeletons'>(collection, storage, 'showSkeletons', false);
//     const pageIndex = useMemo(() => pagination?.pageIndex ?? 0, [pagination?.pageIndex]);
//     const pageSize = useMemo(() => pagination?.pageSize ?? 20, [pagination?.pageSize]);
//     const onPageIndexChange: React.Dispatch<React.SetStateAction<number>> = useCallback(
//         (index: number | ((x: number) => number)) => {
//             onPaginationChange((old) => {
//                 const { pageIndex: oldIndex, ...rest } = old ?? { pageIndex: 0, pageSize: 20 };
//                 if (typeof index === 'function') {
//                     const nextIndex = index(oldIndex);
//                     const nextPagination = { ...rest, pageIndex: nextIndex };
//                     return nextPagination;
//                 }
//                 const nextPagination = { ...rest, pageIndex: index };
//                 return nextPagination;
//             });
//         },
//         [onPaginationChange]
//     );
//     const onPageSizeChange: React.Dispatch<React.SetStateAction<number>> = useCallback(
//         (index: number | ((x: number) => number)) => {
//             onPaginationChange((old) => {
//                 const { pageSize: oldSize, ...rest } = old ?? { pageIndex: 0, pageSize: 20 };
//                 if (typeof index === 'function') {
//                     const nextSize = index(oldSize);
//                     const nextPagination = { ...rest, pageSize: nextSize };
//                     return nextPagination;
//                 }
//                 const nextPagination = { ...rest, pageSize: index };
//                 return nextPagination;
//             });
//         },
//         [onPaginationChange]
//     );
//     const resetSettings = useMemo(() => {
//         return [
//             resetColumnFilters,
//             resetColumnOrder,
//             resetColumnPinning,
//             resetColumnSizing,
//             resetColumnVisibility,
//             resetDensity,
//             resetExpanded,
//             resetGlobalFilter,
//             resetGrouping,
//             resetPagination,
//             resetRowSelection,
//             resetShowColumnFilters,
//             resetShowGlobalFilter,
//             // resetShowSkeletons,
//             resetSorting
//         ].reduce((pv, cv) => composeR(pv, cv), ignore);
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
//     const state = useMemo(
//         () => ({
//             columnFilters,
//             columnOrder,
//             columnPinning,
//             columnSizing,
//             columnVisibility,
//             expanded,
//             grouping,
//             sorting,
//             showColumnFilters,
//             showGlobalFilter,
//             globalFilter,
//             density,
//             rowSelection,
//             pagination
//         }),
//         [columnFilters, columnOrder, columnPinning, columnSizing, columnVisibility, density, expanded, globalFilter, grouping, pagination, rowSelection, showColumnFilters, showGlobalFilter, sorting]
//     );
//     return {
//         resetSettings,
//         onColumnFiltersChange,
//         onColumnOrderChange,
//         onColumnPinningChange,
//         onColumnSizingChange,
//         onColumnVisibilityChange,
//         onExpandedChange,
//         onSortingChange,
//         onGroupingChange,
//         onShowColumnFiltersChange,
//         onShowGlobalFilterChange,
//         onGlobalFilterChange,
//         onDensityChange,
//         onRowSelectionChange,
//         onPaginationChange,
//         state,
//         pageIndex,
//         pageSize,
//         onPageSizeChange,
//         onPageIndexChange
//     } as {
//         onPageSizeChange: StateSetter<number>;
//         onPageIndexChange: StateSetter<number>;
//         pageIndex: number;
//         pageSize: number;
//         resetSettings: (x?: any) => void;
//         onColumnOrderChange: OnTableStateChange<T, 'onColumnOrderChange'>;
//         onColumnPinningChange: OnTableStateChange<T, 'onColumnPinningChange'>;
//         onColumnSizingChange: OnTableStateChange<T, 'onColumnSizingChange'>;
//         onColumnVisibilityChange: OnTableStateChange<T, 'onColumnVisibilityChange'>;
//         onRowSelectionChange: OnTableStateChange<T, 'onRowSelectionChange'>;
//         onExpandedChange: OnTableStateChange<T, 'onExpandedChange'>;
//         onSortingChange: OnTableStateChange<T, 'onSortingChange'>;
//         onGroupingChange: OnTableStateChange<T, 'onGroupingChange'>;
//         onPaginationChange: OnTableStateChange<T, 'onPaginationChange'>;
//         onShowGlobalFilterChange: OnTableStateChange<T, 'onShowGlobalFilterChange'>;
//         onShowColumnFiltersChange: OnTableStateChange<T, 'onShowColumnFiltersChange'>;
//         onGlobalFilterChange: OnTableStateChange<T, 'onGlobalFilterChange'>;
//         onColumnFiltersChange: OnTableStateChange<T, 'onColumnFiltersChange'>;
//         onDensityChange: OnTableStateChange<T, 'onDensityChange'>;
//         state: JITTTableState<T>;
//     };
// }
