import { CaliperSizeUnitsOfMeasure, IMeasure } from '../../types';
import { DoubleMeasure } from './DoubleMeasure';
export declare class CaliperSizeMeasure extends DoubleMeasure<CaliperSizeUnitsOfMeasure> {
    static schema: Realm.ObjectSchema;
    static init(): InitValue<IMeasure<CaliperSizeUnitsOfMeasure>>;
}
