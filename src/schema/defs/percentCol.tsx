import { MRT_ColumnDef, MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
import { camelToProper } from '../../common/text';
import { createStringControl } from '../../components/controls/createStringControl';
import { createPercentageCell } from '../../components/Cells/createPercentageCell';
import { calculateSize, calculateSizes } from '../../components/Views/calculateSize';

export function percentCol<T extends MRT_RowData>(helper: MRT_ColumnHelper<T>) {
    return function (name: keyof T & string, $header: string, opts: { min?: number; max?: number; required?: boolean; readonly?: boolean }): MRT_ColumnDef<T, number> {
        const header = $header ?? camelToProper(name);
        const maxLength = 2 + 6;
        const minLength = 2 + 1;
        return helper.accessor(name as any, {
            ...calculateSizes(header, { minLength, maxLength, ...(opts ?? {}) }),
            header,
            Cell: createPercentageCell() as any,
            maxSize: calculateSize(15),
            Edit: createStringControl<T, number>({ type: 'number', min: 0, readonly: false, ...(opts ?? {}) })
        }) as MRT_ColumnDef<T, number>;
    };
}
