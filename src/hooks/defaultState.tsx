import {
    MRT_ColumnFiltersState,
    MRT_ColumnOrderState,
    MRT_ColumnPinningState,
    MRT_ColumnSizingState,
    MRT_DensityState,
    MRT_ExpandedState,
    MRT_GroupingState, MRT_RowSelectionState,
    MRT_SortingState, MRT_VisibilityState
} from 'material-react-table';


export const defaultState = {
    columnFilters: [] as MRT_ColumnFiltersState,
    columnOrder: [] as MRT_ColumnOrderState,
    grouping: [] as MRT_GroupingState,
    sorting: [] as MRT_SortingState,
    pagination: {
        pageIndex: 0,
        pageSize: 20
    },
    columnPinning: {
        left: [],
        right: []
    } as MRT_ColumnPinningState,
    density: 'compact' as MRT_DensityState,
    columnSizing: {} as MRT_ColumnSizingState,
    columnVisibility: {} as MRT_VisibilityState,
    rowSelection: {} as MRT_RowSelectionState,
    expanded: {} as MRT_ExpandedState,
    globalFilter: undefined,
    showColumnFilters: false,
    showGlobalFilter: false
};
