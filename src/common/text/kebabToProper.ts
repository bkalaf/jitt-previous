import { capitalize } from './capitalize';
import { splitWhen } from './splitWhen';

export function kebabToProper(str: string) {
    return splitWhen<string>((x) => /[-]/.test(x), false)(str.split(''))
        .map((x) => capitalize(x.join('')))
        .join(' ');
}
