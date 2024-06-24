import { Slide } from '@mui/material';
import { EnqueueSnackbar, useSnackbar } from 'notistack';
import { useCallback } from 'react';

type SnackBarProps = Exclude<Parameters<EnqueueSnackbar>[1], undefined>;
export type SnackBarProperty<T extends keyof SnackBarProps> = SnackBarProps[T];
export function useEnqueueSnackbar(variant: SnackBarProperty<'variant'>) {
    const { enqueueSnackbar } = useSnackbar();
    return useCallback(
        <T extends any[]>(func: (...args: T) => string) => {
            return (...args: T) => {
                const msg = func(...args);
                return enqueueSnackbar(msg, { preventDuplicate: true, variant, TransitionComponent: Slide });
            };
        },
        [enqueueSnackbar, variant]
    );
}

