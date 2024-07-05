import { $ } from '../$';
import { IMeasure, VoltageUnitsOfMeasure } from '../../types';
import { schemaName } from '../../util/schemaName';
import { DoubleMeasure } from './DoubleMeasure';

export class VoltageMeasure extends DoubleMeasure<VoltageUnitsOfMeasure> {
    static schema: Realm.ObjectSchema = {
        name: schemaName($.voltageMeasure()),
        embedded: true,
        properties: {
            uom: $.string.default('V'),
            value: $.double.default(0)
        }
    };
    static init(): InitValue<IMeasure<VoltageUnitsOfMeasure>> {
        return {
            value: 0,
            uom: 'V'
        };
    }
}
