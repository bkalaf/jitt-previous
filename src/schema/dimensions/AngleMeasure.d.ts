import { AngleUnitsOfMeasure } from '../../types';
import { IntMeasure } from './IntMeasure';
export declare class AngleMeasure extends IntMeasure<AngleUnitsOfMeasure> {
    static schema: Realm.ObjectSchema;
    static init(): InitValue<IntMeasure<AngleUnitsOfMeasure>>;
}
