import { MRT_ColumnDef, createMRTColumnHelper } from 'material-react-table';
import { IProduct } from '../../../types';
import { col } from '../../defs/col';
import { whenProperty } from '../../defs/when';

export const h = createMRTColumnHelper<IProduct>();
export const helper = col(h);

export const electronicsDetails: MRT_ColumnDef<IProduct>[] = [
    helper.enum('powerTypes', 'Power Types', { enumKey: 'powerTypes' }),
    whenProperty('powerTypes', ['battery', 'both'], helper.enum('batteryType', 'Battery Types', { enumKey: 'batteryTypes' })),
    whenProperty('powerTypes', ['battery', 'both'], helper.int('batteryCount', 'Battery Count', { min: 0 }))
] as MRT_ColumnDef<IProduct>[];
