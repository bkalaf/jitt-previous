import { MRT_RowData } from 'material-react-table';
import { createFloatingPointCell } from './createFloatingPointCell';

export function createDollarCell<T extends MRT_RowData>() {
    return createFloatingPointCell<T>((x?: number | string) => (x != null ? (typeof x === 'string' ? `$${x}` : `$${x.toFixed(2)}`) : ''));
}

