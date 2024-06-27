import { truncateAuto } from '../../common/number/truncateAuto';
import { IMeasure } from '../../types';
import { EntityBase } from '../entity/EntityBase';

export abstract class DoubleMeasure<TUnit extends string> extends EntityBase<IMeasure<TUnit>> implements IMeasure<TUnit> {
    value: number;
    uom: TUnit;
    static stringify(value?: IMeasure<string>, returnEmptyForNull = false) {
        return (): string | undefined => {
            return value == null ? returnEmptyForNull ? '' : undefined : [truncateAuto(value.value, 2), value.uom].join('');
        };
    }
    static liComponent = DoubleMeasure.stringify;
    static update(item: DoubleMeasure<string>): DoubleMeasure<string> {
        return item;
    }
}
