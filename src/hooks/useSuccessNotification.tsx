import { useCallback } from 'react';
import { useInvalidateCollection } from './useInvalidateCollection';
import { useToaster } from '../components/Views/renderProperties/useToaster';

export function useSuccessNotification<T>(messageGenerator: (x: T) => string, objectType?: string) {
    const { success } = useToaster(messageGenerator);
    const invalidator = useInvalidateCollection(objectType);
    return useCallback(
        (result: T) => {
            success(result);
            invalidator();
        },
        [invalidator, success]
    );
}
