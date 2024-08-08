import { useSuspenseQuery } from '@tanstack/react-query';
import { useLocalRealm } from '../../hooks/useLocalRealm';
import { BaseDashboardEntry } from '../DashboardEntry';
import { IAdminTask } from '../../types';
import dayjs from 'dayjs';
import React from 'react';


export function PromoteNotRun(props: { className?: string; start?: number; }) {
    const db = useLocalRealm();
    const { data } = useSuspenseQuery({
        queryKey: ['adminTask', 'max timestamp'],
        queryFn: () => {
            // const total = db.objects<ISku>('sku').filtered('NONE @links.productImage.sku').length;
            const total = Math.max(
                ...(db
                    .objects<IAdminTask>('adminTask')
                    .map((x) => x.timestamp?.valueOf())
                    .filter((x) => x != null) as number[])
            );
            console.info(
                `total`,
                db.objects<IAdminTask>('adminTask').map((x) => x.timestamp?.valueOf())
            );
            return Promise.resolve(new Date(total));
        }
        // initialData: new Date(Date.parse('1990-01-01T00:00:00.000Z'))
    });
    return <BaseDashboardEntry value={dayjs(data).format('YYYY-MM-DD')} limit={dayjs(new Date(Date.now())).diff(data, 'd') > 1 ? 'overlimit' : 'underlimit'} label='PROMOTE LAST RUN' {...props} />;
}
