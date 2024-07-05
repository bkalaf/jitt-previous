import { EntityBase } from '../entity/EntityBase';


export abstract class IntMeasure<TUnit extends string> extends EntityBase<IMeasure<TUnit>> implements IMeasure<TUnit> {
    value: number;
    uom: TUnit;

    static stringify(value?: IMeasure<string>, returnUndefined = false) {
        return (): string | undefined => {
            return value == null || value.value === 0 ? returnUndefined ? undefined : '' : [value.value.toFixed(0), value.uom].join('');
        };
    }
    static liComponent = IntMeasure.stringify;
    static update(item: IntMeasure<string>): IntMeasure<string> {
        return item;
    }
}
