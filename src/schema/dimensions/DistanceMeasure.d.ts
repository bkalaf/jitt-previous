import { DistanceUnitsOfMeasure, IMeasure } from '../../types';
import { DoubleMeasure } from './DoubleMeasure';
export declare class DistanceMeasure extends DoubleMeasure<DistanceUnitsOfMeasure> {
    static schema: Realm.ObjectSchema;
    static init(): InitValue<IMeasure<DistanceUnitsOfMeasure>>;
}
