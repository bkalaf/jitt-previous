import { MRT_ColumnDef, MRT_RowData, MRT_TableOptions, useMaterialReactTable } from 'material-react-table';
import { createRenderCreateRowDialogContent } from '../components/Views/renderProperties/createRenderCreateRowDialogContent';
import { createRenderTopToolbarCustomActions } from '../components/Views/renderProperties/createRenderTopToolbarCustomActions';
import { useInitial } from './useInitial';
import { createRenderEditRowDialogContent } from '../components/Views/renderProperties/createRenderEditRowDialogContent';
import { ColumnResizeMode, getFacetedMinMaxValues, getFacetedRowModel, getFacetedUniqueValues } from '@tanstack/react-table';
import { useEffectiveCollection } from './useEffectiveCollection';
import { createJITTExpandButton, expandAllRows, expandSingleRow } from '../components/Views/JITT_ExpandButton';
import { TableCellProps, TableRowProps } from '@mui/material';
import { iconButtonDim } from '../components/Views/expandButtonHW';
import { createRenderRowActions } from '../components/Views/renderProperties/createRenderRowActions';
import { useGetTableCanExpand } from './useGetTableCanExpand';
import { usePersistState } from './usePersistState';
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

export function createIcon(icon: IconDefinition) {
    return function FAIcon(props: any) {
        return <FontAwesomeIcon icon={icon} {...props} />;
    };
}
// const c: MRT_TableOptions<any>['icons'];
export function useData<T extends MRT_RowData>(data: RealmObj<T>[], columns: MRT_ColumnDef<T>[], objectType?: string) {
    const route = useEffectiveCollection(objectType);
    const init = useInitial<T>(route);
    const getTableCanExpand = useGetTableCanExpand();
    const { resetSettings, onColumnFiltersChange, ...opts } = usePersistState(route as CollectionNames);
    console.log(`tableState`, route, opts.state);
    // const { resetSettings, onColumnFiltersChange, ...opts } = usePersistedState<T>(objectType);
    // const c: MRT_TableOptions<any>['muiTableBodyRowProps'];
    return useMaterialReactTable<T>({
        autoResetExpanded: false,
        autoResetPageIndex: false,
        columnResizeMode: 'onEnd' as ColumnResizeMode,
        columns,
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
        getFacetedMinMaxValues: getFacetedMinMaxValues(),
        getFacetedRowModel: getFacetedRowModel(),
        getFacetedUniqueValues: getFacetedUniqueValues(),
        getSubRows: getTableCanExpand(route) ? (original: T) => original.subRows : undefined,
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
        muiTableBodyCellProps: {
            className: 'whitespace-pre font-medium group-data-[row-depth="4"]:text-white group-data-[row-depth="5"]:text-white group-data-[row-depth="6"]:text-white aria-readonly:bg-black aria-readonly:text-white'
        },

        //  (props) => ({
        //     ...{
        //         className: 'whitespace-pre font-medium group-data-[row-depth="4"]:text-white group-data-[row-depth="5"]:text-white group-data-[row-depth="6"]:text-white data-is-calc:bg-black data-is-calc:text-white'
        //     },
        //     ...props.column.columnDef.muiTableBodyCellProps
        // }),
        muiTableBodyRowProps: (props) =>
            ({
                className:
                    'group data-[row-depth="0"]:bg-transparent data-[row-depth="1"]:bg-blue-100 data-[row-depth="2"]:bg-blue-200 data-[row-depth="3"]:bg-blue-300 data-[row-depth="4"]:bg-blue-400 data-[row-depth="5"]:bg-blue-500 data-[row-depth="6"]:bg-blue-600 data-[row-depth="4"]:text-white data-[row-depth="5"]:text-white data-[row-depth="6"]:text-white',
                'data-row-depth': props.row.depth
            } as TableRowProps),
        muiTableHeadCellProps: {
            // classes: {
            //     head: 'relative'
            //     // head: 'flex justify-center'
            // },
            className: 'grouped-header:bg-blue-700 grouped-header:text-white single-header:bg-transparent single-header:text-black grouped-header:shadow-inner grouped-header:shadow-black'
        },
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        muiTableContainerProps: (theme) => {
            const mh = (window.visualViewport?.height ?? 0) - 66.95 - 35.99 - 35.99;
            const maxHeight = `${mh.toFixed(0)}px`;
            return {
                sx: {
                    display: 'flex',
                    maxHeight,
                    overflowX: 'scroll',
                    overflowY: 'scroll'
                }
            };
        },
        onColumnFiltersChange: onColumnFiltersChange,
        paginationDisplayMode: 'pages',
        renderCreateRowDialogContent: createRenderCreateRowDialogContent<T>(),
        renderEditRowDialogContent: createRenderEditRowDialogContent(),
        renderRowActions: createRenderRowActions(),
        // renderRowActionMenuItems: createRenderRowActionMenuItems(),
        renderTopToolbarCustomActions: createRenderTopToolbarCustomActions<T>(init as () => T, resetSettings),
        ...opts
    });
}
