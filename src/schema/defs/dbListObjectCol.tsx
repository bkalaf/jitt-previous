import { MRT_ColumnDef, MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
import { createListCell } from '../../components/Cells/createListCell';
import { createAutocompleteControl } from '../../components/controls/createAutocompleteControl';
import { baseCol } from './baseCol';

export function dbListObjectCol<T extends MRT_RowData>(helper: MRT_ColumnHelper<T>) {
    return function (name: keyof T & string, header: string, objectType: string, labelProperty: string, readonly = false): MRT_ColumnDef<T, ListBack<any>> {
        const Cell = createListCell<T, ListBack<any>>(objectType);
        const Edit = createAutocompleteControl<T, any>({ objectType, labelProperty, multiple: true });
        return baseCol<T, ListBack<any>>(helper, name, Cell, Edit, header, false, readonly);
        // return helper.accessor(name as any, {
        //     header: header ?? camelToProper(name),
        //     enableEditing: !readonly,
        //     Cell: createListCell(objectType),
        //     Edit: readonly ? NullCell : (createAutocompleteControl({ objectType, labelProperty, multiple: true }) as any)
        // }) as any;
    };
}
