import { MRT_ColumnDef, MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
import { EnumTableCell } from '../../components/table/cells/EnumTableCell';
import { baseCol } from './baseCol';
import { SelectControl } from '../../components/table/controls/SelectControl';
import $me from '../enums';
import { RadioControl } from '../../components/table/controls/RadioControl';
import { standardizeOptions } from './standardizeOptions';

export function colEnum<T extends MRT_RowData>(helper: MRT_ColumnHelper<T>) {
    return function (name: keyof T & string, $header: string, opts: { options?: Record<string, string | { text: string; key: string }>; required?: boolean; readonly?: boolean; enumKey?: keyof typeof $me }): MRT_ColumnDef<T, string | undefined> {
        const { required, readonly, enumKey } = { readonly: false, required: false, ...(opts ?? {}) };
        const enumInfo = standardizeOptions($me[enumKey as keyof typeof $me] ?? opts.options);
        // const $options = Object.entries(options).map(([k, v]) => ({ key: k, text: typeof v === 'string' ? v : v.text } as { text: string, key: string }));
        return baseCol(helper, name, EnumTableCell, SelectControl, $header, required, readonly, { enumInfo });
        // return helper.accessor(name as any, { ...calculateSizes(header, { ...(opts ?? {}), options: $options }), header, Cell: createEnumCell(optionLookup), Edit: createSelectControl({ options: $options, required: required }) }) as any;
    };
}

export function colRadio<T extends MRT_RowData>(helper: MRT_ColumnHelper<T>) {
    return function (name: keyof T & string, $header: string, opts: { enumKey: string; required?: boolean, readonly?: boolean }): MRT_ColumnDef<T> {
        const { required, readonly, enumKey } = { readonly: false, required: false, ...(opts ?? {}) };
        return baseCol<T, string | undefined>(helper, name, EnumTableCell, RadioControl, $header, required, readonly, { enumInfo: standardizeOptions($me[enumKey as keyof typeof $me]) }) as MRT_ColumnDef<T>;
    }
}
