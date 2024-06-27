import { DataTransferRateUnitsOfMeasure, IMeasure } from '../../types';
import { DoubleMeasure } from './DoubleMeasure';
export declare class DataTransferRateMeasure extends DoubleMeasure<DataTransferRateUnitsOfMeasure> {
    static schema: Realm.ObjectSchema;
    static init(): InitValue<IMeasure<DataTransferRateUnitsOfMeasure>>;
}
