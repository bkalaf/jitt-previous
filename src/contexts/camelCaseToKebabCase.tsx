import { decapitalize, splitWhen } from '../common/text';

export function camelCaseToKebabCase(text: string) {
    const splitted = splitWhen((x) => x.toUpperCase() !== x.toLowerCase() && x.toUpperCase() === x)(text);
    return splitted.map(decapitalize).join('-');
}
