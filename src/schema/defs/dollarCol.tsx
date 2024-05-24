import { MRT_ColumnDef, MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
import { createStringControl } from '../../components/controls/createStringControl';
import { createDollarCell } from '../../components/Cells/createDollarCell';
import { baseCol } from './baseCol';

export function dollarCol<T extends MRT_RowData>(helper: MRT_ColumnHelper<T>) {
    return function (name: keyof T & string, $header: string, opts: { min?: number; max?: number; required?: boolean; readonly?: boolean }): MRT_ColumnDef<T, string | number | undefined> {
        const Cell = createDollarCell<T>();
        const Edit = createStringControl<T, string | number | undefined>({ type: 'number', readonly: false, ...opts ?? {}});
        return baseCol(helper, name, Cell, Edit, $header, opts?.required, opts?.readonly);
        // return helper.accessor(name as any, {
        //     ...calculateSizes(header, { minLength: 4, maxLength: 10, ...(opts ?? {}) }),
        //     header,
        //     Cell: createDollarCell<T>() as any,
        //     Edit: createStringControl<T, number>({ type: 'number', readonly: false, ...(opts ?? {}) })
        // }) as MRT_ColumnDef<T, number>;
    };
}
