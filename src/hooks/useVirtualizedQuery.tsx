import { MRT_RowData, MRT_TableOptions } from 'material-react-table';
import { useEffectiveCollection } from './useEffectiveCollection';
import { useMemo } from 'react';
import { useViewSettings } from './useViewSettings';
import { useQuery } from '@tanstack/react-query';
import { useLocalRealm } from './useLocalRealm';

export function useDataQuery<T extends MRT_RowData>(): Omit<MRT_TableOptions<T>, 'columns'> & { resetCollectionState: () => void } {
    const route = useEffectiveCollection();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { initialState, state, resetCollectionState, setCollectionOption: _, ...options } = useViewSettings<T>(route);
    const { columnFilters, sorting, globalFilter } = state;
    const realm = useLocalRealm();
    // const ctor = useCollectionSchema(route) as MyClass<any>;
    // const navigate = useNavigate();
    // const $match = useMatch('/data/v1/:collection');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { data, dataUpdatedAt, error, errorUpdatedAt, isLoading, isError } = useQuery<T[]>({
        queryKey: [route, columnFilters, globalFilter, sorting],
        queryFn: () => {
            // console.log('MATCH', $match);
            // const qp1 = new URLSearchParams();
            // const [qp2, sorted] = toSorted(qp1, sorting);
            // const [qp3, match] = toGlobalFilter<T>(qp2, globalFilter, ctor);
            // const [queryParams, filtered, filteredArgs] = toFilter(qp3, columnFilters);
            // const searchString = queryParams.toString();
            // const pathTo = ['/data/v1', prependIgnore('/')($match?.params.collection), prependIgnore('?')(searchString) ?? ''].join('');
            // navigate(pathTo);
            const result = realm.objects<T>(route) as any as Realm.Results<T>;
            // console.log(`result`, result, result.length);
            return Promise.resolve(Array.from(result));
        }
    });
    const muiToolbarAlertBannerProps = useMemo(
        () =>
            isError ?
                ({
                    color: 'error',
                    children: 'Error loading data'
                } as any)
            :   undefined,
        [isError]
    );
    return {
        data: data ?? [],
        enablePagination: true,
        enableRowNumbers: true,
        enableRowVirtualization: true,
        enableColumnVirtualization: true,
        enableColumnResizing: true,
        enableColumnPinning: true,
        enableBottomToolbar: true,
        // columnVirtualizerInstanceRef,
        // columnVirtualizerOptions: {
        //     overscan: 1
        // },
        muiTableContainerProps: {
            // ref: tableContainerRef,
            sx: {
                maxHeight: '800px'
            }
            // onScroll: onScroll
        },
        muiToolbarAlertBannerProps,
        // renderBottomToolbarCustomActions: renderBottomToolbarCustomActions(totalFetched, totalDBRowCount),
        state: {
            ...state,
            isLoading,
            showAlertBanner: isError
            // showLoadingOverlay: isLoading,
            // showSkeletons: isFetching
        },
        defaultDisplayColumn: {
            enableResizing: true
        },
        // rowVirtualizerInstanceRef,
        // rowVirtualizerOptions: {
        //     overscan: 2
        // },
        initialState,
        resetCollectionState: resetCollectionState({ collection: route }),
        ...options
    };
}
// export function useVirtualizedQuery<T extends MRT_RowData>() {
//     const route = useEffectiveCollection();
//     // const tableContainerRef = useRef<HTMLDivElement | null>(null);
//     // const rowVirtualizerInstanceRef = useRef<MRT_RowVirtualizer | null>(null);
//     // const columnVirtualizerInstanceRef = useRef<MRT_ColumnVirtualizer | null>(null);
//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     const { initialState, state, resetCollectionState, setCollectionOption: _, ...options } = useViewSettings(route);
//     const { columnFilters, sorting, globalFilter } = state;
//     const realm = useLocalRealm();
//     const ctor = useCollectionSchema(route);
//     const navigate = useNavigate();
//     const $match = useMatch('/data/v1/:collection');
//     const {
//         data,
//         // fetchNextPage,
//         isError,
//         isFetching,
//         isLoading,
//         isFetchingNextPage,
//         isLoadingError,
//         isPaused,
//         isPending,
//         isRefetching,
//         isRefetchError,
//         isSuccess,
//         isFetched,
//         status,
//         fetchStatus,
//         error,
//         dataUpdatedAt,
//         hasNextPage,
//         hasPreviousPage,
//         failureReason,
//         isStale
//     } = useInfiniteQuery({
//         queryKey: [route, columnFilters, globalFilter, sorting],
//         queryFn: ({ pageParam }) => {
//             console.log('MATCH', $match);
//             const qp1 = new URLSearchParams();
//             const [qp2, sorted] = toSorted(qp1, sorting);
//             const [qp3, match] = toGlobalFilter(qp2, globalFilter, ctor);
//             const [queryParams, filtered, filteredArgs] = toFilter(qp3, columnFilters);
//             const searchString = queryParams.toString();
//             const pathTo = ['/data/v1', prependIgnore('/')($match?.params.collection), prependIgnore('?')(searchString) ?? ''].join('');
//             navigate(pathTo);
//             const result = realm.objects<T>(route) as any as Realm.Results<T>;
//             console.log(`result`, result, result.length);
//             return Promise.resolve(handleSortAndFilter<T>(sorted, filtered, filteredArgs, match)(result).slice(0, (pageParam + 1) * 20) as T[]);
//         },
//         initialPageParam: 0,
//         getNextPageParam: (lastPage, allPages, current) => current + 1,
//         refetchOnWindowFocus: false,
//         refetchOnMount: false,
//         refetchOnReconnect: false
//     });
//     console.log(`status`, status, 'fetchStatus', fetchStatus, 'dataUpdatedAt', dayjs(dataUpdatedAt).format('YYYY-MM-DD'), `isError`, isError, 'isLoadingError', isLoadingError, 'isRefetchError', isRefetchError, 'error', error, 'isStale', isStale);
//     console.log('isPaused', isPaused, 'isPending', isPending, 'isFetched', isFetched, 'isSuccess', isSuccess, 'failureReason', failureReason);
//     console.log(`isFetching`, isFetching, `isLoading`, isLoading, 'isFetchingNextPage', isFetchingNextPage, 'isRefetching', isRefetching);
//     console.log('hasPreviousPage', hasPreviousPage, 'hasNextPage', hasNextPage);
//     console.log(`data`, data);
//     console.log(`data.pages`, data?.pages);
//     const flatData = useMemo(() => data?.pages.flatMap((page) => page) ?? [], [data]);
//     console.log(`flatData`, flatData);
//     const totalDBRowCount = data?.pages?.at(0)?.length ?? 0;
//     console.log(`totalDBRowCount`, totalDBRowCount);
//     const totalFetched = flatData.length;
//     console.log(`totalFetched`, totalFetched);

//     // const fetchMoreOnBottomReached = useCallback(
//     //     (containerRefElement?: HTMLDivElement | null) => {
//     //         if (containerRefElement) {
//     //             const { scrollHeight, scrollTop, clientHeight } = containerRefElement;
//     //             console.info(`containerRefElement`, scrollHeight, scrollTop, clientHeight);
//     //             const hasMore = scrollHeight - scrollTop - clientHeight < 400 && !isFetching && totalFetched < totalDBRowCount;
//     //             console.log(`hasMore`, hasMore);
//     //             console.info(`hasMore`, hasMore, `hasNextPage`, hasNextPage);
//     //             if (hasMore) {
//     //                 fetchNextPage({
//     //                     cancelRefetch: false
//     //                 });
//     //             }
//     //         }
//     //     },
//     //     [fetchNextPage, hasNextPage, isFetching, totalDBRowCount, totalFetched]
//     // );

//     // useEffect(() => {
//     //     try {
//     //         rowVirtualizerInstanceRef.current?.scrollToIndex?.(0);
//     //     } catch (error) {
//     //         console.error(error);
//     //     }
//     // }, [columnFilters, globalFilter, sorting]);

//     // useEffect(() => {
//     //     fetchMoreOnBottomReached(tableContainerRef.current);
//     // }, [fetchMoreOnBottomReached]);

//     // const onScroll = useCallback(
//     //     (event: UIEvent<HTMLDivElement>) => {
//     //         fetchMoreOnBottomReached(event.target as HTMLDivElement);
//     //     },
//     //     [fetchMoreOnBottomReached]
//     // );
//     const muiToolbarAlertBannerProps = useMemo(
//         () =>
//             isError ?
//                 ({
//                     color: 'error',
//                     children: 'Error loading data'
//                 } as any)
//             :   undefined,
//         [isError]
//     );
//     return {
//         data: flatData,
//         enablePagination: false,
//         enableRowNumbers: true,
//         enableRowVirtualization: true,
//         enableColumnVirtualization: true,
//         enableColumnResizing: true,
//         enableColumnPinning: true,
//         enableBottomToolbar: true,
//         // columnVirtualizerInstanceRef,
//         // columnVirtualizerOptions: {
//         //     overscan: 1
//         // },
//         muiTableContainerProps: {
//             // ref: tableContainerRef,
//             sx: {
//                 maxHeight: '800px'
//             }
//             // onScroll: onScroll
//         },
//         muiToolbarAlertBannerProps,
//         renderBottomToolbarCustomActions: renderBottomToolbarCustomActions(totalFetched, totalDBRowCount),
//         state: {
//             ...state,
//             isLoading,
//             showAlertBanner: isError
//             // showLoadingOverlay: isLoading,
//             // showSkeletons: isFetching
//         },
//         defaultDisplayColumn: {
//             enableResizing: true
//         },
//         // rowVirtualizerInstanceRef,
//         // rowVirtualizerOptions: {
//         //     overscan: 2
//         // },
//         initialState,
//         resetCollectionState,
//         ...options
//     };
//     //as Omit<MRT_TableOptions<T>, 'columns'> & { resetCollectionState: (params: { collection: string }) => () => void };
// }
