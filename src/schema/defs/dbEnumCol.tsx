import { MRT_ColumnDef, MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
import { camelToProper } from '../../common/text';
import { createListCell } from '../../components/Cells/createListCell';
import { createMultiSelectControl } from '../../components/controls/createMultiSelectControl';
import { baseCol } from './baseCol';


export function dbEnumCol<T extends MRT_RowData>(helper: MRT_ColumnHelper<T>) {
    return function (name: keyof T & string, $header: string, opts: { options: Record<string, string | { text: string; key: string; }>; required?: boolean; readonly?: false; }): MRT_ColumnDef<T, ListBack<string>> {
        const { options: $options, required, readonly } = { required: false, readonly: false, ...opts };
        const header = $header ?? camelToProper(name);
        const options = Object.entries($options).map(([k, v]) => ({ key: k, text: typeof v === 'string' ? v : v.text }));
        const Cell = createListCell<T, string>('string');
        const Edit = createMultiSelectControl<T, ListBack<string>>(options, required, readonly);
        return baseCol(helper, name, Cell, Edit, header, required, readonly);
        // return helper.accessor(name as any, {
        //     header,
        //     enableEditing: !readonly,
        //     Cell: createListCell('string'),
        //     Edit: readonly ? NullCell : createMultiSelectControl(options, required, readonly) as any
        // }) as any;
    };
}

