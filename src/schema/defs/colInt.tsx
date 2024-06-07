import { MRT_ColumnDef, MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
import { baseCol } from './baseCol';
import { StringTableCell } from '../../components/table/cells/StringTableCell';
import { StringControl } from '../../components/table/controls/StringControl';

export function colInt<T extends MRT_RowData>(helper: MRT_ColumnHelper<T>) {
    return function (name: keyof T & string, $header: string, opts: { min?: number; max?: number; readonly?: boolean; required?: boolean }): MRT_ColumnDef<T> {
        return baseCol<T, number | undefined>(helper, name, StringTableCell, StringControl, $header, opts?.required, opts?.readonly, {
            type: 'number',
            step: 1,
            min: opts?.min,
            max: opts?.max,
            formatter: (value?: number) => value?.toFixed(0) ?? ''
        }) as MRT_ColumnDef<T>
    };
}
