import { MRT_ColumnDef, MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
import { faKey } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tooltip, IconButton } from '@mui/material';
import { Row } from '@tanstack/react-table';
import { BSON } from 'realm';

export function pk<T extends MRT_RowData>(helper: MRT_ColumnHelper<T>) {
    return () => helper.accessor('_id' as any, {
        header: 'ID',
        Cell: function ({ cell }: Parameters<Exclude<MRT_ColumnDef<T, Realm.BSON.ObjectId>['Cell'], undefined>>[0]) {
            const value = cell.getValue<Realm.BSON.ObjectId>().toHexString();
            return (
                <Tooltip title={value}>
                    <IconButton className='p-0 m-0 text-yellow-500 bg-blue-700'>
                        <FontAwesomeIcon className='m-0.5 ' icon={faKey} size='sm'></FontAwesomeIcon>
                    </IconButton>
                </Tooltip>
            );
        },
        enableEditing: false,
        filterFn: (row: Row<T>, columnId: string, filterValue: string) => {
            return ((row.original as any) as { _id: BSON.ObjectId; })._id.toHexString() === filterValue;
        }
    }) as MRT_ColumnDef<T>;
}
