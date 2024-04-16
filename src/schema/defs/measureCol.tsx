import { MRT_ColumnDef, MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
import { camelToProper } from '../../common/text';
import { createStringControl } from '../../components/controls/createStringControl';
import { createMeasureCell } from '../../components/Cells/createMeasureCell';

export function measureCol<T extends MRT_RowData>(helper: MRT_ColumnHelper<T>) {
    return function (name: keyof T & string, header: string, uom: string, opts: { min?: number; max?: number; required?: boolean; readonly?: boolean; }): MRT_ColumnDef<T> {
        return helper.accessor(name as any, { header: header ?? camelToProper(name), Cell: createMeasureCell(uom), Edit: createStringControl<T, number>({ type: 'number', min: 0, readonly: false, ...(opts ?? {}) }) }) as MRT_ColumnDef<T>;
    };
}
