import { MRT_ColumnDef, MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
import { baseCol } from './baseCol';
import { FloatingPointTableCell } from '../../components/table/cells/FloatingPointTableCell';
import { StringControl } from '../../components/table/controls/StringControl';

export function dollarColumnDefinition<T extends MRT_RowData>(helper: MRT_ColumnHelper<T>) {
    return function <TKey extends keyof T>(...dependencies: IDependency<T, TKey>[]) {
        return function (name: keyof T & string, $header: string, opts: { min?: number; max?: number; required?: boolean; readonly?: boolean }): MRT_ColumnDef<T, number | undefined> {
            return baseCol<T, number | undefined>(
                helper,
                name,
                FloatingPointTableCell,
                StringControl,
                $header,
                opts?.required,
                opts?.readonly,
                {
                    type: 'number',
                    formatter: (value) =>
                        [
                            '$',
                            (value == null ? 0
                            : typeof value === 'string' ? parseFloat(value)
                            : value
                            ).toFixed(2)
                        ].join('')
                },
                undefined,
                ...dependencies
            );
            // return helper.accessor(name as any, {
            //     ...calculateSizes(header, { minLength: 4, maxLength: 10, ...(opts ?? {}) }),
            //     header,
            //     Cell: createDollarCell<T>() as any,
            //     Edit: createStringControl<T, number>({ type: 'number', readonly: false, ...(opts ?? {}) })
            // }) as MRT_ColumnDef<T, number>;
        };
    };
}
