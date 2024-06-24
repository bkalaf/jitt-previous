import { MRT_ColumnDef, createMRTColumnHelper } from 'material-react-table';
import { IProduct } from '../../../types';
import { col } from '../../defs/col';

export const h = createMRTColumnHelper<IProduct>();
export const helper = col(h);

export const kitchenAppliancesDetails: MRT_ColumnDef<IProduct>[] = [
    helper.enum('applianceType', 'Appliance Type', { enumKey: 'applianceTypes' })
] as MRT_ColumnDef<IProduct>[];