import { MRT_ColumnDef, MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
import { camelToProper } from '../../common/text';
import { createDateControl } from '../../components/controls/createStringControl';
import dayjs from 'dayjs';
import { createStringCell } from '../../components/Cells/createStringCell';

export function dateCol<T extends MRT_RowData>(helper: MRT_ColumnHelper<T>) {
    return function (name: keyof T & string, header?: string, formatter?: (x?: Date) => string | undefined, opts?: Parameters<typeof createDateControl>[0]): MRT_ColumnDef<T, any> {
        return helper.accessor(name as any, {
            Cell: createStringCell<T, Date>(formatter ?? ((x?: Date) => (x == null ? '' : dayjs(x).format('YYYY-MM-DD')))),
            header: header ?? camelToProper(name),
            Edit: createDateControl<T>(opts ?? {}),
            enableEditing: !(opts?.readonly ?? false)
        });
    };
}
