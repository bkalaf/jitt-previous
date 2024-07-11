import { MRT_RowData } from 'material-react-table';
import { useWhyDidIUpdate } from '../../../hooks/useWhyDidIUpdate';
import { fromDepth } from '../../../schema/fromDepth';
import { useMemo } from 'react';
import { useEffectiveCollection } from '../../../hooks/useEffectiveCollection';
import { numberToString } from './numberToString';
import { useEditColumnMeta } from '../../../hooks/useEditColumnMeta';
import { $className } from '../../../util/$className';
import { useAnchorEl } from '../../../hooks/useAnchorEl';
import { Popover, Typography } from '@mui/material';

export function TextTableCell<T extends MRT_RowData, U>(props: CellFunctionParams<T, U>) {
    useWhyDidIUpdate('TextTableCell', props);
    const $value = props.cell.getValue<string>() ?? '';
    const [anchorEl, open, onClick, onClose] = useAnchorEl();
    return (
        <>
            <span onClick={onClick}>
                ...
            </span>
            <Popover className='whitespace-pre' anchorEl={anchorEl} open={open} onClose={onClose}>
                <Typography>{$value}</Typography>
            </Popover>
        </>
    );
}
export function StringTableCell<T extends MRT_RowData, U>(props: CellFunctionParams<T, U>) {
    useWhyDidIUpdate('StringTableCell', props);
    const { columnName, formatter } = useEditColumnMeta(props, 'columnName', 'formatter');
    const collection = useEffectiveCollection();
    const $value = useMemo(() => (formatter ?? ((x?: U) => (x != null && typeof x === 'number' ? numberToString(x) : x?.toString() ?? '')))(props.cell.getValue()), [formatter, props.cell]);
    const className = useMemo(() => (collection === 'classifier' && columnName === 'shortName' ? fromDepth(props.row.depth) : ''), [collection, columnName, props.row.depth]);
    const { className: cn } = useMemo(() => $className({ className: '' }, {}, className, 'block group-overflowing:hidden'), [className]);
    
    return (
        <>
            <span className={cn}>
                {$value as string}
            </span>
            <span className='hidden overflow:block' title={$value}>
                {$value as string}
            </span>
        </>
    );
}
