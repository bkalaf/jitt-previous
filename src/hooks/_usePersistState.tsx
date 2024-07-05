// import { useCallback, useMemo } from 'react';
// import { defaultState } from './defaultState';
// import { useConfiguration } from './useConfiguration';
// import { MRT_TableOptions, MRT_TableState } from 'material-react-table';
// import { useCollectionSetting } from './useCollectionSetting';

// export function usePersistState(collection: CollectionNames): {
//     resetSettings: () => void;
//     state: Pick<
//         MRT_TableState<any>,
//         'columnFilters' | 'columnOrder' | 'columnPinning' | 'columnSizing' | 'columnVisibility' | 'density' | 'expanded' | 'grouping' | 'sorting' | 'globalFilter' | 'pagination' | 'rowSelection' | 'showGlobalFilter' | 'showColumnFilters'
//     >;
// } & Pick<
//     MRT_TableOptions<any>,
//     | 'onColumnFiltersChange'
//     | 'onColumnOrderChange'
//     | 'onColumnPinningChange'
//     | 'onColumnSizingChange'
//     | 'onColumnVisibilityChange'
//     | 'onDensityChange'
//     | 'onGroupingChange'
//     | 'onSortingChange'
//     | 'onGlobalFilterChange'
//     | 'onPaginationChange'
//     | 'onRowSelectionChange'
//     | 'onShowGlobalFilterChange'
//     | 'onShowColumnFiltersChange'
//     | 'onExpandedChange'
// > {
//     const { updateConfig } = useConfiguration();
//     const [columnFilters, onColumnFiltersChange] = useCollectionSetting(collection, 'columnFilters');
//     const [columnOrder, onColumnOrderChange] = useCollectionSetting(collection, 'columnOrder');
//     const [columnPinning, onColumnPinningChange] = useCollectionSetting(collection, 'columnPinning');
//     const [columnSizing, onColumnSizingChange] = useCollectionSetting(collection, 'columnSizing');
//     const [columnVisibility, onColumnVisibilityChange] = useCollectionSetting(collection, 'columnVisibility');
//     const [density, onDensityChange] = useCollectionSetting(collection, 'density');
//     const [expanded, onExpandedChange] = useCollectionSetting(collection, 'expanded');
//     const [globalFilter, onGlobalFilterChange] = useCollectionSetting(collection, 'globalFilter');
//     const [grouping, onGroupingChange] = useCollectionSetting(collection, 'grouping');
//     const [rowSelection, onRowSelectionChange] = useCollectionSetting(collection, 'rowSelection');
//     const [pagination, onPaginationChange] = useCollectionSetting(collection, 'pagination');
//     const [sorting, onSortingChange] = useCollectionSetting(collection, 'sorting');
//     const [showGlobalFilter, onShowGlobalFilterChange] = useCollectionSetting(collection, 'showGlobalFilter');
//     const [showColumnFilters, onShowColumnFiltersChange] = useCollectionSetting(collection, 'showColumnFilters');

//     const columnFilters = useTableState(config, collection, 'columnFilters');
//     const columnOrder = useTableState(config, collection, 'columnOrder');
//     const columnPinning = useTableState(config, collection, 'columnPinning');
//     const columnSizing = useTableState(config, collection, 'columnSizing');
//     const columnVisibility = useTableState(config, collection, 'columnVisibility');
//     const density = useTableState(config, collection, 'density');
//     const expanded = useTableState(config, collection, 'expanded');
//     const globalFilter = useTableState(config, collection, 'globalFilter');
//     const rowSelection = useTableState(config, collection, 'rowSelection');
//     const pagination = useTableState(config, collection, 'pagination');
//     const grouping = useTableState(config, collection, 'grouping');
//     const sorting = useTableState(config, collection, 'sorting');
//     const showGlobalFilter = useTableState(config, collection, 'showGlobalFilter');
//     const showColumnFilters = useTableState(config, collection, 'showColumnFilters');

//     const onColumnFiltersChange = useUpdater(setConfig, collection, 'columnFilters', []);
//     const onColumnOrderChange = useUpdater(setConfig, collection, 'columnOrder', []);
//     const onColumnPinningChange = useUpdater(setConfig, collection, 'columnPinning', { left: [], right: [] });
//     const onColumnSizingChange = useUpdater(setConfig, collection, 'columnSizing', {});
//     const onColumnVisibilityChange = useUpdater(setConfig, collection, 'columnVisibility', {});
//     const onDensityChange = useUpdater(setConfig, collection, 'density', 'compact');
//     const onExpandedChange = useUpdater(setConfig, collection, 'expanded', {});
//     const onGlobalFilterChange = useUpdater(setConfig, collection, 'globalFilter', undefined);
//     const onRowSelectionChange = useUpdater(setConfig, collection, 'rowSelection', {});
//     const onPaginationChange = useUpdater(setConfig, collection, 'pagination', { pageIndex: 0, pageSize: 20 });
//     const onGroupingChange = useUpdater(setConfig, collection, 'grouping', []);
//     const onShowColumnFiltersChange = useUpdater(setConfig, collection, 'showColumnFilters', false);
//     const onShowGlobalFilterChange = useUpdater(setConfig, collection, 'showGlobalFilter', false);
//     const onSortingChange = useUpdater(setConfig, collection, 'sorting', []);

//     const resetSettings = useCallback(() => {
//         const fullname = ['collections', collection].join('.');
//         updateConfig(fullname as any, defaultState);
//     }, [collection, updateConfig]);
//     return useMemo(() => {
//         return {
//             resetSettings,
//             state: {
//                 columnFilters: columnFilters,
//                 columnOrder: columnOrder,
//                 columnPinning: columnPinning,
//                 columnVisibility: columnVisibility,
//                 columnSizing: columnSizing,
//                 density: density,
//                 expanded: expanded,
//                 globalFilter: globalFilter,
//                 pagination: pagination,
//                 rowSelection: rowSelection,
//                 grouping: grouping,
//                 sorting: sorting,
//                 showGlobalFilter: showGlobalFilter,
//                 showColumnFilters: showColumnFilters
//             },
//             onColumnFiltersChange: onColumnFiltersChange,
//             onColumnOrderChange: onColumnOrderChange,
//             onColumnPinningChange: onColumnPinningChange,
//             onColumnSizingChange: onColumnSizingChange,
//             onColumnVisibilityChange: onColumnVisibilityChange,
//             onDensityChange: onDensityChange,
//             onExpandedChange: onExpandedChange,
//             onGlobalFilterChange: onGlobalFilterChange,
//             onRowSelectionChange: onRowSelectionChange,
//             onPaginationChange: onPaginationChange,
//             onShowGlobalFilterChange: onShowGlobalFilterChange,
//             onShowColumnFiltersChange: onShowColumnFiltersChange,
//             onGroupingChange: onGroupingChange,
//             onSortingChange: onSortingChange,
//             initialState: defaultState
//         };
//     }, [
//         columnFilters,
//         columnOrder,
//         columnPinning,
//         columnSizing,
//         columnVisibility,
//         density,
//         expanded,
//         globalFilter,
//         grouping,
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
//         pagination,
//         resetSettings,
//         rowSelection,
//         showColumnFilters,
//         showGlobalFilter,
//         sorting
//     ]);
// }
