import { MRT_ColumnDef, MRT_RowData, MRT_TableOptions, useMaterialReactTable } from 'material-react-table';
import { createRenderCreateRowDialogContent } from './renderProperties/createRenderCreateRowDialogContent';
import { usePersistedState } from '../../hooks/usePersistedState';
import { createRenderTopToolbarCustomActions } from './renderProperties/createRenderTopToolbarCustomActions';
import { useInitial } from '../../hooks/useInitial';
import { createRenderEditRowDialogContent } from './renderProperties/createRenderEditRowDialogContent';
import { getFacetedMinMaxValues, getFacetedRowModel, getFacetedUniqueValues } from '@tanstack/react-table';
import { useEffectiveCollection } from '../../hooks/useEffectiveCollection';
import { createJITTExpandButton, expandAllRows, expandSingleRow } from './JITT_ExpandButton';
import { TableCellProps, TableRowProps } from '@mui/material';
import { iconButtonDim } from './expandButtonHW';
import { createRenderRowActions } from './renderProperties/createRenderRowActions';
import { useGetTableCanExpand } from './useGetTableCanExpand';

export function useData<T extends MRT_RowData>(data: RealmObj<T>[], columns: MRT_ColumnDef<T>[], objectType?: string) {
    const route = useEffectiveCollection(objectType);
    const init = useInitial<T>(route);
    const getTableCanExpand = useGetTableCanExpand();
    const { resetSettings, onColumnFiltersChange, ...opts } = usePersistedState<T>(objectType);
    // const c: MRT_TableOptions<any>['muiTableBodyRowProps'];
    return useMaterialReactTable<T>({
        autoResetExpanded: false,
        autoResetPageIndex: false,
        columnResizeMode: 'onEnd',
        columns,
        createDisplayMode: 'modal',
        data,
        displayColumnDefOptions: {
            'mrt-row-actions': {
                size: 80,
                grow: false,
                visibleInShowHideMenu: false
            },
            'mrt-row-expand': {
                size: 70,
                grow: false,
                visibleInShowHideMenu: false,
                muiTableHeadCellProps: {
                    classes: {
                        root: 'text-center p-0',                        
                    },
                    id: 'mrt-row-expand',
                    'data-id': 'mrt-row-expand'
                } as any,
                muiTableBodyCellProps: {
                    className: 'ml-0'
                } as TableCellProps,
                Cell: createJITTExpandButton(expandSingleRow),
                Header: createJITTExpandButton(expandAllRows)
            },
            'mrt-row-select': {
                size: 50,
                grow: false,
                visibleInShowHideMenu: false
            }
        },
        editDisplayMode: 'modal',
        enableColumnDragging: true,
        enableColumnOrdering: true,
        enableColumnPinning: true,
        enableColumnResizing: false,
        enableEditing: true,
        enableExpandAll: true,
        enableExpanding: getTableCanExpand(route),
        enableFacetedValues: true,
        enableGrouping: true,
        enableRowSelection: true,
        enableSelectAll: true,
        enableStickyFooter: true,
        enableStickyHeader: true,
        getFacetedMinMaxValues: getFacetedMinMaxValues(),
        getFacetedRowModel: getFacetedRowModel(),
        getFacetedUniqueValues: getFacetedUniqueValues(),
        getSubRows: getTableCanExpand(route) ? (original: T) => original.subRows : undefined,
        groupedColumnMode: 'remove',
        layoutMode: 'grid',
        muiExpandAllButtonProps: {
            classes: {
                root: 'inline-flex'
            },
            sx: {
                width: iconButtonDim,
                height: iconButtonDim
            }
        },
        muiExpandButtonProps: {
            classes: {
                root: 'text-center mx-auto'
            },
            sx: {
                width: iconButtonDim,
                height: iconButtonDim
            }
        },
        muiTableBodyCellProps: {
            className: 'whitespace-pre font-medium group-data-[row-depth="4"]:text-white group-data-[row-depth="5"]:text-white group-data-[row-depth="6"]:text-white'
        },
        muiTableBodyRowProps: (props) => ({
            className: 'group data-[row-depth="0"]:bg-transparent data-[row-depth="1"]:bg-blue-100 data-[row-depth="2"]:bg-blue-200 data-[row-depth="3"]:bg-blue-300 data-[row-depth="4"]:bg-blue-400 data-[row-depth="5"]:bg-blue-500 data-[row-depth="6"]:bg-blue-600 data-[row-depth="4"]:text-white data-[row-depth="5"]:text-white data-[row-depth="6"]:text-white',
            'data-row-depth': props.row.depth
        } as TableRowProps),
        muiTableHeadCellProps: {
            classes: {
                head: 'flex justify-center'                  
            },
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
                    overflowY: 'hidden'
                }
            };
        },
        onColumnFiltersChange,
        paginationDisplayMode: 'pages',
        renderCreateRowDialogContent: createRenderCreateRowDialogContent<T>(),
        renderEditRowDialogContent: createRenderEditRowDialogContent(),
        renderRowActions: createRenderRowActions(),
        // renderRowActionMenuItems: createRenderRowActionMenuItems(),
        renderTopToolbarCustomActions: createRenderTopToolbarCustomActions<T>(init as () => T, resetSettings),
        ...opts
    });
}
