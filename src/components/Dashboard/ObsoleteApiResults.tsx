import { useSuspenseQuery } from '@tanstack/react-query';
import { useLocalRealm } from '../../hooks/useLocalRealm';
import { BaseDashboardEntry } from '../DashboardEntry';

export const PRODUCT_SEARCH_QUEUE = process.env.PRODUCT_SEARCH_QUEUE ?? '';

export function ObsoleteApiResults(props: { className?: string; start?: number }) {
    const db = useLocalRealm();
    const { data } = useSuspenseQuery({
        queryKey: ['apiResult', 'obsolete'],
        queryFn: () => {
            const total = db.objects('apiResult').length;
            const obsolete = db.objects('apiResult').filtered('obsolete == $0', true).length;
            return Promise.resolve((obsolete / total) * 100);
        }
        // initialData: 0,
    });
    const value = data.toFixed(2).concat('%');
    const limit = data > 30 ? 'overlimit' : 'underlimit';
    return <BaseDashboardEntry value={value} limit={limit} label='OBSOLETE API RESULTS' {...props} />;
}
