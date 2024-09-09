import { useSuspenseQuery } from '@tanstack/react-query';
import { useLocalRealm } from '../../hooks/useLocalRealm';
import { BaseDashboardEntry } from '../DashboardEntry';
import { IBarcode } from '../../types';


export function BarcodeToPrintSku(props: { className?: string; start?: number; }) {
    const db = useLocalRealm();
    const { data } = useSuspenseQuery({
        queryKey: ['barcode', 'kind == sku && beenPrinted == false'],
        queryFn: () => {
            // const total = db.objects<ISku>('sku').filtered('NONE @links.productImage.sku').length;
            const total = db.objects<IBarcode>('barcode').filter((x) => x.kind === 'sku' && x.beenPrinted === false).length;
            return Promise.resolve(total);
        },
        // initialData: 0
    });
    return <BaseDashboardEntry value={data.toFixed(0)} limit={data >= 50 ? 'overlimit' : 'underlimit'} label='BARCODES (SKUS) TO PRINT' {...props} />;
}
