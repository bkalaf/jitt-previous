import { MRT_RowData, MRT_TableOptions } from 'material-react-table';
import { MenuItem, Slide } from '@mui/material';
import { useCallback } from 'react';
import { useRealm } from '../../../hooks/useRealm';
import { useSnackbar } from 'notistack';
import { useInvalidateCollection } from '../../../hooks/useInvalidateCollection';

export function createRenderRowActionMenuItems<T extends MRT_RowData>() {
    return function RenderRowActionMenuItems({ closeMenu, row, table }: Parameters<Exclude<MRT_TableOptions<T>['renderRowActionMenuItems'], undefined>>[0]) {
        const { enqueueSnackbar } = useSnackbar();
        const invalidate = useInvalidateCollection();
        const onEdit = useCallback(() => {
            table.setEditingRow(row);
            closeMenu();
        }, [closeMenu, row, table]);
        const { db } = useRealm();
        const onDelete = useCallback(async () => {
            if (db == null) throw new Error('no db');
            db.write(() => {
                db.delete(row.original as RealmObj<T>);                
                enqueueSnackbar(`1 record deleted.`, { preventDuplicate: true, variant: 'info', TransitionComponent: Slide });
                invalidate();
            });
        }, [db, enqueueSnackbar, invalidate, row.original]);
        return [
            <MenuItem key='edit' onClick={onEdit}>Edit</MenuItem>,
            <MenuItem key='edit' onClick={onDelete}>Delete</MenuItem>
        ];
    };
}
