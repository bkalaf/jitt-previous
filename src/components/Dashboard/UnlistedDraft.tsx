import { useSuspenseQuery } from '@tanstack/react-query';
import { useLocalRealm } from '../../hooks/useLocalRealm';
import { BaseDashboardEntry } from '../DashboardEntry';
import { IDraft } from '../../types';
import React from 'react';


export function UnlistedDraft(props: { className?: string; start?: number; }) {
    const db = useLocalRealm();
    const { data } = useSuspenseQuery({
        queryKey: ['draft', 'isListed == false'],
        queryFn: () => {
            const total = db.objects<IDraft>('draft').filter((x) => !x.isListed).length;
            return Promise.resolve(total);
        },
        // initialData: 0
    });
    return <BaseDashboardEntry value={data.toFixed(0)} limit={data >= 20 ? 'overlimit' : 'underlimit'} label='UNLISTED DRAFT' {...props} />;
}
