import { IMeasure, LengthUnitsOfMeasure } from '../../types';
import { DoubleMeasure } from './DoubleMeasure';
export declare class LengthMeasure extends DoubleMeasure<LengthUnitsOfMeasure> {
    static schema: Realm.ObjectSchema;
    static init(): InitValue<IMeasure<LengthUnitsOfMeasure>>;
}
