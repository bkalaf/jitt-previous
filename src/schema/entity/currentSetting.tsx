import { MRT_ColumnDef } from 'material-react-table';
import { $ } from '../$';
import { is } from '../../common/is';
import { ofAmperage, ofVoltage, ofWattage } from '../../components/table/controls/titleParts';
import {  ICurrentSetting } from '../../types';
import { schemaName } from '../../util/schemaName';
import { EntityBase } from './EntityBase';
import { currentSettingColumns } from '../columns/currentSetting';

export class CurrentSetting extends EntityBase<ICurrentSetting> implements ICurrentSetting {
    static columns: MRT_ColumnDef<ICurrentSetting>[] = currentSettingColumns();
    amperage?: Opt<IMeasure<AmperageUnitsOfMeasure>>;
    voltage?: Opt<IMeasure<VoltageUnitsOfMeasure>>;
    wattage?: Opt<IMeasure<'W'>>;
    static schema: Realm.ObjectSchema = {
        name: schemaName($.currentSetting()),
        embedded: true,
        properties: {
            amperage: $.amperageMeasure(),
            voltage: $.voltageMeasure(),
            wattage: $.wattageMeasure()
        }
    };
    static update(item: ICurrentSetting) {
        return item;
    }
    static init(): InitValue<ICurrentSetting> {
        return {};
    }
    static stringify: StringifyComponent<ICurrentSetting> = (value?: ICurrentSetting) => () => {
        if (value == null) return undefined;
        return [ofVoltage(value.voltage), ofAmperage(value.amperage), ofWattage(value.wattage)].filter(is.not.nil).join(' ');
    }
    static liComponent: ListItemCellComponent<ICurrentSetting> = CurrentSetting.stringify;
}
