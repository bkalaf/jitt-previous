import { MRT_RowData } from 'material-react-table';
import { createEditComponent } from './createEditComponent';
import { Item } from '../../hooks/Grid';
import { resolveColumns } from './resolveColumns';

export function EditControls<T extends MRT_RowData>(props: { columns: JITTColumns<T> }) {
    return resolveColumns(props.columns).map(createEditComponent(Item));
}
