import { useMemo } from 'react';
import { MRT_RowData } from 'material-react-table';
import { getInitFor } from '../schema/entity/getInitFor';
import { Product } from '../schema/entity/product';

// const v: MRT_TableOptions<any>[''];

export function useInitial<T extends MRT_RowData>(objectType: string) {
    return useMemo(() => getInitFor<T>(Product as any, objectType), [objectType]);
}
