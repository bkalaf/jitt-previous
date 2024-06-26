import { MRT_RowData } from 'material-react-table';
import { useWhyDidIUpdate } from '../../../hooks/useWhyDidIUpdate';
import { truncateAuto } from '../../Cells/truncateAuto';
import { ColumnMeta } from '@tanstack/react-table';

export function FloatingPointTableCell<T extends MRT_RowData>(props: EditFunctionParams<T, number | undefined>) {
    useWhyDidIUpdate('FloatingPointTableCell', props);
    const {
        column: {
            columnDef: { meta }
        }
    } = props;
    const { formatter } = meta as ColumnMeta<any, any>;
    const $formatter = formatter ?? ((value?: number) => truncateAuto(value));
    const value = props.cell.getValue();
    return $formatter(value);
}
