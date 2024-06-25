import { MRT_ColumnDef, MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
import { EnumTableCell } from '../../components/table/cells/EnumTableCell';
import { baseCol } from './baseCol';
import $me from '../enums';
import { RadioControl } from '../../components/table/controls/RadioControl';
import { standardizeOptions } from './standardizeOptions';

export function colRadio<T extends MRT_RowData>(helper: MRT_ColumnHelper<T>) {
    return function <TKey extends keyof T>(...dependencies: IDependency<T, TKey>[]) {
        return function (name: keyof T & string, $header: string, opts: { enumKey: string; required?: boolean; readonly?: boolean }): MRT_ColumnDef<T> {
            const { required, readonly, enumKey } = { readonly: false, required: false, ...(opts ?? {}) };
            return baseCol<T, string | undefined>(helper, name, EnumTableCell, RadioControl, $header, required, readonly, { enumInfo: standardizeOptions($me[enumKey as keyof typeof $me]) }, undefined, ...dependencies) as MRT_ColumnDef<T>;
        };
    };
}
