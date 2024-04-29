import { MRT_RowData, MRT_TableOptions } from 'material-react-table';
import { Box } from '@mui/material';
import React from 'react';
import { useInvalidateCollection } from '../../../hooks/useInvalidateCollection';
import { IconBtn } from '../../IconBtn';
import { faPencilSquare, faTrashCan } from '@fortawesome/pro-solid-svg-icons';
import { useMutation } from '@tanstack/react-query';
import { useLocalRealm } from '../../../hooks/useLocalRealm';
import { useStopAndPrevent } from '../../../hooks/useStopAndPrevent';
import { useWhyDidIUpdate } from '../../../hooks/useWhyDidIUpdate';
import { iconButtonDim } from '../expandButtonHW';

export function createRenderRowActions<T extends MRT_RowData>() {
    return function RenderRowActions(props: Parameters<Exclude<MRT_TableOptions<T>['renderRowActions'], undefined>>[0]) {
        useWhyDidIUpdate('RenderRowActions', props);
        const { table, row } = props;
        const invalidator = useInvalidateCollection();
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const onEditClick = useStopAndPrevent((ev: MouseButtonEvent) => table.setEditingRow(row));
        const db = useLocalRealm();
        const { mutate } = useMutation({
            onSuccess: () => invalidator(),
            mutationFn: (value: any) => {
                db.delete(value);
                return Promise.resolve();
            }
        });
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const onDeleteClick = useStopAndPrevent((ev: MouseButtonEvent) => mutate(row.original));
        return (
            <Box className='flex flex-row flex-nowrap gap-x-1'>
                <IconBtn icon={faPencilSquare} className='flex text-orange-700 bg-yellow-400 rounded-lg shadow shadow-black' tooltip='Edit row' onClick={onEditClick} iconSize='sm' sx={{ height: iconButtonDim, width: iconButtonDim }} />
                <IconBtn icon={faTrashCan} className='flex bg-yellow-300 rounded-lg shadow text-emerald-800 shadow-black' tooltip='Delete row' onClick={onDeleteClick} iconSize='sm' sx={{ height: iconButtonDim, width: iconButtonDim }} />
            </Box>
        );
    };
}
