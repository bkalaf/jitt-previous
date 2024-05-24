import { createRow, MRT_RowData, MRT_TableOptions } from 'material-react-table';
import { Box, Button, Slide } from '@mui/material';
import { useInvalidateCollection } from '../../../hooks/useInvalidateCollection';
import { useUpdater } from '../../../hooks/useUpdater';
import { useSnackbar } from 'notistack';
import { useLocalRealm } from '../../../hooks/useLocalRealm';

export function createRenderTopToolbarCustomActions<T extends MRT_RowData>(init: () => T, resetSettings: () => void) {
    return function RenderTopToolbarCustomActions({ table }: Parameters<Exclude<MRT_TableOptions<T>['renderTopToolbarCustomActions'], undefined>>[0]) {
        const [hasUpdater, updater] = useUpdater<T>();
        const db = useLocalRealm();
        const invalidate = useInvalidateCollection();
        const { enqueueSnackbar } = useSnackbar();
        return (
            <Box className='flex gap-x-1'>
                <Button color='secondary' variant='contained' onClick={resetSettings}>Reset</Button>
                <Button color='secondary' variant='contained' onClick={() => table.setCreatingRow(createRow(table, init()))}>
                    Create
                </Button>
                {hasUpdater && <Button
                    color='secondary'
                    variant='contained'
                    disabled={!(table.getIsAllRowsSelected() || table.getIsSomeRowsSelected())}
                    onClick={() => {
                        if (db == null) throw new Error('no db');
                        const rowSelected = table.getSelectedRowModel().rows.map((x) => x.original) as RealmObj<T>[];
                        const results = rowSelected.map((item) => updater(db, item));
                        enqueueSnackbar(`Updated ${results.length} rows.`, { preventDuplicate: true, variant: 'success', TransitionComponent: Slide });
                        table.setRowSelection({});
                        invalidate();
                    }}
                >
                    Update
                </Button>}
            </Box>
        );
    };
}
