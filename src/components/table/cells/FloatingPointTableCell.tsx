import { MRT_RowData } from 'material-react-table';
import { useWhyDidIUpdate } from '../../../hooks/useWhyDidIUpdate';
import { truncateAuto } from '../../../common/number/truncateAuto';
import { useEditColumnMeta } from '../../../hooks/useEditColumnMeta';
import { useMemo } from 'react';

export function FloatingPointTableCell<T extends MRT_RowData>(props: EditFunctionParams<T, number | undefined>) {
    useWhyDidIUpdate('FloatingPointTableCell', props);
    const { formatter } = useEditColumnMeta(props, 'formatter');
    return useMemo(() => formatter ?? ((v?: number) => truncateAuto(v))(props.cell.getValue()), [formatter, props.cell]);
}
