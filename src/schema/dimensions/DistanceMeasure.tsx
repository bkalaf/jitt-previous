import { $ } from '../$';
import { DistanceUnitsOfMeasure, IMeasure } from '../../types';
import { schemaName } from '../../util/schemaName';
import { DoubleMeasure } from './DoubleMeasure';

export class DistanceMeasure extends DoubleMeasure<DistanceUnitsOfMeasure> {
    static schema: Realm.ObjectSchema = {
        name: schemaName($.distanceMeasure()),
        embedded: true,
        properties: {
            uom: $.string.default('ft'),
            value: $.double.default(0.0)
        }
    };
    static init(): InitValue<IMeasure<DistanceUnitsOfMeasure>> {
        return {
            value: 0.0,
            uom: 'ft'
        };
    }
}
