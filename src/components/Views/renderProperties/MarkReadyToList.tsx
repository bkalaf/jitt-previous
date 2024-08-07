import { useCallback } from 'react';
import { useEffectiveCollection } from '../../../hooks/useEffectiveCollection';
import { MRT_TableOptions } from 'material-react-table';
import { ISku } from '../../../types';
import { runTransaction } from '../../../util/runTransaction';
import { useLocalRealm } from '../../../hooks/useLocalRealm';
import { TopBarButton } from './TopBarButton';
import { useInvalidateCollection } from '../../../hooks/useInvalidateCollection';

export function MarkReadyToList({ table }: Parameters<Exclude<MRT_TableOptions<any>['renderTopToolbarCustomActions'], undefined>>[0]) {
    const route = useEffectiveCollection();
    const db = useLocalRealm();
    const isEnabled = useCallback(() => route === 'sku' && table.getSelectedRowModel().rows.length > 0, [route, table]);
    const invalidator = useInvalidateCollection(route);
    const handleSubmit = useCallback(() => {
        const selection = table.getSelectedRowModel().rows;
        const func = () => {
            for (const row of selection) {
                (row.original as ISku).disposition = 'ready-to-list';
            }
        };
        runTransaction(db, func);
        table.setRowSelection({});
        invalidator();
    }, [db, invalidator, table]);
    return <TopBarButton color='tertiary' enabled={isEnabled} label='Mark Ready To List' handleSubmit={handleSubmit} />;
}
