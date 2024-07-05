import { truncateAuto } from '../../common/number/truncateAuto';
import { IMeasure } from '../../types';
import { EntityBase } from '../entity/EntityBase';

export abstract class DoubleMeasure<TUnit extends string> extends EntityBase<IMeasure<TUnit>> implements IMeasure<TUnit> {
    value: number;
    uom: TUnit;
    static stringify(value?: IMeasure<string>, returnUndefined = false) {
        return (): string | undefined => {
            return value == null || value.value === 0 ? returnUndefined ? undefined : '' : [truncateAuto(value.value, 2), value.uom].join('');
        };
    }
    static liComponent = DoubleMeasure.stringify;
    static update(item: DoubleMeasure<string>): DoubleMeasure<string> {
        return item;
    }
    static init(): InitValue<IMeasure<string>> {
        return {
            value: 0.0,
            uom: 'ft'
        }
    }
}
