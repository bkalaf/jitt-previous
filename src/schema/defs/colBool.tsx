import { MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
import { baseCol } from './baseCol';
import { BoolTableCell } from '../../components/table/cells/BoolTableCell';
import { BoolControl } from '../../components/table/controls/BoolControl';

export function colBool<T extends MRT_RowData>(helper: MRT_ColumnHelper<T>) {
    return function <TKey extends keyof T>(...dependencies: IDependency<T, TKey>[]) {
        return function (name: keyof T & string, $header?: string) {
            return baseCol<T, boolean | undefined>(helper, name, BoolTableCell, BoolControl, $header, false, false, {}, undefined, ...dependencies);
        };
    };
}
