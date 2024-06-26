import { MRT_ColumnDef, createMRTColumnHelper } from 'material-react-table';
import { IProduct } from '../../../types';
import { col } from '../../defs/col';

export const h = createMRTColumnHelper<IProduct>();
export const helper = col(h);

export const generalDetails: MRT_ColumnDef<IProduct>[] = [helper.date('testedOn', 'Tested On', { dateType: 'past' }), helper.string('itemType', 'Item Type')] as MRT_ColumnDef<IProduct>[];
