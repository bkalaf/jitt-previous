import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';


export function createStringCell<T extends MRT_RowData, U>(formatter: (x?: U) => string | undefined) {
    return function StringCell({ cell }: Parameters<Exclude<MRT_ColumnDef<T, U | undefined>['Cell'], undefined>>[0]) {
        const value = cell.getValue<U>();
        return formatter(value) ?? '';
    };
}
