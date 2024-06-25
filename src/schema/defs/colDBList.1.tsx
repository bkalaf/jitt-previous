import { MRT_ColumnDef, MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
import { baseCol } from './baseCol';
import { ListTableCell } from '../../components/table/cells/ListTableCell';
import { DBListControl } from '../../components/table/controls/DBListControl';

export function colDBList<T extends MRT_RowData, TValue>(helper: MRT_ColumnHelper<T>) {
    return function <TKey extends keyof T>(...dependencies: IDependency<T, TKey>[]) {
        return function (name: keyof T & string, header: string, objectType: string, readonly = false): MRT_ColumnDef<T, ListBack<TValue>> {
            return baseCol<T, ListBack<TValue>>(helper, name, ListTableCell, DBListControl, header, false, readonly, { objectType }, undefined, ...dependencies);
        };
    };
}
