import { MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
import { createBoolControl } from 'src/components/controls/createBoolControl';
import { createBoolCell } from '../../components/Cells/createBoolCell';
import { baseCol } from './baseCol';

export function boolCol<T extends MRT_RowData>(helper: MRT_ColumnHelper<T>) {
    return function (name: keyof T & string, $header?: string) {
        const Cell = createBoolCell<T>();
        const Edit = createBoolControl<T>();
        return baseCol<T, boolean | undefined>(helper, name, Cell, Edit, $header)
        // return helper.accessor(name as any, { header: header ?? camelToProper(name), Cell: createBoolCell(), Edit: createBoolControl() }) as MRT_ColumnDef<T>   ;
    };
}
