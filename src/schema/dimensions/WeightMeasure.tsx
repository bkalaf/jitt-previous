import { $ } from '../$';
import { IMeasure, WeightUnitsOfMeasure } from '../../types';
import { schemaName } from '../../util/schemaName';
import { DoubleMeasure } from './DoubleMeasure';

export class WeightMeasure extends DoubleMeasure<WeightUnitsOfMeasure> {
    static schema: Realm.ObjectSchema = {
        name: schemaName($.weightMeasure()),
        embedded: true,
        properties: {
            uom: $.string.default('g'),
            value: $.double.default(0.0)
        }
    };
    static init(): InitValue<IMeasure<WeightUnitsOfMeasure>> {
        return {
            value: 0.0,
            uom: 'g'
        };
    }
}

