import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { useWhyDidIUpdate } from '../../../hooks/useWhyDidIUpdate';
import { ColumnMeta } from '@tanstack/react-table';

export function EnumTableCell<T extends MRT_RowData>(props: Parameters<Exclude<MRT_ColumnDef<T, string | undefined>['Cell'], undefined>>[0]) {
    useWhyDidIUpdate('EnumTableCell', props);
    const {
        cell,
        column: {
            columnDef: { meta }
        }
    } = props;
    if (meta == null) throw new Error('no meta');
    const $meta = meta as ColumnMeta<any, any>;
    const { enumInfo } = { ...($meta ?? {}) };
    if (enumInfo == null) throw new Error('no enuminfo in enumtablecell');
    const value = cell.getValue();
    const lookup = value != null ? enumInfo.asRecord[value] : undefined;
    return (
        lookup == null ? ''
        : typeof lookup === 'string' ? lookup
        : lookup.text
    );
}

export function toEnumMap<T>(enumItems: EnumItem<string>[], modifier?: (x: EnumItem) => T) {
    return Object.fromEntries(
        enumItems
            .map((x) => [[x.key, x] as [string, EnumItem], ...x.aliases.map((y) => [y, x] as [string, EnumItem])])
            .reduce((pv, cv) => [...pv, ...cv], [])
            .map((ei) => [ei[0], (modifier ?? ((item: EnumItem) => item))(ei[1]) as T])
    );
}
