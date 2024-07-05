import { MRT_RowData } from 'material-react-table';
import { useWhyDidIUpdate } from '../../../hooks/useWhyDidIUpdate';
import { fromDepth } from '../../../schema/fromDepth';
import { useMemo } from 'react';
import { useEffectiveCollection } from '../../../hooks/useEffectiveCollection';
import { numberToString } from './numberToString';
import { useEditColumnMeta } from '../../../hooks/useEditColumnMeta';
import { Popover, Tooltip } from '@mui/material';
import { useAnchorEl } from '../../../hooks/useAnchorEl';
import { $className } from '../../../util/$className';

export function StringTableCell<T extends MRT_RowData, U>(props: CellFunctionParams<T, U>) {
    useWhyDidIUpdate('StringTableCell', props);
    const { columnName, formatter } = useEditColumnMeta(props, 'columnName', 'formatter');
    const collection = useEffectiveCollection();
    const $value = useMemo(() => (formatter ?? ((x?: U) => (x != null && typeof x === 'number' ? numberToString(x) : x?.toString() ?? '')))(props.cell.getValue()), [formatter, props.cell]);
    const className = useMemo(() => (collection === 'classifier' && columnName === 'shortName' ? fromDepth(props.row.depth) : ''), [collection, columnName, props.row.depth]);
    const {
        className: cn
    } = useMemo(() => $className({ className: '' }, {}, className), [className])
    const [anchorEl, open, onClick, onClose] = useAnchorEl();
    return (
        <>
            <span className={cn} onMouseEnter={onClick} onMouseLeave={onClose}>
                {$value as string}
            </span>
            <span className='w-full h-full bg-red-500 group-data-overflow:bg-blue-500'></span>
            <Popover open={open} anchorEl={anchorEl} anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }} className='hidden group-data-overflow:flex'>
                {$value}
            </Popover>
        </>
    );
}
