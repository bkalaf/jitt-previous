import { MRT_RowData } from 'material-react-table';
import { useWhyDidIUpdate } from '../../../hooks/useWhyDidIUpdate';
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
