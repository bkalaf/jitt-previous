import { MRT_ColumnDef, MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
import { camelToProper } from '../../common/text';
import { createStringControl } from '../../components/controls/createStringControl';
import { createStringCell } from '../../components/Cells/createStringCell';

export function stringCol<T extends MRT_RowData, U>(helper: MRT_ColumnHelper<T>) {
    return function (name: keyof T & string, header?: string, formatter?: (x?: U) => string | undefined, opts?: Parameters<typeof createStringControl>[0]): MRT_ColumnDef<T, U | undefined> {
        const $formatter = formatter ?? ((x?: U) => x as string)
        return helper.accessor(name as any, {
            Cell: createStringCell<T, U>($formatter),
            header: header ?? camelToProper(name),
            Edit: createStringControl<T, U>({ type: 'text', readonly: false, ...(opts ?? {}) }),
            enableEditing: !(opts?.readonly ?? false)
        });
    };
}
