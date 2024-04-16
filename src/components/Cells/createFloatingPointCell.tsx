import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';

export function createFloatingPointCell<T extends MRT_RowData>(formatter: (x?: string | number) => string = (x?: string | number) => (x != null ? (typeof x === 'string' ? x : x.toString()) : '') ?? '') {
    return function FloatingPointCell({ cell }: Parameters<Exclude<MRT_ColumnDef<T, string | number | undefined>['Cell'], undefined>>[0]) {
        const value = cell.getValue<number | undefined>();
        return formatter(value);
    };
}
