import { useSuspenseQuery } from '@tanstack/react-query';
import { useLocalRealm } from '../../hooks/useLocalRealm';
import { BaseDashboardEntry } from '../DashboardEntry';
import { IBarcode } from '../../types';

export function BarcodeDoubleReference(props: { className?: string; start?: number; }) {
    const db = useLocalRealm();
    const { data } = useSuspenseQuery({
        queryKey: ['barcode', 'linkingObjects > 1'],
        queryFn: () => {
            // const total = db.objects<ISku>('sku').filtered('NONE @links.productImage.sku').length;
            const result = db.objects<IBarcode>('barcode').filter((x) => x.linkingObjectsCount() > 1);
            console.info(`double ref barcodes`, result.map(x => x.value));
            const total = result.length;
            return Promise.resolve(total);
        }
        // initialData: 0
    });
    return <BaseDashboardEntry value={data.toFixed(0)} limit={data >= 20 ? 'overlimit' : 'underlimit'} label='BARCODE DOUBLE REF' {...props} />;
}
