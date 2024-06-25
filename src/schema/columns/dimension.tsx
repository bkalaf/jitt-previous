import { MRT_ColumnDef, createMRTColumnHelper } from 'material-react-table';
import { IDimension } from '../../types';
import { col } from '../defs/col';
import $me from '../enums';
import { $depend } from './$depend';

const h = createMRTColumnHelper<IDimension<string>>();
const helper = col(h);

export const dimension: (uom: keyof typeof $me, ...dependencies: IDependency<IDimension<string>, any>[]) => MRT_ColumnDef<IDimension<string>>[] = (uom: keyof typeof $me, ...dependencies: IDependency<IDimension<string>, any>[]) => [
    helper.double(...dependencies)('value', 'Value', { min: 0 }),
    helper.enum($depend.notZeroOrNull('value', true), ...dependencies)('uom', 'UOM', { enumKey: uom })
] as MRT_ColumnDef<IDimension<string>>[];
