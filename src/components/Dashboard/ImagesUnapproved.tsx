import { useSuspenseQuery } from '@tanstack/react-query';
import { useLocalRealm } from '../../hooks/useLocalRealm';
import { BaseDashboardEntry } from '../DashboardEntry';
import { IProductImage } from '../../types';

export function ImagesUnapproved(props: { className?: string; start?: number }) {
    const db = useLocalRealm();
    const { data } = useSuspenseQuery({
        queryKey: ['productImage', 'hasSelection == false'],
        queryFn: () => {
            const total = db.objects<IProductImage>('productImage').filter((x) => !x.hasSelection && !x.flags.includes('ignore')).length;
            return Promise.resolve(total);
        }
        // initialData: 0
    });
    // eslint-disable-next-line no-console
    console.log(
        'images unapproved',
        db
            .objects<IProductImage>('productImage')
            .filter((x) => !x.hasSelection)
            .map((x) => x.sku?.product?.title)
    );
    return <BaseDashboardEntry value={data.toFixed(0)} limit={data >= 20 ? 'overlimit' : 'underlimit'} label='IMAGES UNAPPROVED' {...props} />;
}
