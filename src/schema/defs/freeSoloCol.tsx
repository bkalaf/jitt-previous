import { MRT_ColumnDef, MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
import { camelToProper } from '../../common/text';
import { createStringCell } from '../../components/Cells/createStringCell';
import { createFreeSoloControl } from '../../components/controls/createFreeSoloControl';

export function freeSoloCol<T extends MRT_RowData, U extends string>(helper: MRT_ColumnHelper<T>) {
    return function (name: keyof T & string, header: string, comparator: (x: U, y: U) => Compared, opts?: { required?: boolean; readonly?: boolean }): MRT_ColumnDef<T> {
        const { required, readonly } = { required: false, readonly: false, ...(opts ?? {}) };

        return helper.accessor(name as any, {
            header: header ?? camelToProper(name),
            Cell: createStringCell((x?: string) => x ?? '') as MRT_ColumnDef<T, any>['Cell'],
            enableEditing: !readonly,
            Edit: createFreeSoloControl<T, U>(comparator, required, readonly)
        }) as MRT_ColumnDef<T>;
    };
}
