import { createMRTColumnHelper, MRT_ColumnDef } from 'material-react-table';
import { ISquareFootage } from '../../types';
import { col } from '../defs/col';

export const h = createMRTColumnHelper<ISquareFootage>();
const helper = col(h);

export const squareFootageColumns: MRT_ColumnDef<ISquareFootage>[] = [helper.measure('length', 'Length', 'ft', { min: 0 }), helper.measure('width', 'Width', 'ft', { min: 0 })] as MRT_ColumnDef<ISquareFootage>[];
