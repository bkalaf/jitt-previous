import { IMeasure } from '../../types';
import { EntityBase } from '../entity/EntityBase';
export declare abstract class DoubleMeasure<TUnit extends string> extends EntityBase<IMeasure<TUnit>> implements IMeasure<TUnit> {
    value: number;
    uom: TUnit;
    static stringify(value?: IMeasure<string>, returnEmptyForNull?: boolean): () => string | undefined;
    static liComponent: typeof DoubleMeasure.stringify;
    static update(item: DoubleMeasure<string>): DoubleMeasure<string>;
}
