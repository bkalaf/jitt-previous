import { MRT_RowData } from 'material-react-table';
import { faCheckSquare } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { useWhyDidIUpdate } from '../../../hooks/useWhyDidIUpdate';
import { useMemo } from 'react';

export function BoolTableCell<T extends MRT_RowData>(props: EditFunctionParams<T, boolean | undefined>) {
    useWhyDidIUpdate('BoolTableCell', props);
    const value = useMemo(() => props.cell.getValue(), [props.cell]);
    const icon = useMemo(() => (value ? faCheckSquare : faSquare), [value]);
    return <FontAwesomeIcon icon={icon} className='text-blue-500' size='lg' />;
}
