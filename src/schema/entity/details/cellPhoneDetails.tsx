import { MRT_ColumnDef, createMRTColumnHelper } from 'material-react-table';
import { IProduct } from '../../../types';
import { col } from '../../defs/col';

export const h = createMRTColumnHelper<IProduct>();
export const helper = col(h);

export const cellPhonesDetails: MRT_ColumnDef<IProduct>[] = [
    helper.measure('screenSize', 'Screen Size', 'in', { min: 0 }),
    helper.measure('capacity', 'Capacity', 'GB', { min: 0 }),
    helper.enum('os', 'Operating System', { enumKey: 'operatingSystems' }),
    helper.string('osVersion', 'OS Version', undefined),
    helper.enum('cellCarrier', 'Carrier', { enumKey: 'cellCarriers' }),
    helper.enum('aspectRatio', 'Aspect Ratio', { enumKey: 'aspectRatios' })
] as MRT_ColumnDef<IProduct>[];
