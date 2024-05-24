import { MRT_ColumnDef, MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
import { createEnumCell } from '../../components/Cells/createEnumCell';
import { baseCol } from './baseCol';
import { createSelectControl } from '../../components/controls/createSelectControl';

export function enumCol<T extends MRT_RowData>(helper: MRT_ColumnHelper<T>) {
    return function (name: keyof T & string, $header: string, opts: { options: Record<string, string | { text: string; key: string }>; required?: boolean, readonly?: boolean }): MRT_ColumnDef<T, string | undefined> {
        const { options, required, readonly } = { readonly: false, required: false, ...(opts ?? {}) };
        const $options = Object.entries(options).map(([k, v]) => ({ key: k, text: typeof v === 'string' ? v : v.text } as AutoOption));
        // const maxLength = Math.max(...$options.map((x) => x.text.length)) + 5;
        // const size = calculateSize(maxLength);
        // const grow = false;
        const optionLookup = Object.fromEntries($options.map((x) => [x.key, x]));
        // const header = $header ?? camelToProper(name);
        const Cell = createEnumCell<T>(optionLookup);
        const Edit = createSelectControl<T>({ options: $options });
        return baseCol(helper, name, Cell, Edit, $header, required, readonly);
        // return helper.accessor(name as any, { ...calculateSizes(header, { ...(opts ?? {}), options: $options }), header, Cell: createEnumCell(optionLookup), Edit: createSelectControl({ options: $options, required: required }) }) as any;
    };
}
