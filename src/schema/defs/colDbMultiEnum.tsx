import { MRT_ColumnDef, MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
import { baseCol } from './baseCol';
import { MultiSelectControl } from '../../components/table/controls/MultiSelectControl';
import { ListTableCell } from '../../components/table/cells/ListTableCell';
import $me from '../enums';
import { standardizeOptions } from './standardizeOptions';

export function colDbMultiEnum<T extends MRT_RowData>(helper: MRT_ColumnHelper<T>) {
    return function <TKey extends keyof T>(...dependencies: IDependency<T, TKey>[]) {
    return function (name: keyof T & string, $header: string, opts: { options?: Record<string, string | { text: string; key: string }>; required?: boolean; readonly?: false; enumKey: keyof typeof $me }): MRT_ColumnDef<T, ListBack<string>> {
        const { enumKey, required, readonly } = { required: false, readonly: false, ...opts };
        return baseCol(helper, name, ListTableCell, MultiSelectControl, $header, required, readonly, { objectType: 'string', enumInfo: standardizeOptions($me[enumKey as keyof typeof $me]), multiple: true }, undefined, ...dependencies);
    };
    }
}
