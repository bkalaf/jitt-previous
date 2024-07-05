import { $ } from '../$';
import { IMeasure, PowerConsumptionUnitsOfMeasure } from '../../types';
import { schemaName } from '../../util/schemaName';
import { DoubleMeasure } from './DoubleMeasure';

export class PowerConsumptionMeasure extends DoubleMeasure<PowerConsumptionUnitsOfMeasure> {
    static schema: Realm.ObjectSchema = {
        name: schemaName($.powerConsumptionMeasure()),
        embedded: true,
        properties: {
            uom: $.string.default('WHr'),
            value: $.double.default(0.0)
        }
    };
    static init(): InitValue<IMeasure<PowerConsumptionUnitsOfMeasure>> {
        return {
            value: 0.0,
            uom: 'WHr'
        };
    }
}

