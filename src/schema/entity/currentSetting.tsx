import { $ } from '../$';
import { schemaName } from '../../util/schemaName';

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
