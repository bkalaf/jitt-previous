import { MRT_ColumnDef, MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
import { camelToProper } from '../../common/text';
import { baseCol } from './baseCol';
import { CheckGroupControl } from './CheckGroupControl';
import { FlattenedListTableCell } from '../../components/table/cells/FlattenedListTableCell';

export function colFlags<T extends MRT_RowData>(helper: MRT_ColumnHelper<T>) {
    return function (name: keyof T & string, header: string, flags: string[], readonly = false) {
        return baseCol<T, ListBack<string>>(helper, name, FlattenedListTableCell, CheckGroupControl, header, false, readonly, {
            flags: flags ?? [],
            flattener: (value?: ListBack<string>) => value?.map(camelToProper).join(', ') ?? ''
        }) as MRT_ColumnDef<T>;
    };
}
