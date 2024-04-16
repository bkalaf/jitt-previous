import { PopoverProps } from '@mui/material';

export const origins: Record<'down' | 'right', PopoverProps['anchorOrigin']> = {
    down: {
        vertical: 'bottom',
        horizontal: 'left'
    },
    right: {
        vertical: 'top',
        horizontal: 'right'
    }
};
