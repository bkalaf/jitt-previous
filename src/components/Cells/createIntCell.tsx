import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';


export function createIntCell<T extends MRT_RowData>(formatter: (x?: number) => string = (x?: number) => x?.toFixed(0) ?? '') {
    return function IntCell({ cell }: Parameters<Exclude<MRT_ColumnDef<T, number | undefined>['Cell'], undefined>>[0]) {
        const value = cell.getValue<number | undefined>();
        return formatter(value);
    };
}
