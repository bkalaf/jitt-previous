import { MRT_RowData } from 'material-react-table';
import { truncate } from '../../common/number/truncate';
import { createFloatingPointCell } from './createFloatingPointCell';

export function createMeasureCell<T extends MRT_RowData>(uom: string) {
    return createFloatingPointCell<T>((x?: number | string) => (x == null ? '' : [typeof x === 'number' ? truncate(x)?.toString() : x.toString(), uom].join(' ')));
}
