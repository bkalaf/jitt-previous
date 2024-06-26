import { MRT_ColumnDef, MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
import dayjs from 'dayjs';
import { baseCol } from './baseCol';
import { DateControl } from '../../components/table/controls/DateControl';
import { StringTableCell } from '../../components/table/cells/StringTableCell';

export function colDate<T extends MRT_RowData>(helper: MRT_ColumnHelper<T>) {
    return function <TKey extends keyof T>(...dependencies: IDependency<T, TKey>[]) {
        return function (
            name: keyof T & string,
            $header?: string,
            opts?: {
                min?: Date;
                max?: Date;
                dateType?: 'past' | 'future';
            },
            required = false,
            readonly = false
        ): MRT_ColumnDef<T> {
            const format = 'YYYY/MM/DD';
            return baseCol<T, Date | undefined>(
                helper,
                name,
                StringTableCell,
                DateControl,
                $header,
                required,
                readonly,
                { formatter: (x?: Date) => (x == null ? '' : dayjs(x).format(format)), ...(opts ?? {}) },
                undefined,
                ...dependencies
            ) as MRT_ColumnDef<T>;
            // return helper.accessor(name as any, {
            //     ...calculateSizes(header, { maxLength, minLength, ...(opts ?? {}) }),
            //     Cell: createStringCell<T, Date>(formatter ?? ((x?: Date) => (x == null ? '' : dayjs(x).format(format)))),
            //     header,
            //     // Header: createStringHeaderCell(),
            //     Edit: createDateControl<T>(opts ?? {}),
            //     enableEditing: !(opts?.readonly ?? false)
        };
    };
}
