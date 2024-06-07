import { MRT_RowData } from 'material-react-table';
import { useWhyDidIUpdate } from '../../../hooks/useWhyDidIUpdate';
import $me from '../../../schema/enums';

export function EnumTableCell<T extends MRT_RowData>(props: CellFunctionParams<T, string | undefined>) {
    useWhyDidIUpdate('EnumTableCell', props);
    const {
        cell,
        column: {
            columnDef: { meta }
        }
    } = props;
    const { enumType } = meta ?? {};
    if (enumType == null) {
        console.error('no enumType', props.column.columnDef);
        throw new Error('no enumType');
    }
    const enumItems = $me[enumType];
    const value = cell.getValue();
    return value == null ? '' : toEnumMapText(enumItems)[value];
}

export function toEnumMap<T>(enumItems: EnumItem<string>[], modifier?: (x: EnumItem) => T) {
    return Object.fromEntries(
        enumItems
            .map((x) => [[x.key, x] as [string, EnumItem], ...x.aliases.map((y) => [y, x] as [string, EnumItem])])
            .reduce((pv, cv) => [...pv, ...cv], [])
            .map((ei) => [ei[0], (modifier ?? ((item: EnumItem) => item))(ei[1]) as T])
    );
}

const toEnumMapText = (enumItems: EnumItem[]) => toEnumMap(enumItems, (x) => x.text);
