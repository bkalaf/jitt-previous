import { MRT_ColumnVirtualizer, MRT_RowData, MRT_RowVirtualizer, MRT_TableOptions } from 'material-react-table';
import { useEffectiveCollection } from './useEffectiveCollection';
import { UIEvent, useCallback, useEffect, useMemo, useRef } from 'react';
import { useViewSettings } from './useViewSettings';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useLocalRealm } from './useLocalRealm';
import { useNavigate } from 'react-router';
import { prependIgnore } from '../common/prepend';
import { handleSortAndFilter } from './handleSortAndFilter';
import { toFilter } from './toFilter';
import { toGlobalFilter } from './toGlobalFilter';
import { toSorted } from './toSorted';
import { renderBottomToolbarCustomActions } from './renderBottomToolbarCustomActions';

export function useVirtualizedQuery<T extends MRT_RowData>() {
    const route = useEffectiveCollection();
    const tableContainerRef = useRef<HTMLDivElement | null>(null);
    const rowVirtualizerInstanceRef = useRef<MRT_RowVirtualizer | null>(null);
    const columnVirtualizerInstanceRef = useRef<MRT_ColumnVirtualizer | null>(null);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { initialState, state, resetCollectionState, setCollectionOption: _, ...options } = useViewSettings(route);
    const { columnFilters, sorting, globalFilter } = state;
    const realm = useLocalRealm();
    // const filterOptions = useMemo(
    //     () =>
    //         createFilterOptions<T>({
    //             ignoreAccents: true,
    //             ignoreCase: true,
    //             matchFrom: 'any',
    //             trim: true
    //         }),
    //     []
    // );
    const navigate = useNavigate();
    const { data, fetchNextPage, isError, isFetching, isLoading } = useInfiniteQuery({
        queryKey: [route, columnFilters, globalFilter, sorting],
        queryFn: () => {
            const qp1 = new URLSearchParams();
            const [qp2, sorted] = toSorted(qp1, sorting);
            const [qp3, match] = toGlobalFilter(qp2, globalFilter);
            const [queryParams, filtered, filteredArgs] = toFilter(qp3, columnFilters);
            const searchString = queryParams.toString();
            navigate(new URL([location.href, prependIgnore('?')(searchString) ?? ''].join('')).toString());
            const result = realm.objects<T>(route) as any as Realm.Results<T>;
            return handleSortAndFilter<T>(sorted, filtered, filteredArgs, match)(result) as T[];
        },
        initialPageParam: 0,
        getNextPageParam: (lastPage, allPages) => allPages.length,
        refetchOnWindowFocus: false,
        refetchOnMount: true,
        refetchOnReconnect: true
    });
    console.log(`data`, data);
    console.log(`data.pages`, data?.pages);
    const flatData = useMemo(() => data?.pages.flatMap((page) => page) ?? [], [data?.pages]);
    const totalDBRowCount = data?.pages?.length ?? 0;
    const totalFetched = flatData.length;

    const fetchMoreOnBottomReached = useCallback(
        (containerRefElement?: HTMLDivElement | null) => {
            if (containerRefElement) {
                const { scrollHeight, scrollTop, clientHeight } = containerRefElement;
                if (scrollHeight - scrollTop - clientHeight < 400 && !isFetching && totalFetched < totalDBRowCount) {
                    fetchNextPage();
                }
            }
        },
        [fetchNextPage, isFetching, totalDBRowCount, totalFetched]
    );

    useEffect(() => {
        try {
            rowVirtualizerInstanceRef.current?.scrollToIndex?.(0);
        } catch (error) {
            console.error(error);
        }
    }, [columnFilters, globalFilter, sorting]);

    useEffect(() => {
        fetchMoreOnBottomReached(tableContainerRef.current);
    }, [fetchMoreOnBottomReached]);

    const onScroll = useCallback(
        (event: UIEvent<HTMLDivElement>) => {
            fetchMoreOnBottomReached(event.target as HTMLDivElement);
        },
        [fetchMoreOnBottomReached]
    );
    const muiToolbarAlertBannerProps = useMemo(
        () =>
            isError ?
                {
                    color: 'error',
                    children: 'Error loading data'
                }
            :   undefined,
        [isError]
    );
    return {
        data: flatData,
        enablePagination: false,
        enableRowNumbers: true,
        enableRowVirtualization: true,
        enableColumnVirtualization: true,
        enableColumnResizing: true,
        enableColumnPinning: true,
        enableBottomToolbar: false,
        columnVirtualizerInstanceRef,
        columnVirtualizerOptions: {
            overscan: 3
        },
        muiTableContainerProps: {
            ref: tableContainerRef,
            sx: {
                maxHeight: '800px'
            },
            onScroll: onScroll
        },
        muiToolbarAlertBannerProps,
        renderBottomToolbarCustomActions: renderBottomToolbarCustomActions(totalFetched, totalDBRowCount),
        state: {
            ...state,
            isLoading,
            showAlertBanner: isError,
            showLoadingOverlay: isLoading,
            showSkeletons: isFetching
        },
        defaultDisplayColumn: {
            enableResizing: true
        },
        rowVirtualizerInstanceRef,
        rowVirtualizerOptions: {
            overscan: 5
        },
        initialState,
        resetCollectionState,
        ...options
    } as Omit<MRT_TableOptions<T>, 'columns'> & { resetCollectionState: (params: { collection: string }) => () => void };
}
