import { useMemo } from 'react';
import { MRT_RowData } from 'material-react-table';
import { useTypes } from './useTypes';

// const v: MRT_TableOptions<any>[''];

export function useInitial<T extends MRT_RowData>(objectType: string) {
    const types = useTypes();
    return useMemo(() => {
        const schema = types.find(x => x.name === objectType);
        if (schema == null) throw new Error(`schema not found for ${objectType}`);
        return (schema.ctor as MyClass<T>).init;
    }, [objectType, types]);
}
