import { $ } from '../$';
import { AmperageUnitsOfMeasure } from '../../types';
import { schemaName } from '../../util/schemaName';
import { IntMeasure } from './IntMeasure';
import Realm from 'realm';

export class AmperageMeasure extends IntMeasure<AmperageUnitsOfMeasure> {
    static schema: Realm.ObjectSchema = {
        name: schemaName($.amperageMeasure()),
        embedded: true,
        properties: {
            uom: $.string.default('A'),
            value: $.int.default(0)
        }
    }
    static init(): InitValue<IntMeasure<AmperageUnitsOfMeasure>> {
        return {
            value: 0,
            uom: 'A'
        }
    }
}
