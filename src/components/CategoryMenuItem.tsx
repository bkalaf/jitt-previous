import { Popover } from '@mui/material';
import { useAnchorEl } from '../hooks/useAnchorEl';
import React, { useMemo } from 'react';
import { origins } from '../util/origins';

export function CategoryMenuItem({
    Component,
    children,
    direction,
    label
}: {
    Component: (props: { onClick: (ev: React.MouseEvent<HTMLElement>) => void; children: Children; className: string }) => React.ReactNode;
    children: React.ReactNode;
    direction: 'down' | 'right';
    label: React.ReactNode;
}) {
    const [anchorEl, open, onClick, onClose] = useAnchorEl();
    const anchorOrigin = useMemo(() => origins[direction], [direction]);
    return (
        <Component data-in-menu onClick={onClick} className='text-white bg-black border border-white'>
            {label}
            <Popover
                onClose={onClose}
                anchorEl={anchorEl}
                open={open}
                disableRestoreFocus
                anchorOrigin={anchorOrigin}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left'
                }}
            >
                {children}
            </Popover>
        </Component>
    );
}
