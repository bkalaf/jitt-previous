import { useMemo } from 'react';
import { MRT_RowData } from 'material-react-table';
import { useEffectiveCollection } from './useEffectiveCollection';
import { initialValue } from '../initialValue';
import { useObjectTypeType } from './useObjectTypeType';

// const v: MRT_TableOptions<any>[''];

export function useInitial<T extends MRT_RowData>(objectType?: string) {
    const route = useEffectiveCollection(objectType);
    const ott = useObjectTypeType(route);
    return useMemo(
        (): (() => T) =>
            (ott === 'embedded' || ott === 'reference'
                ? ((initialValue[route as keyof typeof initialValue] as unknown) as () => T)
                : route === 'string'
                ? ((() => (({ value: '' } as unknown) as T)) as () => T)
                : route === 'int' || route === 'double'
                ? () => (({ value: 0 } as unknown) as T)
                : route === 'date'
                ? () => (({ value: new Date(Date.now()) } as unknown) as T)
                : route === 'bool'
                ? () => (({ value: false } as unknown) as T)
                : () => (({ value: undefined } as unknown) as T)) as () => T,
        [ott, route]
    );
}
