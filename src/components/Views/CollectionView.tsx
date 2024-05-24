import { MaterialReactTable, MRT_RowData } from 'material-react-table';
import { Box } from '@mui/material';
import { useCollectionQuery } from '../../hooks/useCollectionQuery';
import { useColumns } from '../../hooks/useColumns';
import { useWhyDidIUpdate } from '../../hooks/useWhyDidIUpdate';
import { useEffectiveCollection } from '../../hooks/useEffectiveCollection';
import { useData } from './useData';

// const c: MRT_TableOptions<any>['getRowCanExpand'];
export function CollectionView<T extends MRT_RowData>() {
    useWhyDidIUpdate('CollectionView', {});
    const columns = useColumns<T>();
    const route = useEffectiveCollection();
    const data = useCollectionQuery<T>(route);
    const table = useData(data ?? [], columns);
    
    return (
        <Box component='section' className='overflow-scroll table-auto border-seperate'>
            <MaterialReactTable table={table} />
        </Box>
    );
}
