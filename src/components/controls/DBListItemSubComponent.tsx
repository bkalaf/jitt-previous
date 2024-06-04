import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React, { useCallback } from 'react';
import { IconBtn } from '../IconBtn';
import { faCircleDot, faTrashCan } from '@fortawesome/pro-solid-svg-icons';
import { UseFieldArrayReturn } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function DBListItemSubComponent(props: { remove: UseFieldArrayReturn['remove']; index: number; value: Record<string, any>; objectType: string; LIComponent: ListItemCellComponent<any> }) {
    const { index, value, remove, LIComponent } = props;
    const onDelete = useCallback(
        (ev: React.MouseEvent) => {
            ev.preventDefault();
            ev.stopPropagation();
            remove(index);
        },
        [index, remove]
    );
    const Primary = LIComponent(value);
    return (
        <ListItem key={value.id} secondaryAction={<IconBtn icon={faTrashCan} color='success' tooltip='Delete item' onClick={onDelete} />}>
            <ListItemIcon>
                <FontAwesomeIcon icon={faCircleDot} />
            </ListItemIcon>
            <ListItemText primary={<Primary />} />
        </ListItem>
    );
}
