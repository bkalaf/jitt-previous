import { IMeasure } from '../../types';
import { EntityBase } from '../entity/EntityBase';
export declare abstract class IntMeasure<TUnit extends string> extends EntityBase<IMeasure<TUnit>> implements IMeasure<TUnit> {
    value: number;
    uom: TUnit;
    static stringify(value?: IMeasure<string>, returnEmptyStringForNull?: boolean): () => string | undefined;
    static liComponent: typeof IntMeasure.stringify;
    static update(item: IntMeasure<string>): IntMeasure<string>;
}
