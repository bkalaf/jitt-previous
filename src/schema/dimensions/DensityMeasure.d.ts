import { DensityUnitsOfMeasure, IMeasure } from '../../types';
import { DoubleMeasure } from './DoubleMeasure';
export declare class DensityMeasure extends DoubleMeasure<DensityUnitsOfMeasure> {
    static schema: Realm.ObjectSchema;
    static init(): InitValue<IMeasure<DensityUnitsOfMeasure>>;
}
