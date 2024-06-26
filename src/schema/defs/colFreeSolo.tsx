import { MRT_ColumnDef, MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
import { baseCol } from './baseCol';
import { StringTableCell } from '../../components/table/cells/StringTableCell';
import { FreeSoloControl } from '../../components/table/controls/FreeSoloControl';

export function colFreeSolo<T extends MRT_RowData, U extends string>(helper: MRT_ColumnHelper<T>) {
    return function <TKey extends keyof T>(...dependencies: IDependency<T, TKey>[]) {
        return function (name: keyof T & string, header: string, comparator: (x?: U, y?: U) => Compared, opts?: { required?: boolean; readonly?: boolean; multiple?: boolean }): MRT_ColumnDef<T, U | undefined> {
            const { required, readonly, multiple } = { multiple: false, required: false, readonly: false, ...(opts ?? {}) };

            return baseCol<T, U | undefined>(
                helper,
                name,
                StringTableCell,
                FreeSoloControl,
                header,
                required,
                readonly,
                {
                    formatter: (x?: string) => x ?? '',
                    multiple: multiple ?? false,
                    comparator: comparator
                },
                undefined,
                ...dependencies
            );
            // return helper.accessor(name as any, {
            //     header: header ?? camelToProper(name),
            //     Cell: createStringCell((x?: string) => x ?? '') as MRT_ColumnDef<T, any>['Cell'],
            //     enableEditing: !readonly,
            //     Edit: createFreeSoloControl<T, U>(comparator, required, readonly, multiple)
            // }) as MRT_ColumnDef<T>;
        };
    };
}
