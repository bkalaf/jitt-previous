import { useCallback } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useEffectiveCollection } from './useEffectiveCollection';

export function useInvalidateCollection(objectType?: string) {
    const collection = useEffectiveCollection(objectType);
    const queryClient = useQueryClient();
    return useCallback(async () => {
        await queryClient.invalidateQueries({
            queryKey: [collection]
        });
        await queryClient.refetchQueries({
            queryKey: [collection]
        });
    }, [collection, queryClient]);
}
