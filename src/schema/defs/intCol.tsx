import { MRT_ColumnDef, MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
import { camelToProper } from '../../common/text';
import { createStringControl } from '../../components/controls/createStringControl';
import { createIntCell } from '../../components/Cells/createIntCell';

export function intCol<T extends MRT_RowData>(helper: MRT_ColumnHelper<T>) {
    return function (name: keyof T & string, header: string, opts: { min?: number; max?: number; readonly?: boolean; required?: boolean; }): MRT_ColumnDef<T, number> {
        return helper.accessor(name as any, { header: header ?? camelToProper(name), Cell: createIntCell() as any, Edit: createStringControl<T, number>({ type: 'number', step: 0, readonly: false, ...(opts ?? {}) }) }) as MRT_ColumnDef<T, number>;
    };
}
