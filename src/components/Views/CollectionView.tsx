import { MaterialReactTable, MRT_RowData, useMaterialReactTable } from 'material-react-table';
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
import { getFacetedMinMaxValues, getFacetedRowModel, getFacetedUniqueValues } from '@tanstack/react-table';

// import { useEffectiveCollection } from '../../hooks/useEffectiveCollection';
// import { useMemo } from 'react';

// export function useSubRows(objectType?: string) {
//     const route = useEffectiveCollection(objectType);
//     return useMemo(() => {
//         return route === 'classifier' ?
//     }, [])
// }

// const v: MRT_TableOptions<any>['enable']

// export function BoundedContainer({ h, w, children }: { h: number; w: number; children: Children }) {
//     const style = useMemo(() => ({ width: `${w.toFixed(0)}px`, height: `${h.toFixed(0)}px` } as React.CSSProperties), [h, w]);
//     return <div className='flex overflow-scroll' style={style}>{children}</div>;
// }
// export function BoundingContainer({ children, Component }: { children: Children; Component: React.FunctionComponent<{ children: Children; h: number; w: number }> }) {
//     const [dims, setDims] = useState<{ h: number; w: number }>({ h: 0, w: 0 });
//     const ref = useCallback((el: HTMLDivElement | null) => {
//         if (el != null) {
//             const { height, width } = el.getBoundingClientRect();
//             setDims({ h: height, w: width });
//         }
//     }, []);
//     useEffect(() => {
//         console.info('DIMS', dims);
//     }, [dims]);
//     return (
//         <div ref={ref} className='flex flex-grow w-full h-full'>
//             <Component h={dims.h} w={dims.w}>
//                 {children}
//             </Component>
//         </div>
//     );
// }
export function CollectionView<T extends MRT_RowData>() {
    useWhyDidIUpdate('CollectionView', {});
    const collection = useCollectionRoute();
    const init = useInitial<T>();
    const columns = useColumns<T>();
    const data = useCollectionQuery<T>(collection);
    const { resetSettings, onColumnFiltersChange, ...opts } = usePersistedState<T>();
    const table = useMaterialReactTable<T>({
        autoResetExpanded: false,
        autoResetPageIndex: false,
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
        enableExpandAll: true,
        enableExpanding: true,
        enableFacetedValues: true,
        enableGrouping: true,
        enableRowSelection: true,
        enableSelectAll: true,
        enableStickyFooter: true,
        enableStickyHeader: true,
        getFacetedMinMaxValues: getFacetedMinMaxValues(),
        getFacetedRowModel: getFacetedRowModel(),
        getFacetedUniqueValues: getFacetedUniqueValues(),
        getSubRows: collection === 'classifier' ? (original: T) => original.subRows : undefined,
        groupedColumnMode: 'remove',
        layoutMode: 'grid',
        muiTableBodyCellProps: {
            className: 'whitespace-pre'
        },
        muiTableHeadCellProps: {
            className: 'grouped-header:bg-blue-700 grouped-header:text-white single-header:bg-transparent single-header:text-black grouped-header:shadow-inner grouped-header:shadow-black'
        },
        muiTableContainerProps: {
            className: 'flex flex-grow'
        },
        onColumnFiltersChange,
        paginationDisplayMode: 'pages',
        renderCreateRowDialogContent: createRenderCreateRowDialogContent<T>(),
        renderEditRowDialogContent: createRenderEditRowDialogContent(),
        renderRowActionMenuItems: createRenderRowActionMenuItems(),
        renderTopToolbarCustomActions: createRenderTopToolbarCustomActions<T>(init as () => T, resetSettings),
        ...opts
    });

    return (
        <Box component='section' className='border-collapse table-fixed'>
            <MaterialReactTable table={table} />
        </Box>
    );
}
