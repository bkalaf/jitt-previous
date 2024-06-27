import { $ } from '../$';
import { IMeasure, VoltageUnitsOfMeasure } from '../../types';
import { schemaName } from '../../util/schemaName';
import { IntMeasure } from './IntMeasure';

export class VoltageMeasure extends IntMeasure<VoltageUnitsOfMeasure> {
    static schema: Realm.ObjectSchema = {
        name: schemaName($.voltageMeasure()),
        embedded: true,
        properties: {
            uom: $.string.default('V'),
            value: $.int.default(0)
        }
    };
    static init(): InitValue<IMeasure<VoltageUnitsOfMeasure>> {
        return {
            value: 0,
            uom: 'V'
        };
    }
}
