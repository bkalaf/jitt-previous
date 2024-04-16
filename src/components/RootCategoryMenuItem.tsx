import { ListItemButton, ListItemText, Popover } from '@mui/material';
import { useAnchorEl } from '../hooks/useAnchorEl';
import React, { useEffect, useMemo, useRef } from 'react';
import { origins } from '../util/origins';

export function RootCategoryMenuItem({ children, direction, header }: { children: React.ReactNode; direction: 'down' | 'right'; header: string }) {
    const [anchorEl, open, onClick, onClose] = useAnchorEl();
    const anchorOrigin = useMemo(() => origins[direction], [direction]);
    const ref = useRef<HTMLAnchorElement | null>();
    useEffect(() => {
        const listener = (ev: Event) => {
            const target = ev.target as HTMLElement;            
            if (open && target.dataset.inMenu !== 'true') onClose();
        };
        document.addEventListener('click', listener);
        return () => document.removeEventListener('click', listener);
    }, [onClose, open]);
    return (
        <ListItemButton onClick={onClick} className='text-white bg-black border border-white' ref={ref as any} data-in-menu>
            <ListItemText primary={<span data-in-menu>{header}</span>} data-in-menu />
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
        </ListItemButton>
    );
}
