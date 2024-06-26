import { MRT_Row, MRT_RowData, MRT_TableOptions } from 'material-react-table';
import { Box, Slide } from '@mui/material';
import React, { useCallback } from 'react';
import { useSnackbar } from 'notistack';
import { useInvalidateCollection } from '../../../hooks/useInvalidateCollection';
import { IconBtn } from '../../IconBtn';
import { faPencilSquare, faTrashCan } from '@fortawesome/pro-solid-svg-icons';
import { useMutation } from '@tanstack/react-query';
import { useLocalRealm } from '../../../hooks/useLocalRealm';
import { runTransaction } from '../../../util/runTransaction';
import { useStopAndPrevent } from '../../../hooks/useStopAndPrevent';

export function createRenderRowActions2<T extends MRT_RowData>() {
    return function RenderRowActions({ row, table }: Parameters<Exclude<MRT_TableOptions<T>['renderRowActions'], undefined>>[0]) {
        const { enqueueSnackbar } = useSnackbar();
        const invalidate = useInvalidateCollection();
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const onEditClick = useStopAndPrevent<HTMLButtonElement, MouseEvent, React.MouseEvent<HTMLButtonElement, MouseEvent>>((ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            table.setEditingRow(row);
        });
        const realm = useLocalRealm();
        const { mutate: mutateOnDelete } = useMutation({
            onSuccess: () => invalidate(),
            mutationFn: (value: MRT_Row<any>) => {
                try {
                    realm.delete(value.original as any);
                    enqueueSnackbar(`1 record deleted.`, { preventDuplicate: true, variant: 'success', TransitionComponent: Slide });
                    return Promise.resolve();
                } catch (error) {
                    const e = error as Error;
                    console.error(`MUTATION ERROR`, error);
                    enqueueSnackbar([e.name, e.message].join('\n'), { preventDuplicate: true, variant: 'error', TransitionComponent: Slide });
                    return Promise.reject(error);
                }
            }
        });
        const deleteTransactiton = useCallback(
            (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                ev.preventDefault();
                ev.stopPropagation();
                const func = () => mutateOnDelete(row as MRT_Row<any>);
                runTransaction(realm, func);
            },
            [mutateOnDelete, realm, row]
        );
        const onDeleteClick = useStopAndPrevent(deleteTransactiton);

        return (
            <Box className='flex flex-nowrap gap-x-2'>
                <IconBtn icon={faPencilSquare} className='bg-white text-orange-500' tooltip='Edit row' onClick={onEditClick} text='Edit' />
                <IconBtn icon={faTrashCan} className='bg-white text-lime-600' tooltip='Delete row' onClick={onDeleteClick} text='Delete' />
            </Box>
        );
        // return [
        //     <MenuItem key='edit' onClick={onEdit}>Edit</MenuItem>,
        //     <MenuItem key='edit' onClick={onDelete}>Delete</MenuItem>
        // ];
    };
}
