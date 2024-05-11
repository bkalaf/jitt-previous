import { MRT_ColumnDef, MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
import { camelToProper } from '../../common/text';
import { createListCell } from '../../components/Cells/createListCell';
import { NullCell } from './NullCell';
import { createFreeSoloControl } from '../../components/controls/createFreeSoloControl';


export function dbFreeSoloCol<T extends MRT_RowData>(helper: MRT_ColumnHelper<T>) {
    return function (name: keyof T & string, header: string, objectType: string, comparator: (x: any, y: any) => Compared, readonly = false): MRT_ColumnDef<T> {
        return helper.accessor(name as any, {
            header: header ?? camelToProper(name),
            enableEditing: !readonly,
            Cell: createListCell(objectType),
            Edit: readonly ? NullCell : createFreeSoloControl(comparator, false, readonly, true)
        }) as any;
    };
}
