import { $ } from '../$';
import { ICurrentSetting, IOldDimension, Opt } from '../../types';
import { schemaName } from '../../util/schemaName';
import { AmperageUOM } from '../enums';
import { EntityBase } from './EntityBase';
import { OldDimension } from './capacity';

export class CurrentSetting extends EntityBase<ICurrentSetting> implements ICurrentSetting {
    amperage?: Opt<IOldDimension<AmperageUOM>>;
    wattage?: Opt<IOldDimension<string>>;
    voltage?: Opt<IOldDimension<string>>;
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
            amperage: OldDimension.init(),
            wattage: OldDimension.init(),
            voltage: OldDimension.init()
        };
    }
    static liComponent: ListItemCellComponent<ICurrentSetting> = (value?: ICurrentSetting) => () => {
        const stringify = OldDimension.liComponent as (value?: IOldDimension<string>) => () => string;
        return value == null ? '' : [stringify(value.voltage)(), stringify(value.amperage)(), stringify(value.wattage)()].filter((x) => x != null && x.length > 0).join(' ');
    };
}
