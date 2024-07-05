/* eslint-disable @typescript-eslint/no-unused-vars */
import { MRT_RowData, MRT_TableState } from 'material-react-table';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { $storage } from './storage';
import { deepEqual } from './deepEqual';
import { ignore } from '../common/ignore';
import { useCollectionOption } from './useCollectionOption';

export function usePersistCollectionOptions<T extends MRT_RowData>(
    collection: string
): {
    resetAllOptions: (x?: any) => void;
    onColumnOrderChange: OnCollectionSettingChange<T, 'columnOrder'>;
    onColumnPinningChange: OnCollectionSettingChange<T, 'columnPinning'>;
    onColumnSizingChange: OnCollectionSettingChange<T, 'columnSizing'>;
    onColumnVisibilityChange: OnCollectionSettingChange<T, 'columnVisibility'>;
    onRowSelectionChange: OnCollectionSettingChange<T, 'rowSelection'>;
    onExpandedChange: OnCollectionSettingChange<T, 'expanded'>;
    onSortingChange: OnCollectionSettingChange<T, 'sorting'>;
    onGroupingChange: OnCollectionSettingChange<T, 'grouping'>;
    onPaginationChange: OnCollectionSettingChange<T, 'pagination'>;
    onShowGlobalFilterChange: OnCollectionSettingChange<T, 'showGlobalFilter'>;
    onShowColumnFiltersChange: OnCollectionSettingChange<T, 'showColumnFilters'>;
    onGlobalFilterChange: OnCollectionSettingChange<T, 'globalFilter'>;
    onColumnFiltersChange: OnCollectionSettingChange<T, 'columnFilters'>;
    onDensityChange: OnCollectionSettingChange<T, 'density'>;
    state: JITTTableState<T>;
} {
    const [state, internalSetState] = useState<JITTTableState<T>>({
        pagination: {
            pageIndex: 0,
            pageSize: 20
        }
    });
    const setState = useCallback(
        (value: JITTTableState<T> | ((old: JITTTableState<T>) => JITTTableState<T>)) => {
            internalSetState((old) => {
                const nextValue = typeof value === 'function' ? (value as (old: JITTTableState<T>) => JITTTableState<T>)(old) : value;
                if (deepEqual(nextValue, old)) {
                    return old;
                }
                $storage.setItem(collection, nextValue);
                return nextValue;
            });
        },
        [collection]
    );
    useEffect(() => {
        const func = async () => {
            const savedState = (await $storage.getItem(collection)) ?? ({ pagination: { pageIndex: 0, pageSize: 20 } } as JITTTableState<T>);
            internalSetState((old) => {
                if (deepEqual(savedState, old)) {
                    return old;
                }
                return savedState;
            });
        };
        setImmediate(func);
    }, [collection]);
    const $array = useMemo(() => [] as any[], []);
    const $object = useMemo(() => ({}) as Record<string, any>, []);

    const [columnFilters, onColumnFiltersChange, resetColumnFilters] = useCollectionOption(state, setState, 'columnFilters', $array);
    const [columnOrder, onColumnOrderChange, resetColumnOrder] = useCollectionOption(state, setState, 'columnOrder', $array);
    const [columnSizing, onColumnSizingChange, resetColumnSizing] = useCollectionOption(state, setState, 'columnSizing', $object);
    const [columnVisibility, onColumnVisibilityChange, resetColumnVisibility] = useCollectionOption(state, setState, 'columnVisibility', $object);
    const [density, onDensityChange, resetDensity] = useCollectionOption(state, setState, 'density', 'spacious');
    const [grouping, onGroupingChange, resetGrouping] = useCollectionOption(state, setState, 'grouping', $array);
    const [pagination, onPaginationChange, resetPagination] = useCollectionOption(state, setState, 'pagination', { pageIndex: 0, pageSize: 20 });
    const [globalFilter, onGlobalFilterChange, resetGlobalFilter] = useCollectionOption(state, setState, 'globalFilter', undefined);
    const [expanded, onExpandedChange, resetExpanded] = useCollectionOption(state, setState, 'expanded', $object);
    const [sorting, onSortingChange, resetSorting] = useCollectionOption(state, setState, 'sorting', $array);
    const [rowSelection, onRowSelectionChange, resetRowSelection] = useCollectionOption(state, setState, 'rowSelection', $object);

    const [columnPinning, onColumnPinningChange, resetColumnPinning] = useCollectionOption(state, setState, 'columnPinning', $object);
    const [showGlobalFilter, onShowGlobalFilterChange, resetShowGlobalFilter] = useCollectionOption(state, setState, 'showGlobalFilter', false);
    const [showColumnFilters, onShowColumnFiltersChange, resetShowColumnFilters] = useCollectionOption(state, setState, 'showColumnFilters', false);
    const resetAllOptions = useMemo(() => {
        return [
            resetColumnFilters,
            resetColumnOrder,
            resetColumnPinning,
            resetColumnSizing,
            resetColumnVisibility,
            resetExpanded,
            resetGrouping,
            resetSorting,
            resetGlobalFilter,
            resetDensity,
            resetPagination,
            resetShowGlobalFilter,
            resetShowColumnFilters,
            resetRowSelection
        ].reduce(
            (pv, cv) => () => {
                pv();
                cv();
            },
            () => {
                ignore();
            }
        );
    }, [
        resetColumnFilters,
        resetColumnOrder,
        resetColumnPinning,
        resetColumnSizing,
        resetColumnVisibility,
        resetDensity,
        resetExpanded,
        resetGlobalFilter,
        resetGrouping,
        resetPagination,
        resetRowSelection,
        resetShowColumnFilters,
        resetShowGlobalFilter,
        resetSorting
    ]);
    return {
        state,
        onColumnFiltersChange,
        onColumnOrderChange,
        onColumnPinningChange,
        onColumnSizingChange,
        onColumnVisibilityChange,
        onDensityChange,
        onExpandedChange,
        onGlobalFilterChange,
        onGroupingChange,
        onPaginationChange,
        onRowSelectionChange,
        onShowColumnFiltersChange,
        onShowGlobalFilterChange,
        onSortingChange,
        resetAllOptions
    };
}
