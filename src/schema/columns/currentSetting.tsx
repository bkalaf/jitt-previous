import { createMRTColumnHelper, MRT_ColumnDef } from 'material-react-table';
import { ICurrentSetting } from '../../types';
import { col } from '../defs/col';
import { amperageUnits } from '../enums/amperageUnit';

const h = createMRTColumnHelper<ICurrentSetting>();
const helper = col(h);

export const currentSettingColumns: MRT_ColumnDef<ICurrentSetting>[] = [
    helper.double('amperage', 'Amperage', {}),
    helper.enum('amperageUnit', 'Amperage Unit', { options: amperageUnits }),
    helper.measure('voltage', 'Voltage', 'V', { min: 0 }),
    helper.measure('wattage', 'Wattage', 'W', { min: 0 })
] as MRT_ColumnDef<ICurrentSetting>[];
