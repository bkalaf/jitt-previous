import { ICurrentSetting, IOldDimension, Opt } from '../../types';
import { AmperageUOM } from '../enums';
import { EntityBase } from './EntityBase';
export declare class CurrentSetting extends EntityBase<ICurrentSetting> implements ICurrentSetting {
    amperage?: Opt<IOldDimension<AmperageUOM>>;
    wattage?: Opt<IOldDimension<string>>;
    voltage?: Opt<IOldDimension<string>>;
    static schema: Realm.ObjectSchema;
    static update(item: ICurrentSetting): ICurrentSetting;
    static init(): InitValue<ICurrentSetting>;
    static liComponent: ListItemCellComponent<ICurrentSetting>;
}
