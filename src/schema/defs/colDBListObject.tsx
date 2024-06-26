import { MRT_ColumnDef, MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
import { baseCol } from './baseCol';
import { ListTableCell } from '../../components/table/cells/ListTableCell';
import { AutocompleteControl } from '../../components/table/controls/AutocompleteControl';
import { BSON } from 'bson';

export function colDBListObject<T extends MRT_RowData, U extends MRT_RowData & { _id: BSON.ObjectId }>(helper: MRT_ColumnHelper<T>) {
    return function <TKey extends keyof T>(...dependencies: IDependency<T, TKey>[]) {
        return function (name: keyof T & string, header: string, objectType: string, readonly = false): MRT_ColumnDef<T, ListBack<U>> {
            return baseCol(helper, name, ListTableCell, AutocompleteControl as any, header, false, readonly, { objectType, multiple: true }, undefined, ...dependencies);
        };
    };
}
