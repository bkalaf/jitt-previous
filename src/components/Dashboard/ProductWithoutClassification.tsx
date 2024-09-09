import { useSuspenseQuery } from '@tanstack/react-query';
import { useLocalRealm } from '../../hooks/useLocalRealm';
import { BaseDashboardEntry } from '../DashboardEntry';
import { IProduct } from '../../types';
import React from 'react';


export function ProductWithoutClassification(props: { className?: string; start?: number; }) {
    const db = useLocalRealm();
    const { data } = useSuspenseQuery({
        queryKey: ['product', 'classification == nil'],
        queryFn: () => {
            const total = db.objects<IProduct>('product').filtered('classification == nil').length;
            return Promise.resolve(total);
        }
        // initialData: 0
    });
    return <BaseDashboardEntry value={data.toFixed(0)} limit={data >= 20 ? 'overlimit' : 'underlimit'} label='PRODUCT WITHOUT CLASSIFICATION' {...props} />;
}
