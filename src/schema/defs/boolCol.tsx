import { MRT_ColumnDef, MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
import { camelToProper } from '../../common/text';
import { createBoolControl } from '../../components/controls/createStringControl';
import { createBoolCell } from '../../components/Cells/createBoolCell';

export function boolCol<T extends MRT_RowData>(helper: MRT_ColumnHelper<T>) {
    return function (name: keyof T & string, header?: string): MRT_ColumnDef<T, boolean | undefined> {
        return helper.accessor(name as any, { header: header ?? camelToProper(name), Cell: createBoolCell(), Edit: createBoolControl() });
    };
}
