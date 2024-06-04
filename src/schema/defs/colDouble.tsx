import { MRT_ColumnDef, MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
import { baseCol } from './baseCol';
import { FloatingPointTableCell } from '../../components/table/cells/FloatingPointTableCell';
import { StringControl } from '../../components/table/controls/StringControl';

export function colDouble<T extends MRT_RowData>(helper: MRT_ColumnHelper<T>) {
    return function (name: keyof T & string, $header: string, opts: { min?: number; max?: number; required?: boolean; readonly?: boolean }): MRT_ColumnDef<T, number | undefined> {
        return baseCol(helper, name, FloatingPointTableCell, StringControl, $header, opts?.required, opts?.readonly, {
            formatter: x => x?.toString() ?? '',
            type: 'number',
            min: opts?.min,
            max: opts?.max
        });
        // return helper.accessor(name as any, {
        //     ...calculateSizes(header, { maxLength: 10, ...(opts ?? {}) }),
        //     header,
        //     Cell: createDoubleCell<T>((x) => x?.toString() ?? '') as any,
        //     Edit: createStringControl<T, number>({ type: 'number', readonly: false, ...(opts ?? {}) })
        //     // ...calculateBodySize({ maxLength: 10, ...(opts ?? {}) })
        // }) as any as MRT_ColumnDef<T>;
    };
}
