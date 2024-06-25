import { MRT_RowData } from 'material-react-table';
import { useCollectionSchema } from './useCollectionSchema';
import { useMemo } from 'react';

export function useListItemComponent<T extends MRT_RowData>(objectType: string) {
    const ctor = useCollectionSchema(objectType);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const LIComponent = useMemo(() => ('liComponent' in ctor.ctor ? ctor.ctor.liComponent : (((_x?: any) => () => null) as ListItemCellComponent<T>)), [ctor.ctor]);
    if ((ctor.ctor as any)?.liComponent == null) throw new Error(`could not find list item component for : ${objectType}`);
    return LIComponent;
}
