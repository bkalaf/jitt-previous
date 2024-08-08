import { useSuspenseQuery } from '@tanstack/react-query';
import { useLocalRealm } from '../../hooks/useLocalRealm';
import { BaseDashboardEntry } from '../DashboardEntry';
import { IMercariBrand } from '../../types';
import dayjs from 'dayjs';
import React from 'react';


export function LastRunBrandScrape(props: { className?: string; start?: number; }) {
    const db = useLocalRealm();
    const { data } = useSuspenseQuery({
        queryKey: ['mercariBrand', 'max timestamp'],
        queryFn: () => {
            // const total = db.objects<ISku>('sku').filtered('NONE @links.productImage.sku').length;
            const total = Math.max(
                ...(db
                    .objects<IMercariBrand>('mercariBrand')
                    .map((x) => x.timestamp?.valueOf())
                    .filter((x) => x != null) as number[])
            );
            return Promise.resolve(new Date(total));
        },
        // initialData: new Date(Date.parse('1990-01-01T00:00:00.000Z'))
    });
    return <BaseDashboardEntry value={dayjs(data).format('YYYY-MM-DD')} limit={dayjs(new Date(Date.now())).diff(data, 'd') > 30 ? 'overlimit' : 'underlimit'} label='LAST RUN BRAND SCRAPE' {...props} />;
}
