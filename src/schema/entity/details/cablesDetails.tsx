import { MRT_ColumnDef, createMRTColumnHelper } from 'material-react-table';
import { IProduct } from '../../../types';
import { col } from '../../defs/col';

export const h = createMRTColumnHelper<IProduct>();
export const helper = col(h);

export const cablesDetails: MRT_ColumnDef<IProduct>[] = [helper.measure('cordLength', 'Cord Length', 'in', { min: 1 }), helper.listOfEmbed('connectors', 'Connectors', 'connector')] as MRT_ColumnDef<IProduct>[];
export const cablesPowerDetails: MRT_ColumnDef<IProduct>[] = [] as MRT_ColumnDef<IProduct>[];
export const cablesDataDetails: MRT_ColumnDef<IProduct>[] = [] as MRT_ColumnDef<IProduct>[];
export const cablesVideoDetails: MRT_ColumnDef<IProduct>[] = [] as MRT_ColumnDef<IProduct>[];
