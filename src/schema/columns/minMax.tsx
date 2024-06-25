import { createMRTColumnHelper, MRT_ColumnDef } from 'material-react-table';
import { IMinMax, Int } from '../../types';
import { col } from '../defs/col';

const h = createMRTColumnHelper<IMinMax<Int>>();
const helper = col(h);

export const minMaxColumns: MRT_ColumnDef<IMinMax<Int>>[] = [helper.int()('min', 'Min', { min: 0 }), helper.int()('max', 'Max', { min: 0 })] as MRT_ColumnDef<IMinMax<Int>>[];
