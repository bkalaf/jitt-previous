import { MRT_RowData, MRT_TableOptions, useMaterialReactTable } from 'material-react-table';
import { createRenderCreateRowDialogContent } from '../components/Views/renderProperties/createRenderCreateRowDialogContent';
import { createRenderTopToolbarCustomActions } from '../components/Views/renderProperties/createRenderTopToolbarCustomActions';
import { useInitial } from './useInitial';
import { createRenderEditRowDialogContent } from '../components/Views/renderProperties/createRenderEditRowDialogContent';
import { ColumnResizeMode, getFacetedMinMaxValues, getFacetedRowModel, getFacetedUniqueValues } from '@tanstack/react-table';
import { ColumnMeta } from '@tanstack/table-core';
import { useEffectiveCollection } from './useEffectiveCollection';
import { TableCellProps, TableContainerProps, TableRowProps } from '@mui/material';
import { createRenderRowActions, fromOID } from '../components/Views/renderProperties/createRenderRowActions';
import { useGetTableCanExpand } from './useGetTableCanExpand';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    IconDefinition,
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
import { CreateRenderDetailPanel } from './createRenderDetailPanel';
import { useCallback, useMemo } from 'react';
import { usePersistCollectionOptions } from './usePersistCollectionOptions';
import { resolveColumns } from '../components/controls/resolveColumns';

export function createIcon(icon: IconDefinition) {
    return function FAIcon(props: any) {
        return <FontAwesomeIcon icon={icon} {...props} />;
    };
}
// const c: MRT_TableOptions<any>['muiDetailPanelProps'];

export function useData<T extends MRT_RowData>(data: RealmObj<T>[], columns: JITTColumns<T>, objectType?: string) {
    const route = useEffectiveCollection(objectType);
    const init = useInitial<T>(route);
    const getTableCanExpand = useGetTableCanExpand();
    const { state, resetAllOptions, ...options } = usePersistCollectionOptions(route);
    console.log(`tableState`, route, state, options);
    // const { resetSettings, onColumnFiltersChange, ...opts } = usePersistedState<T>(objectType);
    // const c: MRT_TableOptions<any>['getRowId'];
    const $columns = useMemo(() => resolveColumns(columns), [columns]);
    console.info('$columns', $columns);
    const getRowId = useCallback((obj: T) => {
        const result = fromOID(obj._id);
        console.log(`getRowId`, result);
        return result;
    }, []);
    // const meta = useMemo(() => {
    //     return {
    //         onPageIndexChange,
    //         onPageSizeChange,
    //         pageIndex,
    //         pageSize,
    //         resetSettings
    //     } as TableMeta<T>;
    // }, [onPageIndexChange, onPageSizeChange, pageIndex, pageSize, resetSettings])
    return useMaterialReactTable<T>({
        autoResetExpanded: false,
        autoResetPageIndex: false,
        columnResizeMode: 'onEnd' as ColumnResizeMode,
        columns: $columns,
        createDisplayMode: 'modal',
        data,
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
        enableColumnActions: true,
        enableColumnDragging: true,
        enableColumnOrdering: true,
        enableColumnPinning: true,
        enableColumnResizing: true,
        enableEditing: true,
        enableExpandAll: getTableCanExpand(route),
        enableExpanding: getTableCanExpand(route),
        enableFacetedValues: true,
        enableGrouping: true,
        enableRowSelection: true,
        enableSelectAll: true,
        enableSorting: true,
        enableStickyFooter: true,
        enableStickyHeader: true,
        getFacetedMinMaxValues: getFacetedMinMaxValues() as any,
        getFacetedRowModel: getFacetedRowModel() as any,
        getRowId,
        getFacetedUniqueValues: getFacetedUniqueValues() as any,
        // getSubRows: getTableCanExpand(route) ? (original: T) => original.subRows : undefined,
        groupedColumnMode: 'remove',
        icons: {
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
        },
        layoutMode: 'grid',
        // muiExpandAllButtonProps: {
        //     classes: {
        //         root: 'inline-flex'
        //     },
        //     sx: {
        //         width: iconButtonDim,
        //         height: iconButtonDim
        //     }
        // },
        // muiExpandButtonProps: {
        //     classes: {
        //         root: 'text-center mx-auto'
        //     },
        //     sx: {
        //         width: iconButtonDim,
        //         height: iconButtonDim
        //     }
        // },
        muiTableBodyCellProps: (props: Parameters<Exclude<MRT_TableOptions<T>['muiTableBodyCellProps'], TableCellProps | undefined>>[0]) => {
            const selector = `tr[data-index="${props.row.index}"] > td[data-column-name="${(props.column.columnDef?.meta as ColumnMeta<any, any>)?.columnName}"]`;
            console.log(`tableBodyCellSelector`, selector);
            const func = () => {
                const el = document.querySelector(selector);
                console.log(`el`, el);
                const clientWidth = el?.clientWidth ?? 0;
                const scrollWidth = el?.scrollWidth ?? 0;
                const isOverflowing = clientWidth < scrollWidth;
                console.log(`el-widths`, clientWidth, scrollWidth, isOverflowing);
                if (el != null && (el as HTMLElement).dataset != null) {
                    (el as HTMLElement).dataset.isOverflowing = isOverflowing.toString();
                }
            };
            setTimeout(func, 2000);
            return {
                'data-column-name': (props.column.columnDef?.meta as ColumnMeta<any, any>)?.columnName,
                className: 'whitespace-pre font-medium group-data-[row-depth="4"]:text-white group-data-[row-depth="5"]:text-white group-data-[row-depth="6"]:text-white aria-readonly:bg-black aria-readonly:text-white group'
            };
        },

        //  (props) => ({
        //     ...{
        //         className: 'whitespace-pre font-medium group-data-[row-depth="4"]:text-white group-data-[row-depth="5"]:text-white group-data-[row-depth="6"]:text-white data-is-calc:bg-black data-is-calc:text-white'
        //     },
        //     ...props.column.columnDef.muiTableBodyCellProps
        // }),
        muiDetailPanelProps: {
            className: 'w-screen'
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
        muiTableHeadCellProps: (props: Parameters<Exclude<MRT_TableOptions<T>['muiTableHeadCellProps'], TableCellProps | undefined>>[0]) => ({
            // classes: {
            //     head: 'relative'
            //     // head: 'flex justify-center'
            // },
            'data-column-name': (props.column.columnDef?.meta as ColumnMeta<any, any>)?.columnName,
            className: 'grouped-header:bg-blue-700 grouped-header:text-white single-header:bg-transparent single-header:text-black grouped-header:shadow-inner grouped-header:shadow-black'
        }),
        muiTableContainerProps: useMemo(() => {
            const mh = (window.visualViewport?.height ?? 0) - 66.95 - 35.99 - 35.99;
            const maxHeight = `${mh.toFixed(0)}px`;
            return {
                sx: {
                    display: 'flex',
                    maxHeight,
                    overflowX: 'scroll',
                    overflowY: 'scroll'
                }
            } as TableContainerProps;
        }, []),
        paginationDisplayMode: 'pages',
        renderCreateRowDialogContent: createRenderCreateRowDialogContent<T>(),
        renderEditRowDialogContent: createRenderEditRowDialogContent(),
        renderRowActions: createRenderRowActions(),
        // renderRowActionMenuItems: createRenderRowActionMenuItems(),
        renderTopToolbarCustomActions: createRenderTopToolbarCustomActions<T>(init as () => T, resetAllOptions),
        renderDetailPanel: route === 'sku' || route === 'product' ? CreateRenderDetailPanel : undefined,
        state,
        initialState: options.initialState,
        onColumnFiltersChange: options.onColumnFiltersChange,
        onColumnOrderChange: options.onColumnOrderChange,
        onColumnSizingChange: options.onColumnSizingChange,
        onColumnPinningChange: options.onColumnPinningChange,
        onColumnVisibilityChange: options.onColumnVisibilityChange,
        onDensityChange: options.onDensityChange,
        onExpandedChange: options.onExpandedChange,
        onGlobalFilterChange: options.onGlobalFilterChange,
        onGroupingChange: options.onGroupingChange,
        onPaginationChange: options.onPaginationChange,
        onShowColumnFiltersChange: options.onShowColumnFiltersChange,
        onShowGlobalFilterChange: options.onShowGlobalFilterChange,
        onSortingChange: options.onSortingChange,
        onRowSelectionChange: options.onRowSelectionChange
    });
}
