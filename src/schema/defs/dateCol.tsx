import { MRT_ColumnDef, MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
import { camelToProper } from '../../common/text';
import { createDateControl } from '../../components/controls/createStringControl';
import dayjs from 'dayjs';
import { createStringCell } from '../../components/Cells/createStringCell';
import { calculateSizes } from '../../components/Views/calculateSize';
import { createStringHeaderCell } from '../../components/Cells/createStringHeaderCell';

export function dateCol<T extends MRT_RowData>(helper: MRT_ColumnHelper<T>) {
    return function (name: keyof T & string, $header?: string, formatter?: (x?: Date) => string | undefined, opts?: Parameters<typeof createDateControl>[0]): MRT_ColumnDef<T, any> {
        const header = $header ?? camelToProper(name);
        const format = 'YYYY/MM/DD';
        const maxLength = format.length + 2;
        const minLength = format.length + 2;
        return helper.accessor(name as any, {
            ...calculateSizes(header, { maxLength, minLength, ...(opts ?? {}) }),
            Cell: createStringCell<T, Date>(formatter ?? ((x?: Date) => (x == null ? '' : dayjs(x).format(format)))),
            header,
            Header: createStringHeaderCell(),
            Edit: createDateControl<T>(opts ?? {}),
            enableEditing: !(opts?.readonly ?? false)
        });
    };
}
