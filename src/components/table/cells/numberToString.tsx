import { lookupFraction } from '../../../common/number/parseNumber';
import { truncateAuto } from '../../../common/number/truncateAuto';
import { is } from '../../../common/is';

export function numberToString(n: number) {
    const integer = Math.floor(n);
    const decimal = n - integer;
    const fraction = lookupFraction(truncateAuto(decimal, 4));
    return fraction == null ? [integer, decimal === 0 ? undefined : decimal].filter(is.not.nil).join('.') : [integer ?? 0, fraction].filter(is.not.nil).join(' ');
}
