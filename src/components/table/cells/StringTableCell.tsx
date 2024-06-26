import { MRT_RowData } from 'material-react-table';
import { useWhyDidIUpdate } from '../../../hooks/useWhyDidIUpdate';
import { fromDepth } from '../../../schema/fromDepth';
import { useMemo } from 'react';
import { useEffectiveCollection } from '../../../hooks/useEffectiveCollection';
import { ColumnMeta } from '@tanstack/react-table';

export function StringTableCell<T extends MRT_RowData, U>(props: CellFunctionParams<T, U>) {
    useWhyDidIUpdate('StringTableCell', props);
    const {
        cell,
        row,
        column: {
            columnDef: { meta }
        }
    } = props;
    const collection = useEffectiveCollection();
    const { columnName, formatter } = meta as ColumnMeta<any, any>;
    const $formatter = formatter ?? ((x?: U) => x?.toString() ?? '');
    const className = useMemo(() => (collection === 'classifier' && columnName === 'shortName' ? fromDepth(row.depth) : ''), [collection, columnName, row.depth]);
    return <span className={className}>{$formatter(cell.getValue())}</span>;
}
