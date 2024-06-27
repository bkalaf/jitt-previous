import { $ } from '../$';
import { IMeasure, WattageUnitsOfMeasure } from '../../types';
import { schemaName } from '../../util/schemaName';
import { IntMeasure } from './IntMeasure';



export class WattageMeasure extends IntMeasure<WattageUnitsOfMeasure> {
    static schema: Realm.ObjectSchema = {
        name: schemaName($.wattageMeasure()),
        embedded: true,
        properties: {
            uom: $.string.default('W'),
            value: $.int.default(0)
        }
    };
    static init(): InitValue<IMeasure<WattageUnitsOfMeasure>> {
        return {
            value: 0,
            uom: 'W'
        };
    }
}
