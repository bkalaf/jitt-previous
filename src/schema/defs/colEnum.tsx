import { MRT_ColumnDef, MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
import { EnumTableCell } from '../../components/table/cells/EnumTableCell';
import { baseCol } from './baseCol';
import { SelectControl } from '../../components/table/controls/SelectControl';

export function colEnum<T extends MRT_RowData>(helper: MRT_ColumnHelper<T>) {
    return function (name: keyof T & string, $header: string, opts: { options: Record<string, string | { text: string; key: string }>; required?: boolean, readonly?: boolean }): MRT_ColumnDef<T, string | undefined> {
        const { options, required, readonly } = { readonly: false, required: false, ...(opts ?? {}) };
        // const $options = Object.entries(options).map(([k, v]) => ({ key: k, text: typeof v === 'string' ? v : v.text } as { text: string, key: string }));
        return baseCol(helper, name, EnumTableCell, SelectControl, $header, required, readonly, { options: options ?? {} });
        // return helper.accessor(name as any, { ...calculateSizes(header, { ...(opts ?? {}), options: $options }), header, Cell: createEnumCell(optionLookup), Edit: createSelectControl({ options: $options, required: required }) }) as any;
    };
}


