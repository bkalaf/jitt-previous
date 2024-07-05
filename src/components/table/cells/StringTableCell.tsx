import { MRT_RowData } from 'material-react-table';
import { useWhyDidIUpdate } from '../../../hooks/useWhyDidIUpdate';
import { fromDepth } from '../../../schema/fromDepth';
import { useMemo } from 'react';
import { useEffectiveCollection } from '../../../hooks/useEffectiveCollection';
import { numberToString } from './numberToString';
import { useEditColumnMeta } from '../../../hooks/useEditColumnMeta';

export function StringTableCell<T extends MRT_RowData, U>(props: CellFunctionParams<T, U>) {
    useWhyDidIUpdate('StringTableCell', props);
    const { columnName, formatter } = useEditColumnMeta(props, 'columnName', 'formatter');
    const collection = useEffectiveCollection();
    const $value = useMemo(() => (formatter ?? ((x?: U) => (x != null && typeof x === 'number' ? numberToString(x) : x?.toString() ?? '')))(props.cell.getValue()), [formatter, props.cell]);
    const className = useMemo(() => (collection === 'classifier' && columnName === 'shortName' ? fromDepth(props.row.depth) : ''), [collection, columnName, props.row.depth]);
    return <span className={className}>{$value as string}</span>;
}
