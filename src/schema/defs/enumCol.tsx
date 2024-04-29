import { MRT_ColumnDef, MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
import { camelToProper } from '../../common/text';
import { createSelectControl } from '../../components/controls/createStringControl';
import { createEnumCell } from '../../components/Cells/createEnumCell';
import { calculateSizes } from '../../components/Views/calculateSize';

export function enumCol<T extends MRT_RowData>(helper: MRT_ColumnHelper<T>) {
    return function (name: keyof T & string, $header: string, opts: { options: Record<string, string | { text: string; key: string }>; required?: boolean }): MRT_ColumnDef<T, string | undefined> {
        const { options, required } = { required: false, ...(opts ?? {}) };
        const $options = Object.entries(options).map(([k, v]) => ({ key: k, text: typeof v === 'string' ? v : v.text } as AutoOption));
        // const maxLength = Math.max(...$options.map((x) => x.text.length)) + 5;
        // const size = calculateSize(maxLength);
        // const grow = false;
        const optionLookup = Object.fromEntries($options.map((x) => [x.key, x]));
        console.log(`OPTIONS`, options, $options, optionLookup);
        const header = $header ?? camelToProper(name);
        return helper.accessor(name as any, { ...calculateSizes(header, { ...(opts ?? {}), options: $options }), header, Cell: createEnumCell(optionLookup), Edit: createSelectControl({ options: $options, required: required }) });
    };
}
