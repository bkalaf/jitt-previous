import { MRT_RowData, MRT_TableOptions, useMaterialReactTable } from 'material-react-table';
import { createRenderCreateRowDialogContent } from '../components/Views/renderProperties/createRenderCreateRowDialogContent';
import { createRenderTopToolbarCustomActions } from '../components/Views/renderProperties/createRenderTopToolbarCustomActions';
import { useInitial } from './useInitial';
import { createRenderEditRowDialogContent } from '../components/Views/renderProperties/createRenderEditRowDialogContent';
import { ColumnResizeMode, getFacetedMinMaxValues, getFacetedRowModel, getFacetedUniqueValues } from '@tanstack/react-table';
import { ColumnMeta } from '@tanstack/table-core';
import { useEffectiveCollection } from './useEffectiveCollection';
import { IconButtonProps, TableCellProps, TableContainerProps, TableRowProps } from '@mui/material';
import { createRenderRowActions, fromOID } from '../components/Views/renderProperties/createRenderRowActions';
import { useGetTableCanExpand } from './useGetTableCanExpand';
import {
    faArrowDown,
    faArrowRight,
    faBackwardFast,
    faChevronLeft,
    faChevronRight,
    faClipboard,
    faCompress,
    faExpand,
    faEye,
    faEyeSlash,
    faFilter,
    faFilterCircleXmark,
    faFilterList,
    faFloppyDisk,
    faForwardFast,
    faGrid,
    faGrid4,
    faGrid5,
    faGripLines,
    faMagnifyingGlass,
    faMagnifyingGlassMinus,
    faPencil,
    faPlusSquare,
    faSort,
    faThumbTack
} from '@fortawesome/pro-solid-svg-icons';
import { useCallback, useMemo } from 'react';
import { RenderCaption } from './RenderCaption';
import { useDataQuery } from './useVirtualizedQuery';
import { useStaticColumns } from './useStaticColumns';
import { createIcon } from './createIcon';
import { createRenderVerticalTabs } from '../components/Tabs/createRenderVerticalTabs';
import { BSON } from 'realm';

export function useData<T extends MRT_RowData>(objectType?: string 
// , isLoading = false, isFetching = false
) {
    // const [globalFilter, setGlobalFilter] = useState<unknown>(undefined);
    // const [columnFilters, setColumnFilters] = useState<MRT_ColumnFiltersState>([]);
    const route = useEffectiveCollection(objectType);
    const init = useInitial<T>(route);
    const getTableCanExpand = useGetTableCanExpand();
    // const { state, resetCollectionState, initialState, ...options } = useViewSettings(route);
    const columns = useStaticColumns<T>();
    const getRowId = useCallback((obj: T) => {
        const result = fromOID(obj._id);
        return result;
    }, []);
    const {
        // columnVirtualizerInstanceRef,
        // columnVirtualizerOptions,
        data,
        defaultDisplayColumn,
        enableBottomToolbar,
        enableColumnPinning,
        enableColumnResizing,
        // enableColumnVirtualization,
        enableRowNumbers,
        enableRowVirtualization,
        // initialState,
        muiTableContainerProps,
        muiToolbarAlertBannerProps,
        renderBottomToolbarCustomActions,
        resetCollectionState,
        // rowVirtualizerInstanceRef,
        // rowVirtualizerOptions,
        state,
        initialState,
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
    } = useDataQuery<T>()

    // const t: MRT_TableOptions<any>['muiExpandButtonProps']

    return useMaterialReactTable<T>({
        autoResetExpanded: false,
        autoResetPageIndex: false,
        columnResizeMode: 'onEnd' as ColumnResizeMode,
        columns,
        // columnVirtualizerInstanceRef,
        // columnVirtualizerOptions,
        createDisplayMode: 'modal',
        data,
        defaultDisplayColumn,
        displayColumnDefOptions: {
            'mrt-row-actions': {
                size: 80,
                grow: true,
                visibleInShowHideMenu: false
            },
            'mrt-row-expand': {
                size: 70,
                grow: true,
                visibleInShowHideMenu: false
                // muiTableHeadCellProps: {
                //     classes: {
                //         root: 'text-center p-0',
                //     },
                //     id: 'mrt-row-expand',
                //     'data-id': 'mrt-row-expand'
                // } as any,
                // muiTableBodyCellProps: {
                //     className: 'ml-0'
                // } as TableCellProps,
                // Cell: createJITTExpandButton(expandSingleRow),
                // Header: createJITTExpandButton(expandAllRows)
            },
            'mrt-row-select': {
                size: 50,
                grow: true,
                visibleInShowHideMenu: false
            }
        },
        editDisplayMode: 'modal',
        enableBottomToolbar,
        enableColumnActions: true,
        enableColumnDragging: true,
        enableColumnOrdering: true,
        enableColumnPinning: enableColumnPinning ?? true,
        enableColumnResizing: enableColumnResizing ?? true,
        // enableColumnVirtualization,
        enableEditing: true,
        enableExpandAll: getTableCanExpand(route),
        enableExpanding: getTableCanExpand(route),
        enableFacetedValues: true,
        enableGrouping: true,
        enablePagination: true,
        enableRowNumbers: enableRowNumbers,
        enableRowSelection: true,
        enableRowVirtualization,
        enableSelectAll: true,
        enableSorting: true,
        enableStickyFooter: true,
        enableStickyHeader: true,
        getFacetedMinMaxValues: getFacetedMinMaxValues() as any,
        getFacetedRowModel: getFacetedRowModel() as any,
        getFacetedUniqueValues: getFacetedUniqueValues() as any,
        getRowCanExpand: (row) => getTableCanExpand(route) && row.subRows.length > 0,
        getRowId,
        getSubRows: getTableCanExpand(route) ? (original: T) => original.subRows : undefined,
        groupedColumnMode: 'remove' as MRT_TableOptions<T>['groupedColumnMode'],
        icons: useMemo(
            () => ({
                ArrowDownwardIcon: createIcon(faArrowDown),
                ArrowRightIcon: createIcon(faArrowRight),
                ChevronLeftIcon: createIcon(faChevronLeft),
                ChevronRightIcon: createIcon(faChevronRight),
                ContentCopy: createIcon(faClipboard),
                DensityLargeIcon: createIcon(faGrid),
                DensityMediumIcon: createIcon(faGrid4),
                DensitySmallIcon: createIcon(faGrid5),
                DragHandleIcon: createIcon(faGripLines),
                EditIcon: createIcon(faPencil),
                ExpandMoreIcon: createIcon(faPlusSquare),
                FilterAltIcon: createIcon(faFilter),
                FilterListIcon: createIcon(faFilterList),
                FilterListOffIcon: createIcon(faFilterCircleXmark),
                FirstPageIcon: createIcon(faBackwardFast),
                FullscreenExitIcon: createIcon(faCompress),
                FullscreenIcon: createIcon(faExpand),
                LastPageIcon: createIcon(faForwardFast),
                PushPinIcon: createIcon(faThumbTack),
                SaveIcon: createIcon(faFloppyDisk),
                SearchIcon: createIcon(faMagnifyingGlass),
                SearchOffIcon: createIcon(faMagnifyingGlassMinus),
                SortIcon: createIcon(faSort),
                ViewColumnIcon: createIcon(faEye),
                VisibilityOffIcon: createIcon(faEyeSlash)
            }),
            []
        ),
        initialState,
        layoutMode: 'grid',
        muiDetailPanelProps: {
            className: 'w-screen'
        },
        muiExpandButtonProps: (props: Parameters<Exclude<MRT_TableOptions<T>['muiExpandButtonProps'], IconButtonProps | undefined>>[0]) => ({
            className:
                props.row.getCanExpand() ?
                    props.row.getIsExpanded() ?
                        ''
                    :   ''
                :   'hidden',
            color:
                props.row.getCanExpand() ?
                    props.row.getIsExpanded() ?
                        'highlight'
                    :   'metal'
                :   'metal'
        }),

        muiTableBodyCellProps: (props: Parameters<Exclude<MRT_TableOptions<T>['muiTableBodyCellProps'], TableCellProps | undefined>>[0]) => {
            const selector = `tr[data-index="${props.row.index}"] > td[data-column-name="${(props.column.columnDef?.meta as ColumnMeta<any, any>)?.columnName}"]`;
            const func = () => {
                const el = document.querySelector(selector);
                const clientWidth = el?.clientWidth ?? 0;
                const scrollWidth = el?.scrollWidth ?? 0;
                const isOverflowing = clientWidth < scrollWidth;
                if (el != null && (el as HTMLElement).dataset != null) {
                    (el as HTMLElement).dataset.isOverflowing = isOverflowing.toString();
                }
            };
            setTimeout(func, 2000);
            return {
                'data-column-name': (props.column.columnDef?.meta as ColumnMeta<any, any>)?.columnName,
                className:
                    'before:pinned:bg-slate-600 pinned:bg-slate-600 pinned:text-white whitespace-pre font-medium group-data-[row-depth="4"]:text-white group-data-[row-depth="5"]:text-white group-data-[row-depth="6"]:text-white aria-readonly:bg-black aria-readonly:text-white group'
            };
        },

        muiTableBodyRowProps: useCallback(
            (props: Parameters<Exclude<MRT_TableOptions<T>['muiTableBodyRowProps'], TableRowProps | undefined>>[0]) =>
                ({
                    className:
                        'group data-[row-depth="0"]:bg-transparent data-[row-depth="1"]:bg-blue-100 data-[row-depth="2"]:bg-blue-200 data-[row-depth="3"]:bg-blue-300 data-[row-depth="4"]:bg-blue-400 data-[row-depth="5"]:bg-blue-500 data-[row-depth="6"]:bg-blue-600 data-[row-depth="4"]:text-white data-[row-depth="5"]:text-white data-[row-depth="6"]:text-white',
                    'data-row-depth': props.row.depth
                }) as TableRowProps,
            []
        ),
        muiTableContainerProps: useMemo(() => {
            const mh = (window.visualViewport?.height ?? 0) - 66.95 - 35.99 - 35.99;
            const maxHeight = `${mh.toFixed(0)}px`;
            return {
                ...muiTableContainerProps,
                sx: {
                    display: 'flex',
                    maxHeight,
                    overflowX: 'scroll',
                    overflowY: 'scroll'
                }
            } as TableContainerProps;
        }, [muiTableContainerProps]),
        muiTableHeadCellProps: (props: Parameters<Exclude<MRT_TableOptions<T>['muiTableHeadCellProps'], TableCellProps | undefined>>[0]) => ({
            // classes: {
            //     head: 'relative'
            //     // head: 'flex justify-center'
            // },
            'data-column-name': (props.column.columnDef?.meta as ColumnMeta<any, any>)?.columnName,
            className:
                'before:pinned:bg-slate-600 pinned:bg-slate-600 pinned:text-white not-pinned:grouped-header:bg-blue-700 not-pinned:grouped-header:text-white not-pinned:single-header:bg-transparent not-pinned:single-header:text-black not-pinned:grouped-header:shadow-inner not-pinned:grouped-header:shadow-black'
        }),
        muiTableProps: {
            sx: {
                caption: {
                    captionSide: 'top'
                }
            }
        },
        muiToolbarAlertBannerProps,
        onColumnFiltersChange: onColumnFiltersChange,
        onColumnOrderChange: onColumnOrderChange,
        onColumnSizingChange: onColumnSizingChange,
        onColumnPinningChange: onColumnPinningChange,
        onColumnVisibilityChange: onColumnVisibilityChange,
        onDensityChange: onDensityChange,
        onExpandedChange: onExpandedChange,
        onGlobalFilterChange: onGlobalFilterChange,
        onGroupingChange: onGroupingChange,
        onPaginationChange: onPaginationChange,
        onShowColumnFiltersChange: onShowColumnFiltersChange,
        onShowGlobalFilterChange: onShowGlobalFilterChange,
        onSortingChange: onSortingChange,
        onRowSelectionChange: onRowSelectionChange,
        paginationDisplayMode: 'pages',
        renderBottomToolbarCustomActions,
        renderCaption: RenderCaption,
        renderCreateRowDialogContent: createRenderCreateRowDialogContent<T & { _id: BSON.ObjectId }>() as any,
        renderEditRowDialogContent: createRenderEditRowDialogContent(),
        renderRowActions: createRenderRowActions(),
        renderTopToolbarCustomActions: createRenderTopToolbarCustomActions<T>(init as () => T, resetCollectionState),
        renderDetailPanel: route === 'sku' || route === 'product' ? createRenderVerticalTabs(route) : undefined,
        // rowVirtualizerInstanceRef,
        // rowVirtualizerOptions,
        state
    });
}
