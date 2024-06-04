import { MRT_ColumnDef, MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
import { baseCol } from './baseCol';
import { ListTableCell } from '../../components/table/cells/ListTableCell';
import { AutocompleteControl } from '../../components/table/controls/AutocompleteControl';
import { BSON } from 'bson';

export function colDBListObject<T extends MRT_RowData, U extends MRT_RowData & { _id: BSON.ObjectId }>(helper: MRT_ColumnHelper<T>) {
    return function (name: keyof T & string, header: string, objectType: string, readonly = false): MRT_ColumnDef<T, ListBack<U>> {
        return baseCol<T, ListBack<U>>(helper, name, ListTableCell, AutocompleteControl<T, U, true>, header, false, readonly, { objectType, multiple: true });
    };
}
