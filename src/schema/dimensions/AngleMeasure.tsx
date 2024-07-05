import { $ } from '../$';
import { AngleUnitsOfMeasure, IMeasure } from '../../types';
import { schemaName } from '../../util/schemaName';
import { DoubleMeasure } from './DoubleMeasure';
import UNICODE from './unicode';

export class AngleMeasure extends DoubleMeasure<AngleUnitsOfMeasure> {
    static schema: Realm.ObjectSchema = {
        name: schemaName($.angleMeasure()),
        embedded: true,
        properties: {
            uom: $.string.default('°'),
            value: $.double.default(0)
        }
    };
    static init(): InitValue<IMeasure<string>> {
        return {
            value: 0,
            uom: UNICODE.DEGREE as AngleUnitsOfMeasure
        };
    }
}
