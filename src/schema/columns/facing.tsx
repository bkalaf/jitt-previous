import { MRT_ColumnDef, createMRTColumnHelper } from 'material-react-table';
import { IFacing } from '../../types';
import { col } from '../defs/col';

const h = createMRTColumnHelper<IFacing>();
const helper = col(h);

export const facing: MRT_ColumnDef<IFacing>[] = [
    helper.radio()('x', 'Facing (x)', { enumKey: 'face-x' }),
    helper.radio()('y', 'Facing (y)', { enumKey: 'face-y' }),
    helper.radio()('z', 'Facing (z)', { enumKey: 'face-z' }),
    helper.flags()('pov', 'POVs', ['logo', 'barcode', 'inner', 'defect', 'enhancer', 'tag', 'product-info'])
] as MRT_ColumnDef<IFacing>[];
