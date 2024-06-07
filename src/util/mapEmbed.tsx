import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { is } from '../common/is';

export function mapEmbed<T extends MRT_RowData, U extends MRT_RowData>(columns: MRT_ColumnDef<U>[], accessorKey: string) {
    return columns.map((def) => ({ ...def, accessorKey: [accessorKey, def.accessorKey].join('.'), meta: {
        ...def.meta ?? {},
        columnName: [accessorKey, def.meta?.columnName].filter(is.not.nil).join('.')
    } })) as MRT_ColumnDef<T>[];
}
