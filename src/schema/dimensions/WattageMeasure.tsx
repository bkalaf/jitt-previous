import { $ } from '../$';
import { IMeasure, WattageUnitsOfMeasure } from '../../types';
import { schemaName } from '../../util/schemaName';
import { DoubleMeasure } from './DoubleMeasure';

export class WattageMeasure extends DoubleMeasure<WattageUnitsOfMeasure> {
    static schema: Realm.ObjectSchema = {
        name: schemaName($.wattageMeasure()),
        embedded: true,
        properties: {
            uom: $.string.default('W'),
            value: $.double.default(0)
        }
    };
    static init(): InitValue<IMeasure<WattageUnitsOfMeasure>> {
        return {
            value: 0,
            uom: 'W'
        };
    }
}
