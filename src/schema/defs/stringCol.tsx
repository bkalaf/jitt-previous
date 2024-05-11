import { MRT_ColumnDef, MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
import { camelToProper } from '../../common/text';
import { createStringControl } from '../../components/controls/createStringControl';
import { createStringCell } from '../../components/Cells/createStringCell';
import { calculateSizes } from '../../components/Views/calculateSize';
import { createStringHeaderCell } from '../../components/Cells/createStringHeaderCell';

export function stringCol<T extends MRT_RowData, U>(helper: MRT_ColumnHelper<T>) {
    return function (name: keyof T & string, $header?: string, formatter?: (x?: U) => string | undefined, opts?: Parameters<typeof createStringControl>[0], prefixAndIndex = false): MRT_ColumnDef<T, U | undefined> {
        const $formatter = formatter ?? ((x?: U) => x as string);
        // const { maxSize, grow } = opts?.maxLength != null ? { maxSize: calculateSize(opts?.maxLength), grow: false } : { maxSize: calculateSize(250), grow: true };
        // const { minSize } = opts?.minLength != null ? { minSize: calculateSize(opts?.minLength) } : { minSize: calculateSize(5) }
        const header = $header ?? camelToProper(name);
        const maxLength = 250;
        const minLength = 5;
        return helper.accessor(name as any, {
            ...calculateSizes(header, { maxLength, minLength, ...(opts ?? {}) }),
            Cell: createStringCell<T, U>($formatter, prefixAndIndex),
            header,
            Header: createStringHeaderCell(),
            Edit: createStringControl<T, U>({ type: 'text', readonly: false, ...(opts ?? {}) }),
            enableEditing: !(opts?.readonly ?? false),
            enableClickToCopy: true
        });
    };
}
