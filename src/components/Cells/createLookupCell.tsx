import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { getProperty } from '../../common/object';
import { Path } from 'react-hook-form-mui';
import { useNavigate } from 'react-router';
import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { BSON } from 'realm';

export function createLookupCell<T extends MRT_RowData, U extends MRT_RowData>(objectType: string, labelProperty: Path<U>) {
    return function LookupCell({ cell }: Parameters<Exclude<MRT_ColumnDef<T, U | undefined>['Cell'], undefined>>[0]) {
        const value = cell.getValue<U | undefined>();
        console.info(cell.column.columnDef.accessorKey, `value`, value);
        const navigate = useNavigate();
        const [searchParams] = useSearchParams({ _id: value != null ? (value as { _id: BSON.ObjectId })._id.toHexString() : '' });
        const onClick = useCallback(() => navigate(`/data/v1/${objectType}?${searchParams.toString()}`), [navigate, searchParams]);
        return (
            <span className='w-full cursor-alias' onClick={onClick}>
                {value == null ? '' : (getProperty(labelProperty, value) as string)}
            </span>
        );
    };
}
