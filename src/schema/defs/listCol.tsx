import { MRT_ColumnDef, MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
import { camelToProper } from '../../common/text';
import { createListControl } from '../../components/controls/createListControl';
import { createListCell } from '../../components/Cells/createListCell';

export function listCol<T extends MRT_RowData>(helper: MRT_ColumnHelper<T>) {
    return function <U extends MRT_RowData>(name: keyof T & string, header: string, objectType: string, RowCell: IRowCell<U>, columns: MRT_ColumnDef<U>[], labelProperty?: string, readonly = false): MRT_ColumnDef<T> {
        return helper.accessor(name as any, { header: header ?? camelToProper(name), Cell: createListCell(RowCell), Edit: readonly ? undefined : createListControl(objectType, columns, RowCell, labelProperty), enableEditing: !readonly }) as any;
    };
}
