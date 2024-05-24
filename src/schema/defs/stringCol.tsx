import { MRT_ColumnDef, MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
import { createStringControl } from '../../components/controls/createStringControl';
import { createStringCell } from '../../components/Cells/createStringCell';
import { baseCol } from './baseCol';
import { ColumnMeta } from '@tanstack/table-core';

export function stringCol<T extends MRT_RowData, U>(helper: MRT_ColumnHelper<T>) {
    return function (
        name: keyof T & string,
        $header?: string,
        formatter?: (x?: U) => string | undefined,
        opts?: Pick<Exclude<ColumnMeta<T, U | undefined>, undefined>, 'max' | 'min' | 'minLength' | 'maxLength' | 'pattern' | 'type' | 'step' | 'required' | 'validate' | 'readonly'>,
        prefixAndIndex = false
    ): MRT_ColumnDef<T, U | undefined> {
        const { required, readonly, ...rest } = { readonly: false, required: false, ...(opts ?? {}) };
        const $formatter = formatter ?? ((x?: U) => x as string);
        // const { maxSize, grow } = opts?.maxLength != null ? { maxSize: calculateSize(opts?.maxLength), grow: false } : { maxSize: calculateSize(250), grow: true };
        // const { minSize } = opts?.minLength != null ? { minSize: calculateSize(opts?.minLength) } : { minSize: calculateSize(5) }
        const Edit = createStringControl<T, U>();
        const Cell = createStringCell<T, U>($formatter, prefixAndIndex);
        return baseCol<T, U | undefined>(helper, name, Cell, Edit, $header, required, readonly, rest);
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
}
