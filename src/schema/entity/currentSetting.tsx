import { createMRTColumnHelper, MRT_ColumnDef } from 'material-react-table';
import { $ } from '../$';
import { ICurrentSetting } from '../../types';
import { schemaName } from '../../util/schemaName';
import { col } from '../defs/col';
import { amperageUnits } from '../enums/amperageUnit';


export const currentSetting: Realm.ObjectSchema = {
    name: schemaName($.currentSetting()),
    embedded: true,
    properties: {
        amperage: $.double.opt,
        amperageUnit: $.string.opt,
        voltage: $.double.opt,
        wattage: $.double.opt
    }
};

const h = createMRTColumnHelper<ICurrentSetting>();
const helper = col(h);

export const currentSettingColumns: MRT_ColumnDef<ICurrentSetting>[] = [
    helper.double('amperage', 'Amperage', {}),
    helper.enum('amperageUnit', 'Amperage Unit', { options: amperageUnits }),
    helper.measure('voltage', 'Voltage', 'V', { min: 0 }),
    helper.measure('wattage', 'Wattage', 'W', { min: 0 })
];