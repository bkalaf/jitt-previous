import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { useWhyDidIUpdate } from '../../hooks/useWhyDidIUpdate';


export function createFlattedListCell<T extends MRT_RowData>(func: (key: string) => string) {
    return function FlattenedListCell(props: Parameters<Exclude<MRT_ColumnDef<T, DBList<string> | string[] | undefined>['Cell'], undefined>>[0]) {
        useWhyDidIUpdate('FlattenedListCell', props);
        const value = props.cell.getValue() ?? [];
        return <span>{value.map(func).join(', ')}</span>;
    };
}
