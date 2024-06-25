import { $ } from '../$';
import { ICurrentSetting, IDimension, Opt } from '../../types';
import { schemaName } from '../../util/schemaName';
import { AmperageUOM } from '../enums';
import { EntityBase } from './EntityBase';
import { Dimension } from './capacity';

export class CurrentSetting extends EntityBase<ICurrentSetting> implements ICurrentSetting {
    amperage?: Opt<IDimension<AmperageUOM>>;
    wattage?: Opt<IDimension<string>>;
    voltage?: Opt<IDimension<string>>;
    static schema: Realm.ObjectSchema = {
        name: schemaName($.currentSetting()),
        embedded: true,
        properties: {
            amperage: $.dimension(),
            voltage: $.dimension(),
            wattage: $.dimension()
        }
    };
    static update(item: ICurrentSetting) {
        return item;
    }
    static init(): InitValue<ICurrentSetting> {
        return {
            amperage: Dimension.init(),
            wattage: Dimension.init(),
            voltage: Dimension.init()
        };
    }
    static liComponent: ListItemCellComponent<ICurrentSetting> = (value?: ICurrentSetting) => () => {
        const stringify = Dimension.liComponent as (value?: IDimension<string>) => () => string;
        return value == null ? '' : [stringify(value.voltage)(), stringify(value.amperage)(), stringify(value.wattage)()].filter((x) => x != null && x.length > 0).join(' ');
    }
}
