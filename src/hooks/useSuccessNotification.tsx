import { useCallback } from 'react';
import { useSnackbar } from 'notistack';
import { Slide } from '@mui/material';
import { useInvalidateCollection } from './useInvalidateCollection';

export function useSuccessNotification<T>(messageGenerator: (x: T) => string, objectType?: string) {
    const { enqueueSnackbar } = useSnackbar();
    const invalidator = useInvalidateCollection(objectType);
    return useCallback(
        (result: T) => {
            invalidator();
            enqueueSnackbar(messageGenerator(result), { preventDuplicate: true, variant: 'success', TransitionComponent: Slide });
        },
        [enqueueSnackbar, invalidator, messageGenerator]
    );
}
