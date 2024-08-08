import { MRT_RowData } from 'material-react-table';
import { useWhyDidIUpdate } from '../../../hooks/useWhyDidIUpdate';
import { useMemo } from 'react';
import { useEffectiveCollection } from '../../../hooks/useEffectiveCollection';
import { numberToString } from './numberToString';
import { useEditColumnMeta } from '../../../hooks/useEditColumnMeta';
import { $className } from '../../../util/$className';
import { $depthClassName } from '../../../util/$depthClassName';

export function StringTableCell<T extends MRT_RowData, U>(props: CellFunctionParams<T, U>) {
    useWhyDidIUpdate('StringTableCell', props);
    const { columnName, formatter } = useEditColumnMeta(props, 'columnName', 'formatter');
    const collection = useEffectiveCollection();
    const $value = useMemo(() => (formatter ?? ((x?: U) => (x != null && typeof x === 'number' ? numberToString(x) : x?.toString() ?? '')))(props.cell.getValue()), [formatter, props.cell]);
    // const className = useMemo(() => (collection === 'classifier' && columnName === 'shortName' ? fromDepth(props.row.depth) : ''), [collection, columnName, props.row.depth]);
    const cnFunc = useMemo(
        () =>
            collection === 'classifier' && columnName === 'shortName' ?
                $depthClassName<T>
            :   (props: T, flags: Record<string, boolean>, ...classes: string[]) =>
                    () =>
                        $className(props, flags, ...classes),
        [collection, columnName]
    );
    const { className } = useMemo(() => cnFunc({ className: '' } as unknown as T, {}, 'block group-overflowing:hidden')(props.row.depth) as unknown as { className: string }, [cnFunc, props.row.depth]);

    return (
        <>
            <span className={className}>{$value as string}</span>
            <span className='hidden overflow:block' title={$value}>
                {$value as string}
            </span>
        </>
    );
}
