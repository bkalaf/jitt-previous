import { MRT_ColumnDef, createMRTColumnHelper } from 'material-react-table';
import { IShipping } from '../../types';
import { col } from '../defs/col';

const h = createMRTColumnHelper<IShipping>();
const helper = col(h);

export const shippingColumns: MRT_ColumnDef<IShipping>[] = [
    helper.int()('id', 'ID', { required: true }),
    helper.int()('version', 'Version', { required: true })
]