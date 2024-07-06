import { useMemo } from 'react';
import { MRT_RowData } from 'material-react-table';
import { useEffectiveCollection } from './useEffectiveCollection';
import { useCollectionSchema } from './useCollectionSchema';
import { resolveColumns } from '../components/controls/resolveColumns';

export function useStaticColumns<T extends MRT_RowData>(objectType?: string) {
    const effective = useEffectiveCollection(objectType);
    const schema = useCollectionSchema(effective);
    return useMemo(() => resolveColumns<T>(schema.ctor.columns as JITTColumns<T>), [schema.ctor.columns]);
}
