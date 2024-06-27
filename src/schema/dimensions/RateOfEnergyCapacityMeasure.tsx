import { $ } from '../$';
import { IMeasure, RateOfEnergyCapacityUnitsOfMeasure } from '../../types';
import { schemaName } from '../../util/schemaName';
import { IntMeasure } from './IntMeasure';


export class RateOfEnergyCapacityMeasure extends IntMeasure<RateOfEnergyCapacityUnitsOfMeasure> {
    static schema: Realm.ObjectSchema = {
        name: schemaName($.rateOfEnergyMeasure()),
        embedded: true,
        properties: {
            uom: $.string.default('mAh'),
            value: $.int.default(0)
        }
    };
    static init(): InitValue<IMeasure<RateOfEnergyCapacityUnitsOfMeasure>> {
        return {
            value: 0,
            uom: 'mAh'
        };
    }
}
