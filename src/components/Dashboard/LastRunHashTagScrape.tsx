import { useSuspenseQuery } from '@tanstack/react-query';
import { useLocalRealm } from '../../hooks/useLocalRealm';
import { BaseDashboardEntry } from '../DashboardEntry';
import { IHashTag } from '../../types';
import dayjs from 'dayjs';
import { CircularProgress } from '@mui/material';
import React from 'react';


export function LastRunHashTagScrape(props: { className?: string; start?: number; }) {
    const db = useLocalRealm();
    const { data, isLoading } = useSuspenseQuery({
        queryKey: ['hashTag', 'max timestamp'],
        queryFn: () => {
            // const total = db.objects<ISku>('sku').filtered('NONE @links.productImage.sku').length;
            const hashes = db.objects<IHashTag>('hashTag');
            const maxFrom = hashes
                .map((x) => Math.max(...x.usage.map((usage) => usage.from.valueOf())))
                .sort((a, b) => a < b ? 1
                    : a > b ? -1
                        : 0
                );
            const total = Math.max(...maxFrom.slice(0, 20));
            return Promise.resolve(new Date(total));
        },
        // initialData: new Date(Date.parse('1991-01-01T00:00:00.000Z'))
    });
    return isLoading ? <CircularProgress /> : <BaseDashboardEntry value={dayjs(data).format('YYYY-MM-DD')} limit={dayjs(new Date(Date.now())).diff(data, 'd') > 30 ? 'overlimit' : 'underlimit'} label='LAST RUN HASH TAG SCRAPE' {...props} />;
}
