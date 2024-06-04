import { MRT_ColumnDef, MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
import { baseCol } from './baseCol';
import { LookupTableCell } from '../../components/table/cells/LookupTableCell';
import { AutocompleteControl } from '../../components/table/controls/AutocompleteControl';
import { BSON } from 'bson';

export function colLookup<T extends MRT_RowData, U extends MRT_RowData>(helper: MRT_ColumnHelper<T>) {
    return function (name: keyof T & string, header: string, opts: { objectType: string;}): MRT_ColumnDef<T, any> {
        return baseCol<T, U & { _id: BSON.ObjectId } | undefined>(helper, name, LookupTableCell, AutocompleteControl, header, false, false, { multiple: false, objectType: opts?.objectType })
    };
}
