import { MaterialReactTable, MRT_Header, MRT_HeaderGroup, MRT_RowData, MRT_TableInstance, MRT_TableOptions, useMaterialReactTable } from 'material-react-table';
import { Box } from '@mui/material';
import { createRenderCreateRowDialogContent } from './renderProperties/createRenderCreateRowDialogContent';
import { createRenderRowActionMenuItems } from './renderProperties/createRenderRowActionMenuItems';
import { useCollectionQuery } from '../../hooks/useCollectionQuery';
import { useCollectionRoute } from '../../hooks/useCollectionRoute';
import { useColumns } from '../../hooks/useColumns';
import { usePersistedState } from '../../hooks/usePersistedState';
import { createRenderTopToolbarCustomActions } from './renderProperties/createRenderTopToolbarCustomActions';
import { useInitial } from '../../hooks/useInitial';
import { createRenderEditRowDialogContent } from './renderProperties/createRenderEditRowDialogContent';
import { useWhyDidIUpdate } from '../../hooks/useWhyDidIUpdate';

// const v: MRT_TableOptions<any>['mui']
export function CollectionView<T extends MRT_RowData>() {
    useWhyDidIUpdate('CollectionView', {});
    const collection = useCollectionRoute();
    const init = useInitial<T>();
    const columns = useColumns<T>();
    const data = useCollectionQuery<T>(collection);
    const { resetSettings, onColumnFiltersChange, ...opts } = usePersistedState<T>();
    const table = useMaterialReactTable<T>({
        autoResetPageIndex: false,
        autoResetExpanded: false,
        columnResizeMode: 'onEnd',
        columns,
        createDisplayMode: 'modal',
        data,
        editDisplayMode: 'modal',
        enableColumnDragging: true,
        enableColumnOrdering: true,
        enableColumnPinning: true,
        enableColumnResizing: true,
        enableEditing: true,
        enableRowSelection: true,
        layoutMode: 'grid',
        muiTableBodyCellProps: {
            className: 'whitespace-pre'
        },
        muiTableHeadCellProps: {
            className: 'grouped-header:bg-blue-700 grouped-header:text-white single-header:bg-transparent single-header:text-black grouped-header:shadow-inner grouped-header:shadow-black'
        },
        paginationDisplayMode: 'pages',
        onColumnFiltersChange,
        renderEditRowDialogContent: createRenderEditRowDialogContent(),
        renderCreateRowDialogContent: createRenderCreateRowDialogContent<T>(),
        renderRowActionMenuItems: createRenderRowActionMenuItems(),
        renderTopToolbarCustomActions: createRenderTopToolbarCustomActions<T>(init as () => T, resetSettings),  
        ...opts
    });

    return (
        <Box component='section' className='w-full h-full border-collapse table-fixed'>
            <MaterialReactTable table={table} />
        </Box>
    );
}
