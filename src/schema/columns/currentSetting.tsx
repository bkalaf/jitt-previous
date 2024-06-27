import { createMRTColumnHelper, MRT_ColumnDef } from 'material-react-table';
import { ICurrentSetting, IProduct } from '../../types';
import { groupCol } from '../defs/groupCol';
import { ignore } from '../../common/ignore';

const h = createMRTColumnHelper<ICurrentSetting>();

const dimension = ignore;
export const currentSettingColumns: (...dependencies: IDependency<IProduct, any>[]) => MRT_ColumnDef<ICurrentSetting>[] = (...dependencies: IDependency<IProduct, any>[]) =>
    [
        groupCol(h, 'Amperage', dimension('amperageUnits'), 'amperage', 'bg-pink-500', 'text-white')(...dependencies),
        groupCol(h, 'Voltage', dimension('voltageUOM'), 'voltage', 'bg-orange-500', 'text-black')(...dependencies),
        groupCol(h, 'Wattage', dimension('wattageUOM'), 'wattage', 'bg-cyan-500', 'text-white')(...dependencies)
    ] as MRT_ColumnDef<ICurrentSetting>[];
