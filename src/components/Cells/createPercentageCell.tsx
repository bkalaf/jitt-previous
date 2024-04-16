import { MRT_RowData } from 'material-react-table';
import { truncate } from '../../common/number/truncate';
import { createDoubleCell } from './createDoubleCell';

export function createPercentageCell<T extends MRT_RowData>() {
    return createDoubleCell<T>((x?: number) => (x == null ? '' : `${truncate(x * 100)}%`));
}
