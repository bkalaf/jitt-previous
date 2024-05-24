import { MRT_ColumnDef, MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
import { createDBDictionaryControl } from 'src/components/controls/createDBDictionaryControl';
import { createDictionaryCell } from '../../components/Cells/createDictionaryCell';
import { baseCol } from './baseCol';
import { DBDictColOptions } from './dbListCol';


export function dbDictCol<T extends MRT_RowData>(helper: MRT_ColumnHelper<T>) {
    return function (name: keyof T & string, header: string, objectType: string, opts?: DBDictColOptions): MRT_ColumnDef<T, DictionaryBack<any>> {
        const { readonly, faceted, enumMap } = { readonly: false, faceted: false, enumMap: undefined, ...opts ?? {} };
        const Cell = createDictionaryCell(objectType) as MRT_ColumnDef<T, DictionaryBack<any>>['Cell'];
        const Edit = createDBDictionaryControl(objectType, faceted, enumMap) as MRT_ColumnDef<T, DictionaryBack<any>>['Edit'];
        return baseCol(helper, name, Cell, Edit, header, false, readonly);
        // return helper.accessor(name as any, {
        //     header: header ?? camelToProper(name),
        //     enableEditing: !readonly,
        //     Cell: createDictionaryCell(objectType),
        //     Edit: (readonly ? NullCell : createDBDictionaryControl(objectType, faceted, enumMap)) as any
        // }) as any;
    };
}
