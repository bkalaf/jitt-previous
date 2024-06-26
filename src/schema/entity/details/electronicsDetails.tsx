import { MRT_ColumnDef, createMRTColumnHelper } from 'material-react-table';
import { IProduct } from '../../../types';
import { col } from '../../defs/col';
import { $enableWhen, whenProperty } from '../../defs/when';
import { groupCol } from '../../defs/groupCol';
import { currentSettingColumns } from '../../columns/currentSetting';
import { colDimension } from './colDimension';

export const h = createMRTColumnHelper<IProduct>();
export const helper = col(h);

export const electronicsDetails: MRT_ColumnDef<IProduct>[] = [
    helper.enum('powerTypes', 'Power Types', { enumKey: 'powerTypes' }),
    whenProperty('powerTypes', ['battery', 'both'], helper.enum('batteryType', 'Battery Types', { enumKey: 'batteryTypes' })),
    whenProperty('powerTypes', ['battery', 'both'], helper.int('batteryCount', 'Battery Count', { min: 0 })),
    helper.listOfPrimitive('compatibleWith', 'Compatible With', 'string'),
    helper.date('manufactureDate', 'Manufacture Date', { dateType: 'past' }),
    // helper.int('rateOfEnergyCapacity.value' as any, 'Rate of Energy Capacity', { min: 0 }),
    // whenPropertyNotZero('rateOfEnergyCapacity.value', helper.enum('rateOfEnergyCapacity.uom' as any, 'Rate of Energy Capacity UOM', { enumKey: 'rateOfEnergyCapacityUOM' })),
    ...$enableWhen.property('powerTypes', ['battery', 'both'])(colDimension(h)('rateOfEnergyCapacity', 'Rate of Energy Capacity', 'rateOfEnergyCapacityUOM', 'int')),
    ...$enableWhen.property('powerTypes', ['ac', 'both'])(groupCol(h, 'AC Adapter', currentSettingColumns, 'acAdapter', 'bg-yellow-500', 'text-black')),
    ...$enableWhen.property('powerTypes', ['battery', 'both'])(groupCol(h, 'Battery Stats', currentSettingColumns, 'batteryStats', 'bg-yellow-500', 'text-black'))
] as MRT_ColumnDef<IProduct>[];
