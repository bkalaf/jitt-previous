import { MRT_RowData, MRT_TableOptions } from 'material-react-table';
import { Box } from '@mui/material';
import React, { useCallback, useMemo } from 'react';
import { useInvalidateCollection } from '../../../hooks/useInvalidateCollection';
import { IconBtn } from '../../IconBtn';
import { faPencilSquare, faTrashCan } from '@fortawesome/pro-solid-svg-icons';
import { useMutation } from '@tanstack/react-query';
import { useLocalRealm } from '../../../hooks/useLocalRealm';
import { useWhyDidIUpdate } from '../../../hooks/useWhyDidIUpdate';
import { BSON } from 'realm';
import { is } from '../../../common/is';
import { useEffectiveCollection } from '../../../hooks/useEffectiveCollection';
import { runTransaction } from '../../../util/runTransaction';

export function fromOID(oid: BSON.ObjectId | string) {
    if (is.objectId(oid)) return oid.toHexString();
    return oid;
}
export function createRenderRowActions<T extends MRT_RowData>() {
    return function RenderRowActions(props: Parameters<Exclude<MRT_TableOptions<T>['renderRowActions'], undefined>>[0]) {
        useWhyDidIUpdate('RenderRowActions', props);
        const { table, row } = props;
        const invalidator = useInvalidateCollection();
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const onEditClick = useCallback((ev: MouseButtonEvent) => {
            ev.preventDefault();
            ev.stopPropagation();
            table.setEditingRow(props.row);
        }, [props.row, table]);
        //  row.original.toJSON()
        const db = useLocalRealm();
        const collection = useEffectiveCollection();
        const { mutate } = useMutation({
            onSuccess: () => invalidator(),
            mutationFn: (value: string) => {
                const func = () => {
                    const obj = db.objectForPrimaryKey(collection, new BSON.ObjectId(value));
                    console.info(`runTransaction-deleteFunc`, obj, collection, value);
                    db.delete(obj);
                };
                runTransaction(db, func);
                return Promise.resolve();
            }
        });
        const onDeleteClick = useCallback(
            (ev: React.MouseEvent) => {
                ev.preventDefault();
                ev.stopPropagation();
                mutate(row.id);
            },
            [mutate, row.id]
        );
        const classes = useMemo(() => ({ iconButton: 'bg-black', fontAwesomeIcon: 'text-red-500 bg-white' }), []);
        const $icon1 = useMemo(() => faTrashCan, []);
        const $icon2 = useMemo(() => faPencilSquare, []);
        return (
            <Box className='flex flex-row flex-nowrap gap-x-1'>
                <IconBtn icon={$icon2} className='flex rounded-lg shadow-inner shadow-black' tooltip='Edit row' onClick={onEditClick} iconSize='lg' innerDim={'29px'} outerDim={'32px'} classes={classes} />
                <IconBtn icon={$icon1} className='flex rounded-lg shadow-inner shadow-black' tooltip='Delete row' onClick={onDeleteClick} iconSize='lg' innerDim={'29px'} outerDim={'32px'} classes={classes} />
            </Box>
        );
    };
}
