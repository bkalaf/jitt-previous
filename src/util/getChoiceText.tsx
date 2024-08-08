import { standardizeOptions } from './standardizeOptions';
import $me from '../schema/enums';

export function getChoiceText(enumKey: keyof typeof $me) {
    return function <T extends string>(key: T) {
        const map = $me[enumKey] as EnumItem<T>[];
        return standardizeOptions(map).asRecord[key]?.text;
    };
}
