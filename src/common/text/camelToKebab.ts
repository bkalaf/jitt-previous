import { capitalize } from './capitalize';
import { splitWhen } from './splitWhen';

export function camelToKebab(str: string) {
    return splitWhen<string>((x) => /[A-Z]/.test(x))(str.split(''))
        .map((x) => x.join('').toLowerCase())
        .join('-');
}

export function upperToTitle(str: string) {
    return splitWhen<string>((x) => /[ ]/.test(x))(str.split('')).map((x) => x.join('').toLowerCase()).map(capitalize).join(' ');
}