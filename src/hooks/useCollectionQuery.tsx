import { useMemo } from 'react';
import { MRT_RowData } from 'material-react-table';
import { useQuery } from '@tanstack/react-query';
import { useRealm } from './useRealm';

export function useCollectionQuery<T extends MRT_RowData>(collection: string) {
    const { db } = useRealm();
    const { data } = useQuery({
        queryKey: [collection],
        queryFn: () => {
            if (db == null) throw new Error('no db');
            return Promise.resolve(db.objects<T>(collection));
        }
    });
    return useMemo(() => [...data ?? []], [data]);
}
