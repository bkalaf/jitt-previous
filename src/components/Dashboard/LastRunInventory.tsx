import { useSuspenseQuery } from '@tanstack/react-query';
import { useLocalRealm } from '../../hooks/useLocalRealm';
import { BaseDashboardEntry } from '../DashboardEntry';
import { ISku } from '../../types';


export function LastRunInventory(props: { className?: string; start?: number; }) {
    const db = useLocalRealm();
    const { data } = useSuspenseQuery({
        queryKey: ['sku', 'productImage == 0'],
        queryFn: () => {
            // const total = db.objects<ISku>('sku').filtered('NONE @links.productImage.sku').length;
            const total = db.objects<ISku>('sku').map((x) => x.linkingObjects('productImage', 'sku').length === 0).length;
            return Promise.resolve(total);
        },
        // initialData: 0
    });
    return <BaseDashboardEntry value={data.toFixed(0)} limit={data >= 20 ? 'overlimit' : 'underlimit'} label='SKU WITHOUT IMAGES' {...props} />;
}
