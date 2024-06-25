import { createMRTColumnHelper, MRT_ColumnDef } from 'material-react-table';
import { ICurrentSetting } from '../../types';
import { dimension } from './dimension';
import { groupCol } from '../defs/groupCol';

const h = createMRTColumnHelper<ICurrentSetting>();

export const currentSettingColumns: MRT_ColumnDef<ICurrentSetting>[] = [
    groupCol(h, 'Amperage', dimension('amperageUnits'), 'amperage', 'bg-pink-500', 'text-white'),
    groupCol(h, 'Voltage', dimension('voltageUOM'), 'voltage', 'bg-orange-500', 'text-black'),
    groupCol(h, 'Wattage', dimension('wattageUOM'), 'wattage', 'bg-cyan-500', 'text-white')
] as MRT_ColumnDef<ICurrentSetting>[];

