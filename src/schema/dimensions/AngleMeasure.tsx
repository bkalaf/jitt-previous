import { $ } from '../$';
import { AngleUnitsOfMeasure } from '../../types';
import { schemaName } from '../../util/schemaName';
import { IntMeasure } from './IntMeasure';
import UNICODE from './unicode';

export class AngleMeasure extends IntMeasure<AngleUnitsOfMeasure> {
    static schema: Realm.ObjectSchema = {
        name: schemaName($.angleMeasure()),
        embedded: true,
        properties: {
            uom: $.string.default('°'),
            value: $.int.default(0)
        }
    };
    static init(): InitValue<IntMeasure<AngleUnitsOfMeasure>> {
        return {
            value: 0,
            uom: UNICODE.DEGREE as AngleUnitsOfMeasure
        };
    }
}
