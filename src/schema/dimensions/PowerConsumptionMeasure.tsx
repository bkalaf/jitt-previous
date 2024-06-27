import { $ } from '../$';
import { IMeasure, PowerConsumptionUnitsOfMeasure } from '../../types';
import { schemaName } from '../../util/schemaName';
import { IntMeasure } from './IntMeasure';


export class PowerConsumptionMeasure extends IntMeasure<PowerConsumptionUnitsOfMeasure> {
    static schema: Realm.ObjectSchema = {
        name: schemaName($.powerConsumptionMeasure()),
        embedded: true,
        properties: {
            uom: $.string.default('WHr'),
            value: $.int.default(0)
        }
    };
    static init(): InitValue<IMeasure<PowerConsumptionUnitsOfMeasure>> {
        return {
            value: 0,
            uom: 'WHr'
        };
    }
}

