import { useSuspenseQuery } from '@tanstack/react-query';
import { useLocalRealm } from '../../hooks/useLocalRealm';
import { BaseDashboardEntry } from '../DashboardEntry';
import { ISku } from '../../types';


export function SkuWithoutBarcode(props: { className?: string; start?: number; }) {
    const db = useLocalRealm();
    const { data } = useSuspenseQuery({
        queryKey: ['sku', 'barcode == nil'],
        queryFn: () => {
            const total = db.objects<ISku>('sku').filter(x => x.skus.length === 0).length;
            return Promise.resolve(total);
        }
        // initialData: 0
    });
    return <BaseDashboardEntry value={data.toFixed(0)} limit={data >= 20 ? 'overlimit' : 'underlimit'} label='SKU WITHOUT BARCODE' {...props} />;
}
