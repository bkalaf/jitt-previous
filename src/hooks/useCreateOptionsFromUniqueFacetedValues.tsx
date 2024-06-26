import { MRT_Column, MRT_RowData } from 'material-react-table';
import { useMemo } from 'react';
import { distinctBy } from '../common/array/distinct';

export function useCreateOptionsFromUniqueFacetedValues<T extends MRT_RowData, U extends string | undefined>(column: MRT_Column<T, U>, multiple = false) {
    return useMemo(() => {
        console.log(`column.getFacetedUniqueValues`, column.getFacetedUniqueValues());
        const keys = Array.from((column.getFacetedUniqueValues() as Map<U, number>).keys());
        const reduced =
            multiple ?
                (distinctBy(
                    (x, y) => (x?.localeCompare(y ?? '') ?? 1) === 0,
                    (keys as any as U[][]).reduce((pv, cv) => [...pv, ...cv], [])
                ) as U[])
            :   keys;
        return reduced.map((x) => ({ key: x, text: x })).sort((x, y) => x.text?.localeCompare(y.text ?? '') ?? 0);
    }, [column, multiple]);
}
