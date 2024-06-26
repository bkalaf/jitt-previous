import { capitalize } from './capitalize';
import { splitWhen } from './splitWhen';

export function camelToProper(str: string) {
    return splitWhen((x) => /[A-Z]/.test(x))(str)
        .map(capitalize)
        .join(' ');
}
