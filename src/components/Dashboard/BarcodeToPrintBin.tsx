import { useSuspenseQuery } from '@tanstack/react-query';
import { useLocalRealm } from '../../hooks/useLocalRealm';
import { BaseDashboardEntry } from '../DashboardEntry';
import { IBarcode } from '../../types';


export function BarcodeToPrintBin(props: { className?: string; start?: number; }) {
    const db = useLocalRealm();
    const { data } = useSuspenseQuery({
        queryKey: ['barcode', 'kind == bin && beenPrinted == false'],
        queryFn: () => {
            // const total = db.objects<ISku>('sku').filtered('NONE @links.productImage.sku').length;
            const total = db.objects<IBarcode>('barcode').filter((x) => x.kind === 'bin' && x.beenPrinted === false).length;
            return Promise.resolve(total);
        },
        // initialData: 0
    });
    return <BaseDashboardEntry value={data.toFixed(0)} limit={data >= 50 ? 'overlimit' : 'underlimit'} label='BARCODES (BINS) TO PRINT' {...props} />;
}
