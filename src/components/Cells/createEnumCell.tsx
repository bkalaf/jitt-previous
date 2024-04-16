import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { useWhyDidIUpdate } from '../../hooks/useWhyDidIUpdate';

export function createEnumCell<T extends MRT_RowData>(optionLookup: Record<string, string |EnumInfo>) {
    return function EnumCell(props: Parameters<Exclude<MRT_ColumnDef<T, string | undefined>['Cell'], undefined>>[0]) {
        useWhyDidIUpdate('EnumCell', props)
        const { cell } = props;
        const value = cell.getValue();
        if (value == null || value.length === 0) {
            return undefined;
        }
        const $value = optionLookup[value];
        console.info(`$value`, value, $value);
        return $value == null ? '' : typeof $value === 'string' ? $value : $value.text;
    };
}
