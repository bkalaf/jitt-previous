import { splitWhen } from './splitWhen';

export function camelToKebab(str: string) {
    return splitWhen((x) => /[A-Z]/.test(x))(str)
        .map((x) => x.toLowerCase())
        .join('-');
}
