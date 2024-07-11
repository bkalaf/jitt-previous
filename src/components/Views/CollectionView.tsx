import { MaterialReactTable, MRT_RowData } from 'material-react-table';
import { Box } from '@mui/material';
import { useWhyDidIUpdate } from '../../hooks/useWhyDidIUpdate';
import { useEffectiveCollection } from '../../hooks/useEffectiveCollection';
import { useData } from '../../hooks/useData';
import { useEffect } from 'react';
import { $storage } from '../../hooks/storage';
import * as fs from 'graceful-fs';

// const c: MRT_TableOptions<any>['getRowCanExpand'];
export function CollectionView<T extends MRT_RowData>() {
    useWhyDidIUpdate('CollectionView', {});
    const route = useEffectiveCollection();
    // const [isLoading, isFetching, data] = useCollectionQuery<T>(route);
    // const $data = useMemo(() => [...data ?? []], [data]);
    const table = useData<T>();
    const mh = (window.visualViewport?.height ?? 0) - 66.95 - 35.99 - 35.99;
    const maxHeight = `${mh.toFixed(0)}px`;

    useEffect(() => {
        return () => {
            console.log('COLLECTIONVIEW dispose', route);
            $storage.getItem(route).then(data => {
                const current = JSON.parse(fs.readFileSync('C:/Users/bobby/OneDrive/Desktop/jitt-settings.json').toString());
                fs.writeFileSync('C:/Users/bobby/OneDrive/Desktop/jitt-settings.json', JSON.stringify({ ...current, [route]: data }, null, '\t'));
            });
        }
    }, [route])
    // useEffect(() => {
    //     if (route === 'sku') {
    //         ((data ?? []) as any as RealmObj<ISku>[]).map(item => {
    //             generateNarrative(item, true);
    //         })
    //     }
    // }, [data, route]);
    return (
        <Box component='section' sx={{ maxHeight: maxHeight }} className='overflow-scroll table-auto border-seperate'>
            <MaterialReactTable table={table} />
        </Box>
    );
}
