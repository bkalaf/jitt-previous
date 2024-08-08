import { useSuspenseQuery } from '@tanstack/react-query';
import { BaseDashboardEntry } from '../DashboardEntry';
import React from 'react';
import * as fs from 'graceful-fs';
import { PRODUCT_SEARCH_QUEUE } from './ObsoleteApiResults';


export function ProductSearchPending(props: { className?: string; start?: number; }) {
    const { data } = useSuspenseQuery({
        queryKey: ['apiResult', 'pending'],
        queryFn: () => {
            const total = (JSON.parse(fs.readFileSync(PRODUCT_SEARCH_QUEUE).toString()) as any[]).length;
            return Promise.resolve(total);
        }
        // initialData: 0,
    });
    const limit = data > 30 ? 'overlimit' : 'underlimit';
    return <BaseDashboardEntry value={data.toFixed(0)} limit={limit} label='PENDING PRODUCT SEARCHES' {...props} />;
}
