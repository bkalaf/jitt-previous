import { MRT_ColumnDef, MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
import { createStringCell } from '../../components/Cells/createStringCell';
import { createFreeSoloControl } from '../../components/controls/createFreeSoloControl';
import { baseCol } from './baseCol';

export function freeSoloCol<T extends MRT_RowData, U extends string>(helper: MRT_ColumnHelper<T>) {
    return function (name: keyof T & string, header: string, comparator: (x: U, y: U) => Compared, opts?: { required?: boolean; readonly?: boolean; multiple?: boolean }): MRT_ColumnDef<T, string | undefined> {
        const { required, readonly, multiple } = { multiple: false, required: false, readonly: false, ...(opts ?? {}) };
        const Cell = createStringCell<T, string>((x?: string) => x ?? '');
        const Edit = createFreeSoloControl<T, string>(comparator as any, required, readonly, multiple);

        return baseCol(helper, name, Cell, Edit, header, required, readonly);
        // return helper.accessor(name as any, {
        //     header: header ?? camelToProper(name),
        //     Cell: createStringCell((x?: string) => x ?? '') as MRT_ColumnDef<T, any>['Cell'],
        //     enableEditing: !readonly,
        //     Edit: createFreeSoloControl<T, U>(comparator, required, readonly, multiple)
        // }) as MRT_ColumnDef<T>;
    };
}
