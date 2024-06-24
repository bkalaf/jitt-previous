import { $ } from '../$';
import { truncateAuto } from '../../components/Cells/truncateAuto';
import { ICurrentSetting, Opt } from '../../types';
import { schemaName } from '../../util/schemaName';
import { AmperageUnits } from '../enums';
import { EntityBase } from './EntityBase';

export class CurrentSetting extends EntityBase<ICurrentSetting> implements ICurrentSetting {
    amperage?: Opt<number>;
    amperageUnit?: Opt<AmperageUnits>;
    voltage?: Opt<number>;
    wattage?: Opt<number>;
    static schema: Realm.ObjectSchema = {
        name: schemaName($.currentSetting()),
        embedded: true,
        properties: {
            amperage: $.double.opt,
            amperageUnit: $.string.opt,
            voltage: $.double.opt,
            wattage: $.double.opt
        }
    };
    static update(item: ICurrentSetting) {
        return item;
    }
    static init(): InitValue<ICurrentSetting> {
        return {}
    }
    static liComponent: ListItemCellComponent<ICurrentSetting> = (value?: ICurrentSetting) => () => (value == null ? '' : [value.voltage ?? 0 > 0 ? truncateAuto(value.voltage).concat('V') : undefined, value.amperage ?? 0 > 0 ? truncateAuto(value.amperage).concat(value.amperageUnit ?? 'A') : undefined, value.wattage ?? 0 > 0 ? truncateAuto(value.wattage).concat('W') : undefined].filter(x => x != null).join(' '));
}
