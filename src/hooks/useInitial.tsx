import { useMemo } from 'react';
import { MRT_RowData } from 'material-react-table';
import { isPrimitive } from '../schema/conversion/cnvrt';
import { initialValue } from '../initialValue';

// const v: MRT_TableOptions<any>[''];

export function useInitial<T extends MRT_RowData>(objectType: string): InitFunction<T> {
    return useMemo(() => {
        if (isPrimitive(objectType)) return initialValue[objectType as keyof typeof initialValue] as InitFunction<any>;
        return (window.schema[objectType] as MyClass<any>).init;
        // if (schema == null) throw new Error(`schema not found for ${objectType}`);
        // return (schema.ctor as MyClass<T>).init;
    }, [objectType]);
}
