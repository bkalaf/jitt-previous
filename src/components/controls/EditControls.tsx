import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { createEditComponent } from './createEditComponent';
import { Item } from '../../hooks/Grid';
import { useMemo } from 'react';

export function EditControls<T extends MRT_RowData>(props: { columns: (...dependencies: IDependency<any, any>[]) => MRT_ColumnDef<T>[] }) {
    return useMemo(() => props.columns().map(createEditComponent(Item)), [props])
}
