// import { useCallback, useEffect, useMemo, useState } from 'react';
// import {
//     MRT_ColumnFiltersState,
//     MRT_ColumnOrderState,
//     MRT_ColumnPinningState,
//     MRT_ColumnSizingState,
//     MRT_DensityState,
//     MRT_GroupingState,
//     MRT_PaginationState,
//     MRT_RowData,
//     MRT_RowSelectionState,
//     MRT_SortingState,
//     MRT_TableState,
//     MRT_VisibilityState
// } from 'material-react-table';
// import { useForager } from '../contexts/ForagerContext';
// import { useQueryString } from './useQueryString';
// import { useEffectiveCollection } from './useEffectiveCollection';

// export const $array = function <T>(): T {
//     return [] as T;
// };
// export const $object = function <T>(): T {
//     return {} as T;
// };
// export const $pinning = function () {
//     return { left: [], right: [] };
// };

// const keys = (collection: string) => ({
//     $columnFilters: [collection, 'column-filters'].join('-'),
//     $columnOrder: [collection, 'column-order'].join('-'),
//     $columnPinning: [collection, 'column-pinning'].join('-'),
//     $columnSizing: [collection, 'column-sizing'].join('-'),
//     $columnVisibility: [collection, 'column-visibility'].join('-'),
//     $density: [collection, 'density'].join('-'),
//     $globalFilter: [collection, 'global-filter'].join('-'),
//     $grouping: [collection, 'grouping'].join('-'),
//     $pageIndex: [collection, 'page-index'].join('-'),
//     $pageSize: [collection, 'page-size'].join('-'),
//     $rowSelection: [collection, 'row-selection'].join('-'),
//     $showGlobalFilter: [collection, 'show-global-filter'].join('-'),
//     $sorting: [collection, 'sorting'].join('-')
// });

// export function usePersistedState<T extends MRT_RowData>(objectType?: string) {
//     const { forager } = useForager();
//     const collection = useEffectiveCollection(objectType);
//     const { _id } = useQueryString<'_id'>();
//     const { $columnFilters, $columnOrder, $columnPinning, $columnSizing, $columnVisibility, $density, $globalFilter, $grouping, $pageIndex, $pageSize, $rowSelection, $showGlobalFilter, $sorting } = useMemo(() => keys(collection), [collection]);

//     const [columnFilters, onColumnFiltersChange] = useState<MRT_ColumnFiltersState>($array());
//     const [columnOrder, onColumnOrderChange] = useState<MRT_ColumnOrderState>($array());
//     const [columnSizing, onColumnSizingChange] = useState<MRT_ColumnSizingState>($object());
//     const [columnVisibility, onColumnVisibilityChange] = useState<MRT_VisibilityState>($object());
//     const [density, onDensityChange] = useState<MRT_DensityState>('compact');
//     const [globalFilter, onGlobalFilterChange] = useState<unknown>(undefined);
//     const [grouping, onGroupingChange] = useState<MRT_GroupingState>($array());
//     const [pageIndex, onPageIndexChange] = useState(0);
//     const [pageSize, onPageSizeChange] = useState(20);
//     const [rowSelection, onRowSelectionChange] = useState<MRT_RowSelectionState>($object());
//     const [showGlobalFilter, onShowGlobalFilterChange] = useState(false);
//     const [sorting, onSortingChange] = useState<MRT_SortingState>($array());
//     const [columnPinning, onColumnPinningChange] = useState<MRT_ColumnPinningState>($pinning());
//     const onPaginationChange = useCallback((updater: MRT_PaginationState | Updater<MRT_PaginationState>) => {
//         let result: MRT_PaginationState = { pageIndex: 0, pageSize: 20 };
//         onPageIndexChange((oldIndex) => {
//             onPageSizeChange((oldSize) => {
//                 result = typeof updater === 'function' ? updater({ pageSize: oldSize, pageIndex: oldIndex }) : updater;
//                 return result.pageSize;
//             });
//             return result.pageIndex;
//         });
//         return result;
//     }, []);

//     useEffect(() => {
//         forager.getItem<MRT_ColumnFiltersState>($columnFilters).then((x) => onColumnFiltersChange(_id != null ? [{ id: '_id', value: _id }] : x ?? $array()));
//         forager.getItem<MRT_ColumnOrderState>($columnOrder).then((x) => onColumnOrderChange(x ?? $array()));
//         forager.getItem<MRT_SortingState>($sorting).then((x) => onSortingChange(x ?? $array()));
//         forager.getItem<MRT_ColumnPinningState>($columnPinning).then((x) => onColumnPinningChange(x ?? $pinning()));
//         forager.getItem<MRT_ColumnSizingState>($columnSizing).then((x) => onColumnSizingChange(x ?? $object()));
//         forager.getItem<MRT_VisibilityState>($columnVisibility).then((x) => onColumnVisibilityChange(x ?? $object()));
//         forager.getItem<MRT_DensityState>($density).then((x) => onDensityChange(x ?? 'compact'));
//         forager.getItem<unknown>($globalFilter).then((x) => onGlobalFilterChange(x ?? undefined));
//         forager.getItem<boolean>($showGlobalFilter).then((x) => onShowGlobalFilterChange(x ?? false));
//         forager.getItem<MRT_RowSelectionState>($rowSelection).then((x) => onRowSelectionChange(x ?? $object()));
//         forager.getItem<number>($pageIndex).then((x) => onPageIndexChange(x ?? 0));
//         forager.getItem<number>($pageSize).then((x) => onPageSizeChange(x ?? 20));
//         forager.getItem<MRT_GroupingState>($grouping).then((x) => onGroupingChange(x ?? $array()));
//     }, [$columnFilters, $columnOrder, $columnPinning, $columnSizing, $columnVisibility, $density, $globalFilter, $grouping, $pageIndex, $pageSize, $rowSelection, $showGlobalFilter, $sorting, _id, forager]);

//     useEffect(() => {
//         if (_id == null) {
//             forager.setItem($columnFilters, columnFilters);
//         } else {
//             onColumnFiltersChange([{ id: '_id', value: _id }]);
//         }
//     }, [$columnFilters, _id, columnFilters, forager]);
//     useEffect(() => {
//         forager.setItem($columnOrder, columnOrder);
//     }, [$columnOrder, columnOrder, forager]);
//     useEffect(() => {
//         forager.setItem($columnPinning, columnPinning);
//     }, [$columnPinning, columnPinning, forager]);
//     useEffect(() => {
//         forager.setItem($columnSizing, columnSizing);
//     }, [$columnSizing, columnSizing, forager]);
//     useEffect(() => {
//         forager.setItem($columnVisibility, columnVisibility);
//     }, [$columnVisibility, columnVisibility, forager]);
//     useEffect(() => {
//         forager.setItem($density, density);
//     }, [$density, density, forager]);
//     useEffect(() => {
//         forager.setItem($globalFilter, globalFilter);
//     }, [$globalFilter, forager, globalFilter]);
//     useEffect(() => {
//         forager.setItem($showGlobalFilter, showGlobalFilter);
//     }, [$showGlobalFilter, forager, showGlobalFilter]);
//     useEffect(() => {
//         forager.setItem($sorting, sorting);
//     }, [$sorting, forager, sorting]);
//     useEffect(() => {
//         forager.setItem($pageIndex, pageIndex);
//     }, [$pageIndex, forager, pageIndex]);
//     useEffect(() => {
//         forager.setItem($pageSize, pageSize);
//     }, [$pageSize, forager, pageSize]);
//     useEffect(() => {
//         forager.setItem($rowSelection, rowSelection);
//     }, [$rowSelection, forager, rowSelection]);
//     useEffect(() => {
//         forager.setItem($grouping, grouping);
//     }, [$grouping, forager, grouping]);

//     const resetSettings = useCallback(() => {
//         onColumnFiltersChange($array());
//         onColumnOrderChange($array());
//         onColumnPinningChange($pinning());
//         onColumnSizingChange($object());
//         onColumnVisibilityChange($object());
//         onDensityChange('compact');
//         onGlobalFilterChange(undefined);
//         onGroupingChange($array());
//         onPaginationChange({ pageSize: 20, pageIndex: 0 });
//         onRowSelectionChange($object());
//         onShowGlobalFilterChange(false);
//         onSortingChange($array());
//     }, [onPaginationChange]);

//     const state = useMemo(
//         () =>
//             ({
//                 columnFilters,
//                 columnOrder,
//                 columnPinning,
//                 columnSizing,
//                 columnVisibility,
//                 density,
//                 globalFilter,
//                 grouping,
//                 pagination: {
//                     pageIndex,
//                     pageSize
//                 },
//                 rowSelection,
//                 showGlobalFilter,
//                 sorting
//             }) as MRT_TableState<T>,
//         [columnFilters, columnOrder, columnPinning, columnSizing, columnVisibility, density, globalFilter, grouping, pageIndex, pageSize, rowSelection, showGlobalFilter, sorting]
//     );

//     return {
//         onColumnFiltersChange,
//         onColumnOrderChange,
//         onColumnPinningChange,
//         onColumnSizingChange,
//         onColumnVisibilityChange,
//         onDensityChange,
//         onGlobalFilterChange,
//         onGroupingChange,
//         onPaginationChange,
//         onRowSelectionChange,
//         onShowGlobalFilterChange,
//         onSortingChange,
//         state,
//         resetSettings
//     };
// }
