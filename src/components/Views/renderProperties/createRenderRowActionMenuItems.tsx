import { MRT_ActionMenuItem, MRT_Row, MRT_RowData, MRT_TableOptions } from 'material-react-table';
import { Slide } from '@mui/material';
import React, { useCallback } from 'react';
import { useSnackbar } from 'notistack';
import { useInvalidateCollection } from '../../../hooks/useInvalidateCollection';
import { faPencilSquare, faTrashCan } from '@fortawesome/pro-solid-svg-icons';
import { useMutation } from '@tanstack/react-query';
import { useLocalRealm } from '../../../hooks/useLocalRealm';
import { runTransaction } from '../../../util/runTransaction';
import { useStopAndPrevent } from '../../../hooks/useStopAndPrevent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function createRenderRowActionMenuItems<T extends MRT_RowData>() {
    return function RenderRowActionMenuItems({ row, table, closeMenu }: Parameters<Exclude<MRT_TableOptions<T>['renderRowActionMenuItems'], undefined>>[0]) {
        const { enqueueSnackbar } = useSnackbar();
        const invalidate = useInvalidateCollection();
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const onEditClick = useStopAndPrevent((ev: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
            table.setEditingRow(row);
            closeMenu();
        });
        const realm = useLocalRealm();
        const { mutate: mutateOnDelete } = useMutation({
            onSuccess: () => {
                invalidate();
                closeMenu();
            },
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
            (ev: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
                ev.preventDefault();
                ev.stopPropagation();
                const func = () => mutateOnDelete(row as MRT_Row<any>);
                runTransaction(realm, func);
            },
            [mutateOnDelete, realm, row]
        );
        const onDeleteClick = useStopAndPrevent(deleteTransactiton);

        return [
            <MRT_ActionMenuItem icon={<FontAwesomeIcon icon={faPencilSquare} />} key='edit' label='Edit' onClick={onEditClick} table={table} />,
            <MRT_ActionMenuItem icon={<FontAwesomeIcon icon={faTrashCan} />} key='delete' label='Delete' onClick={onDeleteClick} table={table} />
        ];
        // <Box className='flex flex-nowrap gap-x-2'>
        //     <IconBtn icon={faPencilSquare} color='vivid' tooltip='Edit row' onClick={onEditClick} text='Edit' />
        //     <IconBtn icon={faTrashCan} color='neon' tooltip='Delete row' onClick={onDeleteClick} text='Delete' />
        // </Box>
        // return [
        //     <MenuItem key='edit' onClick={onEdit}>Edit</MenuItem>,
        //     <MenuItem key='edit' onClick={onDelete}>Delete</MenuItem>
        // ];
    };
}
