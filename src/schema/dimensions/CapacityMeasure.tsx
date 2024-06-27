import { $ } from '../$';
import { CapacityUnitsOfMeasure, IMeasure } from '../../types';
import { schemaName } from '../../util/schemaName';
import { IntMeasure } from './IntMeasure';

export class CapacityMeasure extends IntMeasure<CapacityUnitsOfMeasure> {
    static schema: Realm.ObjectSchema = {
        name: schemaName($.capacityMeasure()),
        embedded: true,
        properties: {
            uom: $.string.default('GB'),
            value: $.int.default(0)
        }
    };
    static init(): InitValue<IMeasure<CapacityUnitsOfMeasure>> {
        return {
            value: 0,
            uom: 'GB'
        };
    }
}
