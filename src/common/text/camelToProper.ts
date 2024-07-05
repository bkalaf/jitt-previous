import { capitalize } from './capitalize';
import { splitWhen } from './splitWhen';

export function camelToProper(str: string) {
    return splitWhen<string>((x) => /[A-Z]/.test(x))(str.split(''))
        .map(x => capitalize(x.join('')))
        .join(' ');
}
