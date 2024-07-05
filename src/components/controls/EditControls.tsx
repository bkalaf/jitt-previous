import { MRT_RowData } from 'material-react-table';
import { createEditComponent } from './createEditComponent';
import { Item } from '../../hooks/Grid';
import { useMemo } from 'react';
import { resolveColumns } from './resolveColumns';

export function EditControls<T extends MRT_RowData>(props: { columns: JITTColumns<T> }) {
    return useMemo(() => resolveColumns(props.columns).map(createEditComponent(Item)), [props]);
}
