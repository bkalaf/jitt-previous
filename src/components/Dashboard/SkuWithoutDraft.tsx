/* eslint-disable no-console */
import { useSuspenseQuery } from '@tanstack/react-query';
import { useLocalRealm } from '../../hooks/useLocalRealm';
import { BaseDashboardEntry } from '../DashboardEntry';
import { ISku } from '../../types';


export function SkuWithoutDraft(props: { className?: string; start?: number; }) {
    const db = useLocalRealm();
    const { data } = useSuspenseQuery({
        queryKey: ['sku', 'draft == nil'],
        queryFn: () => {
            const total = db.objects<ISku>('sku').filter((x) => x.linkingObjects('draft', 'sku').length === 0).length;
            console.info('sku without draft', db.objects<ISku>('sku').filter((x) => x.linkingObjects('draft', 'sku').length === 0).map(x => x.getTitle));
            return Promise.resolve(total);
        },
        // initialData: 0
    });
    return <BaseDashboardEntry value={data.toFixed(0)} limit={data >= 20 ? 'overlimit' : 'underlimit'} label='SKU WITHOUT DRAFT' {...props} />;
}
