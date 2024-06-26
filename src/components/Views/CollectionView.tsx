import { MaterialReactTable, MRT_RowData } from 'material-react-table';
import { Box } from '@mui/material';
import { useCollectionQuery } from '../../hooks/useCollectionQuery';
import { useColumns } from '../../hooks/useColumns';
import { useWhyDidIUpdate } from '../../hooks/useWhyDidIUpdate';
import { useEffectiveCollection } from '../../hooks/useEffectiveCollection';
import { useData } from '../../hooks/useData';

// const c: MRT_TableOptions<any>['getRowCanExpand'];
export function CollectionView<T extends MRT_RowData>() {
    useWhyDidIUpdate('CollectionView', {});
    const columns = useColumns<T>();
    const route = useEffectiveCollection();
    const data = useCollectionQuery<T>(route);
    const table = useData(data ?? [], columns);

    // useEffect(() => {
    //     if (route === 'sku') {
    //         ((data ?? []) as any as RealmObj<ISku>[]).map(item => {
    //             generateNarrative(item, true);
    //         })
    //     }
    // }, [data, route]);
    return (
        <Box component='section' className='border-seperate table-auto overflow-scroll'>
            <MaterialReactTable table={table} />
        </Box>
    );
}
