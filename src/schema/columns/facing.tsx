import { MRT_ColumnDef, MRT_RowData, createMRTColumnHelper } from 'material-react-table';
import { IFacing } from '../../types';
import { col } from '../defs/col';

const h = createMRTColumnHelper<IFacing>();
const helper = col(h);

export const facing: <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => MRT_ColumnDef<T>[] = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) =>
    [
        helper.radio(...dependencies)('x', 'Facing (x)', { enumKey: 'face-x' }),
        helper.radio(...dependencies)('y', 'Facing (y)', { enumKey: 'face-y' }),
        helper.radio(...dependencies)('z', 'Facing (z)', { enumKey: 'face-z' }),
        helper.flags(...dependencies)('pov', 'POVs', ['logo', 'barcode', 'inner', 'defect', 'enhancer', 'tag', 'product-info'])
    ] as MRT_ColumnDef<T>[];
