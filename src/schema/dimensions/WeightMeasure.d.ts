import { IMeasure, WeightUnitsOfMeasure } from '../../types';
import { DoubleMeasure } from './DoubleMeasure';
export declare class WeightMeasure extends DoubleMeasure<WeightUnitsOfMeasure> {
    static schema: Realm.ObjectSchema;
    static init(): InitValue<IMeasure<WeightUnitsOfMeasure>>;
}
