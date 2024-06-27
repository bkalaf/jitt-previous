import { $ } from '../$';
import { IMeasure, LengthUnitsOfMeasure } from '../../types';
import { schemaName } from '../../util/schemaName';
import { DoubleMeasure } from './DoubleMeasure';

export class LengthMeasure extends DoubleMeasure<LengthUnitsOfMeasure> {
    static schema: Realm.ObjectSchema = {
        name: schemaName($.lengthMeasure()),
        embedded: true,
        properties: {
            uom: $.string.default('″'),
            value: $.double.default(0.0)
        }
    };
    static init(): InitValue<IMeasure<LengthUnitsOfMeasure>> {
        return {
            value: 0.0,
            uom: '″'
        };
    }
}

