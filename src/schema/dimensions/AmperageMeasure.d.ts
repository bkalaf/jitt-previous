import { AmperageUnitsOfMeasure } from '../../types';
import { IntMeasure } from './IntMeasure';
import Realm from 'realm';
export declare class AmperageMeasure extends IntMeasure<AmperageUnitsOfMeasure> {
    static schema: Realm.ObjectSchema;
    static init(): InitValue<IntMeasure<AmperageUnitsOfMeasure>>;
}
