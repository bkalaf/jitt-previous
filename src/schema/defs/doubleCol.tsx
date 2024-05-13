import { MRT_ColumnDef, MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
import { camelToProper } from '../../common/text';
import { createStringControl } from '../../components/controls/createStringControl';
import { createDoubleCell } from '../../components/Cells/createDoubleCell';
import { calculateSizes } from '../../components/Views/calculateSize';

export function doubleCol<T extends MRT_RowData>(helper: MRT_ColumnHelper<T>) {
    return function (name: keyof T & string, $header: string, opts: { min?: number; max?: number; required?: boolean; readonly?: boolean }): MRT_ColumnDef<T> {
        const header = $header ?? camelToProper(name);
        
        return helper.accessor(name as any, {
            ...calculateSizes(header, { maxLength: 10, ...(opts ?? {}) }),
            header,
            Cell: createDoubleCell<T>((x) => x?.toString() ?? '') as any,
            Edit: createStringControl<T, number>({ type: 'number', readonly: false, ...(opts ?? {}) })
            // ...calculateBodySize({ maxLength: 10, ...(opts ?? {}) })
        }) as any as MRT_ColumnDef<T>;
    };
}
