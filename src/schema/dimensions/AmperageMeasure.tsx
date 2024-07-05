import { $ } from '../$';
import { AmperageUnitsOfMeasure, IMeasure } from '../../types';
import { schemaName } from '../../util/schemaName';
import { DoubleMeasure } from './DoubleMeasure';
import Realm from 'realm';

export class AmperageMeasure extends DoubleMeasure<AmperageUnitsOfMeasure> {
    static schema: Realm.ObjectSchema = {
        name: schemaName($.amperageMeasure()),
        embedded: true,
        properties: {
            uom: $.string.default('A'),
            value: $.double.default(0)
        }
    }
    static init(): InitValue<IMeasure<AmperageUnitsOfMeasure>> {
        return {
            value: 0,
            uom: 'A'
        }
    }
}
