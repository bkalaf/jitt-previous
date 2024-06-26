import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { createEditComponent } from './createEditComponent';
import { Item } from '../../hooks/Grid';

export function EditControls<T extends MRT_RowData>(props: { columns: MRT_ColumnDef<T>[] }) {
    return props.columns.map(createEditComponent(Item));
}
