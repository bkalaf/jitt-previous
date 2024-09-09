import { useSuspenseQuery } from '@tanstack/react-query';
import { useLocalRealm } from '../../hooks/useLocalRealm';
import { BaseDashboardEntry } from '../DashboardEntry';
import { IAdminTask, IProduct } from '../../types';
import React from 'react';
import { inPastNDays } from '../../scripts/daysPast';

export function createPastNDays(num: number) {
    return function PastDays(props: { className?: string; start?: number }) {
        const db = useLocalRealm();
        const func = inPastNDays(num);
        const { data } = useSuspenseQuery({
            queryKey: ['adminTask', num],
            queryFn: () => {
                const total = db
                    .objects<IAdminTask>('adminTask')
                    .filter((x) => func(x.timestamp))
                    .map((x) => (parseInt(x.result.completed ?? '0', 10) ?? 0) as number)
                    .reduce((pv, cv) => pv + cv, 0);
                return Promise.resolve(total);
            }
            // initialData: 0
        });
        return <BaseDashboardEntry value={data.toFixed(0)} limit={data >= 1000 ? 'overlimit' : 'underlimit'} label={`PROMOTES IN PAST ${num.toString()} DAYS`} {...props} />;
    }
}
export const PastSevenDays = createPastNDays(7);
export const PastFourteenDays = createPastNDays(14);
export const PastOneDay = createPastNDays(1);
export const PastThirtyDays = createPastNDays(30);

// export function PastSevenDays(props: { className?: string; start?: number }) {
//     const db = useLocalRealm();
//     const func = inPastNDays(7);
//     const { data } = useSuspenseQuery({
//         queryKey: ['adminTask', 7],
//         queryFn: () => {
//             const total = db
//                 .objects<IAdminTask>('adminTask')
//                 .filter((x) => func(x.timestamp))
//                 .map((x) => (parseInt(x.result.completed ?? '0', 10) ?? 0) as number)
//                 .reduce((pv, cv) => pv + cv, 0);
//             return Promise.resolve(total);
//         }
//         // initialData: 0
//     });
//     return <BaseDashboardEntry value={data.toFixed(0)} limit={data >= 1000 ? 'overlimit' : 'underlimit'} label='PROMOTES IN PAST 7 DAYS' {...props} />;
// }
// export function PastFourteenDays(props: { className?: string; start?: number }) {
//     const db = useLocalRealm();
//     const func = inPastNDays(14);
//     const { data } = useSuspenseQuery({
//         queryKey: ['adminTask', 14],
//         queryFn: () => {
//             const total = db
//                 .objects<IAdminTask>('adminTask')
//                 .filter((x) => func(x.timestamp))
//                 .map((x) => (parseInt(x.result.completed ?? '0', 10) ?? 0) as number)
//                 .reduce((pv, cv) => pv + cv, 0);
//             return Promise.resolve(total);
//         }
//         // initialData: 0
//     });
//     return <BaseDashboardEntry value={data.toFixed(0)} limit={data >= 1000 ? 'overlimit' : 'underlimit'} label='PROMOTES IN PAST 14 DAYS' {...props} />;
// }

export function ProductWithoutSku(props: { className?: string; start?: number; }) {
    const db = useLocalRealm();
    const { data } = useSuspenseQuery({
        queryKey: ['product', 'sku == nil'],
        queryFn: () => {
            const total = db.objects<IProduct>('product').filter((x) => x.linkingObjects('sku', 'product').length === 0).length;
            return Promise.resolve(total);
        },
        // initialData: 0
    });
    return <BaseDashboardEntry value={data.toFixed(0)} limit={data >= 20 ? 'overlimit' : 'underlimit'} label='PRODUCT WITHOUT SKU' {...props} />;
}


