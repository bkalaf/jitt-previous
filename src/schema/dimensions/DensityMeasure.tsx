import { $ } from '../$';
import { DensityUnitsOfMeasure, IMeasure } from '../../types';
import { schemaName } from '../../util/schemaName';
import { DoubleMeasure } from './DoubleMeasure';

export class DensityMeasure extends DoubleMeasure<DensityUnitsOfMeasure> {
    static schema: Realm.ObjectSchema = {
        name: schemaName($.densityMeasure()),
        embedded: true,
        properties: {
            uom: $.string.default('g/cm³'),
            value: $.double.default(0.0)
        }
    };
    static init(): InitValue<IMeasure<DensityUnitsOfMeasure>> {
        return {
            value: 0.0,
            uom: 'g/cm³'
        };
    }
}
