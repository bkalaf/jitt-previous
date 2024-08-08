import { MRT_ColumnDef, MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
import { baseCol } from './baseCol';
import { ColumnMeta } from '@tanstack/table-core';
import { StringTableCell } from '../../components/table/cells/StringTableCell';
import { StringControl } from '../../components/table/controls/StringControl';

export function stringColumnDefinition<T extends MRT_RowData, U>(helper: MRT_ColumnHelper<T>) {
    return function <TKey extends keyof T>(...dependencies: IDependency<T, TKey>[]) {
        return function (
            name: keyof T & string,
            $header?: string,
            formatter?: (x?: U) => string,
            opts?: Pick<Exclude<ColumnMeta<T, U | undefined>, undefined>, 'max' | 'min' | 'minLength' | 'maxLength' | 'pattern' | 'type' | 'step' | 'required' | 'validate' | 'readonly'>
        ): MRT_ColumnDef<T, U | undefined> {
            const { required, readonly, ...rest } = { readonly: false, required: false, ...(opts ?? {}) };
            const $formatter = formatter ?? ((x?: U) => (x ?? '') as string);
            // const { maxSize, grow } = opts?.maxLength != null ? { maxSize: calculateSize(opts?.maxLength), grow: false } : { maxSize: calculateSize(250), grow: true };
            // const { minSize } = opts?.minLength != null ? { minSize: calculateSize(opts?.minLength) } : { minSize: calculateSize(5) }
            return baseCol<T, U | undefined>(helper, name, StringTableCell, StringControl, $header, required, readonly, { ...rest, formatter: $formatter, filterFn: 'contains' }, undefined, ...dependencies);
            // return helper.accessor(name as any, {
            //     ...calculateSizes(header, { maxLength, minLength, ...(opts ?? {}) }),
            //     Cell,
            //     header,
            //     // Header: createStringHeaderCell(),
            //     Edit,
            //     enableEditing: !(opts?.readonly ?? false),
            //     enableClickToCopy: true
            // });
        };
    };
}
