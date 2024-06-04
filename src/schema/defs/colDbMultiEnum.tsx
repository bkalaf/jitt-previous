import { MRT_ColumnDef, MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
import { baseCol } from './baseCol';
import { MultiSelectControl } from '../../components/table/controls/MultiSelectControl';
import { ListTableCell } from '../../components/table/cells/ListTableCell';

export function colDbMultiEnum<T extends MRT_RowData>(helper: MRT_ColumnHelper<T>) {
    return function (name: keyof T & string, $header: string, opts: { options: Record<string, string | { text: string; key: string }>; required?: boolean; readonly?: false }): MRT_ColumnDef<T, ListBack<string>> {
        const { options: $options, required, readonly } = { required: false, readonly: false, ...opts };
        return baseCol(helper, name, ListTableCell, MultiSelectControl, $header, required, readonly, { objectType: 'string', options: $options, multiple: true });
    };
}
