import { MRT_RowData } from 'material-react-table';
import { useNavigate } from 'react-router';
import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { BSON } from 'realm';
import { Link } from '@mui/material';
import { useWhyDidIUpdate } from '../../../hooks/useWhyDidIUpdate';
import { useColumnMeta } from '../../../hooks/useColumnMeta';
import { getProperty } from '../../../common/object/getProperty';
import { useGetLabelProperty } from '../../../hooks/useGetLabelProperty';

export function LookupTableCell<T extends MRT_RowData, U extends MRT_RowData & { _id: BSON.ObjectId }>(props: CellFunctionParams<T, U | undefined>) {
    useWhyDidIUpdate('LookupTableCell', props);
    const { value, objectType } = useColumnMeta(props, undefined, 'objectType');
    if (objectType == null) throw new Error('no objectType');
    const navigate = useNavigate();
    const [searchParams] = useSearchParams({ _id: value != null ? (value as { _id: BSON.ObjectId })._id.toHexString() : '' });
    const onClick = useCallback(() => navigate(`/data/v1/${objectType}?${searchParams.toString()}`), [navigate, objectType, searchParams]);
    const labelProperty = useGetLabelProperty(objectType);
    if (labelProperty == null) throw new Error(`no labelProperty for ${objectType}`);
    return (
        <Link
            className='w-full cursor-pointer text-left indent-1 font-extrabold text-pink-500 underline decoration-pink-500 group-data-[row-depth="4"]:text-pink-500 group-data-[row-depth="5"]:text-pink-700 group-data-[row-depth="6"]:text-pink-700 group-data-[row-depth="4"]:decoration-pink-500 group-data-[row-depth="5"]:decoration-pink-700 group-data-[row-depth="6"]:decoration-pink-700'
            underline='always'
            variant='button'
            component='button'
            onClick={onClick}>
            {value == null ? '' : (getProperty(labelProperty as any, value) as string)}
        </Link>
    );
}
