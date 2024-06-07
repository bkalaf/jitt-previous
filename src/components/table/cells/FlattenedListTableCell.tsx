import { MRT_RowData } from 'material-react-table';
import { useWhyDidIUpdate } from '../../../hooks/useWhyDidIUpdate';

export function FlattenedListTableCell<T extends MRT_RowData, TValue>(props: CellFunctionParams<T, ListBack<TValue>>) {
    useWhyDidIUpdate('FlattenedListTableCell', props);
    const {
        cell,
        column: {
            columnDef: { meta }
        }
    } = props;
    const { flattener } = meta ?? {};
    const $flattener = flattener ?? ((x?: ListBack<TValue>) => x?.map((item) => (item as any).toString()).join(', ') ?? '');
    const value = cell.getValue();
    return $flattener(value);
}
