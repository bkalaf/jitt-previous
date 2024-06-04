import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { useCallback, useEffect } from 'react';
import { $calculateSize } from '../Views/calculateSize';

// export function createHeaderCell() {
//     return function HeaderCell(props: Parameters<Exclude<MRT_ColumnDef<any, any>['Header'], undefined | null | string | number | boolean | React.ReactElement<any> | Iterable<React.ReactNode>>>[0]) {
//         useWhyDidIUpdate('HeaderCell', props);
//         const { column, table } = props;
//         const lengths = Array.from(column.getFacetedUniqueValues().keys()).map((x: string) => x.length);
//         const minLength = _calculateBodySize(Math.min(...lengths));
//         const maxLength = _calculateBodySize(Math.max(...lengths));
//         const name = column.columnDef.accessorKey ?? column.columnDef.id ?? 'n/a';
//         const currentSizes = Object.fromEntries(Object.entries(table.getState().columnSizing))
//         const currentSize = name in currentSizes ? currentSizes[name]: undefined;
//         const updateSize = () => {
//             table.setColumnSizingInfo
//         }
//     }
// }

export function createStringHeaderCell<T extends MRT_RowData, U>() {
    return function LookupCell({ column, table }: Parameters<Exclude<MRT_ColumnDef<T, U | undefined>['Header'], null | undefined | string | number | boolean | React.ReactElement<any> | Iterable<React.ReactNode>>>[0]) {
        const lengths = Array.from(column.getFacetedUniqueValues().keys()).map((x?: string) => x?.length ?? 0);
        const minLength = $calculateSize(9.75)(Math.min(...[0, ...lengths]));
        const maxLength = $calculateSize(9.75)(Math.max(...[0, ...lengths]));
        const name = column.columnDef.accessorKey ?? column.columnDef.id ?? 'n/a';
        const currentSizes = Object.fromEntries(Object.entries(table.getState().columnSizing));
        const currentSize = name in currentSizes ? currentSizes[name] : undefined;
        const func = useCallback(() => {
            console.log('stringCell.func in useEffect', minLength, maxLength, name);
            table.setColumnSizing((old) => {
                if (maxLength === 0) return old;
                if (currentSize != null && currentSize >= maxLength) {
                    console.info('SHORTING stringCell.func');
                    return old;
                }
                const newState = { ...old, [name]: maxLength };
                console.info(`sizeChange`, old, newState);
                return newState;
            });
        }, [currentSize, maxLength, minLength, name, table]);
        useEffect(func, [func]);
        return column.columnDef.header;
    };
}
