import { IMeasure } from '../../types';
import { EntityBase } from '../entity/EntityBase';


export abstract class IntMeasure<TUnit extends string> extends EntityBase<IMeasure<TUnit>> implements IMeasure<TUnit> {
    value: number;
    uom: TUnit;

    static stringify(value?: IMeasure<string>, returnEmptyStringForNull = false) {
        return (): string | undefined => {
            return value == null ? returnEmptyStringForNull ? '' : undefined : [value.value.toFixed(0), value.uom].join('');
        };
    }
    static liComponent = IntMeasure.stringify;
    static update(item: IntMeasure<string>): IntMeasure<string> {
        return item;
    }
}
